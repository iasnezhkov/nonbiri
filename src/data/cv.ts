export interface RoleJa {
  title: string;
  scope?: string;
  context?: string;
  location: string;
  summary: string;
  highlights: string[];
}

export function jaMonth(value: string): string {
  const [year, month] = value.split('-');
  return `${year}年${Number(month)}月`;
}

export interface Role {
  company: string;
  context?: string;
  title: string;
  scope?: string;
  from: string;
  to: string;
  fromDate: string;
  toDate?: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  featured?: true;
  ja?: RoleJa;
}

export type TranslatedRole = Role & { ja: RoleJa };

export function isTranslated(role: Role): role is TranslatedRole {
  return role.ja !== undefined;
}

export const profile = {
  name: 'Ilia Snezhkov',
  headline: 'Senior Software Engineer — Backend & Platform',
  specialisation: 'Application Security',
  email: 'iasnezhkov@gmail.com',
  links: {
    site: 'https://nonbiri.dev',
    github: 'https://github.com/iasnezhkov',
    linkedin: 'https://linkedin.com/in/iasnezhkov',
  },
  summary: `Software engineer with seven years of professional Python across backend and platform work — startups, high-traffic consumer products, regulated fintech and telecom — specialising in application security. Builds the platforms and automation that put security scanning, triage and remediation inside the CI/CD pipelines teams already use. Has built an application-security platform from scratch at two companies, leading the technical side of both.`,
  ja: {
    name: 'イリヤ・スネシコフ',
    headline: 'シニアソフトウェアエンジニア — バックエンド・プラットフォーム',
    specialisation: 'アプリケーションセキュリティ',
    summary: `バックエンドとプラットフォームの領域で 7年間 Python を用いて開発してきたソフトウェアエンジニアです。スタートアップ、大規模トラフィックのコンシューマ向け製品、規制の厳しい金融、通信と経験し、アプリケーションセキュリティを専門としています。セキュリティのスキャン・トリアージ・修正を、開発チームがすでに使っている CI/CD パイプラインの中に組み込むためのプラットフォームと自動化を構築してきました。2社でアプリケーションセキュリティ基盤をゼロから立ち上げ、いずれも技術面を主導しています。`,
  },
} as const;

