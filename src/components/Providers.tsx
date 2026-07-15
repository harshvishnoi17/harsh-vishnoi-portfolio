"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ReactLenis } from "lenis/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="aurora"
      themes={["dark", "light", "aurora", "iron"]}
      enableSystem={false}
      disableTransitionOnChange
    >
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
