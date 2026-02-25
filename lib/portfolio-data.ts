export type ProjectLinkType = "github" | "live" | "docs";

export type ProjectLink = {
  type: ProjectLinkType;
  label: string;
  href: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  period: string;
  summary: string;
  role: string;
  stack: string[];
  contributions: string[];
  outcomes: string[];
  links: ProjectLink[];
  images: string[];
};

export type PortfolioProfile = {
  name: string;
  role: string;
  headline: string;
  intro: string;
  philosophy: string[];
  contacts: {
    label: string;
    href: string;
  }[];
  profileImage: string;
};

export const portfolioProfile: PortfolioProfile = {
  name: "이상무",
  role: "Backend & Product Engineer",
  headline: "문제를 단순화하고, 운영 가능한 구조로 끝까지 완성합니다.",
  intro:
    "도메인 모델링부터 API, 운영 자동화, 프론트 연동까지 제품이 실제로 돌아가는 과정 전체를 책임지는 개발자입니다.",
  philosophy: [
    "복잡한 요구사항은 도메인 경계와 책임을 먼저 분리합니다.",
    "초기 속도보다 장기 유지보수성과 운영 안정성을 우선합니다.",
    "기술 선택은 유행보다 팀 생산성과 사용자 가치에 맞춥니다.",
    "기능 완료보다 배포 이후 운영 지표까지 확인해야 완료입니다.",
  ],
  contacts: [
    { label: "Email", href: "mailto:contact@update-needed.dev" },
    { label: "GitHub", href: "https://github.com" },
  ],
  profileImage: "/profile-sangmu.png",
};

export const projects: PortfolioProject[] = [
  {
    id: "backend-boilerplate",
    title: "NestJS Production Boilerplate",
    period: "2025 - 2026",
    summary: "인증, RBAC, 큐, 메트릭, 헬스체크를 포함한 실서비스 지향 백엔드 템플릿 구축",
    role: "Architecture / Backend Lead",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
    contributions: [
      "도메인 중심 모듈 구조와 cross-cutting 계층 설계",
      "JWT + RBAC 인증/인가 체계 구현",
      "Prometheus/Health endpoint 기반 운영 관측성 확보",
    ],
    outcomes: [
      "신규 서비스 시작 시 백엔드 초기 구축 시간을 단축",
      "운영 장애 대응을 위한 표준 관측 지표 기반 확보",
    ],
    links: [],
    images: ["/project-01.png"],
  },
  {
    id: "academic-gpt",
    title: "Academic GPT Platform",
    period: "2024 - 2025",
    summary: "학술 도메인용 AI 플랫폼 백엔드와 다중 클라이언트 운영 구조 구축",
    role: "Backend / Platform",
    stack: ["NestJS", "TypeORM", "MySQL", "BullMQ", "AWS"],
    contributions: [
      "관리자/서비스 공통 API 아키텍처 설계",
      "결제 웹훅, 배치 스케줄러, PM2 운영 파이프라인 정리",
      "AI 연동 플로우의 예외 처리 및 운영 로그 체계 개선",
    ],
    outcomes: [
      "운영 환경에서 배포/복구 절차 표준화",
      "서비스/관리자 기능 분리로 릴리즈 충돌 감소",
    ],
    links: [],
    images: ["/project-02.png"],
  },
  {
    id: "gapck",
    title: "GAPCK Multi-App Monorepo",
    period: "2024 - 2025",
    summary: "여러 웹 클라이언트와 API 서버를 하나의 모노레포로 통합 운영",
    role: "Full Stack / Integrator",
    stack: ["React", "Express", "NestJS", "pnpm", "Turborepo"],
    contributions: [
      "다중 프론트 앱의 공통 구조/배포 스크립트 정리",
      "v1 Express + v2 NestJS API 공존 전략 수립",
      "릴리즈 자동화 스크립트와 작업 표준 문서화",
    ],
    outcomes: [
      "여러 서비스 라인의 개발/배포 흐름 일원화",
      "운영 중복 작업 감소 및 배포 안정성 개선",
    ],
    links: [],
    images: ["/project-03.png"],
  },
  {
    id: "jobs",
    title: "Jobs Platform",
    period: "2024 - 2025",
    summary: "채용 서비스용 NestJS 백엔드와 다중 프론트엔드 운영",
    role: "Backend / Service Maintenance",
    stack: ["NestJS", "TypeScript", "React", "Vite", "PM2"],
    contributions: [
      "서버 실행/배포 스크립트와 운영 가이드 정리",
      "관리자/서비스 클라이언트 동시 릴리즈 프로세스 정비",
      "공통 오류 응답 규약 정리 및 API 품질 개선",
    ],
    outcomes: [
      "운영 인수인계 비용 감소",
      "배포 실패 시 복구 속도 향상",
    ],
    links: [],
    images: ["/project-04.png"],
  },
  {
    id: "anarme",
    title: "Anarme Service & Admin",
    period: "2024 - 2025",
    summary: "서비스/관리자 프론트와 백엔드를 분리 운영하는 프로젝트 구조 정립",
    role: "Backend / Integration",
    stack: ["NestJS", "React", "Vite", "TypeScript"],
    contributions: [
      "관리자/사용자 애플리케이션 분리 구조 설계",
      "공통 API 계층 통합 및 권한 흐름 정리",
      "운영 이슈 중심으로 장애 대응 절차 개선",
    ],
    outcomes: [
      "서비스 권한/역할 분리 명확화",
      "프론트-백엔드 변경 충돌 감소",
    ],
    links: [],
    images: ["/project-05.png"],
  },
  {
    id: "augment-holdem",
    title: "Augment Holdem (Realtime Game)",
    period: "2024",
    summary: "실시간 게임 상태 동기화와 룸 기반 세션 관리를 구현한 프로젝트",
    role: "Server / Realtime",
    stack: ["Colyseus", "TypeScript", "Express", "Vite"],
    contributions: [
      "로비/게임 룸 상태 모델 설계",
      "실시간 이벤트 흐름과 게임 시작/종료 처리 구현",
      "클라이언트-서버 동기화 시나리오 안정화",
    ],
    outcomes: [
      "멀티 유저 세션 시나리오 검증",
      "실시간 상태 전파 구조에 대한 운영 경험 축적",
    ],
    links: [],
    images: ["/project-06.png"],
  },
];
