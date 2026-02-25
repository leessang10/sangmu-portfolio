"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PortfolioProject } from "@/lib/portfolio-data";

type ProjectDetailModalProps = {
  project: PortfolioProject | null;
  open: boolean;
  onClose: () => void;
};

export function ProjectDetailModal({ project, open, onClose }: ProjectDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#03070d]/85 p-4"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl border border-white/15 bg-[#0f141d] p-5 md:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.period}</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-cyan-200">{project.role}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/25 px-4 py-2 text-sm text-slate-100 hover:border-cyan-300 hover:text-cyan-200"
          >
            닫기
          </button>
        </div>

        <p className="text-sm leading-relaxed text-slate-300 md:text-base">{project.summary}</p>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-white">주요 기여</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-white">결과</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                {project.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-white">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-xs text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-white">링크</h4>
              {project.links.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={`${link.type}-${link.href}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-300 hover:text-cyan-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-400">링크 준비 중</p>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-white">프로젝트 캡처</h4>
            {project.images[0] ? (
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} 대표 캡처`}
                  width={960}
                  height={540}
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center text-sm text-slate-400">
                캡처 준비 중
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
