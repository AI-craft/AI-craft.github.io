// All site text lives here, in Korean (ko) and English (en).
// To change wording, edit this file only — pages read from it.

import aisimMenu from './assets/aisim-menu.png'
import aisimTrain from './assets/aisim-train.png'
import defectImg from './assets/defect.jpg'
import visualaiArch from './assets/visualai-arch.svg'
import slabImg from './assets/slab.png'
import mpc1Img from './assets/mpc1.svg'
import agentImg from './assets/agent-workflow.svg'

export const company = {
  name: { ko: '(주)에이아이크래프트', en: 'AICraft Inc.' },
  email: 'rickjun@aicraft.kr',
  address: {
    ko: '인천광역시 남동구 남동서로236번길 30, 2층 222-에이치49호',
    en: '2F 222-H49, 30 Namdongseo-ro 236beon-gil, Namdong-gu, Incheon, Republic of Korea',
  },
  mapUrl: 'https://map.naver.com/p/search/' + encodeURIComponent('인천 남동구 남동서로236번길 30'),
}

export const nav = [
  { to: '/', label: { ko: '홈', en: 'Home' } },
  { to: '/products', label: { ko: '제품소개', en: 'Products' } },
  { to: '/services', label: { ko: '서비스소개', en: 'Services' } },
  { to: '/purchase', label: { ko: '구매/견적', en: 'Purchase' } },
  { to: '/contact', label: { ko: '문의', en: 'Contact' } },
]

export const ui = {
  learnMore: { ko: '자세히 보기', en: 'Learn more' },
  allProducts: { ko: '전체 제품 보기', en: 'View all products' },
  requestQuote: { ko: '견적 요청', en: 'Request a quote' },
  contactUs: { ko: '문의하기', en: 'Contact us' },
  features: { ko: '주요 기능', en: 'Key features' },
  tech: { ko: '기술 스택', en: 'Technology' },
  useCases: { ko: '적용 분야', en: 'Use cases' },
  backToProducts: { ko: '← 제품 목록', en: '← All products' },
  notFound: { ko: '페이지를 찾을 수 없습니다.', en: 'Page not found.' },
  goHome: { ko: '홈으로', en: 'Go home' },
  comingSoon: { ko: '준비 중', en: 'Coming soon' },
  comingSoonText: {
    ko: '이 제품 페이지는 현재 준비 중입니다. 자세한 내용이 궁금하시면 문의해 주세요.',
    en: 'This product page is under construction. Please contact us for details.',
  },
}

export const home = {
  heroEyebrow: { ko: '스마트 공정 솔루션', en: 'Smart Manufacturing Solutions' },
  heroTitle: {
    ko: '현장의 데이터를\n공정의 경쟁력으로',
    en: 'Turning shop-floor data\ninto a competitive edge',
  },
  heroText: {
    ko: '데이터 수집 · 분석 · 시각화부터 자동화, AI 모델 개발까지 — 산업 현장에 바로 적용되는 솔루션을 만듭니다.',
    en: 'From data collection, analytics and visualization to automation and AI models — solutions built to run on the factory floor.',
  },
  aboutTitle: { ko: '회사 소개', en: 'About AICraft' },
  aboutText: {
    ko: '(주)에이아이크래프트는 산업 현장의 데이터를 기반으로 한 분석과 인공지능 기술을 통해 스마트 공정을 실현하는 기업입니다. 철강, 자동차, 양조 등 다양한 산업에서 설비 데이터 수집부터 비전 검사, 예측 모델, 모니터링 시스템까지 현장에 맞는 최적화 솔루션을 제공합니다.',
    en: 'AICraft builds smart manufacturing through data analytics and artificial intelligence grounded in real plant data. Across steel, automotive, brewing and other industries, we deliver solutions fitted to each site — from equipment data collection to vision inspection, predictive models and monitoring systems.',
  },
  highlights: [
    { value: { ko: '10년+', en: '10+ yrs' }, label: { ko: '산업 현장 경험', en: 'on-site industrial experience' } },
    { value: { ko: 'PLC → AI', en: 'PLC → AI' }, label: { ko: '설비 연동부터 AI까지 원스톱', en: 'one team from PLC to AI' } },
    { value: { ko: '현장 검증', en: 'Field-proven' }, label: { ko: '실제 생산라인 운영 실적', en: 'running on real production lines' } },
  ],
  capabilitiesTitle: { ko: '무엇을 하나요', en: 'What we do' },
  productsTitle: { ko: '제품', en: 'Products' },
  productsText: {
    ko: '설비 모니터링, 데이터 수집, 품질 관리, AI 학습을 위한 검증된 소프트웨어입니다.',
    en: 'Proven software for equipment monitoring, data collection, quality control and AI training.',
  },
  industriesTitle: { ko: '적용 산업', en: 'Industries' },
  industries: [
    { ko: '철강 · 금속', en: 'Steel & metals' },
    { ko: '자동차 제조', en: 'Automotive' },
    { ko: '양조 (전통주)', en: 'Brewing' },
    { ko: '로봇 · 자동화', en: 'Robotics & automation' },
  ],
  ctaTitle: { ko: '프로젝트를 계획 중이신가요?', en: 'Planning a project?' },
  ctaText: {
    ko: '현장 상황을 알려주시면 가장 적합한 방법을 제안해 드립니다.',
    en: 'Tell us about your site and we will propose the best approach.',
  },
}

