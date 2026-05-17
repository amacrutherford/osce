interface KeyboardShortcutsModalProps {
  onClose: () => void;
}

const SHORTCUTS = [
  { key: '→', description: 'Next step' },
  { key: '←', description: 'Previous step' },
  { key: 'R', description: 'Toggle all answers' },
  { key: '1', description: 'Study mode' },
  { key: '2', description: 'Exam mode' },
  { key: '?', description: 'Show / hide shortcuts' },
  { key: 'Esc', description: 'Close this panel' },
];

export function KeyboardShortcutsModal({ onClose }: KeyboardShortcutsModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#1a1a1a]">Keyboard shortcuts</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1 text-[#6b6b6b] hover:bg-[#f5f5f5]"
          >
            ✕
          </button>
        </div>

        <dl className="space-y-2.5">
          {SHORTCUTS.map(({ key, description }) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <dd className="text-sm text-[#4a4a4a]">{description}</dd>
              <dt>
                <kbd className="rounded border border-[#d0d0d0] bg-[#f5f5f5] px-2 py-0.5 font-mono text-xs text-[#1a1a1a] shadow-[0_1px_0_#c0c0c0]">
                  {key}
                </kbd>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
