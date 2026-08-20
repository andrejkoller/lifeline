import { ThemeSwitcher } from "./theme/theme-switcher";

export const Footer = () => {
  return (
    <footer
      className="h-(--footer-height) w-full border-t border-(--color-border)"
      aria-label="Site footer"
    >
      <div className="layout-container flex items-center justify-between h-full w-full">
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
