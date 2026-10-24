import Link from "next/link";
import { Compass, Menu, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-[#edf0ed] bg-white/95 backdrop-blur">
    <div className="container-page flex h-[76px] items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#176b55] text-white"><Compass size={22}/></span>
        <span className="text-[21px] font-extrabold tracking-[-.06em]">wander<span className="text-[#176b55]">lust.</span></span>
      </Link>
      <nav className="hidden items-center gap-8 text-[13px] font-semibold text-[#526059] md:flex">
        <Link className="text-[#176b55]" href="/">Discover</Link><Link href="/destinations">Destinations</Link><Link href="/experiences">Experiences</Link><Link href="/about">About us</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Search"><Search size={19}/></Button>
        <Link href="/sign-in" className="hidden sm:block"><Button variant="outline" size="sm"><UserRound size={15}/> Sign in</Button></Link>
        <Link href="/sign-up" className="hidden sm:block"><Button size="sm">Get started <span aria-hidden>↗</span></Button></Link>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu"><Menu size={22}/></Button>
      </div>
    </div>
  </header>;
}
