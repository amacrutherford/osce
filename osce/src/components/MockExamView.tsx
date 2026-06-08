import { useState } from 'react';
import type { MockExamStation, HistoryItem, SocratesItem } from '../data/mockExamTypes';

type MockTab = 'brief' | 'actor' | 'markscheme' | 'viva';

interface MockExamViewProps {
  exam: MockExamStation;
  onBack: () => void;
}

function HistorySection({ title, items }: { title: string; items: HistoryItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">{title}</p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-[#f0f0f0] p-3">
            <p className="mb-1 text-xs font-semibold text-[#1a1a1a]">{item.label}</p>
            <p className="text-sm italic leading-relaxed text-[#4a4a4a]">{item.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocratesSection({ items }: { items: SocratesItem[] }) {
  return (
    <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
        History of Presenting Complaint
      </p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-[#f0f0f0] p-3">
            <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2">
              <span className="text-xs font-bold uppercase tracking-wide text-[#534AB7]">
                {item.label}:
              </span>
              <span className="text-sm font-semibold text-[#1a1a1a]">{item.descriptor}</span>
            </div>
            {item.quotes.map((q, qi) => (
              <p key={qi} className="text-sm italic leading-relaxed text-[#4a4a4a]">
                {q}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MockExamView({ exam, onBack }: MockExamViewProps) {
  const [activeTab, setActiveTab] = useState<MockTab>('brief');
  const [expandedViva, setExpandedViva] = useState<Set<number>>(new Set());
  const [expandedDomains, setExpandedDomains] = useState<Set<number>>(
    new Set(exam.markScheme.map((_, i) => i)),
  );
  const [tickedItems, setTickedItems] = useState<Set<string>>(new Set());

  const tabs: { id: MockTab; label: string }[] = [
    { id: 'brief', label: 'Candidate Brief' },
    { id: 'actor', label: 'Patient Script' },
    { id: 'markscheme', label: 'Mark Scheme' },
    { id: 'viva', label: 'Viva Questions' },
  ];

  const totalMarks = exam.markScheme.reduce(
    (sum, domain) => sum + domain.items.reduce((s, item) => s + item.marks, 0),
    0,
  );

  const scoredMarks = exam.markScheme.reduce(
    (sum, domain, di) =>
      sum +
      domain.items.reduce(
        (s, item, ii) => s + (tickedItems.has(`${di}-${ii}`) ? item.marks : 0),
        0,
      ),
    0,
  );

  function toggleViva(index: number) {
    setExpandedViva((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function toggleDomain(index: number) {
    setExpandedDomains((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function toggleTick(domainIndex: number, itemIndex: number) {
    const key = `${domainIndex}-${itemIndex}`;
    setTickedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function exportPrompt() {
    const prompt = generatePrompt(exam);
    const blob = new Blob([prompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `osce-mock-${exam.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const actor = exam.actorInstructions;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-lg border border-[#e5e5e4] bg-white px-3 py-1.5 text-sm font-medium text-[#3C3489] transition hover:bg-[#EEEDFE]"
        >
          <span aria-hidden="true">←</span> Back
        </button>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">Mock OSCE Station</p>
          <h2 className="text-lg font-bold text-[#1a1a1a]">{exam.title}</h2>
          <p className="mt-0.5 text-xs text-[#6b6b6b]">
            <span className="font-medium text-[#534AB7]">Dx:</span> {exam.diagnosis}
          </p>
        </div>
        <button
          type="button"
          onClick={exportPrompt}
          className="flex items-center gap-1.5 rounded-lg border border-[#AFA9EC] bg-white px-3 py-1.5 text-sm font-medium text-[#3C3489] transition hover:bg-[#EEEDFE]"
        >
          Export Prompt
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.id
                ? 'bg-[#534AB7] text-white'
                : 'border border-[#AFA9EC] bg-white text-[#3C3489] hover:bg-[#EEEDFE]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'brief' && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-br from-[#EEEDFE] via-white to-[#f2f0ff] p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#534AB7]">
                Candidate Instructions
              </p>
              <span className="shrink-0 rounded-full bg-[#534AB7] px-3 py-1 text-xs font-bold text-white">
                {exam.candidateBrief.timeAllowed} minutes
              </span>
            </div>

            <div className="mb-4 rounded-xl border border-[#d0cff0] bg-white p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">Setting</p>
              <p className="text-sm text-[#1a1a1a]">{exam.candidateBrief.setting}</p>
            </div>

            <div className="mb-4 rounded-xl border border-[#d0cff0] bg-white p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">Scenario</p>
              <p className="text-sm leading-relaxed text-[#1a1a1a]">{exam.candidateBrief.scenario}</p>
            </div>

            {exam.imageUrl && (
              <div className="mb-4 overflow-hidden rounded-xl border border-[#d0cff0] bg-white">
                <p className="border-b border-[#d0cff0] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
                  Reference Diagram
                </p>
                <img
                  src={exam.imageUrl}
                  alt="Clinical reference diagram for this station"
                  className="w-full object-contain p-2"
                />
              </div>
            )}

            <div className="rounded-xl border border-[#d0cff0] bg-white p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">Your Tasks</p>
              <ol className="space-y-2">
                {exam.candidateBrief.tasks.map((task, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#1a1a1a]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#534AB7] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {task}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'actor' && (
        <div className="space-y-4">
          {/* Key details */}
          <div className="rounded-2xl border border-[#e5e5e4] bg-white p-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
              Key Details
            </p>
            <h3 className="text-lg font-bold text-[#1a1a1a]">
              {actor.patientName}, {actor.age}
            </h3>
            <p className="text-sm text-[#6b6b6b]">{actor.occupation}</p>
          </div>

          {/* Opening line */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Presenting Complaint
            </p>
            <p className="text-sm italic leading-relaxed text-amber-900">
              {actor.openingLine}
            </p>
          </div>

          {/* SOCRATES (symptom-based stations) */}
          {actor.socrates && actor.socrates.length > 0 && (
            <SocratesSection items={actor.socrates} />
          )}

          {/* History of presenting complaint (non-SOCRATES) */}
          {actor.historyOfPresentingComplaint && actor.historyOfPresentingComplaint.length > 0 && (
            <HistorySection
              title="History of Presenting Complaint"
              items={actor.historyOfPresentingComplaint}
            />
          )}

          {/* Past medical history */}
          <HistorySection title="Past Medical and Surgical History" items={actor.pastMedicalHistory} />

          {/* Drug history */}
          <HistorySection title="Drug History" items={actor.drugHistory} />

          {/* Family history */}
          <HistorySection title="Family History" items={actor.familyHistory} />

          {/* Social history */}
          <HistorySection title="Social History" items={actor.socialHistory} />

          {/* Important negatives */}
          {actor.importantNegatives.length > 0 && (
            <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
                Other History / Important Negatives
              </p>
              <ul className="space-y-1.5">
                {actor.importantNegatives.map((item, i) => (
                  <li key={i} className="text-sm text-[#1a1a1a]">
                    <span className="mr-1.5 font-semibold text-[#6b6b6b]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ICE */}
          <div className="rounded-2xl border border-[#AFA9EC] bg-[#EEEDFE] p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#3C3489]">
              ICE — only reveal if asked
            </p>
            <div className="space-y-2">
              <div>
                <p className="mb-0.5 text-xs font-semibold text-[#534AB7]">Ideas</p>
                <p className="text-sm italic text-[#1a1a1a]">{actor.ice.ideas}</p>
              </div>
              <div>
                <p className="mb-0.5 text-xs font-semibold text-[#534AB7]">Concerns</p>
                <p className="text-sm italic text-[#1a1a1a]">{actor.ice.concerns}</p>
              </div>
              <div>
                <p className="mb-0.5 text-xs font-semibold text-[#534AB7]">Expectations</p>
                <p className="text-sm italic text-[#1a1a1a]">{actor.ice.expectations}</p>
              </div>
            </div>
          </div>

          {/* Only if directly asked */}
          {actor.onlyIfDirectlyAsked.length > 0 && (
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-orange-700">
                Only Reveal if Directly Asked
              </p>
              <ul className="space-y-1">
                {actor.onlyIfDirectlyAsked.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-orange-900">
                    <span className="mt-0.5 shrink-0 text-orange-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Behaviour notes */}
          <div className="rounded-2xl border border-[#e5e5e4] bg-white p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">
              Behaviour Notes
            </p>
            <ul className="space-y-1">
              {actor.behaviourNotes.map((note, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#1a1a1a]">
                  <span className="mt-0.5 shrink-0 text-[#534AB7]">•</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'markscheme' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-[#AFA9EC] bg-[#EEEDFE] px-5 py-3">
            <p className="text-sm font-semibold text-[#3C3489]">Your score</p>
            <span className="rounded-full bg-[#534AB7] px-3 py-1 text-sm font-bold text-white">
              {scoredMarks} / {totalMarks} marks
            </span>
          </div>

          {exam.markScheme.map((domain, domainIndex) => {
            const domainTotal = domain.items.reduce((s, item) => s + item.marks, 0);
            const domainScored = domain.items.reduce(
              (s, item, ii) => s + (tickedItems.has(`${domainIndex}-${ii}`) ? item.marks : 0),
              0,
            );
            const isExpanded = expandedDomains.has(domainIndex);
            return (
              <div key={domainIndex} className="overflow-hidden rounded-2xl border border-[#e5e5e4] bg-white">
                <button
                  type="button"
                  onClick={() => toggleDomain(domainIndex)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-[#f9f9f8]"
                >
                  <p className="font-semibold text-[#1a1a1a]">{domain.domain}</p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#EEEDFE] px-2.5 py-0.5 text-xs font-bold text-[#534AB7]">
                      {domainScored} / {domainTotal} mark{domainTotal !== 1 ? 's' : ''}
                    </span>
                    <span className="text-[#6b6b6b]">{isExpanded ? '▲' : '▼'}</span>
                  </div>
                </button>
                {isExpanded && (
                  <div className="border-t border-[#e5e5e4] pb-2 pt-1">
                    {domain.items.map((item, itemIndex) => {
                      const key = `${domainIndex}-${itemIndex}`;
                      const ticked = tickedItems.has(key);
                      return (
                        <label
                          key={itemIndex}
                          className={`flex cursor-pointer items-start gap-3 px-5 py-2.5 transition ${
                            ticked ? 'bg-green-50' : 'hover:bg-[#f9f9f8]'
                          } ${itemIndex < domain.items.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={ticked}
                            onChange={() => toggleTick(domainIndex, itemIndex)}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#534AB7]"
                          />
                          <span className={`flex-1 text-sm text-[#1a1a1a] ${ticked ? 'line-through text-[#6b6b6b]' : ''}`}>
                            {item.description}
                          </span>
                          <span className={`shrink-0 text-sm font-semibold whitespace-nowrap ${ticked ? 'text-green-600' : 'text-[#534AB7]'}`}>
                            {item.marks} mark{item.marks !== 1 ? 's' : ''}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'viva' && (
        <div className="space-y-3">
          <div className="rounded-2xl border border-[#AFA9EC] bg-[#EEEDFE] p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#3C3489]">
              Expected Presentation of Findings
            </p>
            <p className="mb-3 text-xs text-[#6b6b6b]">
              A good candidate should cover these points when presenting their findings to the examiner.
            </p>
            <ol className="space-y-2">
              {exam.expectedPresentation.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#1a1a1a]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#534AB7] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ol>
          </div>

          <p className="text-sm text-[#6b6b6b]">
            The examiner will then ask these questions. Tap a question to reveal the model answer.
          </p>
          {exam.vivaQuestions.map((q, index) => {
            const isExpanded = expandedViva.has(index);
            return (
              <div key={index} className="overflow-hidden rounded-2xl border border-[#e5e5e4] bg-white">
                <button
                  type="button"
                  onClick={() => toggleViva(index)}
                  className="flex w-full items-start gap-3 px-5 py-4 text-left transition hover:bg-[#f9f9f8]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#534AB7] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="flex-1 font-medium text-[#1a1a1a]">{q.question}</p>
                  <span className="shrink-0 text-sm text-[#6b6b6b]">{isExpanded ? '▲' : '▼'}</span>
                </button>
                {isExpanded && (
                  <div className="border-t border-[#e5e5e4] bg-[#f9f9f8] px-5 pb-5 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#3C3489]">
                      Model Answer
                    </p>
                    <ul className="space-y-2">
                      {q.keyPoints.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#1a1a1a]">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#534AB7]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {q.source && (
                      <p className="mt-3 text-xs text-[#6b6b6b]">
                        <span className="font-medium">Source:</span> {q.source}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function generatePrompt(exam: MockExamStation): string {
  const totalMarks = exam.markScheme.reduce(
    (sum, domain) => sum + domain.items.reduce((s, item) => s + item.marks, 0),
    0,
  );

  const lines: string[] = [];
  const actor = exam.actorInstructions;

  lines.push(`OSCE MOCK STATION: ${exam.title}`);
  lines.push(`Diagnosis: ${exam.diagnosis}`);
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('PHASE 1 — PATIENT ROLEPLAY');
  lines.push('-'.repeat(40));
  lines.push('You are playing the role of a simulated patient in a UK medical school OSCE exam.');
  lines.push('Stay in character throughout. Do not volunteer information unless the student asks.');
  lines.push('');
  lines.push('KEY DETAILS');
  lines.push(`Name: ${actor.patientName}, Age: ${actor.age}`);
  lines.push(`Occupation: ${actor.occupation}`);
  lines.push(`Setting: ${exam.candidateBrief.setting}`);
  lines.push('');
  lines.push('YOUR OPENING LINE (say this when the student first speaks to you):');
  lines.push(actor.openingLine);
  lines.push('');

  if (actor.socrates && actor.socrates.length > 0) {
    lines.push('HISTORY OF PRESENTING COMPLAINT (SOCRATES):');
    for (const item of actor.socrates) {
      lines.push(`  ${item.label}: ${item.descriptor}`);
      for (const q of item.quotes) lines.push(`    ${q}`);
    }
    lines.push('');
  }

  if (actor.historyOfPresentingComplaint && actor.historyOfPresentingComplaint.length > 0) {
    lines.push('HISTORY OF PRESENTING COMPLAINT:');
    for (const item of actor.historyOfPresentingComplaint) {
      lines.push(`  [${item.label}]`);
      lines.push(`    ${item.quote}`);
    }
    lines.push('');
  }

  if (actor.pastMedicalHistory.length > 0) {
    lines.push('PAST MEDICAL AND SURGICAL HISTORY:');
    for (const item of actor.pastMedicalHistory) {
      lines.push(`  - ${item.label}: ${item.quote}`);
    }
    lines.push('');
  }

  if (actor.drugHistory.length > 0) {
    lines.push('DRUG HISTORY:');
    for (const item of actor.drugHistory) {
      lines.push(`  - ${item.label}: ${item.quote}`);
    }
    lines.push('');
  }

  if (actor.familyHistory.length > 0) {
    lines.push('FAMILY HISTORY:');
    for (const item of actor.familyHistory) {
      lines.push(`  - ${item.label}: ${item.quote}`);
    }
    lines.push('');
  }

  if (actor.socialHistory.length > 0) {
    lines.push('SOCIAL HISTORY:');
    for (const item of actor.socialHistory) {
      lines.push(`  - ${item.label}: ${item.quote}`);
    }
    lines.push('');
  }

  lines.push('IMPORTANT NEGATIVES (say these if the student asks about the relevant topic):');
  for (const item of actor.importantNegatives) {
    lines.push(`- ${item}`);
  }
  lines.push('');
  lines.push('ICE (only reveal if specifically asked):');
  lines.push(`- Ideas: ${actor.ice.ideas}`);
  lines.push(`- Concerns: ${actor.ice.concerns}`);
  lines.push(`- Expectations: ${actor.ice.expectations}`);
  lines.push('');

  if (actor.onlyIfDirectlyAsked.length > 0) {
    lines.push('ONLY REVEAL IF DIRECTLY ASKED:');
    for (const item of actor.onlyIfDirectlyAsked) {
      lines.push(`- ${item}`);
    }
    lines.push('');
  }

  lines.push('HOW TO BEHAVE:');
  for (const note of actor.behaviourNotes) {
    lines.push(`- ${note}`);
  }
  lines.push('');
  lines.push('INSTRUCTIONS FOR PHYSICAL EXAMINATION REQUESTS:');
  lines.push(
    'If the student asks to perform a physical examination or investigation, describe the findings ' +
      'verbally. Use the history items above as your guide to which findings are positive or negative.',
  );
  lines.push('');
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('PHASE 2 — EXAMINER ROLEPLAY');
  lines.push('-'.repeat(40));
  lines.push(
    'When the student says they are ready to present their findings, switch to examiner mode.',
  );
  lines.push('');
  lines.push('EXPECTED PRESENTATION (use this as your rubric):');
  exam.expectedPresentation.forEach((point, i) => {
    lines.push(`${i + 1}. ${point}`);
  });
  lines.push('');
  lines.push('VIVA QUESTIONS (ask one at a time, wait for an answer before moving on):');
  exam.vivaQuestions.forEach((q, i) => {
    lines.push('');
    lines.push(`Q${i + 1}: ${q.question}`);
    lines.push('Model answer key points:');
    for (const point of q.keyPoints) {
      lines.push(`  • ${point}`);
    }
    if (q.source) lines.push(`  (Source: ${q.source})`);
  });
  lines.push('');
  lines.push('='.repeat(60));
  lines.push('');
  lines.push('PHASE 3 — FEEDBACK');
  lines.push('-'.repeat(40));
  lines.push('After the viva, provide structured feedback:');
  lines.push('1. PRESENTATION — what they covered vs missed from the expected presentation list');
  lines.push('2. HISTORY COVERAGE — which mark scheme domains they addressed and which they missed');
  lines.push('3. VIVA PERFORMANCE — brief assessment per question');
  lines.push(`4. OVERALL SCORE ESTIMATE — out of ${totalMarks} based on the mark scheme below`);
  lines.push('');
  lines.push('MARK SCHEME:');
  for (const domain of exam.markScheme) {
    const domainTotal = domain.items.reduce((s, item) => s + item.marks, 0);
    lines.push('');
    lines.push(`DOMAIN: ${domain.domain} (${domainTotal} marks)`);
    for (const item of domain.items) {
      lines.push(`  - ${item.description}: ${item.marks} mark${item.marks !== 1 ? 's' : ''}`);
    }
  }
  lines.push('');
  lines.push(`Total marks available: ${totalMarks}`);

  return lines.join('\n');
}
