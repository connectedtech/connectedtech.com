// Brand mark — two overlapping rings, matches app/icon.svg geometry
export function Logo({ inverted = false, size = 24 }: { inverted?: boolean; size?: number }) {
  const ring = inverted ? "white" : "var(--primary)";
  return (
    <span className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className="flex-none">
        <circle cx="12" cy="12" r="9" stroke={ring} strokeWidth="2.5" />
        <circle cx="20" cy="20" r="9" stroke={ring} strokeWidth="2.5" />
      </svg>
      <span className={`text-lg font-semibold tracking-tight ${inverted ? "text-white" : "text-foreground"}`}>
        Connected Technologies
      </span>
    </span>
  );
}
