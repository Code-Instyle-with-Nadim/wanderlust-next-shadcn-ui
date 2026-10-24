import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function SectionHeading({ eyebrow, title, description, link }: { eyebrow: string; title: string; description?: string; link?: string }) {
 return <div className="mb-7 flex items-end justify-between gap-5"><div><p className="eyebrow">{eyebrow}</p><h2 className="mt-2 text-2xl font-extrabold tracking-[-.045em] sm:text-[32px]">{title}</h2>{description && <p className="mt-2 max-w-xl text-sm leading-6 text-[#748079]">{description}</p>}</div>{link && <Link href="/destinations" className="hidden items-center gap-1 whitespace-nowrap text-sm font-bold text-[#176b55] sm:flex">{link}<ArrowUpRight size={16}/></Link>}</div>;
}