export const experience: readonly Role[] = [
  {
    company: 'MTS Web Services',
    context:
      "The technology arm of MTS, one of Russia’s largest telecom groups — public cloud, data, AI and developer platforms for enterprise customers and for the group’s own engineering organisation.",
    title: 'Senior Software Engineer',
    scope: 'Company-wide Application Security Platform',
    featured: true,
    from: 'Apr 2024',
    to: 'Present',
    fromDate: '2024-04',
    location: 'Russia · Remote',
    summary:
      'An internal DevSecOps platform that collects security data wherever code and workloads live — scanners in GitLab CI, image scanning in Kubernetes clusters, cloud inventory — and drives everything downstream from it: CI quality gates, auto-fix merge requests, and the security team’s own back-office and analytics.',
    highlights: [
      'Own the platform end to end: architecture, backend, data model, automated remediation, and both the security-team and developer-facing surfaces.',
      'Built for scale: thousands of repositories across dozens of engineering teams and clusters, tens of thousands of container images and releases analysed, and a dependency inventory of hundreds of thousands of components.',
      'Built CVE prioritisation over a knowledge base of published vulnerabilities enriched with exploitation signals (CISA KEV, public exploits, EPSS), so triage starts from what is actually being exploited rather than from raw scanner volume.',
      'Built CVE-exposure analysis: when a new vulnerability is disclosed, affected projects surface automatically and reach the security team as tracked work, without waiting on input from product teams.',
      'Integrated multiple classes of scanning (SCA/SBOM, SAST, secrets, IaC) into CI, combining open-source tools with in-house extensions and custom scanners.',
      'Introduced LLMs as an automated second opinion on scanner findings — cutting false positives and a large share of the team’s manual triage load.',
      'Lead the technical side: architecture and implementation decisions are mine to make, within a direction agreed with engineering leadership.',
    ],
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Kubernetes',
      'Docker',
      'GitLab CI/CD',
      'Semgrep',
      'Trivy',
      'Syft',
      'gitleaks',
      'TypeScript',
    ],
    ja: {
      title: 'シニアソフトウェアエンジニア',
      scope: '全社アプリケーションセキュリティ基盤',
      context:
        'ロシア最大級の通信グループ MTS の技術部門。法人顧客およびグループ自身のエンジニアリング組織に向けて、パブリッククラウド、データ、AI、開発者向けプラットフォームを提供しています。',
      location: 'ロシア · リモート',
      summary:
        'コードとワークロードが存在する場所からセキュリティ情報を集める社内 DevSecOps 基盤です。GitLab CI 上のスキャナ、Kubernetes クラスタでのイメージスキャン、クラウドのインベントリを収集し、そこから下流のすべて（CI の品質ゲート、自動修正のマージリクエスト、セキュリティチームのバックオフィスと分析）を動かしています。',
      highlights: [
        'アーキテクチャ、バックエンド、データモデル、自動修正、セキュリティチーム向けおよび開発者向けの画面まで、基盤全体を担当。',
        '規模：数十の開発チームとクラスタにまたがる数千のリポジトリ。分析対象はコンテナイメージとリリースが数万規模、依存関係インベントリは数十万コンポーネント規模です。',
        '公開された脆弱性のナレッジベースに悪用の兆候（CISA KEV、公開エクスプロイト、EPSS）を重ねて優先度付けを構築。スキャナが出す量からではなく、実際に悪用されているものからトリアージを始められるようにしました。',
        '脆弱性の影響範囲分析を構築。新しい脆弱性が公表されると、影響を受けるプロジェクトが自動的に浮かび上がり、追跡可能な作業としてセキュリティチームに届きます。開発チームからの入力を待つ必要はありません。',
        'SCA/SBOM、SAST、シークレット、IaC と複数種類のスキャンを CI に統合。オープンソースのツールに自社の拡張と独自スキャナを組み合わせています。',
        'スキャナの検知結果に対する自動の第二意見として LLM を導入し、誤検知とチームの手作業によるトリアージ負荷を大きく削減。',
        '技術面を主導。アーキテクチャと実装の判断は、経営層と合意した方針の範囲内で自身が担っています。',
      ],
    },
  },
  {
    company: 'Raiffeisen Bank Russia',
    context:
      'Russian subsidiary of Raiffeisen Bank International — retail and corporate banking in a heavily regulated environment.',
    title: 'Senior Software Engineer',
    scope: 'Bank-wide Application Security Platform',
    featured: true,
    from: 'May 2022',
    to: 'Apr 2024',
    fromDate: '2022-05',
    toDate: '2024-04',
    location: 'Russia · Remote',
    summary:
      'Led the build of the platform from scratch: security scanning, triage and reporting embedded across the SDLC of a large, predominantly Java organisation under strict audit and compliance requirements.',
    highlights: [
      'Security checks were built to fit the delivery flows teams already had, rather than requiring them to standardise their pipelines first.',
      'Built and maintained the platform’s async Python microservices and contributed to its React/TypeScript frontend.',
      'Automated finding triage and reporting so results reached owning teams as actionable work rather than raw scanner output.',
      'Owned CI/CD and observability end to end — Kubernetes, GitLab pipelines, Grafana dashboards, error tracing.',
    ],
    tech: [
      'Python',
      'FastAPI',
      'Litestar',
      'asyncpg',
      'PostgreSQL',
      'Kubernetes',
      'GitLab CI/CD',
      'React',
      'Grafana',
    ],
    ja: {
      title: 'シニアソフトウェアエンジニア',
      scope: '全行アプリケーションセキュリティ基盤',
      context:
        'ライファイゼン銀行インターナショナルのロシア子会社。規制の厳しい環境下でのリテールおよび法人向け銀行業務。',
      location: 'ロシア · リモート',
      summary:
        '基盤をゼロから立ち上げる取り組みを主導しました。監査とコンプライアンスの要件が厳しい、Java 中心の大規模な開発組織において、セキュリティのスキャン・トリアージ・レポーティングを SDLC 全体に組み込みました。',
      highlights: [
        '各チームにパイプラインの標準化を先に求めるのではなく、すでに使われている配信フローに合わせてセキュリティチェックを組み込みました。',
        '基盤の非同期 Python マイクロサービスを開発・保守し、React/TypeScript のフロントエンドにも貢献。',
        '検知結果のトリアージとレポーティングを自動化し、スキャナの生の出力ではなく、着手できる形の作業として担当チームに届くようにしました。',
        'Kubernetes、GitLab パイプライン、Grafana のダッシュボード、エラートレースまで、CI/CD と可観測性を一貫して担当。',
      ],
    },
  },
  {
    company: 'Master Delivery',
    context: "Last-mile delivery provider carrying merchants’ online orders through to delivery.",
    title: 'Senior Python Engineer',
    from: 'Oct 2021',
    to: 'May 2022',
    fromDate: '2021-10',
    toDate: '2022-05',
    location: 'Russia · Remote',
    summary:
      'Backend microservices and shared internal libraries used across the company’s engineering teams.',
    highlights: [
      'Developed FastAPI microservices and reusable internal libraries adopted by other backend teams.',
      'Led refactoring and performance optimisation of existing services.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    ja: {
      title: 'シニア Python エンジニア',
      context: '販売事業者のオンライン注文を届け先まで運ぶラストマイル配送事業者。',
      location: 'ロシア · リモート',
      summary:
        '社内の各開発チームで使われるバックエンドのマイクロサービスと共通ライブラリの開発。',
      highlights: [
        'FastAPI によるマイクロサービスと、他のバックエンドチームにも採用された再利用可能な社内ライブラリを開発。',
        '既存サービスのリファクタリングと性能改善を主導。',
      ],
    },
  },
  {
    company: "McDonald’s Russia",
    context:
      "Backend for the McDonald’s Russia mobile app and website, built under contract via ADV — around 15 million users, one of the country’s highest-traffic consumer products.",
    title: 'Senior Software Engineer',
    scope: 'Mobile App & Website Backend API',
    featured: true,
    from: 'Apr 2020',
    to: 'Sep 2021',
    fromDate: '2020-04',
    toDate: '2021-09',
    location: 'Russia · Remote',
    summary:
      'A high-load API for the mobile app and the website — gRPC microservices behind a service mesh, event sourcing for state changes, and product features through to the payment integration. Peaks near 10,000 requests a second were absorbed by optimisation rather than by more hardware.',
    highlights: [
      'Shipped product features end to end, including the payment integration.',
      'Optimised the services carrying the peak so the load was met on the existing cluster rather than by scaling the infrastructure.',
      'Introduced a service mesh and event sourcing into the platform architecture, improving service-to-service reliability and auditability of state changes.',
      'Built gRPC microservices and an internal integration-test framework used across the platform.',
    ],
    tech: ['Python', 'gRPC', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
    ja: {
      title: 'シニアソフトウェアエンジニア',
      scope: 'モバイルアプリ・ウェブサイトのバックエンド API',
      context:
        'マクドナルド・ロシアのモバイルアプリとウェブサイトのバックエンド。ADV 社を通じた受託開発。利用者約1,500万人、国内でも有数のトラフィックを持つコンシューマ向け製品です。',
      location: 'ロシア · リモート',
      summary:
        'モバイルアプリとウェブサイトを支える高負荷 API。サービスメッシュの下に置いた gRPC マイクロサービス、状態変更のためのイベントソーシング、そして決済連携までのプロダクト機能を担当しました。毎秒1万リクエスト前後のピークは、ハードウェアを増やすのではなく最適化で吸収しています。',
      highlights: [
        '決済連携をはじめとするプロダクト機能を、設計から公開まで一貫して担当。',
        'ピークを受けるサービスを最適化し、インフラを増強せず既存のクラスタのまま負荷をさばけるようにしました。',
        'サービスメッシュとイベントソーシングをアーキテクチャに導入し、サービス間の信頼性と状態変更の追跡性を改善。',
        'gRPC のマイクロサービスと、基盤全体で使われる社内の結合テストフレームワークを構築。',
      ],
    },
  },
  {
    company: 'SQUILLA',
    context:
      'Crypto-loans platform — a security-sensitive financial product allowing users to borrow against cryptocurrency collateral.',
    title: 'Python Developer',
    from: 'Jun 2019',
    to: 'Apr 2020',
    fromDate: '2019-06',
    toDate: '2020-04',
    location: 'Krasnodar, Russia',
    summary:
      'An API gateway fronting the platform’s services, plus a real-time collector aggregating cryptocurrency quotes from multiple exchanges to price collateral.',
    highlights: [
      'Built both services: the gateway unifying access to the backend, and the quotes collector feeding near real-time pricing into collateral valuation.',
      'Maintained the core Django services of the platform.',
    ],
    tech: ['Python', 'FastAPI', 'Celery', 'Django', 'PostgreSQL', 'Redis'],
    ja: {
      title: 'Python 開発者',
      context:
        '暗号資産を担保に借り入れができるクレジットプラットフォーム。セキュリティ要求の高い金融サービスです。',
      location: 'ロシア · クラスノダール',
      summary:
        'プラットフォームの各サービスの前段となる API ゲートウェイと、担保評価のために複数の取引所から暗号資産の気配値を集約するリアルタイム収集基盤。',
      highlights: [
        'バックエンドへのアクセスを統一するゲートウェイと、担保評価にほぼリアルタイムの価格を供給する気配値コレクタの両方を構築。',
        'プラットフォームの中核となる Django サービスの保守。',
      ],
    },
  },
  {
    company: 'Upwork',
    title: 'Python Developer · Contract',
    from: 'Oct 2016',
    to: 'Jun 2019',
    fromDate: '2016-10',
    toDate: '2019-06',
    location: 'Remote',
    summary:
      'Contract backend engineering for international clients, delivered independently end to end. Included a flight-ticket meta-search service with distributed parsing and real-time result streaming, and a SaaS that prioritised test runs by predicting which commits were likely to introduce defects.',
    highlights: [],
    tech: ['Python', 'Flask', 'socket.io', 'Celery', 'PyTorch', 'scikit-learn', 'PostgreSQL'],
    ja: {
      title: 'Python 開発者 · 業務委託',
      location: 'リモート',
      summary:
        '海外のクライアント向けに、バックエンドの開発を一貫して単独で担当。分散パースと結果のリアルタイム配信を備えた航空券メタ検索サービスや、どのコミットが不具合を生みやすいかを予測してテスト実行の優先度を決める SaaS などを手がけました。',
      highlights: [],
    },
  },
];

