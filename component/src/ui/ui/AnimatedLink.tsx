import Link from "next/link";

type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedLink({
  href,
  children,
  className = "",
}: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center ${className}`}
    >
      <span
        className="
          relative
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-full
          after:origin-left
          after:scale-x-0
          after:bg-current
          after:transition-transform
          after:duration-300
          group-hover:after:scale-x-100
        "
      >
        {children}
      </span>

      <svg
        className="ml-2 h-3 w-3"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M1 9L9 1M9 1V9M9 1H1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            [stroke-dasharray:30]
            [stroke-dashoffset:30]
            transition-all
            duration-300
            group-hover:[stroke-dashoffset:0]
          "
        />
      </svg>
    </Link>
  );
}