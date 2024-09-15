// app/landing/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Landing Layout</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/landing/login">Login</Link>
            <Link href="/landing/register">Register</Link>
            <Link href="/landing/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer content for Landing layout</p>
        </footer>
      </body>
    </html>
  );
}