export const earlier = {
  title: 'Before that',
  summary:
    'Backend engineering before the platform work: microservices and shared internal libraries at a last-mile delivery provider, an API gateway and a real-time quotes collector for a crypto-loans platform, and three years of contract work delivered end to end for international clients.',
  ja: {
    title: 'それ以前',
    summary:
      '基盤の仕事に移る前は、バックエンドの開発を担当していました。ラストマイル配送事業者でのマイクロサービスと社内共通ライブラリ、暗号資産クレジット基盤の API ゲートウェイとリアルタイムの気配値収集、そして海外クライアント向けに一貫して単独で担当した 3年間の業務委託です。',
  },
} as const;

export const skills = [
  { label: 'Languages', value: 'Python (primary), SQL', ja: { label: '言語', value: 'Python（主）、SQL' } },
  {
    label: 'Backend',
    value: 'FastAPI, Litestar, gRPC, asyncpg, Django, Flask',
    ja: { label: 'バックエンド', value: 'FastAPI, Litestar, gRPC, asyncpg, Django, Flask' },
  },
  {
    label: 'Data',
    value: 'PostgreSQL, Redis, MongoDB, SQLite, RabbitMQ',
    ja: { label: 'データ', value: 'PostgreSQL, Redis, MongoDB, SQLite, RabbitMQ' },
  },
  {
    label: 'Infrastructure',
    value: 'Docker, Kubernetes, service mesh, event-driven architecture, microservices',
    ja: {
      label: 'インフラ',
      value: 'Docker、Kubernetes、サービスメッシュ、イベント駆動アーキテクチャ、マイクロサービス',
    },
  },
  {
    label: 'CI/CD',
    value: 'GitLab CI/CD, pipeline automation, quality gates, Prometheus, Grafana, Sentry',
    ja: {
      label: 'CI/CD',
      value: 'GitLab CI/CD、パイプラインの自動化、品質ゲート、Prometheus、Grafana、Sentry',
    },
  },
  {
    label: 'Security',
    value:
      'Secure SDLC, DevSecOps, threat modelling (STRIDE), secure code review, OWASP Top 10, vulnerability management and triage',
    ja: {
      label: 'セキュリティ',
      value:
        'セキュア SDLC、DevSecOps、脅威モデリング（STRIDE）、セキュアコードレビュー、OWASP Top 10、脆弱性管理とトリアージ',
    },
  },
  {
    label: 'Security tooling',
    value: 'SCA/SBOM, SAST, secrets detection, IaC scanning; Semgrep, Trivy, Syft, gitleaks, KICS',
    ja: {
      label: 'セキュリティツール',
      value:
        'SCA/SBOM、SAST、シークレット検出、IaC スキャン。Semgrep、Trivy、Syft、gitleaks、KICS',
    },
  },
  {
    label: 'AI-assisted delivery',
    value: 'LLMs in development and security workflows — false-positive triage, automated remediation',
    ja: {
      label: 'AI の活用',
      value: '開発とセキュリティの業務における LLM の活用 — 誤検知のトリアージ、修正の自動化',
    },
  },
] as const;

