export function Main({ children }) {
  return (
    <main className="flex-1 h-full rounded-t-xl overflow-hidden p-8 bg-[var(--color-gray)]">
      {children}
    </main>
  );
}
