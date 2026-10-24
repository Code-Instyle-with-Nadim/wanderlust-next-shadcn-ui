import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Wanderlust — Find your next escape",
  description: "Explore remarkable places and plan your next unforgettable escape.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