export const products = [
  {
    id: 'data-collector',
    icon: 'plug',
    name: { ko: '산업 데이터 수집기', en: 'Industrial Data Collector' },
    tagline: { ko: 'PLC · OPC · DB 데이터를 하나로 모으는 수집 프로그램', en: 'One collector for PLC, OPC and database data' },
    summary: {
      ko: 'OPC 서버의 설비 데이터와 생산 이력·알람 DB를 정해진 주기로 수집해 CSV와 데이터베이스로 저장합니다. 설치 없이 압축 해제 후 설정 파일만 맞추면 바로 운영할 수 있습니다.',
      en: 'Collects equipment values from OPC servers plus production-history and alarm databases on a fixed cycle, saving them to CSV and databases. No installer — unzip, edit one config file and run.',
    },
    features: [
      { ko: '다중 OPC 서버 · 아이템 주기 수집 및 CSV 저장', en: 'Periodic collection from multiple OPC servers and items into CSV' },
      { ko: '생산 이력 / 알람 데이터베이스 동시 수집', en: 'Production-history and alarm database collection in parallel' },
      { ko: '중복 수집 방지 및 연결 이상 시 상태 LED 경고', en: 'Overlap protection and status-LED warning on connection loss' },
      { ko: 'XML 설정 파일로 서버 · 아이템 · 주기 관리', en: 'Servers, items and intervals managed in one XML file' },
      { ko: '일 단위 로그 로테이션과 보관 기간 설정', en: 'Daily log rotation with configurable retention' },
      { ko: '프로그램 잠금으로 현장 오조작 방지', en: 'Program lock to prevent accidental changes on site' },
    ],
    tech: ['.NET', 'WPF', 'OPC', 'MS SQL Server', 'PostgreSQL'],
    useCases: { ko: '생산 카운터 · 설비 가동 데이터 수집, MES/분석 시스템 연동', en: 'Production counters, equipment runtime data, MES / analytics feeds' },
    images: [],
  },
  {
    id: 'visualai',
    icon: 'activity',
    name: { ko: 'VisualAI', en: 'VisualAI' },
    tagline: { ko: '제어 시스템 설정 변경 감지 및 로그 분석', en: 'Configuration-change detection and log intelligence' },
    summary: {
      ko: '생산라인 제어 시스템의 파라미터 파일 변경을 실시간으로 감지해 변경 전후 내용을 기록하고, 여러 서버의 로그를 ELK/OpenSearch로 모아 대시보드에서 분석합니다. "누가, 언제, 무엇을 바꿨는지"를 바로 추적할 수 있습니다.',
      en: 'Detects parameter-file changes on production-line control systems in real time, records before/after diffs, and centralizes logs from many servers into ELK / OpenSearch dashboards — so you can see who changed what, and when.',
    },
    features: [
      { ko: '설정 파일 생성 · 수정 · 삭제 · 이동 실시간 감지', en: 'Real-time detection of create / modify / delete / move' },
      { ko: '변경 전후 비교(diff) 결과와 이력 자동 보관', en: 'Automatic diff and change-history archive' },
      { ko: 'Filebeat → Logstash 기반 중앙 로그 수집', en: 'Central log collection via Filebeat → Logstash' },
      { ko: 'WARN / ERROR / FATAL 필터링으로 핵심 로그만 저장', en: 'WARN / ERROR / FATAL filtering keeps only what matters' },
      { ko: '라인 · 발생원 · 이벤트별 Kibana / OpenSearch 대시보드', en: 'Dashboards by line, source and event type' },
    ],
    tech: ['Python', 'Elasticsearch', 'OpenSearch', 'Logstash', 'Filebeat', 'Kibana'],
    useCases: { ko: '설정 형상 관리, 장애 원인 추적, 다중 서버 로그 통합', en: 'Configuration management, root-cause tracing, multi-server log consolidation' },
    images: [visualaiArch],
  },
  {
    id: 'ai-simulator',
    icon: 'cpu',
    name: { ko: '물체인식 AI 시뮬레이터', en: 'Object Detection AI Simulator' },
    tagline: { ko: '라벨링부터 학습 · 테스트까지 한 화면에서', en: 'Labeling, training and testing in one desktop app' },
    summary: {
      ko: '딥러닝 물체인식 모델을 만드는 전 과정을 GUI로 제공합니다. 프로젝트 관리, 라벨링 도구 실행, COCO 데이터 변환, 데이터셋 분할, 모델 학습과 결과 확인까지 코딩 없이 진행할 수 있습니다.',
      en: 'A GUI for the whole object-detection workflow: project management, labeling, COCO conversion, dataset splitting, model training and result review — no coding required.',
    },
    features: [
      { ko: '프로젝트 단위 데이터 · 가중치 폴더 자동 구성', en: 'Per-project folders for data and weights, created automatically' },
      { ko: 'LabelMe 라벨링 실행 및 COCO 포맷 변환', en: 'Launches LabelMe and converts labels to COCO format' },
      { ko: '학습 / 검증 / 테스트 데이터 비율 분할', en: 'Train / validation / test split by ratio' },
      { ko: 'Detectron2 등 모델 학습과 실시간 손실 그래프', en: 'Detectron2 training with live loss charts' },
      { ko: '가중치 관리 및 테스트 이미지 추론 결과 확인', en: 'Weight management and inference on test images' },
      { ko: '비밀번호 잠금으로 현장 운영 보호', en: 'Password lock for shop-floor use' },
    ],
    tech: ['C#', 'WPF', 'MVVM', 'Python', 'Detectron2', 'LiveCharts'],
    useCases: { ko: '비전 검사 모델 개발, 현장 엔지니어용 AI 학습 환경', en: 'Vision-inspection model development, AI training for plant engineers' },
    images: [aisimMenu, aisimTrain],
  },
  {
    id: 'defect-collector',
    icon: 'search',
    name: { ko: 'Defect Collector', en: 'Defect Collector' },
    tagline: { ko: '검사 결함 데이터 자동 수집 · 관리', en: 'Automatic collection of inspection defect data' },
    summary: {
      ko: '표면 검사 시스템의 결함 데이터를 소재와 결함 클래스 기준으로 선별해 스케줄에 따라 자동으로 수집하고 보관합니다. 품질 분석과 AI 학습용 데이터 확보에 활용됩니다.',
      en: 'Selects defect data from surface-inspection systems by material and defect class, then collects and archives it on a schedule — ready for quality analysis and AI training data.',
    },
    features: [
      { ko: '소재 · 결함 클래스별 수집 대상 선택', en: 'Choose targets by material and defect class' },
      { ko: '스케줄 기반 자동 수집', en: 'Scheduled automatic collection' },
      { ko: '수집 결과 아카이브 및 로그', en: 'Archive and log of collected results' },
      { ko: '탭 구성의 간단한 설정 화면', en: 'Simple tabbed settings screen' },
    ],
    tech: ['C#', 'WinForms', 'MS Access', 'SQL'],
    useCases: { ko: '품질 관리, 결함 이력 분석, 비전 AI 학습 데이터 구축', en: 'Quality control, defect history analysis, vision-AI datasets' },
    images: [defectImg],
  },
  {
    id: 'remote-manager',
    icon: 'monitor',
    name: { ko: '원격 접속 관리자', en: 'Remote Access Manager' },
    tagline: { ko: '수십 대 현장 PC의 원격 접속을 한 화면에서', en: 'Dozens of plant PCs, one remote-access console' },
    summary: {
      ko: '생산라인의 여러 PC에 대한 원격 접속 상태를 한 화면에서 모니터링하고 바로 연결합니다. 원격 서비스가 멈추면 자동으로 재시작하고, 자주 쓰는 화면 배치를 저장해 한 번에 복원합니다.',
      en: 'Monitors remote-access status for many production-line PCs on one screen and connects in one click. Restarts stopped remote services automatically and restores saved multi-window layouts instantly.',
    },
    features: [
      { ko: 'PC별 원격 접속 상태 실시간 표시 (그룹 / 폴더 구성)', en: 'Live connection status per PC, organized in groups' },
      { ko: '원클릭 원격 뷰어 실행', en: 'One-click remote viewer launch' },
      { ko: '원격 서비스 중단 시 자동 재시작 (Windows 서비스)', en: 'Auto-restart of stopped remote services (Windows service)' },
      { ko: '뷰어 화면 배치 저장 및 적용', en: 'Save and restore viewer window layouts' },
      { ko: '전체 화면 모니터링 모드', en: 'Full-screen monitoring mode' },
    ],
    tech: ['C#', 'WPF', 'Windows Service', 'Radmin'],
    useCases: { ko: '제어실 다중 PC 원격 모니터링, 유지보수 원격 지원', en: 'Control-room monitoring of many PCs, remote maintenance' },
    images: [],
  },
  {
    id: 'robot-server',
    icon: 'bot',
    name: { ko: '로봇 제어 서버', en: 'Robot Control Server' },
    tagline: { ko: '4족 보행 로봇과 산업용 HMI를 안전하게 연결', en: 'Safely connecting quadruped robots to industrial HMIs' },
    summary: {
      ko: 'Boston Dynamics Spot 로봇을 산업용 HMI에서 제어하기 위한 멀티프로세스 서버입니다. 비상정지 채널을 명령 채널과 분리한 이중 안전 구조와 PLC 엔지니어에게 익숙한 바이너리 전문 프로토콜을 사용합니다.',
      en: 'A multi-process server for controlling Boston Dynamics Spot robots from industrial HMIs. The E-Stop channel runs separately from the command channel, and a compact binary telegram protocol keeps it familiar to PLC engineers.',
    },
    features: [
      { ko: 'E-Stop 전용 채널 · 하트비트 끊김 시 안전 정지', en: 'Dedicated E-Stop channel with safe stop on heartbeat loss' },
      { ko: 'HMI 연결별 프로세스 격리', en: 'Process isolation per HMI connection' },
      { ko: '고정 길이 헤더의 바이너리 전문 프로토콜', en: 'Binary telegram protocol with fixed-length header' },
      { ko: '보행 모드 · 자세 · 이동 · 카메라 · 조명 제어', en: 'Gait, posture, motion, camera and light control' },
      { ko: '로봇 상태 텔레메트리 DB 저장 및 플릿 관리', en: 'Telemetry to database and fleet management' },
    ],
    tech: ['Python', 'Spot SDK', 'TCP/IP', 'SQL Server', 'OpenCV'],
    useCases: { ko: '설비 순찰 로봇, 위험 구역 원격 점검', en: 'Patrol robots, remote inspection of hazardous areas' },
    images: [],
  },
  {
    id: 'brewing',
    icon: 'flask',
    comingSoon: true,
    name: { ko: '양조 공정 솔루션', en: 'Brewing Process Solution' },
    tagline: { ko: '전통주 양조 과정을 위한 모니터링 솔루션', en: 'Monitoring for traditional Korean liquor brewing' },
    summary: {
      ko: '전통주 양조 과정의 데이터를 수집하고 모니터링하는 솔루션입니다.',
      en: 'A solution for collecting and monitoring data from the traditional Korean liquor brewing process.',
    },
    features: [],
    tech: [],
    useCases: { ko: '전통주 양조장', en: 'Traditional breweries' },
    images: [],
  },
]

