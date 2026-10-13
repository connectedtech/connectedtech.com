import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-brand-dark px-6 py-12 text-white/75">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo inverted size={20} />

        <a href="tel:8102857000" className="text-sm transition-colors hover:text-white">
          (810) 285-7000
        </a>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Connected Technologies
        </p>
      </div>
    </footer>
  );
}
