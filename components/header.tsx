import Link from "next/link";
import { TwitterIcon } from "./icons/twitter-icon";

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
        <div className="flex items-center space-x-4">
          <Link
            href="https://x.com/andrejkoller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
          >
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};