export const services = {
  intro: {
    ko: '요구사항 분석부터 개발, 설치, 유지보수까지 현장에 맞춘 맞춤형 서비스를 제공합니다.',
    en: 'Tailored services from requirements analysis through development, installation and maintenance.',
  },
  items: [
    {
      icon: 'chart',
      title: { ko: '데이터 수집 · 분석 · 시각화', en: 'Data collection, analytics & visualization' },
      text: {
        ko: 'PLC · OPC · DB · 로그 데이터를 수집하고 정제해 실시간 대시보드와 분석 리포트로 제공합니다.',
        en: 'We collect and clean PLC, OPC, database and log data and turn it into live dashboards and analysis reports.',
      },
      points: [
        { ko: 'ELK / OpenSearch 모니터링 구축', en: 'ELK / OpenSearch monitoring' },
        { ko: '공정 데이터 분석 및 리포트', en: 'Process data analysis and reporting' },
        { ko: '웹 · 데스크톱 대시보드', en: 'Web and desktop dashboards' },
      ],
    },
    {
      icon: 'code',
      title: { ko: '맞춤형 프로그램 개발', en: 'Custom software development' },
      text: {
        ko: '설비와 연동되는 데스크톱 · 서버 프로그램을 개발합니다. 레거시 시스템과의 호환도 고려합니다.',
        en: 'Desktop and server software that talks to your equipment — built to work alongside legacy systems.',
      },
      points: [
        { ko: 'C# / .NET, WPF, Python', en: 'C# / .NET, WPF, Python' },
        { ko: 'PLC · Modbus · OPC · 로봇 연동', en: 'PLC, Modbus, OPC and robot integration' },
        { ko: '디지털 트윈 · 3D 시각화', en: 'Digital twins and 3D visualization' },
      ],
    },
    {
      icon: 'cpu',
      title: { ko: 'AI 모델 개발', en: 'AI model development' },
      text: {
        ko: '현장 데이터로 예측 · 비전 AI 모델을 만들고 실시간 운영 환경까지 연결합니다.',
        en: 'Predictive and vision AI models trained on your data and connected to live operations.',
      },
      points: [
        { ko: '공정 예측 모델 (회귀 · 시계열)', en: 'Process prediction (regression, time series)' },
        { ko: '비전 검사 · 물체인식', en: 'Vision inspection and object detection' },
        { ko: '결측 · 이상치 데이터 전처리', en: 'Missing-data and outlier preprocessing' },
      ],
    },
    {
      icon: 'bot',
      title: { ko: 'AI 자동화 · 컨설팅', en: 'AI automation & consulting' },
      text: {
        ko: 'LLM 기반 멀티 에이전트로 반복 업무를 자동화하고, AI 도입 방향을 함께 설계합니다.',
        en: 'We automate repetitive work with LLM-based multi-agent systems and help plan your AI adoption.',
      },
      points: [
        { ko: '멀티 에이전트 워크플로우 구축', en: 'Multi-agent workflow development' },
        { ko: 'AI 도입 타당성 검토', en: 'AI feasibility assessment' },
        { ko: '사내 데이터 활용 컨설팅', en: 'Consulting on using in-house data' },
      ],
    },
  ],
  processTitle: { ko: '진행 절차', en: 'How we work' },
  process: [
    { ko: '상담', en: 'Consultation' },
    { ko: '요구사항 분석', en: 'Requirements' },
    { ko: '개발 · 검증', en: 'Build & verify' },
    { ko: '설치 · 교육', en: 'Install & train' },
    { ko: '유지보수', en: 'Support' },
  ],
  casesTitle: { ko: '수행 사례', en: 'Case studies' },
  cases: [
    {
      image: slabImg,
      tag: { ko: '철강 · AI 예측', en: 'Steel · AI prediction' },
      title: { ko: '연주 슬래브 냉각폭 예측 AI', en: 'Slab cooling-width prediction AI' },
      text: {
        ko: '냉각수량 등 공정 데이터로 약 1주일 뒤 슬래브 최종 폭을 예측하는 모델을 개발했습니다. 결측이 잦은 레이저 측정값을 보정하고 실시간 예측 대시보드까지 구축해 고객사 검수를 통과했습니다.',
        en: 'A model that predicts final slab width about a week ahead from cooling-water and process data. We repaired gap-filled laser measurements, built a live prediction dashboard, and passed customer acceptance.',
      },
    },
    {
      image: mpc1Img,
      tag: { ko: '디지털 트윈', en: 'Digital twin' },
      title: { ko: '공장 자동화 디지털 트윈', en: 'Factory automation digital twin' },
      text: {
        ko: '실시간 PLC 연동이 가능한 3D 디지털 트윈으로 설비 동작을 가상 환경에서 확인하고 검증합니다.',
        en: 'A 3D digital twin with live PLC connectivity for viewing and validating equipment behavior virtually.',
      },
    },
    {
      image: agentImg,
      tag: { ko: 'AI 자동화', en: 'AI automation' },
      title: { ko: '멀티 에이전트 문서 · 웹 자동화', en: 'Multi-agent documentation automation' },
      text: {
        ko: '소스 코드를 분석해 기술 문서와 웹 페이지를 자동으로 생성하는 LangGraph 기반 멀티 에이전트 파이프라인. 사람의 검토 단계를 포함합니다.',
        en: 'A LangGraph multi-agent pipeline that analyzes source code and generates technical documents and web pages, with human review checkpoints.',
      },
    },
  ],
}

