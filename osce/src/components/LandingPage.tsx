import { useEffect } from 'react';
import type { OsceExam, Specialty } from '../data/exams';
import type { MockExamStation } from '../data/mockExamTypes';

interface LandingPageProps {
  specialtiesWithExams: { specialty: Specialty; exams: OsceExam[] }[];
  onSelectExam: (examId: string) => void;
  scrollToSpecialtyId?: string | null;
  mockExamsBySpecialty?: { specialtyName: string; exams: MockExamStation[] }[];
  onSelectMockExam?: (examId: string) => void;
  completedMockIds?: Set<string>;
}

export function LandingPage({
  specialtiesWithExams,
  onSelectExam,
  scrollToSpecialtyId,
  mockExamsBySpecialty,
  onSelectMockExam,
  completedMockIds,
}: LandingPageProps) {
  useEffect(() => {
    if (!scrollToSpecialtyId) return;
    document.getElementById(`specialty-${scrollToSpecialtyId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [scrollToSpecialtyId]);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 md:py-14">
      <div className="mb-8">
        <p className="mb-4 text-sm italic text-[#6b6b6b] dark:text-zinc-400">
          Built to help my girlfriend through OSCEs, hopefully it can help you too! Work through examination steps, see the questions an examiner might ask, and practice with full mock stations.

          Don't have a pal to practice with? Export the mock stations as a prompt so you can use your favourite AI Chatbot to fill in as the patient/examiner.
        </p>
        <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-zinc-100">Choose an exam</h2>
        <p className="mt-1 text-sm text-[#6b6b6b] dark:text-zinc-400">
          Select a topic to watch the video guide and work through the station.
        </p>
      </div>

      <div className="space-y-6">
        {specialtiesWithExams.map(({ specialty, exams }) => (
          <section key={specialty.id} id={`specialty-${specialty.id}`}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b] dark:text-zinc-400">
              {specialty.name}
            </p>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {exams.map((exam) => (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => onSelectExam(exam.id)}
                  className="rounded-xl border border-[#e5e5e4] bg-white p-4 text-left shadow-sm transition hover:border-[#534AB7] hover:shadow dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-[#534AB7]"
                >
                  <p className="font-semibold text-[#1a1a1a] dark:text-zinc-100">{exam.title}</p>
                  <p className="mt-0.5 text-xs text-[#6b6b6b] dark:text-zinc-400">{exam.steps.length} steps</p>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {mockExamsBySpecialty && mockExamsBySpecialty.length > 0 && onSelectMockExam && (
        <div className="mt-10">
          <div className="mb-6 border-t border-[#e5e5e4] pt-8 dark:border-zinc-700">
            <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-zinc-100">Mock OSCE Stations</h2>
            <p className="mt-1 text-sm text-[#6b6b6b] dark:text-zinc-400">
              Full mock stations with candidate brief, actor instructions, mark scheme, and viva questions — based on past Y5 OSCE papers.
            </p>
          </div>

          <div className="space-y-6">
            {mockExamsBySpecialty.map(({ specialtyName, exams }) => (
              <section key={specialtyName}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b] dark:text-zinc-400">
                  {specialtyName}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[...exams].sort((a, b) => {
                    const aDone = completedMockIds?.has(a.id) ? 1 : 0;
                    const bDone = completedMockIds?.has(b.id) ? 1 : 0;
                    return aDone - bDone;
                  }).map((exam) => {
                    const done = completedMockIds?.has(exam.id);
                    return (
                      <button
                        key={exam.id}
                        type="button"
                        onClick={() => onSelectMockExam(exam.id)}
                        className={`rounded-xl border p-4 text-left shadow-sm transition hover:shadow ${
                          done
                            ? 'border-[#e5e5e4] bg-[#f5f5f4] hover:border-[#d0d0ce] hover:bg-[#efefed] dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700'
                            : 'border-[#AFA9EC] bg-white hover:border-[#534AB7] hover:bg-[#EEEDFE] dark:border-zinc-600 dark:bg-zinc-900 dark:hover:border-[#534AB7] dark:hover:bg-[#1e1b4b]'
                        }`}
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-bold text-white ${done ? 'bg-[#9e9e9e]' : 'bg-[#534AB7]'}`}>
                            Mock
                          </span>
                          {done && (
                            <span className="rounded-full border border-green-300 bg-green-50 px-2 py-0.5 text-xs font-bold text-green-700 dark:border-green-700 dark:bg-green-900/30 dark:text-green-400">
                              Done
                            </span>
                          )}
                        </div>
                        <p className={`font-semibold ${done ? 'text-[#9e9e9e] dark:text-zinc-500' : 'text-[#1a1a1a] dark:text-zinc-100'}`}>{exam.title}</p>
                        <p className="mt-0.5 text-xs text-[#6b6b6b] dark:text-zinc-400">
                          Brief · Actor · Mark scheme · {exam.vivaQuestions.length} viva questions
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
