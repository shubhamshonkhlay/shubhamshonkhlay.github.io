export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        border
        border-gray-200
        p-8
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}