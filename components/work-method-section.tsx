"use client";

import { useState } from "react";
import { workSteps } from "@/lib/site-content";

export function WorkMethodSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workSteps[activeIndex];

  return (
    <section className="mx-auto mt-8 max-w-[1672px] px-5 md:px-20">
      <div className="overflow-hidden border border-white/10 bg-[#0d0f0d]">
        <div className="grid gap-px bg-white/10 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="grid gap-px bg-white/10 md:grid-cols-5">
            {workSteps.map((step, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={step.number}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveIndex(index)}
                  className={`group min-h-52 bg-[#0d0f0d] p-6 text-left transition md:min-h-[620px] ${
                    active ? "text-white ring-1 ring-[#c2ff57]" : "text-white/72 hover:bg-[#141812]"
                  }`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className={`text-4xl font-light ${active ? "text-[#c2ff57]" : "text-white/34"}`}>
                        {step.number}
                      </p>
                      <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/36">{step.label}</p>
                      <h3 className="mt-10 text-3xl font-medium tracking-[-0.04em]">{step.title}</h3>
                    </div>
                    <p className={`mt-10 text-sm leading-relaxed md:hidden ${active ? "text-white/74" : "text-white/45"}`}>
                      {step.body}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-[#111411] p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">Work method</p>
            <h2 className="mt-8 text-5xl font-medium leading-tight tracking-[-0.05em] text-white md:text-6xl">
              {activeStep.title}
              <span className="text-[#c2ff57]">.</span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-white/68">{activeStep.detail}</p>

            <div className="mt-10 border border-white/12 bg-black/24 p-5 font-mono text-sm leading-relaxed text-white/64">
              {activeStep.code.map((line) => (
                <p key={line}>
                  <span className="text-[#c2ff57]">›</span> {line}
                </p>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              {activeStep.evidence.map((item) => (
                <div key={item} className="flex items-center justify-between border border-white/12 bg-black/20 px-4 py-3 text-sm text-white/66">
                  <span>{item}</span>
                  <span className="text-[#c2ff57]">검토</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
