import { ThemeSwitcher } from "./theme/theme-switcher";

export const Footer = () => {
  return (
    <footer
      className="h-(--footer-height) w-full border-t border-(--color-border)"
      aria-label="Site footer"
    >
      <div className="flex items-center justify-between h-full w-full max-w-5xl mx-auto px-6">
        {/* Left side: Theme Switcher */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>

        {/* Right side: Copyright */}
        <p className="text-(--color-muted)">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
