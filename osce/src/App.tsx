import { useEffect, useMemo, useState } from 'react';
import { ExamTimer } from './components/ExamTimer';
import { HighYieldSummary } from './components/HighYieldSummary';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { LandingPage } from './components/LandingPage';
import { MockExamView } from './components/MockExamView';
import { ModeToggle } from './components/ModeToggle';
import { ProgressBar } from './components/ProgressBar';
import { ResultsView } from './components/ResultsView';
import { SearchBar } from './components/SearchBar';
import { Sidebar } from './components/Sidebar';
import { StepView } from './components/StepView';
import { EXAMS, SPECIALTIES } from './data/exams';
import { EMERGENCY_MOCK_EXAMS } from './data/emergencyMockExams';
import { GP_MOCK_EXAMS } from './data/gpMockExams';
import { GYNAE_MOCK_EXAMS } from './data/gynaeMockExams';
import { NEURO_MOCK_EXAMS } from './data/neuroMockExams';
import { ORTHO_MOCK_EXAMS } from './data/orthoMockExams';
import { PAEDS_MOCK_EXAMS } from './data/paedsMockExams';
import { PALLIATIVE_MOCK_EXAMS } from './data/palliativeMockExams';
import { PSYCH_MOCK_EXAMS } from './data/psychMockExams';
import { SEXUAL_HEALTH_MOCK_EXAMS } from './data/sexualHealthMockExams';
import { OPHTHAL_MOCK_EXAMS } from './data/ophthalmologyMockExams';
import { CONTRACEPTION_MOCK_EXAMS } from './data/contraceptionMockExams';
import { MED_COUNSELLING_MOCK_EXAMS_1 } from './data/medCounsellingMockExams1';
import { MED_COUNSELLING_MOCK_EXAMS_2 } from './data/medCounsellingMockExams2';
import { CHRONIC_DISEASE_REVIEW_MOCK_EXAMS } from './data/chronicDiseaseReviewMockExams';

const ALL_MOCK_EXAMS = [
  ...NEURO_MOCK_EXAMS,
  ...ORTHO_MOCK_EXAMS,
  ...PSYCH_MOCK_EXAMS,
  ...PAEDS_MOCK_EXAMS,
  ...EMERGENCY_MOCK_EXAMS,
  ...SEXUAL_HEALTH_MOCK_EXAMS,
  ...GYNAE_MOCK_EXAMS,
  ...PALLIATIVE_MOCK_EXAMS,
  ...GP_MOCK_EXAMS,
  ...OPHTHAL_MOCK_EXAMS,
  ...CONTRACEPTION_MOCK_EXAMS,
  ...MED_COUNSELLING_MOCK_EXAMS_1,
  ...MED_COUNSELLING_MOCK_EXAMS_2,
  ...CHRONIC_DISEASE_REVIEW_MOCK_EXAMS,
];
import { useOsceStore } from './hooks/useOsceStore';

function readInitialMockExamId(): string | null {
  const match = window.location.pathname.match(/^\/mock\/(.+)$/);
  if (!match) return null;
  return ALL_MOCK_EXAMS.some((e) => e.id === match[1]) ? match[1] : null;
}
import { countExaminerQuestions, groupMatches, groupQuestions, normalizeSearchTerm, stepMatches } from './utils/osce';

type AppTab = 'overview' | 'guide' | 'summary' | 'results';

const EXAM_STORAGE_KEY = 'osce-selected-exam';
const COMPLETED_MOCKS_KEY = 'osce-completed-mocks';

