export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <nav className="text-sm text-gray-400">About Navbar</nav>
        <main>
            {children}
        </main>
      </>
    );
  }