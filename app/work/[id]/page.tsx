import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/site-chrome";
import { projects } from "@/lib/portfolio-data";

type WorkDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <PageFrame>
      <article className="mx-auto max-w-[1672px] px-5 md:px-20">
        <div className="grid overflow-hidden border border-white/10 bg-[#0d0f0d] lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="flex min-h-[760px] flex-col justify-between border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-14">
            <div>
              <Link href="/work" className="text-sm text-[#c2ff57] hover:text-white">
                ← Work
              </Link>
              <p className="mt-14 text-xs uppercase tracking-[0.24em] text-[#c2ff57]">
                {project.period}
              </p>
              <h1 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-white/62">{project.summary}</p>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.22em] text-white/36">Role</p>
              <p className="mt-3 text-xl text-[#c2ff57]">{project.role}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="border border-white/15 px-3 py-1.5 text-sm text-white/64">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="bg-[#1a1c19] p-5 md:p-12">
            <div className="relative min-h-[420px] overflow-hidden border border-white/20 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <Image
                src={project.images[0]}
                alt={`${project.title} 대표 이미지`}
                fill
                priority
                className="object-cover opacity-72 saturate-[0.72]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />
              <div className="absolute bottom-6 left-6 border-l border-[#c2ff57] bg-black/76 px-5 py-4">
                <p className="text-sm text-[#c2ff57]">Case image</p>
                <p className="mt-2 text-xl text-white">{project.title}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <section className="border border-white/12 bg-[#0d0f0d] p-6">
                <h2 className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">Contributions</h2>
                <ul className="mt-8 space-y-5 text-base leading-relaxed text-white/68">
                  {project.contributions.map((item) => (
                    <li key={item} className="border-l border-white/14 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border border-white/12 bg-[#0d0f0d] p-6">
                <h2 className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">Outcomes</h2>
                <ul className="mt-8 space-y-5 text-base leading-relaxed text-white/68">
                  {project.outcomes.map((item) => (
                    <li key={item} className="border-l border-white/14 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
