interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F5F0E6] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 uppercase tracking-[0.3em] text-[#8A6A5A]">
          Brew & Zest
        </p>

        <h1 className="mb-10 text-5xl font-semibold text-[#161414]">{title}</h1>

        <div className="space-y-8 text-lg leading-relaxed text-[#5C514B]">
          {children}
        </div>
      </div>
    </main>
  );
}