export const purchase = {
  title: { ko: '구매 / 견적 요청', en: 'Purchase / Request a Quote' },
  intro: {
    ko: '제품 라이선스와 맞춤 개발은 현장 환경에 따라 구성이 달라 견적으로 안내해 드립니다. 아래 양식을 작성하시면 영업일 기준 2일 이내에 회신드립니다.',
    en: 'Licensing and custom work depend on your site, so we quote each request individually. Fill in the form and we will reply within two business days.',
  },
  steps: [
    { ko: '견적 요청', en: 'Send request' },
    { ko: '요구사항 확인', en: 'Review needs' },
    { ko: '견적서 발송', en: 'Receive quote' },
    { ko: '계약 · 납품', en: 'Contract & delivery' },
  ],
  fields: {
    item: { ko: '관심 제품 / 서비스', en: 'Product / service' },
    company: { ko: '회사명', en: 'Company' },
    name: { ko: '담당자명', en: 'Name' },
    email: { ko: '이메일', en: 'Email' },
    phone: { ko: '연락처', en: 'Phone' },
    quantity: { ko: '수량 / 적용 범위', en: 'Quantity / scope' },
    schedule: { ko: '희망 일정', en: 'Target schedule' },
    message: { ko: '요구사항', en: 'Requirements' },
  },
  placeholders: {
    quantity: { ko: '예: 라이선스 3식, 생산라인 2개', en: 'e.g. 3 licenses, 2 production lines' },
    schedule: { ko: '예: 2026년 12월 도입', en: 'e.g. go-live December 2026' },
    message: { ko: '현장 환경, 연동 설비, 필요한 기능 등을 적어주세요.', en: 'Describe your site, equipment to connect and features you need.' },
  },
  otherService: { ko: '맞춤 개발 / 기타', en: 'Custom development / other' },
  submit: { ko: '견적 요청 메일 작성', en: 'Compose quote email' },
  subject: { ko: '[견적 요청]', en: '[Quote request]' },
}

