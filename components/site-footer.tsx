import Link from "next/link";
import { Compass, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
export function SiteFooter() {
 return <footer className="mt-24 bg-[#14271f] text-white">
  <div className="container-page grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
   <div><Link href="/" className="flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#2b8068]"><Compass size={22}/></span><span className="text-[21px] font-extrabold tracking-[-.06em]">wanderlust.</span></Link><p className="mt-5 max-w-xs text-sm leading-6 text-white/60">Find your next escape. Discover the world’s most extraordinary places, one journey at a time.</p><div className="mt-5 flex gap-3 text-white/70"><Instagram size={17}/><Facebook size={17}/><Youtube size={18}/></div></div>
   <div><p className="mb-4 text-sm font-bold">Explore</p><div className="space-y-3 text-sm text-white/60"><p>Destinations</p><p>Unique stays</p><p>Travel guides</p><p>Experiences</p></div></div>
   <div><p className="mb-4 text-sm font-bold">Company</p><div className="space-y-3 text-sm text-white/60"><p>About us</p><p>Our journal</p><p>Careers</p><p>Contact</p></div></div>
   <div><p className="mb-4 text-sm font-bold">Get inspired</p><p className="text-sm leading-6 text-white/60">A little inspiration for your next big adventure.</p><div className="mt-4 flex rounded-xl bg-white/10 p-1"><span className="flex-1 px-3 py-2 text-xs text-white/50">Your email address</span><button className="grid h-9 w-9 place-items-center rounded-lg bg-[#2b8068]"><ArrowUpRight size={17}/></button></div></div>
  </div><div className="container-page flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-xs text-white/45 sm:flex-row"><span>© 2026 Wanderlust Travel Co. All rights reserved.</span><span className="flex gap-5"><span>Privacy policy</span><span>Terms of service</span></span></div>
 </footer>;
}
