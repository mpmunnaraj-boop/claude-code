import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MPSC Guru — Maharashtra's Premier MPSC Coaching Institute",
  description:
    "MPSC Guru offers expert coaching for MPSC State Services, PSI/STI/ASO, Group B & C, Talathi, Maharashtra Police and all government exams. 5000+ selections since 2010.",
  keywords: "MPSC, MPSC coaching, Maharashtra, MPSC State Services, PSI STI ASO, Talathi, MPSC online classes, Marathi medium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
