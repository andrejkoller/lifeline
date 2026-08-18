export const Header = () => {
  return (
    <header
      className="flex items-center justify-between h-(--header-height) w-full border-b border-(--color-border)"
      aria-label="Site header"
    >
      <div className="flex items-center justify-between w-full h-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-start">
          {/* SVG Logo coming soon */}
        </div>
      </div>
    </header>
  );
};
