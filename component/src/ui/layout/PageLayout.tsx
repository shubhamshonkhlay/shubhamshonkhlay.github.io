export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {children}
      </div>
    </main>
  );
}