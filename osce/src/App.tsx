import { useEffect, useMemo, useState } from 'react';
import { HighYieldSummary } from './components/HighYieldSummary';
import { ModeToggle } from './components/ModeToggle';
import { ProgressBar } from './components/ProgressBar';
import { ResultsView } from './components/ResultsView';
import { SearchBar } from './components/SearchBar';
import { Sidebar } from './components/Sidebar';
import { StepView } from './components/StepView';
import { EXAMS, SPECIALTIES } from './data/exams';
import { useOsceStore } from './hooks/useOsceStore';
import { countExaminerQuestions, groupMatches, groupQuestions, normalizeSearchTerm, stepMatches } from './utils/osce';

type AppTab = 'overview' | 'guide' | 'summary' | 'results';

const EXAM_STORAGE_KEY = 'osce-selected-exam';

function readInitialExamId(): string {
  const persisted = localStorage.getItem(EXAM_STORAGE_KEY);
  return EXAMS.some((e) => e.id === persisted) ? (persisted as string) : EXAMS[0].id;
}

function App() {
  const [selectedExamId, setSelectedExamId] = useState<string>(readInitialExamId);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<AppTab>('overview');
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
    if (activeTab !== 'guide') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      if (event.key === 'ArrowRight' && activeStepIndex >= 0 && activeStepIndex < filteredSteps.length - 1) {
        setSelectedStepId(filteredSteps[activeStepIndex + 1].id);
      }
      if (event.key === 'ArrowLeft' && activeStepIndex > 0) {
        setSelectedStepId(filteredSteps[activeStepIndex - 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, activeStepIndex, filteredSteps, setSelectedStepId]);

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
      <header className="sticky top-0 z-10 border-b border-[#e5e5e4] bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <h1 className="text-2xl font-black text-[#3C3489] md:text-3xl">OSCE Guide</h1>
            <p className="text-sm text-[#6b6b6b]">
              <span className="font-medium text-[#534AB7]">
                {SPECIALTIES.find((s) => s.id === activeExam.specialtyId)?.name}
              </span>
              <span className="mx-1.5 text-[#d0cff0]">›</span>
              {activeExam.title}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle mode={mode} onChange={setMode} />
            <div className="flex-1 min-w-0">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl p-4 md:p-6">
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
            {/* Exam selector */}
            <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#3C3489]">Choose Exam</h2>
              <div className="mt-3 space-y-4">
                {specialtiesWithExams.map(({ specialty, exams }) => (
                  <div key={specialty.id}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{specialty.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {exams.map((exam) => {
                        const isActive = exam.id === selectedExamId;
                        return (
                          <button
                            key={exam.id}
                            type="button"
                            onClick={() => switchExam(exam.id)}
                            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                              isActive
                                ? 'border-[#534AB7] bg-[#534AB7] text-white'
                                : 'border-[#AFA9EC] bg-[#EEEDFE] text-[#3C3489] hover:border-[#534AB7]'
                            }`}
                          >
                            {exam.title}
                            {isActive && <span className="ml-1.5">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero card with YouTube embed */}
            <div className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-br from-[#EEEDFE] via-white to-[#f2f0ff] p-6">
              <h2 className="text-2xl font-bold text-[#1a1a1a]">{activeExam.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#4a4a4a]">{activeExam.description}</p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('guide');
                  setSelectedStepId(steps[0].id);
                }}
                className="mt-4 rounded-xl bg-[#534AB7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3C3489]"
              >
                Quick Start Step 1
              </button>

              {activeExam.youtubeVideoId && (
                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
                    Geeky Medics Video Guide
                  </p>
                  <div className="aspect-video w-full overflow-hidden rounded-xl shadow-sm">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeExam.youtubeVideoId}`}
                      title={`${activeExam.title} — Geeky Medics`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step grid */}
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {steps.map((step) => (
                <button
                  type="button"
                  key={step.id}
                  onClick={() => {
                    setSelectedStepId(step.id);
                    setActiveTab('guide');
                  }}
                  className="rounded-xl border border-[#e5e5e4] bg-white p-4 text-left shadow-sm transition hover:border-[#AFA9EC] hover:shadow"
                >
                  <p className="text-sm font-semibold text-[#534AB7]">Step {step.stepNumber}</p>
                  <h3 className="mt-1 font-bold text-[#1a1a1a]">{step.title}</h3>
                  <p className="mt-1 text-xs text-[#6b6b6b]">{countExaminerQuestions(step)} questions</p>
                </button>
              ))}
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
              totalExaminerQuestions={totalExaminerQuestions}
              totalCorrect={totalCorrect}
              totalIncorrect={totalIncorrect}
              getQuestionMark={getQuestionMark}
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
      </main>
    </div>
  );
}

export default App;
