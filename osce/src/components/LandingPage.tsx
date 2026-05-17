import { useEffect } from 'react';
import type { OsceExam, Specialty } from '../data/exams';

interface LandingPageProps {
  specialtiesWithExams: { specialty: Specialty; exams: OsceExam[] }[];
  onSelectExam: (examId: string) => void;
  scrollToSpecialtyId?: string | null;
}

export function LandingPage({ specialtiesWithExams, onSelectExam, scrollToSpecialtyId }: LandingPageProps) {
  useEffect(() => {
    if (!scrollToSpecialtyId) return;
    document.getElementById(`specialty-${scrollToSpecialtyId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [scrollToSpecialtyId]);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 md:py-14">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#1a1a1a]">Choose an exam</h2>
        <p className="mt-1 text-sm text-[#6b6b6b]">
          Select a topic to watch the video guide and work through the station.
        </p>
      </div>

      <div className="space-y-6">
        {specialtiesWithExams.map(({ specialty, exams }) => (
          <section key={specialty.id} id={`specialty-${specialty.id}`}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
              {specialty.name}
            </p>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {exams.map((exam) => (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => onSelectExam(exam.id)}
                  className="rounded-xl border border-[#e5e5e4] bg-white p-4 text-left shadow-sm transition hover:border-[#534AB7] hover:shadow"
                >
                  <p className="font-semibold text-[#1a1a1a]">{exam.title}</p>
                  <p className="mt-0.5 text-xs text-[#6b6b6b]">{exam.steps.length} steps</p>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
