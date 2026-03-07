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
  badges: string[];
  story: string[];
  highlights: {
    title: string;
    situation: string;
    action: string;
    result: string;
  }[];
  workProcess: {
    phase: string;
    detail: string;
  }[];
  philosophy: string[];
  collaborationPrinciples: string[];
  futureGoal: string;
  contacts: {
    label: string;
    href: string;
  }[];
  profileImage: string;
};

export const portfolioProfile: PortfolioProfile = {
  name: "이상무",
  role: "Backend-Centered Product Engineer",
  headline: "\"가치 있는 것을 제대로 만드는 개발자\"라는 기준으로 일합니다.",
  intro:
    "요구사항 분석부터 구현, 배포, 운영 대응까지 end-to-end로 책임지며 팀이 오래 유지할 수 있는 구조를 만듭니다.",
  badges: ["실무 3년", "Backend 중심", "운영 관점 설계", "AI 활용 빠른 검증"],
  story: [
    "학생 시절에는 이론적 완성도에 집중했지만, 실무 3년을 거치며 실제 사용성, 고객 체감, 운영 안정성, 비즈니스 효과를 먼저 판단하는 기준으로 전환했습니다.",
    "기술은 목적이 아니라 수단이라고 생각합니다. 도입 후 팀 생산성이 좋아지는지, 사용자가 체감하는 개선이 있는지, 운영 비용이 줄어드는지를 기준으로 선택합니다.",
  ],
  highlights: [
    {
      title: "Express.js -> NestJS 표준 전환 주도",
      situation:
        "레거시에 복붙 누적, 하드코딩, 네이밍 불일치, 평문 키 노출이 섞이며 유지보수 비용이 커졌습니다.",
      action:
        "레거시 보일러플레이트를 의도 단위로 분석해 개선된 NestJS 보일러플레이트를 만들고 점진 이관 + 신규 선적용 전략으로 확산했습니다.",
      result:
        "잡스 포함 운영 서비스에 구조 표준이 정착되었고, 유사 API 구현 속도와 신규 인력 온보딩 효율이 개선됐습니다.",
    },
    {
      title: "배포 자동화로 팀 생산성 개선",
      situation: "프론트엔드 동료들이 배포 과정에서 서버/브랜치 선택과 절차 이해에 큰 부담을 느끼고 있었습니다.",
      action: "선택형 배포 스크립트를 만들어 서버와 브랜치만 지정하면 배포가 가능하도록 진입 장벽을 낮췄습니다.",
      result: "배포 의존도가 줄고 협업 속도가 빨라졌으며, 운영 절차의 실수 가능성도 함께 낮아졌습니다.",
    },
    {
      title: "API 경로/응답/에러 규격 표준화",
      situation: "프로젝트별 응답 형식 차이로 프론트와 백엔드 간 커뮤니케이션 비용이 반복적으로 발생했습니다.",
      action: "API 경로, 성공 응답, 에러 응답 규약을 문서와 코드로 함께 정리해 예측 가능한 구조를 만들었습니다.",
      result: "미구현 API도 형태를 예측할 수 있게 되어 재작업과 협업 혼선을 줄였습니다.",
    },
    {
      title: "운영 대비 구조 선제 도입",
      situation: "빠른 구현 위주로 누적된 코드에서 환경 분리와 확장 대비가 부족했습니다.",
      action: ".env 기반 환경 분리, 헬스체크, graceful shutdown을 도입하고 커밋 단위를 세분화해 구조를 정리했습니다.",
      result: "환경별 운영 안정성과 장애 대응 속도가 개선되고, 이후 확장 시 변경 비용을 줄일 수 있었습니다.",
    },
  ],
  workProcess: [
    {
      phase: "1. 요구사항 수집",
      detail:
        "클라이언트/사용자 요구를 먼저 명확히 정리하고, 누락되기 쉬운 예외 케이스를 초기에 식별합니다.",
    },
    {
      phase: "2. 영향 범위 분석",
      detail: "DB, API, 프론트, 운영 파급 범위와 일정 리스크를 먼저 점검해 구현 방향을 결정합니다.",
    },
    {
      phase: "3. 설계 공유",
      detail:
        "팀원, 상사, 클라이언트가 각각 이해할 수 있는 언어로 설계 의도와 의사결정 포인트를 전달합니다.",
    },
    {
      phase: "4. 구현 및 검증",
      detail: "브랜치를 분리해 구현하고 로컬 테스트와 개발 서버 검증을 거쳐 배포 가능성을 확인합니다.",
    },
    {
      phase: "5. 배포와 운영 대응",
      detail: "상용 배포 후 이슈가 발생하면 원인을 빠르게 좁혀 수정/재배포하고 재발 방지를 반영합니다.",
    },
    {
      phase: "6. 반복 개선",
      detail: "자동화, 표준화, 구조 개선을 지속해 팀 전체의 반복 비용을 줄이고 품질 기준을 높입니다.",
    },
  ],
  philosophy: [
    "기술 선택보다 먼저, 사용자와 비즈니스에 실제 가치가 생기는지 판단합니다.",
    "빠르게 만드는 것과 운영 가능한 품질 사이의 균형을 반드시 지킵니다.",
    "복잡한 구조는 필요할 때만 선택하고, 같은 효과면 더 단순한 해법을 택합니다.",
    "기능 완료는 시작일 뿐이며 배포 이후 운영 안정성까지 확인해야 진짜 완료입니다.",
  ],
  collaborationPrinciples: [
    "커뮤니케이션은 장황함보다 사실 중심으로, \"누가 무엇을 언제까지\"가 바로 보이게 정리합니다.",
    "의견 충돌 시 감정보다 근거와 맥락으로 조율하고, 상대가 수용하기 쉬운 방식으로 제안합니다.",
    "직무 경계보다 프로젝트 완주를 우선해 프론트/백엔드/운영 영역을 유연하게 지원합니다.",
  ],
  futureGoal:
    "AI를 생산성 증폭 도구로 활용하면서도, 운영 가능한 품질 기준을 놓치지 않는 팀 기여를 계속 만들겠습니다. 장기적으로는 기술 과시가 아니라 가치 있는 문제를 정확히 정의하고 끝까지 해결하는 개발자로 성장하는 것이 목표입니다.",
  contacts: [
    { label: "Email (업데이트 예정)", href: "mailto:contact@update-needed.dev" },
    { label: "GitHub", href: "https://github.com" },
  ],
  profileImage: "/profile-sangmu.png",
};

