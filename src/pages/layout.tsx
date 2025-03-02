import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Next.js React App',
  description: 'Next.js React App, pages router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export { metadata };
