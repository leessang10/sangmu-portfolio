import type { PortfolioProfile } from "@/lib/portfolio-data";

type ContactSectionProps = {
  profile: PortfolioProfile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-16 scroll-mt-24 rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
      <h2 id="contact-title" className="text-2xl font-semibold text-white md:text-3xl">
        연락처
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
        협업 제안이나 채용 관련 문의를 환영합니다. 아래 채널로 연락 주시면 확인 후 빠르게 답변드리겠습니다.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {profile.contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}
