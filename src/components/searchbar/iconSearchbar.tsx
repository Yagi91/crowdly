import { Input } from "../ui/input";

interface SearchBarProps {
  /** Optional callback for search input changes */
  onSearch?: (value: string) => void;
  placeholder?: string;
}

/**
 * SearchBar Component
 * A styled search input with icon, following accessibility best practices
 *
 * @returns A search input field with magnifying glass icon
 */
export default function SearchBar({
  onSearch,
  placeholder = "Search",
}: SearchBarProps) {
  return (
    <div
      className="relative xl:w-[402px] w-full rounded-[50px] bg-gray1"
      role="search"
      aria-label="Site search"
    >
      {/* Search Icon */}
      <svg
        xmlns="/search.svg"
        className="absolute top-0 bottom-0 w-[17px] h-[19px] my-auto text-gray2 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        role="presentation"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Search Input */}
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-[51px] rounded-[50px] pr-[11px] font-[400] text-[18px]"
        onChange={(e) => onSearch?.(e.target.value)}
        aria-label="Search input"
        role="searchbox"
        autoComplete="off"
      />
    </div>
  );
}
