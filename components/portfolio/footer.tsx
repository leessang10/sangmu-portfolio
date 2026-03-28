type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer
      className={`mt-10 border-t border-white/10 py-6 text-xs text-slate-500 ${className ?? ""}`.trim()}
    >
      <p>Built by Lee Sangmu. Updated March 2026.</p>
    </footer>
  );
}
