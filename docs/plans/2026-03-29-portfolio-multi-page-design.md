# Portfolio Multi-Page Redesign Design

## Goal

현재 단일 페이지 포트폴리오를 다중 페이지 구조로 재편해, 자기소개와 프로젝트, 연락처를 더 명확하게 전달한다.

## Current State

- 앱은 Next.js App Router 기반이다.
- 현재 진입점은 [`app/page.tsx`](/C:/Users/leess/WebstormProjects/01_sangmu/sangmu-portfolio/app/page.tsx) 하나다.
- 주요 UI는 [`components/portfolio/portfolio-page.tsx`](/C:/Users/leess/WebstormProjects/01_sangmu/sangmu-portfolio/components/portfolio/portfolio-page.tsx) 안에서 섹션을 순서대로 조합하는 단일 페이지 구성이다.
- 프로젝트 상세는 별도 URL 없이 모달로 열린다.
- 포트폴리오 데이터는 [`lib/portfolio-data.ts`](/C:/Users/leess/WebstormProjects/01_sangmu/sangmu-portfolio/lib/portfolio-data.ts) 에 모여 있다.

## Approved Information Architecture

- `/`: 요약형 홈
- `/about`: 자기소개
- `/projects`: 프로젝트 목록
- `/projects/[id]`: 프로젝트 상세
- `/contact`: 문의/연락처

## Page Responsibilities

### 1. Home

- 첫인상과 전체 안내 역할만 담당한다.
- 짧은 소개, 핵심 기준 3가지, 대표 프로젝트 2~3개, 주요 CTA를 배치한다.
- CTA는 About, Projects, Contact 페이지로 연결한다.

### 2. About

- 자기소개 관련 내용을 한 페이지로 묶는다.
- 현재 데이터 기준으로 `intro`, `story`, `highlights`, `philosophy`, `workProcess`, `collaborationPrinciples`, `futureGoal`를 중심으로 재구성한다.
- 초반에는 핵심 강점 3개를 요약 블록으로 먼저 보여준다.

### 3. Projects

- 전체 프로젝트를 카드 목록으로 노출한다.
- 카드에서 기간, 역할, 요약, 기술 스택 일부를 즉시 확인할 수 있어야 한다.
- 카드 클릭 시 프로젝트 상세 페이지로 이동한다.

### 4. Project Detail

- 프로젝트별 제목, 기간, 요약, 역할, 기술 스택, 주요 기여, 결과, 이미지, 외부 링크를 상세하게 보여준다.
- 상세 페이지 하단에는 `프로젝트 목록으로 돌아가기`와 `연락하기` 연결을 둔다.
- 기존 모달 방식은 제거한다.

### 5. Contact

- 이메일, GitHub, 협업 제안 문구를 중심으로 간결하게 구성한다.
- "백엔드 중심이지만 제품 단위로 함께 일할 수 있다"는 메시지를 명확히 전달한다.

## Navigation

- 상단 글로벌 네비게이션은 모든 페이지에서 공통으로 유지한다.
- 메뉴는 `Home / About / Projects / Contact` 네 개로 제한한다.
- 현재 페이지는 시각적으로 분명히 구분한다.
- 모바일에서도 같은 정보구조를 유지하되 레이아웃만 단순화한다.

## Data Strategy

- 기존 [`lib/portfolio-data.ts`](/C:/Users/leess/WebstormProjects/01_sangmu/sangmu-portfolio/lib/portfolio-data.ts) 는 계속 단일 데이터 소스로 사용한다.
- 각 페이지는 필요한 데이터만 선택적으로 가져간다.
- 프로젝트 상세 페이지는 `id` 기반으로 조회한다.
- 존재하지 않는 `id`는 Next.js 404 처리로 연결한다.

## Component Strategy

- 현재 단일 페이지 전용 컨테이너인 [`components/portfolio/portfolio-page.tsx`](/C:/Users/leess/WebstormProjects/01_sangmu/sangmu-portfolio/components/portfolio/portfolio-page.tsx) 는 해체한다.
- 공통 네비게이션과 공통 레이아웃은 재사용 가능하게 유지한다.
- 기존 섹션 컴포넌트는 그대로 재사용할 수 있는 것은 유지하고, 페이지 역할에 맞게 조합을 바꾼다.
- 프로젝트 관련 UI는 목록용 카드와 상세용 레이아웃으로 분리한다.

## UX Decisions

- 홈은 "소개 요약 + 대표 작업 미리보기" 구조로 가볍게 만든다.
- 프로젝트 상세는 공유 가능한 URL을 제공해야 하므로 모달보다 독립 페이지가 적합하다.
- 한 페이지에 모든 정보를 쌓는 대신, 각 페이지가 명확한 목적을 가지도록 분리한다.

## Validation Criteria

- `Home / About / Projects / Contact` 네비게이션이 모두 정상 동작해야 한다.
- 프로젝트 목록에서 상세 페이지로 이동이 가능해야 한다.
- 프로젝트 상세 URL 직접 접근이 가능해야 한다.
- 잘못된 프로젝트 `id` 접근 시 404가 보여야 한다.
- 현재 포트폴리오 데이터가 누락 없이 각 페이지에 배치되어야 한다.
- 모바일과 데스크톱 양쪽에서 레이아웃이 깨지지 않아야 한다.
- 기본 `lint` 와 `build` 검증을 통과해야 한다.
