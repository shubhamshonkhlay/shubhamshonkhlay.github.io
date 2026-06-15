import { ReactNode } from "react";
import Container from "../ui/Container";

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="w-full overflow-x-hidden bg-white text-gray-900">
      <Container>{children}</Container>
    </main>
  );
}