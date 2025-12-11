import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { IntroLogo } from "@/components/intro-logo"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Digital Showroom - Sites web qui remplissent votre agenda",
  description: "Découvrez nos sites web modernes et performants",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
}
html { font-family: var(--font-sans); }
        `}</style>
      </head>
      <body>
        <IntroLogo />
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(10, 10, 10, 0.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  )
}
