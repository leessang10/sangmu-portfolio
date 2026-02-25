# Sangmu Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a dark, single-page portfolio for Lee Sangmu with philosophy, six curated projects, and accessible project detail modals with links and captures.

**Architecture:** Keep all content in a local typed data module and render through composable React sections. Use one client-side container for modal state while keeping page structure simple. Prefer small, testable components and accessible keyboard behavior for modal interactions.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Vitest, React Testing Library

---

## Preconditions

- Follow `@test-driven-development` for each functional unit.
- Run `@verification-before-completion` checks before claiming completion.
- Keep existing user image files in `public/` and reference them directly.

### Task 1: Add Test Harness (Vitest + RTL)

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `tests/smoke/smoke.test.ts`

**Step 1: Write the failing test**

```ts
// tests/smoke/smoke.test.ts
import { describe, expect, it } from "vitest";

describe("smoke", () => {
  it("runs test environment", () => {
    expect(true).toBe(true);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- tests/smoke/smoke.test.ts`
Expected: FAIL with `Missing script: "test"`.

**Step 3: Write minimal implementation**

- Add scripts to `package.json`:
  - `"test": "vitest run"`
  - `"test:watch": "vitest"`
- Add dev dependencies:
  - `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- Create `vitest.config.ts` with `environment: "jsdom"`, `setupFiles: ["./tests/setup.ts"]`, alias `@` to project root.
- Create `tests/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

**Step 4: Run test to verify it passes**

Run: `npm run test -- tests/smoke/smoke.test.ts`
Expected: PASS.

**Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts tests/setup.ts tests/smoke/smoke.test.ts
git commit -m "test: add vitest and rtl harness"
```

### Task 2: Add Typed Portfolio Data (Profile + 6 Projects)

**Files:**
- Create: `lib/portfolio-data.ts`
- Test: `tests/data/portfolio-data.test.ts`

**Step 1: Write the failing test**

```ts
// tests/data/portfolio-data.test.ts
import { describe, expect, it } from "vitest";
import { portfolioProfile, projects } from "@/lib/portfolio-data";

