import { PageFrame } from "@/components/site-chrome";
import { portfolioProfile } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-[1672px] px-5 md:px-20">
        <div className="flex min-h-[74dvh] flex-col justify-center border border-white/10 bg-[#0d0f0d] px-6 py-16 text-center md:px-14">
          <p className="text-xs uppercase tracking-[0.42em] text-[#c2ff57]">Available for selected work</p>
          <h1 className="mx-auto mt-12 max-w-5xl text-[clamp(4rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white">
            Need a builder?
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-2xl leading-relaxed text-white/66">
            만들 기능, 현재 문제, 원하는 결과를 보내주세요.
          </p>
          <a
            href={portfolioProfile.contacts[0].href}
            className="mx-auto mt-20 flex w-full max-w-[1500px] items-center justify-between bg-[#c2ff57] px-8 py-8 text-left text-4xl font-semibold tracking-[-0.04em] text-[#11140d] hover:bg-white md:px-28 md:py-14 md:text-5xl"
          >
            이메일로 문의하기
            <span aria-hidden="true" className="text-6xl font-light">→</span>
          </a>
          <div className="mt-12 flex justify-center gap-5 text-lg tracking-[0.12em] text-white/62">
            {portfolioProfile.contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="hover:text-[#c2ff57]"
              >
                {contact.label}
                {index < portfolioProfile.contacts.length - 1 ? <span className="ml-5 text-[#c2ff57]">•</span> : null}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
