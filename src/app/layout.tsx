import { Inter, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-code" }); // Using Outfit as secondary/display font mapping to code var for now or define new var

export const metadata: Metadata = {
  title: "OnlyModels — The Agency Creators Trust",
  description:
    "Scale your OnlyFans with the top 0.1% agency. AI-powered growth, dedicated U.S. chatters, and full transparency. Join the agency creators trust.",
  keywords: [
    "OnlyFans Agency",
    "OnlyFans Management",
    "Creator Growth",
    "OnlyModels",
    "OF Agency",
    "Creator Marketing",
    "OnlyFans Promotion",
    "OnlyFans Chatters",
  ],
  openGraph: {
    title: "OnlyModels — The Agency Creators Trust",
    description:
      "Scale your OnlyFans with the top 0.1% agency. AI-powered growth, dedicated U.S. chatters, and full transparency.",
    url: "https://onlymodels.app",
    siteName: "OnlyModels",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyModels — The Agency Creators Trust",
    description:
      "Scale your OnlyFans with the top 0.1% agency. AI-powered growth, dedicated U.S. chatters, and full transparency.",
  },
};

import { SmoothScroll } from "@/components/smooth-scroll";
import CustomCursor from "@/components/CustomCursor";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('${THEME_STORAGE_KEY}') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} bg-background text-foreground antialiased`}>
        <CustomCursor />
        <SmoothScroll>
          <ThemeProvider>{children}</ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
