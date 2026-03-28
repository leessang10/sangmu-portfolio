import { ContactSection } from "@/components/portfolio/contact-section";
import { SiteShell } from "@/components/portfolio/site-shell";
import { portfolioProfile } from "@/lib/portfolio-data";

export function ContactPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-white/10 bg-[#0f141d] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Collaboration</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          백엔드 중심으로 일하지만, 제품 수준의 협업이 필요하다면 요구사항 정리부터 구현과 운영
          대응까지 함께 맞춰갈 수 있습니다.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
          채용, 협업 제안, 프로젝트 상담 모두 환영합니다. 맥락이 명확할수록 더 빠르게 답을 드릴 수
          있습니다.
        </p>
      </section>

      <ContactSection
        profile={portfolioProfile}
        title="연락 채널"
        description="필요한 역할과 현재 상황을 함께 보내주시면, 백엔드 중심 기여 범위와 제품 단위 협업 방식까지 현실적으로 맞춰보겠습니다."
        className="mt-10"
      />
    </SiteShell>
  );
}
