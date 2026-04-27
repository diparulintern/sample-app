import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">MyApp</h1>

        <nav className="hidden sm:flex gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold tracking-tight leading-tight">
          Build faster with Next.js 🚀
        </h2>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A modern web app starter powered by Next.js, Tailwind CSS, and React.
          Build scalable, fast, and beautiful applications in minutes.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            Documentation
          </a>
        </div>

        {/* Logo */}
        <div className="mt-12">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={150}
            height={40}
            className="dark:invert mx-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3 text-center">

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow">
            <h3 className="text-lg font-semibold">⚡ Fast</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Optimized performance with modern tools.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow">
            <h3 className="text-lg font-semibold">🎨 Modern UI</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Clean design using Tailwind CSS.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow">
            <h3 className="text-lg font-semibold">🚀 Scalable</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Built for production apps.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-zinc-500 dark:text-zinc-400 pb-10">
        © 2026 MyApp. Built with Next.js.
      </footer>

    </div>
  );
}