export const contact = {
  title: { ko: '문의', en: 'Contact' },
  intro: {
    ko: '제품, 기술 지원, 협업 등 궁금한 점을 남겨주세요.',
    en: 'Questions about products, technical support or partnerships — we are happy to help.',
  },
  types: [
    { ko: '제품 문의', en: 'Product' },
    { ko: '기술 지원', en: 'Technical support' },
    { ko: '개발 · 협업 제안', en: 'Development / partnership' },
    { ko: '기타', en: 'Other' },
  ],
  fields: {
    type: { ko: '문의 유형', en: 'Inquiry type' },
    name: { ko: '이름', en: 'Name' },
    company: { ko: '회사명', en: 'Company' },
    email: { ko: '이메일', en: 'Email' },
    phone: { ko: '연락처', en: 'Phone' },
    message: { ko: '문의 내용', en: 'Message' },
  },
  submit: { ko: '문의 메일 작성', en: 'Compose email' },
  subject: { ko: '[문의]', en: '[Inquiry]' },
  infoTitle: { ko: '연락처', en: 'Get in touch' },
  emailLabel: { ko: '이메일', en: 'Email' },
  addressLabel: { ko: '주소', en: 'Address' },
  mapLink: { ko: '지도에서 보기', en: 'Open map' },
}

export const mailForm = {
  note: {
    ko: '버튼을 누르면 입력 내용이 담긴 메일 작성 창이 열립니다. 메일 앱이 열리지 않으면 아래 주소로 직접 보내주세요.',
    en: 'The button opens your email app with the form filled in. If nothing opens, please email us directly.',
  },
  copy: { ko: '주소 복사', en: 'Copy address' },
  copied: { ko: '복사됨', en: 'Copied' },
  required: { ko: '필수', en: 'required' },
}
