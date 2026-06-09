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
    <div className="min-h-screen bg-[#F9F9F8] text-[#1a1a1a]">
      {showShortcuts && <KeyboardShortcutsModal onClose={() => setShowShortcuts(false)} />}
      <header className="sticky top-0 z-10 border-b border-[#e5e5e4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <h1
              onClick={!onLanding ? () => goToLanding(null) : undefined}
              className={`text-2xl font-black text-[#3C3489] transition md:text-3xl ${!onLanding ? 'cursor-pointer hover:opacity-70' : ''}`}
            >
              OSCE Oracle
            </h1>
            {!onLanding && !activeMockExam && (
              <p className="text-sm text-[#6b6b6b]">
                <button
                  type="button"
                  onClick={() => goToLanding(activeExam.specialtyId)}
                  className="font-medium text-[#534AB7] transition hover:underline"
                >
                  {SPECIALTIES.find((s) => s.id === activeExam.specialtyId)?.name}
                </button>
                <span className="mx-1.5 text-[#d0cff0]">›</span>
                {activeExam.title}
              </p>
            )}
            {!onLanding && activeMockExam && (
              <p className="text-sm text-[#6b6b6b]">
                <button
                  type="button"
                  onClick={() => goToLanding(activeMockExam.specialtyId)}
                  className="font-medium text-[#534AB7] transition hover:underline"
                >
                  {SPECIALTIES.find((s) => s.id === activeMockExam.specialtyId)?.name}
                </button>
                <span className="mx-1.5 text-[#d0cff0]">›</span>
                Mock: {activeMockExam.title}
              </p>
            )}
          </div>
          {!onLanding && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowShortcuts(true)}
                aria-label="Keyboard shortcuts"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#AFA9EC] bg-white text-[#3C3489] transition hover:bg-[#EEEDFE]"
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
              <ModeToggle mode={mode} onChange={setMode} />
              {!activeMockExam && mode === 'exam' && <ExamTimer />}
              <div className="flex-1 min-w-0">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
              </div>
            </div>
          )}
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
                      : 'border border-[#AFA9EC] bg-white text-[#3C3489]'
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
                <div className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-br from-[#EEEDFE] via-white to-[#f2f0ff] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
                    {SPECIALTIES.find((s) => s.id === activeExam.specialtyId)?.name}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-[#1a1a1a]">{activeExam.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-[#4a4a4a]">{activeExam.description}</p>
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
                      className="rounded-xl border border-[#AFA9EC] bg-white px-5 py-2.5 text-sm font-semibold text-[#3C3489] transition hover:bg-[#EEEDFE]"
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

                <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#3C3489]">
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
                          className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-[#f5f5f5]"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EEEDFE] text-xs font-bold text-[#534AB7]">
                            {step.stepNumber}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-[#1a1a1a]">{step.title}</p>
                            <p className="text-xs text-[#6b6b6b]">{countExaminerQuestions(step)} questions</p>
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
    </div>
  );
}

export default App;
