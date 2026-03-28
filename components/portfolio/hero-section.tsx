import Image from "next/image";
import Link from "next/link";
import type { PortfolioProfile } from "@/lib/portfolio-data";

type HeroSectionProps = {
  profile: PortfolioProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f141d] p-8 md:p-12">
      <div className="pointer-events-none absolute -top-20 right-0 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-16 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Portfolio 2026</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-cyan-100/80 md:text-xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            {profile.intro}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              About 보기
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/15"
            >
              Projects 보기
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact 보기
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-cyan-200/30 to-blue-500/20 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#111827] p-2">
            <Image
              src={profile.profileImage}
              alt={`${profile.name} 프로필 이미지`}
              width={560}
              height={700}
              className="h-auto w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
