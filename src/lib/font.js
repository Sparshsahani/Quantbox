// fonts.ts (or any setup file)

import {
  Hanken_Grotesk,
  Bricolage_Grotesque,
  Work_Sans,
  Inter,
} from "next/font/google";

export const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk-sans",
  subsets: ["latin"],
});
export const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage_Grotesque-sans",
  subsets: ["latin"],
});
export const work_Sans = Work_Sans({
  variable: "--font-work-Sans-sans",
  subsets: ["latin"],
});
export const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
