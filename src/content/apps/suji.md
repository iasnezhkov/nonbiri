---
name: Suji
kanji: 筋
tagline: One iPad app for studying Japanese, and for teaching it
summary: >-
  Dictionary, kanji, grammar, reading, exam practice and spaced repetition in one
  offline-first native app, running on a single progress record. There is also a
  teacher side on the same data: assigned sets, homework, marking, scheduling and
  chat.
brand: suji
platforms: [iPadOS, iOS, macOS]
status: in-development
order: 1
features:
  - title: Everything on one progress record
    body: >-
      A normal setup is one app for spaced repetition, another for the dictionary,
      another for kanji, another for grammar, a reader for texts and a chatbot for
      explanations — all good tools that know nothing about each other. Suji keeps
      the same jobs in one offline app, sharing one set of progress data.
  # Second, not last. Half the product is for teachers, and a reader scanning a
  # student-facing list never reaches position six to find that out.
  - title: A teacher side on the same data
    body: >-
      A separate six-section teacher interface behind the same login: class
      dashboard with at-risk grouping, homework builder and marking queue,
      recurring lessons with RFC 5545 scheduling, chat, and a library the teacher
      can author or import into.
  - title: Handwriting graded stroke by stroke
    body: >-
      A Metal canvas reads Apple Pencil pressure, tilt and azimuth, then scores
      the trajectory against the KanjiVG reference with dynamic time warping —
      stroke order, direction, shape and placement. A magnet guides your hand and
      eases off as you improve.
  - title: Bring your own text
    body: >-
      Morphological analysis splits the passage, tapping a word opens the offline
      dictionary, furigana is optional and per-word, and the grammar a sentence
      uses is picked out and linked back to the reference.
  - title: Import from a photo of a textbook
    body: >-
      Four sources, one flow: camera or PDF through OCR, Anki decks, pasted text,
      or a link. Imported material is levelled against JLPT, enriched with
      readings and meanings, and turned into study sets and exercises.
  - title: Exam practice in the exam’s own format
    body: >-
      JLPT, NAT-TEST, J.TEST and JFT-Basic, each with its own section structure
      and scoring. Fourteen JLPT question types, timed full simulations, and
      grading against per-section thresholds — failing one section counts
      separately from failing overall.
statement: >-
  One progress model over a single event log, which is what lets forty-one kinds
  of activity share one record instead of each drill keeping its own score.
