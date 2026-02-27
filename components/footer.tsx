export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Connected<span className="text-primary">Tech</span>
          </span>
        </div>

        <a
          href="tel:8102857000"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          (810) 285-7000
        </a>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Connected Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
