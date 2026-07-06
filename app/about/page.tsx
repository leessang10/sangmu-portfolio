import Image from "next/image";
import { PageFrame } from "@/components/site-chrome";
import { WorkMethodSection } from "@/components/work-method-section";
import { stackGroups } from "@/lib/site-content";

export default function AboutPage() {
  const proofLoop = [
    {
      number: "01",
      title: "문제 분해",
      body: "요구사항을 입력, 상태, 결과로 나눠 병목을 먼저 찾습니다.",
    },
    {
      number: "02",
      title: "작은 변경",
      body: "한 번에 크게 갈아엎지 않고, 확인 가능한 단위로 붙입니다.",
    },
    {
      number: "03",
      title: "실제 검증",
      body: "빌드, 브라우저, 로그, 데이터 상태까지 보고 닫습니다.",
    },
    {
      number: "04",
      title: "운영 기준",
      body: "남은 리스크와 다음 조치를 짧게 남겨 유지보수 가능하게 만듭니다.",
    },
  ];

  const proofSignals = ["build pass", "ui check", "risk note"];

  const principles = [
    ["좁게 고침", "변경 범위를 먼저 줄입니다."],
    ["끝까지 검증", "실제 화면과 로그까지 봅니다."],
    ["운영 기준", "남은 리스크를 남깁니다."],
  ];

  return (
    <PageFrame>
      <section className="relative mx-auto min-h-[760px] max-w-[1672px] overflow-hidden px-5 md:px-20">
        <div className="relative min-h-[760px] overflow-hidden border border-white/10 bg-[#0d0f0d]">
          <Image
            src="/generated/about-workspace.webp"
            alt="어두운 개발자 작업 공간"
            fill
            priority
            className="object-cover opacity-78"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.9)_0%,rgba(5,6,7,0.42)_52%,rgba(5,6,7,0.88)_100%),linear-gradient(180deg,rgba(5,6,7,0.18),rgba(5,6,7,0.88))]" />

          <div className="relative z-10 grid min-h-[760px] gap-10 p-8 md:grid-cols-[minmax(0,1fr)_340px] md:p-14 xl:grid-cols-[minmax(0,1fr)_400px]">
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">About</p>
              <h1 className="mt-10 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-white md:text-7xl">
                Engineer for messy <span className="text-[#c2ff57]">real work.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-white/76">
                복잡한 요구사항을 작게 쪼개고, 실제 동작으로 증명합니다.
              </p>
              <div className="mt-16 grid max-w-3xl gap-px bg-white/18 md:grid-cols-3">
                {principles.map(([title, body]) => (
                  <div key={title} className="bg-black/35 p-6 text-white/82 backdrop-blur">
                    <div className="mb-6 size-8 border border-[#c2ff57]" />
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/54">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid content-center">
              <div className="border border-white/35 bg-black/35 p-5 backdrop-blur md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#c2ff57]">Workflow</p>
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.03em] text-white">
                  문제에서 검증까지.
                </h2>
                <div className="mt-8 divide-y divide-white/12 border-y border-white/12">
                  {proofLoop.map((step) => (
                    <div key={step.number} className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
                      <p className="font-mono text-sm text-[#c2ff57]">{step.number}</p>
                      <div>
                        <h3 className="text-lg font-medium text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/62">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-3 divide-x divide-white/12 border border-white/12">
                  {proofSignals.map((signal) => (
                    <div key={signal} className="min-h-20 p-3">
                      <div className="mb-4 size-3 border border-[#c2ff57]" />
                      <p className="text-[0.68rem] uppercase leading-relaxed tracking-[0.14em] text-white/58">{signal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1672px] px-5 md:px-20">
        <div className="relative overflow-hidden border border-white/10 bg-[#0d0f0d] p-8 md:p-14">
          <div className="absolute left-8 top-8 hidden h-[80%] w-24 border-l border-white/18 md:block">
            <span className="absolute bottom-0 text-[9rem] font-medium leading-none text-white/10">05</span>
          </div>
          <div className="md:ml-40">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">Stack</p>
            <h2 className="mt-8 max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
              Stack with <span className="text-[#c2ff57]">judgment.</span>
            </h2>
            <p className="mt-8 text-xl text-white/64">필요한 기술만 정확히 고릅니다.</p>
            <div className="mt-16 grid gap-px bg-white/14 lg:grid-cols-4">
              {stackGroups.map(([title, ...items], index) => (
                <div key={title} className="bg-[#0d0f0d] p-7">
                  <p className="text-xs tracking-[0.2em] text-[#c2ff57]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-2xl font-medium text-white">{title}</h3>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="border border-white/15 px-3 py-1.5 text-sm text-white/64">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-8 border-t border-white/14 pt-5 text-sm leading-relaxed text-white/42">
                    실제 문제 해결에 집중합니다.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WorkMethodSection />
    </PageFrame>
  );
}