capabilities:
  - group: 辞書 · reference
    items:
      - 13,108 kanji with readings, JLPT level, school grade, frequency and radical — 6,703 of them carrying stroke-order animation.
      - 19,450 mapped pairs of visually confusable kanji, used both as a study section and as the source of plausible wrong answers in exercises.
      - 14,487 kanji-to-component links, and 150 phonetic series turned into ready-made courses — every kanji read こう because of 工, in one set.
      - 31,151 dictionary entries and 157,696 glosses; 21,336 carry pitch accent, 30,035 example sentences come with them, and 613,270 proper-name readings sit in their own database.
      - 684 grammar patterns from N5 to N1 with 2,714 examples, a prerequisites graph, and an annotator that finds those patterns in whatever you are reading.
      - 236 ready-made courses and 30 content packs — JLPT levels, school grades, frequency bands, Osaka dialect, haiku, the road-rules deck.
      - None of it is fetched. Every reference screen works with the network off.
  - group: 稽古 · practice
    items:
      - Forty-one kinds of exercise across cards, grammar, vocabulary, kanji, listening and reading — all writing to one event log, so one progress record covers them instead of each drill keeping its own score.
      - FSRS-5 scheduling with a five-stage lifecycle, and passive introduction kept separate from active recall.
      - Handwriting on a Metal canvas reading Apple Pencil pressure, tilt and azimuth, scored against KanjiVG with dynamic time warping — stroke order, direction, shape and placement.
      - A magnet in three strengths that decays attempt by attempt, a ghost trace that fades as you improve, and direction arrows that follow the curve of the stroke rather than pointing straight.
      - 33 conjugation forms with a dedicated drill, and a sentence builder checked first by local morphology and then by a model for naturalness.
      - Spoken conversation in six scenarios, with the vocabulary held to the learner's level rather than left to the model.
  - group: 読解 · reading
    items:
      - Morphological analysis splits the passage; tapping a word opens the offline dictionary and adds it to a set.
      - Furigana off, unknown-only, or all — decided in one place rather than per screen. Line breaking is word-safe, which Japanese on the web usually is not.
      - Grammar patterns are annotated inline and linked back to the reference; sentences translate on demand.
      - Four import routes through one review-before-write wizard — camera or PDF through OCR, Anki decks, pasted text, or a link.
      - Imported material is levelled against JLPT, enriched with readings and meanings, and split into study sets and exercises.
  - group: 試験 · exams
    items:
      - JLPT, NAT-TEST, J.TEST and JFT-Basic, each with its own section structure, thresholds and scoring rules.
      - Fourteen JLPT question types, and an N5 bank of 2,141 questions.
      - Section practice for one question type, or a full timed simulation with booklet and answer sheet.
      - Graded against per-section thresholds — failing one section is counted separately from failing overall, as it is on the day.
      - Question-by-question review afterwards, with the attempt history behind it.
  - group: 教室 · classroom
    items:
      - A six-section teacher interface behind the same login, switched by role rather than by a second app.
      - A class register grouped by risk — who is steady, who is working, who is falling behind — with homework readiness and time since last active.
      - Recurring lessons with RFC 5545 rules and per-date exceptions; a lesson holds its preparation, the session and the homework that follows it.
      - A live lesson where the teacher pushes a kanji, a word or a text and it appears on the student's screen.
      - Homework built from study sets, drills, quizzes, tasks and reference material, with a marking queue and per-student progress.
      - Lesson chat and direct chat, attachments through an offline upload queue, and a library the teacher can author or import into.
      - Access is scoped by row-level security to the teacher-student relationship — one teacher cannot reach another's students.
  - group: 補助 · assistance
    items:
      - On-device models where they are enough, cloud only where they are not — and the controls disappear where no model is available rather than sitting there dead.
      - A student assistant grounded on the bundled dictionary and grammar rather than on recall, aware of what you are studying and what you missed last session.
      - A teacher co-pilot working from real progress snapshots — who has slipped, what to assign, where the group makes the same mistake.
      - Everything runs through the studio's own proxy, so no key ships in the client.
# Five plates, all verified frame by frame — furigana, kanji readings, JLPT
# levels and every count on screen. They are ordered as the product reads:
# the student’s day, the two drills that make it, the material underneath,
# and then the teacher looking at the same data. That order is what the file
# numbers carry, so they do not match the numbers the capture run gave them:
# 01-home was 05-student-home, 05-teacher was 01-teacher-class.
# Each pair is one capture run with the theme flipped on the live screen
# between the two shots, so the halves differ in palette and nothing else —
# same text, same scroll, same state. Two runs cannot do that: the seed
# deals a different set.
# The opener leads with the home screen: the handwriting plate is the more
# unusual picture, but it shows one drill, and someone who has never seen the
# app needs the shape of the whole day first.
hero: 0
shots:
  - src: ./shots/suji/01-home.webp
    srcDark: ./shots/suji/01-home-dark.webp
    alt: The student’s home screen — the best action right now, the assigned lesson with its preparation broken down by section, a mock exam and the study streak
    caption: The day’s work on one screen
    device: ipad-landscape
  - src: ./shots/suji/02-writing.webp
    srcDark: ./shots/suji/02-writing-dark.webp
    alt: Handwriting practice for 国 on a 米 guide grid, rated 99 percent on path accuracy with the second of its eight strokes in progress
    caption: Handwriting, graded stroke by stroke
    device: ipad-landscape
  - src: ./shots/suji/03-reader.webp
    srcDark: ./shots/suji/03-reader-dark.webp
    alt: A reading lesson with per-word furigana; the tapped word 悪くなったら opens its dictionary entry and the two patterns it is built from — 〜くなる at N5 and 〜たら at N4 — beside every kanji in the text
    caption: Reading with the dictionary attached
    device: ipad-landscape
  - src: ./shots/suji/04-set.webp
    srcDark: ./shots/suji/04-set-dark.webp
    alt: This week’s kanji set at N4 — twenty-eight characters, each marked with its memory stage, from new through learning, young and mastered to needs care
    caption: Every item at its own stage
    device: ipad-landscape
  - src: ./shots/suji/05-teacher.webp
    srcDark: ./shots/suji/05-teacher-dark.webp
    alt: The teacher’s class register grouped by risk — five students with homework readiness, knowledge composition and how long since each was last active
    caption: The teacher’s register
    device: ipad-landscape