describe("portfolio data", () => {
  it("contains profile name", () => {
    expect(portfolioProfile.name).toBe("이상무");
  });

  it("contains exactly six projects", () => {
    expect(projects).toHaveLength(6);
  });

  it("includes at least one capture image path", () => {
    const imageCount = projects.flatMap((project) => project.images).length;
    expect(imageCount).toBeGreaterThan(0);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- tests/data/portfolio-data.test.ts`
Expected: FAIL with module not found for `@/lib/portfolio-data`.

**Step 3: Write minimal implementation**

Create `lib/portfolio-data.ts` with:
- Type definitions: `PortfolioProfile`, `PortfolioProject`, `ProjectLink`
- `portfolioProfile` content (name/role/headline/philosophy/contact)
- `projects` array of six items:
  - backend-boilerplate
  - academic_gpt_project
  - gapck_project
  - jobs_project
  - anarme_project
  - augment_holdem
- Use existing image assets for `images[]`, including:
  - `/이상무.png`
  - `/스크린샷 2026-02-26 001639.png`
  - `/스크린샷 2026-02-26 001830.png`
  - `/스크린샷 2026-02-26 001917.png`
  - `/스크린샷 2026-02-26 002025.png`
  - `/스크린샷 2026-02-26 002423.png`
  - `/스크린샷 2026-02-26 002522.png`
  - `/스크린샷 2026-02-26 003311.png`
- Keep links as available URLs; if unknown, store as empty array and show "링크 준비 중" in UI.

**Step 4: Run test to verify it passes**

Run: `npm run test -- tests/data/portfolio-data.test.ts`
Expected: PASS.

**Step 5: Commit**

```bash
git add lib/portfolio-data.ts tests/data/portfolio-data.test.ts
git commit -m "feat: add typed portfolio content data"
```

### Task 3: Implement Main Sections (Hero, Philosophy, Contact)

**Files:**
- Create: `components/portfolio/hero-section.tsx`
- Create: `components/portfolio/philosophy-section.tsx`
- Create: `components/portfolio/contact-section.tsx`
- Create: `components/portfolio/footer.tsx`
- Test: `tests/ui/sections.test.tsx`

**Step 1: Write the failing test**

```tsx
// tests/ui/sections.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PhilosophySection } from "@/components/portfolio/philosophy-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { portfolioProfile } from "@/lib/portfolio-data";

describe("portfolio sections", () => {
  it("renders hero headline", () => {
    render(<HeroSection profile={portfolioProfile} />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders philosophy items", () => {
    render(<PhilosophySection profile={portfolioProfile} />);
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
  });

  it("renders contact links", () => {
    render(<ContactSection profile={portfolioProfile} />);
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- tests/ui/sections.test.tsx`
Expected: FAIL with missing component modules.

**Step 3: Write minimal implementation**

Implement the four section components with:
- Semantic landmarks (`section`, `h1/h2`, `ul/li`)
- Reusable props from `portfolioProfile`
- CTA anchors: `#projects`, `#contact`
- Dark minimal styles using Tailwind utility classes only

**Step 4: Run test to verify it passes**

Run: `npm run test -- tests/ui/sections.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add components/portfolio/hero-section.tsx components/portfolio/philosophy-section.tsx components/portfolio/contact-section.tsx components/portfolio/footer.tsx tests/ui/sections.test.tsx
git commit -m "feat: add hero philosophy and contact sections"
```

### Task 4: Implement Project Grid + Cards

**Files:**
- Create: `components/portfolio/project-card.tsx`
- Create: `components/portfolio/project-grid-section.tsx`
- Test: `tests/ui/project-grid.test.tsx`

**Step 1: Write the failing test**

```tsx
// tests/ui/project-grid.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "@/lib/portfolio-data";
import { ProjectGridSection } from "@/components/portfolio/project-grid-section";

describe("project grid", () => {
  it("renders six project cards", () => {
    render(<ProjectGridSection projects={projects} onOpenProject={() => {}} />);
    expect(screen.getAllByRole("button", { name: /자세히 보기/i })).toHaveLength(6);
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- tests/ui/project-grid.test.tsx`
Expected: FAIL with missing grid/card components.

**Step 3: Write minimal implementation**

Implement:
- `ProjectCard` with title, summary, stack badges, and "자세히 보기" button
- `ProjectGridSection` with `id="projects"` and responsive grid classes:
  - mobile: 1 column
  - tablet: 2 columns
  - desktop: 3 columns

**Step 4: Run test to verify it passes**

Run: `npm run test -- tests/ui/project-grid.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add components/portfolio/project-card.tsx components/portfolio/project-grid-section.tsx tests/ui/project-grid.test.tsx
git commit -m "feat: add six-project grid section"
```

### Task 5: Implement Accessible Project Detail Modal

**Files:**
- Create: `components/portfolio/project-detail-modal.tsx`
- Test: `tests/ui/project-modal.test.tsx`

**Step 1: Write the failing test**

```tsx
// tests/ui/project-modal.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { projects } from "@/lib/portfolio-data";
import { ProjectDetailModal } from "@/components/portfolio/project-detail-modal";

describe("project modal", () => {
  it("closes when ESC is pressed", async () => {
    const onClose = vi.fn();
    render(<ProjectDetailModal project={projects[0]} open onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("shows placeholder when no image exists", () => {
    render(
      <ProjectDetailModal
        project={{ ...projects[0], images: [] }}
        open
        onClose={() => {}}
      />,
    );
    expect(screen.getByText(/캡처 준비 중/i)).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- tests/ui/project-modal.test.tsx`
Expected: FAIL with missing modal component.

**Step 3: Write minimal implementation**

Implement `ProjectDetailModal`:
- Props: `project`, `open`, `onClose`
- Behavior:
  - do not render when closed
  - call `onClose` on ESC
  - backdrop click closes modal
- Content:
  - problem/solution/outcome lists
  - links list with `target="_blank" rel="noreferrer"`
  - first image preview or placeholder text

**Step 4: Run test to verify it passes**

Run: `npm run test -- tests/ui/project-modal.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add components/portfolio/project-detail-modal.tsx tests/ui/project-modal.test.tsx
git commit -m "feat: add accessible project detail modal"
```

### Task 6: Compose Portfolio Page and Replace Boilerplate

**Files:**
- Create: `components/portfolio/portfolio-page.tsx`
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Test: `tests/ui/portfolio-page.test.tsx`

**Step 1: Write the failing test**

```tsx
// tests/ui/portfolio-page.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

describe("portfolio page", () => {
  it("renders key sections", () => {
    render(<PortfolioPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /대표 프로젝트/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /연락처/i })).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm run test -- tests/ui/portfolio-page.test.tsx`
Expected: FAIL with missing `PortfolioPage` module.

**Step 3: Write minimal implementation**

- Build `PortfolioPage` as a client component managing selected project state.
- Compose all sections + modal.
- Replace `app/page.tsx` to return `<PortfolioPage />`.
- Update metadata in `app/layout.tsx`:
  - title: `이상무 | Backend & Product Engineer`
  - description: concise portfolio summary.

**Step 4: Run test to verify it passes**

Run: `npm run test -- tests/ui/portfolio-page.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add components/portfolio/portfolio-page.tsx app/page.tsx app/layout.tsx tests/ui/portfolio-page.test.tsx
git commit -m "feat: wire full portfolio page"
```

### Task 7: Dark Theme Polish and Final Verification

**Files:**
- Modify: `app/globals.css`
- Optional rename/create: `public/profile-sangmu.png`, `public/project-*.png` (if normalizing filenames)

**Step 1: Write the failing test**

No additional unit test required; use verification checklist.

**Step 2: Run verification commands (expected current failures if unfinished)**

Run:
- `npm run test`
- `npm run lint`
- `npm run build`

Expected: all PASS before completion.

**Step 3: Write minimal implementation**

- Tune CSS variables for dark minimal contrast and one accent color.
- Ensure reduced-motion friendly transitions for modal and card hover.
- If needed, normalize image file naming while preserving references in data.

**Step 4: Run final verification**

Run:
- `npm run test`
- `npm run lint`
- `npm run build`

Expected:
- All commands PASS.
- Manual check at `npm run dev`:
  - mobile, tablet, desktop layouts
  - modal keyboard close and focus flow
  - links open correctly

**Step 5: Commit**

```bash
git add app/globals.css lib/portfolio-data.ts public
git commit -m "style: finalize dark minimal portfolio theme and assets"
```

## Done Criteria

- Single-page portfolio renders with approved section order.
- Exactly six representative projects displayed.
- Detail modal works with keyboard close and placeholder fallback.
- User photos/screenshots from `public/` are integrated.
- All verification commands pass.