export const projects: PortfolioProject[] = [
  {
    id: "nestjs-migration",
    title: "Express.js -> NestJS 표준 전환",
    period: "2025 - 2026",
    summary:
      "회사 표준 백엔드를 레거시 Express.js 구조에서 NestJS 기반으로 전환하며 핵심 설계/구현을 주도",
    role: "Backend Lead / Architecture",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
    contributions: [
      "레거시 보일러플레이트를 의도 단위로 분석해 전환 기준 수립",
      "점진 이관 + 신규 프로젝트 선적용 전략으로 리스크 분산",
      "로그인/핵심 기능 중심 검증 및 상용 핫픽스 체계 운영",
    ],
    outcomes: [
      "구조/네이밍 규칙이 정착되며 코드 이해도와 협업 속도 개선",
      "유사 API 재사용성이 높아져 신규 기능 구현과 온보딩 효율 향상",
    ],
    links: [],
    images: ["/project-01.png"],
  },
  {
    id: "deployment-automation",
    title: "선택형 배포 자동화 스크립트",
    period: "2024 - 2025",
    summary: "서버/브랜치 선택만으로 배포 가능한 스크립트를 구축해 팀 배포 진입장벽을 낮춘 개선 프로젝트",
    role: "Backend / Dev Productivity",
    stack: ["NestJS", "TypeORM", "MySQL", "BullMQ", "AWS"],
    contributions: [
      "기존 배포 절차의 병목 구간과 오류 발생 지점을 분석",
      "서버/브랜치 선택형 배포 스크립트 작성 및 운영 가이드 정리",
      "팀원이 동일한 절차로 실행할 수 있는 표준 배포 흐름 확립",
    ],
    outcomes: [
      "배포 작업 의존도와 반복 커뮤니케이션 비용 감소",
      "작업자에 따른 편차를 줄여 릴리즈 안정성 향상",
    ],
    links: [],
    images: ["/project-02.png"],
  },
  {
    id: "api-standardization",
    title: "API 표준화 및 운영 규격 정비",
    period: "2024 - 2025",
    summary: "경로/응답/에러 응답 형식을 표준화해 프론트-백엔드 협업 예측 가능성을 높인 작업",
    role: "Backend / Integrator",
    stack: ["React", "Express", "NestJS", "pnpm", "Turborepo"],
    contributions: [
      "서비스별 API 응답 형식 불일치 원인 정리 및 공통 규칙 도출",
      "성공/에러 응답 스키마를 일관된 형태로 정리",
      "미구현 API도 예측 가능한 수준으로 문서/코드 가이드 정착",
    ],
    outcomes: [
      "재작업과 커뮤니케이션 혼선 감소",
      "프론트 개발 속도와 협업 품질 개선",
    ],
    links: [],
    images: ["/project-03.png"],
  },
  {
    id: "jobs-platform",
    title: "Jobs Platform 운영 안정화",
    period: "2024 - 2025",
    summary: "운영 중인 채용 서비스에서 관리자/서비스 클라이언트와 백엔드 릴리즈 흐름을 안정화",
    role: "Backend / Service Maintenance",
    stack: ["NestJS", "TypeScript", "React", "Vite", "PM2"],
    contributions: [
      "릴리즈 시점 충돌을 줄이기 위한 운영 기준과 체크리스트 수립",
      "상용 이슈 발생 시 원인 파악 -> 수정 -> 재배포 프로세스 고도화",
      "공통 오류 응답 규약 적용으로 API 품질 일관성 확보",
    ],
    outcomes: [
      "운영 인수인계 비용 감소와 장애 대응 속도 개선",
      "핵심 기능 변경 시 릴리즈 신뢰도 향상",
    ],
    links: [],
    images: ["/project-04.png"],
  },
  {
    id: "anarme",
    title: "Anarme Service/Admin 분리 운영",
    period: "2024 - 2025",
    summary: "서비스 사용자와 관리자 영역을 분리해 권한/운영 경계를 명확히 만든 통합 프로젝트",
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
    summary: "실시간 상태 동기화와 룸 기반 세션 관리를 구현하며 이벤트 흐름 안정성을 검증한 프로젝트",
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