export const projects = [
  {
    name: 'Suji',
    href: '/suji',
    summary:
      'Japanese learning platform for iPadOS, iOS and macOS. Native Swift 6 under strict concurrency across 40+ modules; offline-first local SQLite syncing to Supabase through an outbox queue. FSRS-5 spaced repetition, handwriting graded against KanjiVG with dynamic time warping, on-device and cloud AI, and a full teacher-and-student loop.',
    tech: ['Swift 6', 'SwiftUI', 'GRDB/SQLite', 'Supabase', 'PencilKit', 'Metal'],
    ja: {
      name: '筋',
      href: '/ja/suji',
      summary:
        'iPadOS・iOS・macOS 向けの日本語学習アプリ。40 以上のモジュールにわたり、strict concurrency を有効にしたネイティブ Swift 6 で実装。ローカルの SQLite を第一とするオフラインファースト設計で、アウトボックスキューを介して Supabase と同期します。FSRS-5 による間隔反復、KanjiVG に対して動的時間伸縮で採点する手書き判定、端末内およびクラウドの AI、そして先生と生徒のやり取りを一通り備えています。',
    },
  },
  {
    name: 'Gokaku',
    href: '/gokaku',
    summary:
      "Offline trainer for Japan’s written driving-licence exams, iOS and Android. 774 true/false questions, each carrying a verbatim quote from the National Police Agency rulebook and machine-verified against that corpus; 208 official sign images; twelve languages; no account, no network, no data collected.",
    tech: ['Flutter', 'Dart', 'Kotlin/Android', 'Python'],
    ja: {
      name: '合格',
      href: '/ja/gokaku',
      summary:
        '日本の運転免許学科試験のためのオフライン練習アプリ、iOS と Android 向け。774問の ○/× 形式で、すべての設問が警察庁の教則からの逐語引用を伴い、その原文に対して機械的に照合されています。公式の標識画像 208点、12 言語対応、アカウントなし・通信なし・データ収集なし。',
    },
  },
] as const;

export const education = {
  institution: 'Southern Federal University (SFEDU)',
  location: 'Taganrog, Russia',
  degree: "Specialist Degree — 5-year programme, equivalent to Master’s level",
  field: 'Information & Computer Systems Security',
  from: 'Sep 2013',
  to: 'Jun 2018',
  notes: 'Teaching assistant, 2016–2018. Competitive CTF player — exploitation, reverse engineering.',
  ja: {
    institution: '南連邦大学（SFEDU）',
    location: 'ロシア · タガンログ',
    degree: 'スペシャリスト学位 — 5年制課程、修士相当',
    field: '情報・コンピュータシステムセキュリティ',
    notes: '2016〜2018年、ティーチングアシスタント。CTF の競技参加者 — エクスプロイト、リバースエンジニアリング。',
  },
} as const;

export const languages = [
  { name: 'English', level: 'C1', ja: { name: '英語', level: 'C1' } },
  { name: 'Russian', level: 'Native', ja: { name: 'ロシア語', level: '母語' } },
  { name: 'Japanese', level: 'Elementary', ja: { name: '日本語', level: '初級' } },
] as const;
