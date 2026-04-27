import "./globals.css";

export const metadata = {
  title: "MyApp",
  description: "Next.js Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}