notes:
  - term: FSRS-5
    body: >-
      An open spaced-repetition scheduler, now in its fifth revision. Anki ships
      it too, so a card’s difficulty here means the same thing it means there.
  - term: KanjiVG
    body: >-
      The open stroke-order dataset the handwriting grader scores against. It is
      also why 6,703 of the 13,108 kanji animate and the rest do not — that is
      the coverage of the data, not a shortcut.
  - term: Sudachi
    body: >-
      The morphological analyser that splits Japanese into words. Japanese is
      written without spaces, so nothing else on the reading screen can happen
      until this step does.
tech:
  - Swift 6
  - SwiftUI
  - GRDB / SQLite
  - Supabase
  - FSRS-5
  - Sudachi
  - Apple Vision
  - FoundationModels
  - PencilKit
  - Metal
languages: [English, Japanese, Russian]
ja:
  name: 筋
  tagline: 日本語を学ぶ人と教える人のためのiPadアプリ
  summary: >-
    辞書・漢字・文法・読解・試験対策・間隔反復を、ひとつのオフライン優先の
    ネイティブアプリにまとめ、単一の学習記録の上で動かします。同じデータの上に
    先生用の画面もあります——課題の割り当て、宿題、採点、日程、チャット。
  statement: >-
    ひとつのイベントログの上に載った、ひとつの学習モデル。だから41種類の
    アクティビティが、各ドリルごとに別々の成績を持つのではなく、
    ひとつの記録を共有できます。
  features:
    - title: すべてがひとつの学習記録の上に
      body: >-
        ふつうは、間隔反復にひとつ、辞書にひとつ、漢字にひとつ、文法にひとつ、
        読解にリーダー、説明にチャットボット——どれも良い道具ですが、互いのことを
        何も知りません。筋は同じ仕事をひとつのオフラインアプリにまとめ、
        ひとそろいの学習データを共有させます。
    - title: 同じデータの上に立つ先生側
      body: >-
        同じログインの裏に、6区画の先生用画面。要注意者でまとめたクラス一覧、
        宿題の作成と採点待ち、RFC 5545に沿った定期レッスンの日程、チャット、
        そして先生が自分で作るか取り込める教材ライブラリ。
    - title: 一画ずつ採点される手書き
      body: >-
        MetalのキャンバスがApple Pencilの筆圧・傾き・方位を読み取り、
        動的時間伸縮でKanjiVGの手本と軌跡を照合します——書き順、方向、字形、
        位置まで。ガイドが手を導き、上達するにつれて静かに引いていきます。
    - title: 手持ちのテキストがそのまま教材に
      body: >-
        形態素解析が文を語に分け、語をタップすればオフライン辞書が開き、
        ふりがなは語ごとに任意。文中の文法パターンを拾い出して、
        文法解説へ結び付けます。
    - title: 教科書の写真から取り込む
      body: >-
        取り込み口は4つ、流れはひとつ。カメラまたはPDFをOCR、Ankiデッキ、
        貼り付けたテキスト、リンク。取り込んだ素材はJLPTの級に照らして
        レベル分けされ、読みと意味が補われ、学習セットと練習問題になります。
    - title: 本番と同じ形式の試験対策
      body: >-
        JLPT・NAT-TEST・J.TEST・JFT-Basic、それぞれの区分構成と採点方式で。
        JLPTの14種類の設問形式、時間を計った通し模試、区分ごとの基準による採点
        ——ひとつの区分での不合格は、総合の不合格とは別に扱われます。
  capabilities:
    - group: 辞書
      items:
        - 漢字13,108字。読み、JLPT級、学年、頻度、部首つき。うち6,703字は筆順アニメーション付きです。
        - 見た目の似た漢字19,450組を対応づけています。「間違えやすい」の学習セクションと、練習問題のもっともらしい誤答をつくる材料の、両方に使います。
        - 漢字と構成要素の関係14,487件、そして150の音符シリーズをそのまま講座に。「工があるから こう と読む漢字」がひとまとまりで並びます。
        - 辞書項目31,151件、語義157,696件。うち21,336件に高低アクセント、例文は30,035件。固有名詞の読み613,270件は別のデータベースに入っています。
        - N5からN1までの文法パターン684件、例文2,714件、前提関係のグラフつき。読んでいる文章の中からそのパターンを見つけて印をつけます。
        - 既成の講座236件とコンテンツパック30件。JLPTの級、学年別、頻度帯、大阪弁、俳句、交通ルール。
        - どれも通信で取りに行きません。参照系の画面はすべてオフラインで動きます。
    - group: 稽古
      items:
        - カード、文法、語彙、漢字、聴解、読解にまたがる41種類の練習。すべてがひとつのイベントログに書き込まれるので、ドリルごとに別々の成績を持つのではなく、ひとつの学習記録にまとまります。
        - FSRS-5による間隔反復。5段階の習得ステージがあり、受け身の「出会い」と能動的に「思い出す」ことを分けて扱います。
        - 手書きはMetalのキャンバス上で。Apple Pencilの筆圧・傾き・方位を読み取り、動的時間伸縮でKanjiVGの手本と照合します。書き順、方向、字形、位置まで。
        - 強さ3段階の磁石は試行ごとに弱まり、ゴーストの手本も上達するにつれて薄くなります。方向の矢印は直線ではなく、その画の曲がりに沿います。
        - 活用形33種類の専用ドリルと、文の組み立て。まず端末内の形態素解析で確かめ、そのあとモデルが自然さを見ます。
        - 会話練習は6つの場面。語彙は学習者の級に合わせて制限していて、モデル任せにしていません。
    - group: 読解
      items:
        - 形態素解析が文章を語に分けます。語をタップすればオフライン辞書が開き、そのまま自分のセットに入ります。
        - ふりがなは「なし・未知語のみ・すべて」の三択。画面ごとではなく一箇所で決まります。改行は語の途中で切れません——ウェブの日本語では、たいてい切れます。
        - 文中の文法パターンに注釈がつき、解説へ飛べます。文単位の翻訳は必要なときだけ。
        - 取り込み口は4つ、書き込む前に必ず確認する流れはひとつ。カメラまたはPDFをOCR、Ankiのデッキ、貼り付けたテキスト、リンク。
        - 取り込んだ素材はJLPTの級に照らしてレベル分けされ、読みと意味が補われ、学習セットと練習問題に分かれます。
    - group: 試験
      items:
        - JLPT、NAT-TEST、J.TEST、JFT-Basic。それぞれ独自の区分構成、合格基準、採点方式で。
        - JLPTの設問形式14種類と、N5の問題2,141問。
        - ひとつの設問形式だけを練習するか、時間を計った通し模試を冊子と解答用紙の形で。
        - 採点は区分ごとの基準で。ひとつの区分での不合格は、総合の不合格とは別に数えます——本番と同じように。
        - 終わったあとは一問ずつの見直し。過去の挑戦の履歴も一緒に見られます。
    - group: 教室
      items:
        - 同じログインの裏に、6区画の先生用画面。別のアプリではなく、役割の切り替えで入ります。
        - クラス一覧は状態でまとめます——安定している人、取り組み中の人、遅れている人。宿題の準備状況と、最後に触れてからの時間つき。
        - RFC 5545の規則で繰り返す定期レッスン、日付ごとの例外つき。ひとつのレッスンが、準備・授業・そのあとの宿題をまとめて抱えます。
        - ライブ授業では、先生が漢字や語や文章を送ると、生徒の画面にすぐ現れます。
        - 宿題は学習セット、ドリル、クイズ、課題、参考資料から組み立てます。採点待ちの一覧と、生徒ごとの進み具合が見えます。
        - レッスンのチャットと個別のチャット、添付はオフライン対応の送信キュー経由。先生が自分で作るか取り込める教材ライブラリもあります。
        - アクセスは行レベルセキュリティで先生と生徒の関係に限定しています。ある先生が別の先生の生徒に届くことはありません。
    - group: 補助
      items:
        - 端末内のモデルで足りるところは端末内で、足りないところだけクラウドで。モデルが使えない場面ではボタン自体が消えます——押せない飾りは置きません。
        - 生徒向けのアシスタントは、記憶ではなく同梱の辞書と文法に基づいて答えます。いま何を学んでいて、前回どこを落としたかを踏まえます。
        - 先生向けの副操縦士は、実際の進捗のスナップショットから動きます。誰が落ちてきたか、次に何を出すか、クラス全体で同じ間違いをしているのはどこか。
        - すべて自前のプロキシ経由で、クライアントに鍵は入っていません。
  captions:
    - 一日の学習をひと画面で
    - 一画ずつ採点される手書き
    - 辞書のついた読解
    - すべての項目がそれぞれの段階に
    - 先生のクラス一覧
  body: >-
    Swift 6のネイティブコードをstrict concurrencyの下で。40ほどの
    モジュールからなるアンブレラパッケージで、ドメイン中核・永続化層・UIの
    あいだに境界を引いています。作業はまずローカルのSQLiteに入り、
    アウトボックスキューを通してSupabaseと突き合わされるので、
    電車の中でもアプリは動き続けます。

    参照データは取りに行くのではなく同梱です——13,108字の漢字、うち6,703字の
    筆順字形、31,151件の辞書項目、684の文法パターン、613,270件の固有名詞の読み。
    反復はひとつのイベントログの上のFSRS-5で、だからこそひとつの学習モデルが
    41種類の活動を扱えます。各ドリルが別々に成績を持つのではなく。

    現在も開発中です。上に並べた範囲は、ひとりで早く終わる量ではありません。
  notes:
    - term: FSRS-5
      body: >-
        公開されている間隔反復アルゴリズムの第5版。Ankiにも採用されているので、
        ここでのカードの難易度は、そちらでの難易度と同じ意味を持ちます。
    - term: KanjiVG
      body: >-
        手書き判定が採点の基準にしている、公開の筆順データセット。13,108字のうち
        6,703字だけが筆順アニメーションを持つのも、手を抜いたからではなく、
        このデータの収録範囲がそこまでだからです。
    - term: Sudachi
      body: >-
        日本語を単語に区切る形態素解析器。読解画面の処理は、まずこの分割が
        済まないと何ひとつ始まりません。
links: {}
---

Native Swift 6 under strict concurrency, built as an umbrella package of forty-odd
modules with boundaries between the domain core, the persistence layer and the
UI. Work goes into a local SQLite database first and
reconciles to Supabase through an outbox queue, so the app keeps working on a
train.

The reference content is bundled rather than fetched — 13,108 kanji with 6,703
stroke-order glyphs, 31,151 dictionary entries, 684 grammar patterns and 613,270
proper-name readings ship inside the app. Repetition is FSRS-5 over a single event
log, which is what lets one progress model serve forty-one kinds of activity
instead of each drill keeping its own score.

Still in development. The scope above is larger than one person finishes quickly.