function readCompletedMocks(): Set<string> {
  try {
    const raw = localStorage.getItem(COMPLETED_MOCKS_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function readInitialExamId(): string {
  const urlMatch = window.location.pathname.match(/^\/exam\/(.+)$/);
  if (urlMatch && EXAMS.some((e) => e.id === urlMatch[1])) return urlMatch[1];
  const persisted = localStorage.getItem(EXAM_STORAGE_KEY);
  return EXAMS.some((e) => e.id === persisted) ? (persisted as string) : EXAMS[0].id;
}

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('osce-dark-mode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('osce-dark-mode', String(darkMode));
  }, [darkMode]);

  const [selectedExamId, setSelectedExamId] = useState<string>(readInitialExamId);
  const [selectedMockExamId, setSelectedMockExamId] = useState<string | null>(readInitialMockExamId);
  const [completedMockIds, setCompletedMockIds] = useState<Set<string>>(readCompletedMocks);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<AppTab>('overview');
  const [onLanding, setOnLanding] = useState(
    () => readInitialMockExamId() === null && !window.location.pathname.match(/^\/exam\//)
  );
  const [landingScrollTarget, setLandingScrollTarget] = useState<string | null>(null);

  function toggleMockCompleted(examId: string) {
    setCompletedMockIds((prev) => {
      const next = new Set(prev);
      if (next.has(examId)) next.delete(examId);
      else next.add(examId);
      localStorage.setItem(COMPLETED_MOCKS_KEY, JSON.stringify([...next]));
      return next;
    });
  }

  function goToLanding(scrollToSpecialtyId: string | null) {
    setLandingScrollTarget(scrollToSpecialtyId);
    setSelectedMockExamId(null);
    setOnLanding(true);
    history.pushState({}, '', '/');
  }

  function openMockExam(examId: string) {
    setSelectedMockExamId(examId);
    setOnLanding(false);
    history.pushState({}, '', `/mock/${examId}`);
  }

  useEffect(() => {
    function handlePopState() {
      const mockMatch = window.location.pathname.match(/^\/mock\/(.+)$/);
      const examMatch = window.location.pathname.match(/^\/exam\/(.+)$/);
      if (mockMatch && ALL_MOCK_EXAMS.some((e) => e.id === mockMatch[1])) {
        setSelectedMockExamId(mockMatch[1]);
        setOnLanding(false);
      } else if (examMatch && EXAMS.some((e) => e.id === examMatch[1])) {
        setSelectedExamId(examMatch[1]);
        setSelectedMockExamId(null);
        setOnLanding(false);
      } else {
        setSelectedMockExamId(null);
        setOnLanding(true);
      }
    }
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeMockExam = useMemo(
    () => (selectedMockExamId ? ALL_MOCK_EXAMS.find((e) => e.id === selectedMockExamId) ?? null : null),
    [selectedMockExamId],
  );

  const mockExamsBySpecialty = useMemo(() => {
    const grouped: { specialtyName: string; exams: typeof ALL_MOCK_EXAMS }[] = [];
    for (const exam of ALL_MOCK_EXAMS) {
      const specialty = SPECIALTIES.find((s) => s.id === exam.specialtyId);
      const name = specialty?.name ?? exam.specialtyId;
      const existing = grouped.find((g) => g.specialtyName === name);
      if (existing) existing.exams.push(exam);
      else grouped.push({ specialtyName: name, exams: [exam] });
    }
    return grouped;
  }, []);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const normalizedSearch = useMemo(() => normalizeSearchTerm(searchTerm), [searchTerm]);

  const activeExam = useMemo(
    () => EXAMS.find((e) => e.id === selectedExamId) ?? EXAMS[0],
    [selectedExamId],
  );

  const steps = activeExam.steps;

  const {
    selectedStepId,
    setSelectedStepId,
    mode,
    setMode,
    toggleRationale,
    togglePathology,
    revealAllForStep,
    hideAllForStep,
    getGroupReveal,
    getStepRevealedCount,
    totalRevealed,
    totalExaminerQuestions,
    markQuestion,
    getQuestionMark,
    totalCorrect,
    totalIncorrect,
    toggleChecklistItem,
    getChecklistState,
  } = useOsceStore(steps);

  useEffect(() => {
    localStorage.setItem(EXAM_STORAGE_KEY, selectedExamId);
    setSelectedStepId(steps[0]?.id ?? '');
    setSearchTerm('');
  }, [selectedExamId]);

  const filteredSteps = useMemo(
    () => steps.filter((step) => stepMatches(step, normalizedSearch)),
    [steps, normalizedSearch],
  );

  useEffect(() => {
    if (filteredSteps.length === 0) return;
    if (!filteredSteps.some((step) => step.id === selectedStepId)) {
      setSelectedStepId(filteredSteps[0].id);
    }
  }, [filteredSteps, selectedStepId, setSelectedStepId]);

  const activeStep = useMemo(
    () => filteredSteps.find((step) => step.id === selectedStepId) ?? filteredSteps[0] ?? null,
    [filteredSteps, selectedStepId],
  );

  const allGroups = useMemo(
    () => (activeStep ? groupQuestions(activeStep.questions) : []),
    [activeStep],
  );

  const visibleGroups = useMemo(
    () =>
      allGroups
        .map((group, groupIndex) => ({ group, groupIndex }))
        .filter(({ group }) => groupMatches(group, normalizedSearch)),
    [allGroups, normalizedSearch],
  );

  const activeStepIndex = filteredSteps.findIndex((step) => step.id === activeStep?.id);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (event.key === 'Escape') { setShowShortcuts(false); return; }
      if (event.key === '?') { setShowShortcuts((prev) => !prev); return; }

      if (onLanding) return;

      if (event.key === '1') { setMode('study'); return; }
      if (event.key === '2') { setMode('exam'); return; }

      if (activeTab !== 'guide') return;

      if (event.key === 'ArrowRight' && activeStepIndex >= 0 && activeStepIndex < filteredSteps.length - 1) {
        setSelectedStepId(filteredSteps[activeStepIndex + 1].id);
      }
      if (event.key === 'ArrowLeft' && activeStepIndex > 0) {
        setSelectedStepId(filteredSteps[activeStepIndex - 1].id);
      }
      if (event.key === 'r' && activeStep) {
        const allRevealed =
          allGroups.length > 0 &&
          allGroups.every((group, i) => {
            const v = getGroupReveal(activeStep.id, i);
            return (!group.rationale || v.rationale) && (!group.pathology || v.pathology);
          });
        if (allRevealed) {
          hideAllForStep(activeStep.id, allGroups.length);
        } else {
          revealAllForStep(activeStep.id, allGroups.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, activeStepIndex, filteredSteps, setSelectedStepId, onLanding, activeStep, allGroups, revealAllForStep, hideAllForStep, setMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedStepId]);

  const stepsStarted = steps.filter((step) => getStepRevealedCount(step.id) > 0).length;

  const getStepProgressText = (stepId: string): string => {
    const step = steps.find((entry) => entry.id === stepId);
    if (!step) return '0 / 0';
    return `${getStepRevealedCount(stepId)} / ${countExaminerQuestions(step)}`;
  };

  function switchExam(examId: string) {
    setSelectedExamId(examId);
    setActiveTab('overview');
    setOnLanding(false);
    history.pushState({}, '', `/exam/${examId}`);
  }

  const specialtiesWithExams = useMemo(
    () =>
      SPECIALTIES.map((specialty) => ({
        specialty,
        exams: EXAMS.filter((e) => e.specialtyId === specialty.id),
      })),
    [],
  );

  const totalMarked = totalCorrect + totalIncorrect;

  const tabs: { id: AppTab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'guide', label: 'Step Guide' },
    { id: 'summary', label: 'High-Yield Summary' },
    { id: 'results', label: 'Finish & Score' },
  ];

  return (
    <div className="min-h-screen text-[#1a1a1a] dark:text-zinc-100">
      {showShortcuts && <KeyboardShortcutsModal onClose={() => setShowShortcuts(false)} />}
      <header className="sticky top-0 z-10 border-b border-[#e5e5e4] bg-white/95 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <h1
              onClick={!onLanding ? () => goToLanding(null) : undefined}
              className={`text-2xl font-black text-[#3C3489] transition md:text-3xl ${!onLanding ? 'cursor-pointer hover:opacity-70' : ''}`}
            >
              OSCE Oracle
            </h1>
            {!onLanding && !activeMockExam && (
              <p className="text-sm text-[#6b6b6b] dark:text-zinc-400">
                <button
                  type="button"
                  onClick={() => goToLanding(activeExam.specialtyId)}
                  className="font-medium text-[#534AB7] transition hover:underline dark:text-[#a5a0e8]"
                >
                  {SPECIALTIES.find((s) => s.id === activeExam.specialtyId)?.name}
                </button>
                <span className="mx-1.5 text-[#d0cff0] dark:text-zinc-600">›</span>
                {activeExam.title}
              </p>
            )}
            {!onLanding && activeMockExam && (
              <p className="text-sm text-[#6b6b6b] dark:text-zinc-400">
                <button
                  type="button"
                  onClick={() => goToLanding(activeMockExam.specialtyId)}
                  className="font-medium text-[#534AB7] transition hover:underline dark:text-[#a5a0e8]"
                >
                  {SPECIALTIES.find((s) => s.id === activeMockExam.specialtyId)?.name}
                </button>
                <span className="mx-1.5 text-[#d0cff0] dark:text-zinc-600">›</span>
                Mock: {activeMockExam.title}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {onLanding && (
              <a
                href="https://buymeacoffee.com/amacrutherford"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[#f7c94a] bg-[#ffdd57] px-3 py-1.5 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#f7c94a]"
              >
                Support ☕️
              </a>
            )}
            <button
              type="button"
              onClick={() => setDarkMode((d) => !d)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e5e4] bg-white text-base transition hover:bg-[#f5f5f4] dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          {!onLanding && (
            <>
              <button
                type="button"
                onClick={() => setShowShortcuts(true)}
                aria-label="Keyboard shortcuts"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#AFA9EC] bg-white text-[#3C3489] transition hover:bg-[#EEEDFE] dark:border-zinc-700 dark:bg-zinc-800 dark:text-[#a5a0e8] dark:hover:bg-zinc-700"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="1" y="1" width="18" height="12" rx="2.5" />
                  <rect x="3.5" y="4" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="6.5" y="4" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="9.5" y="4" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="12.5" y="4" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="15" y="4" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="3.5" y="7.5" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="6.5" y="7.5" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="9.5" y="7.5" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="12.5" y="7.5" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="15" y="7.5" width="1.5" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                  <rect x="7" y="10.5" width="6" height="1.5" rx="0.3" fill="currentColor" stroke="none" />
                </svg>
              </button>
              {!activeMockExam && <ModeToggle mode={mode} onChange={setMode} />}
              {!activeMockExam && mode === 'exam' && <ExamTimer />}
              <div className="flex-1 min-w-0">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
              </div>
            </>
          )}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl p-4 md:p-6">
        {onLanding ? (
          <LandingPage
            specialtiesWithExams={specialtiesWithExams}
            onSelectExam={switchExam}
            scrollToSpecialtyId={landingScrollTarget}
            mockExamsBySpecialty={mockExamsBySpecialty}
            onSelectMockExam={openMockExam}
            completedMockIds={completedMockIds}
          />
        ) : activeMockExam ? (
          <MockExamView
            exam={activeMockExam}
            onBack={() => goToLanding(activeMockExam.specialtyId)}
            isCompleted={completedMockIds.has(activeMockExam.id)}
            onToggleCompleted={() => toggleMockCompleted(activeMockExam.id)}
          />
        ) : (
          <>
            <div className="mb-4 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-[#534AB7] text-white'
                      : 'border border-[#AFA9EC] bg-white text-[#3C3489] dark:border-zinc-700 dark:bg-zinc-800 dark:text-[#a5a0e8]'
                  }`}
                >
                  {tab.label}
                  {tab.id === 'results' && totalMarked > 0 && (
                    <span
                      className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-bold ${
                        activeTab === 'results' ? 'bg-white/25 text-white' : 'bg-[#534AB7] text-white'
                      }`}
                    >
                      {totalCorrect}/{totalMarked}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <ProgressBar value={totalRevealed} max={totalExaminerQuestions} />

            {activeTab === 'overview' && (
              <section className="mt-4 space-y-5">
                <div className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-br from-[#EEEDFE] via-white to-[#f2f0ff] p-6 dark:border-zinc-700 dark:from-[#1e1b4b] dark:via-zinc-900 dark:to-zinc-900">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b] dark:text-zinc-400">
                    {SPECIALTIES.find((s) => s.id === activeExam.specialtyId)?.name}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-[#1a1a1a] dark:text-zinc-100">{activeExam.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-[#4a4a4a] dark:text-zinc-300">{activeExam.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('guide');
                        setSelectedStepId(steps[0].id);
                      }}
                      className="rounded-xl bg-[#534AB7] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3C3489]"
                    >
                      Start Exam →
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('summary')}
                      className="rounded-xl border border-[#AFA9EC] bg-white px-5 py-2.5 text-sm font-semibold text-[#3C3489] transition hover:bg-[#EEEDFE] dark:border-zinc-700 dark:bg-zinc-800 dark:text-[#a5a0e8] dark:hover:bg-zinc-700"
                    >
                      High-Yield Summary
                    </button>
                  </div>
                </div>

                {activeExam.youtubeVideoId && (
                  <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeExam.youtubeVideoId}`}
                      title={`${activeExam.title} — Geeky Medics`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                )}

                <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#3C3489] dark:text-[#a5a0e8]">
                    {steps.length} Steps
                  </p>
                  <ol className="space-y-1">
                    {steps.map((step) => (
                      <li key={step.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedStepId(step.id);
                            setActiveTab('guide');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-[#f5f5f5] dark:hover:bg-zinc-800"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEEDFE] text-xs font-bold text-[#534AB7] dark:bg-[#1e1b4b] dark:text-[#a5a0e8]">
                            {step.stepNumber}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-[#1a1a1a] dark:text-zinc-100">{step.title}</p>
                            <p className="text-xs text-[#6b6b6b] dark:text-zinc-400">{countExaminerQuestions(step)} questions</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            )}

            {activeTab === 'summary' && (
              <div className="mt-4">
                <HighYieldSummary examTitle={activeExam.title} items={activeExam.highYieldSummary} />
              </div>
            )}

            {activeTab === 'results' && (
              <div className="mt-4">
                <ResultsView
                  examTitle={activeExam.title}
                  steps={steps}
                  mode={mode}
                  totalExaminerQuestions={totalExaminerQuestions}
                  totalCorrect={totalCorrect}
                  totalIncorrect={totalIncorrect}
                  getQuestionMark={getQuestionMark}
                  getChecklistState={getChecklistState}
                  onGoToStep={(stepId) => {
                    setSelectedStepId(stepId);
                    setActiveTab('guide');
                  }}
                />
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="mt-4 md:flex md:items-start md:gap-4">
                <Sidebar
                  steps={filteredSteps}
                  activeStepId={activeStep?.id ?? ''}
                  onSelectStep={setSelectedStepId}
                  getStepProgressText={getStepProgressText}
                  activeStepsCount={stepsStarted}
                  totalSteps={steps.length}
                />

                <div className="mt-4 flex-1 md:mt-0">
                  {!activeStep && (
                    <div className="rounded-2xl border border-dashed border-[#AFA9EC] bg-white p-6 text-sm text-[#6b6b6b]">
                      No matching steps found. Try a broader search.
                    </div>
                  )}

                  {activeStep && (
                    <StepView
                      step={activeStep}
                      mode={mode}
                      visibleGroups={visibleGroups}
                      allGroupCount={allGroups.length}
                      stepProgressText={getStepProgressText(activeStep.id)}
                      onToggleRationale={toggleRationale}
                      onTogglePathology={togglePathology}
                      getGroupVisibility={getGroupReveal}
                      onRevealAll={revealAllForStep}
                      onHideAll={hideAllForStep}
                      onMark={markQuestion}
                      getQuestionMark={getQuestionMark}
                      onToggleChecklistItem={toggleChecklistItem}
                      getChecklistState={getChecklistState}
                      onPrevious={() => {
                        if (activeStepIndex > 0) setSelectedStepId(filteredSteps[activeStepIndex - 1].id);
                      }}
                      onNext={() => {
                        if (activeStepIndex < filteredSteps.length - 1)
                          setSelectedStepId(filteredSteps[activeStepIndex + 1].id);
                      }}
                      hasPrevious={activeStepIndex > 0}
                      hasNext={activeStepIndex >= 0 && activeStepIndex < filteredSteps.length - 1}
                      searchTerm={searchTerm}
                    />
                  )}

                  {activeStep && activeStepIndex === filteredSteps.length - 1 && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab('results')}
                        className="w-full rounded-xl border-2 border-[#534AB7] bg-white px-4 py-3 text-sm font-semibold text-[#534AB7] transition hover:bg-[#EEEDFE]"
                      >
                        Finish test — view your score
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="mt-8 border-t border-[#e5e5e4] py-6 text-center text-xs text-[#9b9b9b] dark:border-zinc-700 dark:text-zinc-500">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/amacrutherford/osce"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-[#534AB7] dark:hover:text-[#a5a0e8]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub — amacrutherford/osce
          </a>
          <span className="text-[#d0d0d0] dark:text-zinc-700">·</span>
          <a
            href="https://amacrutherford.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#534AB7] dark:hover:text-[#a5a0e8]"
          >
            Built by - amacrutherford.com
          </a>
          <span className="text-[#d0d0d0] dark:text-zinc-700">·</span>
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#534AB7] dark:hover:text-[#a5a0e8]"
          >
            CC BY-NC 4.0 © 2026 Alex Rutherford
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
