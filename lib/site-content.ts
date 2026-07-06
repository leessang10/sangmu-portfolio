export const stackGroups = [
  ["Frontend", "Next.js", "React", "Tailwind"],
  ["Backend", "NestJS", "Prisma", "PostgreSQL"],
  ["Infra", "AWS", "PM2", "Redis"],
  ["AI/RAG", "Embedding", "Vector DB", "Automation"],
];

export const workSteps = [
  {
    number: "01",
    title: "정의",
    label: "Define",
    body: "요구사항을 기능 단위가 아니라 결정해야 할 문제 단위로 나눕니다.",
    detail: "흐릿한 요청을 입력, 상태, 결과로 분리합니다. 먼저 하지 않아도 되는 일을 덜어냅니다.",
    evidence: ["요구사항 정리", "범위 축소", "우선순위 결정"],
    code: ["scope = clarify(request)", "risk = findUnknown(scope)", "plan = smallestUsefulStep(risk)"],
  },
  {
    number: "02",
    title: "추적",
    label: "Trace",
    body: "화면, API, 데이터 흐름 중 어디서 어긋나는지 실제 경로를 따라갑니다.",
    detail: "추측으로 고치지 않습니다. 코드 경로, 네트워크, DB 상태를 먼저 확인합니다.",
    evidence: ["코드 경로 확인", "네트워크 확인", "데이터 상태 확인"],
    code: ["route -> action -> query", "check network payload", "compare stored state"],
  },
  {
    number: "03",
    title: "구현",
    label: "Build",
    body: "검증 가능한 작은 단위로 만들고, 주변 구조를 망가뜨리지 않게 붙입니다.",
    detail: "새 추상화보다 기존 패턴을 우선합니다. 바뀐 표면과 영향 범위를 같이 봅니다.",
    evidence: ["작은 변경", "기존 패턴 유지", "영향 범위 확인"],
    code: ["patch small surface", "keep interface stable", "remove dead branch"],
  },
  {
    number: "04",
    title: "검증",
    label: "Verify",
    body: "빌드만 보지 않고 실제 브라우저와 런타임에서 다시 확인합니다.",
    detail: "모바일, 데스크톱, 상태 변화, 에러 가능성을 최소한의 근거로 확인합니다.",
    evidence: ["브라우저 확인", "빌드 확인", "가로 넘침 확인"],
    code: ["npm run build", "check viewport", "inspect runtime state"],
  },
  {
    number: "05",
    title: "운영",
    label: "Operate",
    body: "배포 이후에 문제가 될 로그, 권한, 데이터 보정까지 마무리합니다.",
    detail: "기능 완료가 끝이 아닙니다. 운영 기준에서 남은 리스크를 정리합니다.",
    evidence: ["로그 확인", "데이터 보정", "운영 리스크 정리"],
    code: ["read logs", "backfill if needed", "document remaining risk"],
  },
];
