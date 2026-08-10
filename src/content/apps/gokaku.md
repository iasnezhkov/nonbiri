---
name: Gokaku
kanji: 合格
tagline: A trainer for Japan’s written driving exam
summary: >-
  A free trainer for Japan’s written driving exams — 外免切替, 仮免 and 本免. Each of
  its 774 true/false questions carries a verbatim quote from the 教則, the National
  Police Agency rulebook the exam is written from, so an answer you disagree with
  can be checked against the source rather than taken on trust.
brand: gokaku
platforms: [iOS, Android]
status: testing
order: 2
disclaimer: >-
  Gokaku is an independent, unofficial study aid. It is not affiliated with,
  endorsed by, or connected to the National Police Agency (警察庁), the Ministry of
  Land, Infrastructure, Transport and Tourism (国土交通省), any prefectural police
  licence centre, or any driving school. Passing a mock exam in this app does not
  guarantee passing the official test. Traffic rules change — always confirm
  current requirements with your prefectural licence centre.
features:
  - title: Every answer cites the rulebook
    body: >-
      Under each question sits a verbatim quote from the 教則, its translation,
      and the exact chapter it comes from — a reference like 教則 付表3（1）26, so
      you can check the rule yourself. The Japanese original is one tap away.
  - title: Checked against the source text
    body: >-
      All 774 statements are written over the verbatim rulebook text and
      machine-verified against that corpus, pinned to the 49th revision of
      13 November 2024. A quote that stops matching the rulebook flags itself for
      review.
  - title: Built for the post-2025 exam
    body: >-
      Since 1 October 2025 the 外免切替 check is 50 true/false questions in 30
      minutes, passing at 45 — a 90% bar on a test where most of the difficulty is
      in the wording. Only ○/×, the same format as the real thing, never multiple
      choice.
  - title: Accuracy tracked per trap type
    body: >-
      Each question is tagged with one of seven trap types — a boundary number
      flipped from 未満 to 以下, an absolute “always”, a quietly dropped exception.
      Scores are kept per trap, so the pattern behind a wrong answer is visible,
      not just the count.
  - title: Signs as pictures, as on the exam
    body: >-
      208 official signs and road markings drawn in one consistent 告示 geometry,
      with 133 questions built on them — including the paired traps on
      near-identical signs.
  - title: Free, offline, no account
    body: >-
      No server, no analytics, no ads, no tracking — the App Privacy label reads
      Data Not Collected. Localised into 12 languages, interface and question
      content alike. Tips are optional and unlock nothing.
statement: >-
  Generating question variants is easy. Keeping each one faithful to what the
  rulebook actually says is the slow part.
# Item GS-045, the same one shown in shots/06-answered. Transcribed from the
# shipped build, with ruleJa taken verbatim from the question bank — the app
# keeps the Japanese original behind a disclosure, so only its opening line is
# visible in the capture. Never reconstruct it: quoting the 教則 exactly is the
# one claim this block exists to make.
sample:
  claim: >-
    This sign designates the maximum speed for motor vehicles and streetcars,
    and a 30 km/h maximum for standard mopeds.
  correct: true
  note: >-
    Sign 323 sets the maximum speed. It applies to motor vehicles and
    streetcars; additionally, a 30 km/h maximum applies to mopeds.
  ruleEn: >-
    (1) Designation of the maximum speed for motor vehicles and streetcars.
    (2) Designation of a maximum speed of 30 km/h or less for mopeds.
  ruleJa: （１）自動車と路面電車…の最高速度の指定（２）原動機付自転車の時速30キロメートル以下の最高速度の指定
  reference: 教則 付表3（1）25（規制標識）
  edition: 49th revision · 13 November 2024
facts:
  - group: 問題 · questions
    label: Total
    value: '774'
  - group: 問題 · questions
    label: Built on signs
    value: '133'
  - group: 問題 · questions
    label: Carrying a quote
    value: 100%
  - group: 出典 · sources
    label: Official sign images
    value: '208'
  - group: 出典 · sources
    label: 教則 revision
    value: '49'
  - group: 出典 · sources
    label: Topics
    value: '13'
  - group: 読者 · reader
    label: Languages
    value: '12'
  - group: 読者 · reader
    label: Trap types
    value: '7'
  - group: 読者 · reader
    label: Data collected
    value: None
# The home screen leads on the index: it is the frame that shows what the app
# is before explaining what it does.
hero: 0
shots:
  - src: ./shots/gokaku/01-home.webp
    srcDark: ./shots/gokaku/01-home-dark.webp
    alt: The Gokaku home screen — today's study batch, progress by topic, and the mock exam entry
    caption: Where a session starts
    device: iphone
    framed: true
  - src: ./shots/gokaku/05-sign-question.webp
    srcDark: ./shots/gokaku/05-sign-question-dark.webp
    alt: A true/false question showing a speed limit sign, with TRUE and FALSE buttons
    caption: Real exam format — true or false
    device: iphone
    framed: true
  - src: ./shots/gokaku/06-answered.webp
    srcDark: ./shots/gokaku/06-answered-dark.webp
    alt: The same question after answering, showing the verdict, the explanation and the official rule with its chapter reference
    caption: The rule the answer comes from
    device: iphone
    framed: true
  - src: ./shots/gokaku/09-results-map.webp
    srcDark: ./shots/gokaku/09-results-map-dark.webp
    alt: A finished mock exam scored 47 out of 50, with all fifty questions as a grid and the traps that caught the three misses
    caption: Your whole paper on one screen
    device: iphone
    framed: true
  - src: ./shots/gokaku/03-tricks.webp
    srcDark: ./shots/gokaku/03-tricks-dark.webp
    alt: Accuracy broken down by trap type, worst first, above the exam trend and coverage across the thirteen topics
    caption: Which traps keep catching you
    device: iphone
    framed: true
notes:
  - term: 教則
    body: >-
      The National Police Agency’s official rulebook for drivers — the document
      the examiners write the questions from, rather than a study guide about it.
  - term: 外免切替
    body: >-
      The procedure for converting a foreign driving licence to a Japanese one.
      Since 1 October 2025 it includes the written check this app is built for.
  - term: Pinned corpus
    body: >-
      Traffic rules change, so the bank is verified against one fixed revision of
      the rulebook rather than against whatever is current. When that revision is
      superseded, the mismatch is visible instead of silent.
tech:
  - Flutter
  - Dart
  - Kotlin / Android
  - Python
languages:
  - English
  - Russian
  - Japanese
  - Chinese
  - Vietnamese
  - Portuguese
  - Korean
  - Spanish
  - Filipino
  - Nepali
  - Indonesian
  - Burmese
ja:
  name: 合格
  tagline: 日本の運転免許学科試験のための練習アプリ
  # 仮免・本免 first here, 外免切替 first in the English summary: the same three
  # exams, ordered by who is reading. A Japanese reader who meets 外免切替 in the
  # opening clause has been told the app is for foreigners before being told
  # what it is.
  summary: >-
    仮免・本免・外免切替に対応した無料の学科試験練習アプリ。774問すべてに、
    試験の出典である警察庁『交通の教則』からの原文引用が付いています。答えに
    納得できないときは、鵜呑みにせず出典そのものを確認できます。
  statement: >-
    問題のバリエーションを作ること自体は簡単です。その一問一問を教則の記述に
    忠実なまま保つことが、時間のかかる部分です。
  features:
    - title: すべての答えに出典がある
      body: >-
        各問題の下に『教則』の原文、その訳、そして出典の章が示されます。
        たとえば「教則 付表3（1）26」のように。日本語原文はワンタップで開けます。
    - title: 原典に照らして検証済み
      body: >-
        774問はすべて教則の原文をもとに作成し、その本文に対して機械的に検証
        しています。基準は2024年11月13日の第49次改訂版に固定。引用が原典と
        一致しなくなった問題は、自動的に要確認として印が付きます。
    - title: 2025年以降の試験に対応
      body: >-
        2025年10月1日から、外免切替の学科確認は30分・50問の○×形式、合格は45問
        ——正答率90%という基準です。難しさの大半は文言にあります。出題は○×のみ、
        本番と同じ形式で、多肢選択にはしません。
    - title: 引っかけの型ごとに正答率を記録
      body: >-
        各問題には7種類の引っかけのいずれかが付いています。「未満」を「以下」に
        すり替えた数値の境界、「必ず」という絶対表現、そっと落とされた例外など。
        型ごとに成績を残すので、間違いの回数だけでなく、その背後にある型が見えます。
    - title: 標識は本番と同じく図で
      body: >-
        208点の標識・道路標示を、告示に沿った一貫した図形で描き起こしました。
        それらを使った問題は133問。よく似た標識を対にした引っかけも含みます。
    - title: 無料・オフライン・アカウント不要
      body: >-
        サーバーなし、解析なし、広告なし、追跡なし——App Privacy の表示は
        「データを収集していません」です。UIも問題文も12言語に対応。
        投げ銭は任意で、何かが解除されるものではありません。
  factGroups:
    問題 · questions: 問題
    出典 · sources: 出典
    読者 · reader: 利用者
  factLabels:
    Total: 総数
    Built on signs: 標識問題
    Carrying a quote: 出典付き
    Official sign images: 標識図版
    教則 revision: 教則改訂
    Topics: 分野
    Languages: 対応言語
    Trap types: 引っかけの型
    Data collected: 収集データ
  captions:
    - 学習はここから
    - 本番と同じ○×形式
    - 答えの根拠となる条文
    - 50問の答案が一画面に
    - どの型に引っかかるか
  body: >-
    手間の大半はアプリ本体ではなく、問題の生成パイプラインにかかっています。
    バリエーションを作ること自体は簡単で、その一問一問を教則の記述に忠実なまま
    保つことが遅い部分です。各問題は日本語原文・訳・出典の条文・章番号・
    想定している間違いの種類を持ち、規則が改まるたびに固定した教則の本文に対して
    全問が再検証されます。

    学習は既定で10問単位、5問・25問・50問にも変えられます。新しい問題、次に間違えた問題、そして苦手な分野の順。
    習得の判定は、初回で正解するか、間違えたあと2回続けて正解すること。
    間隔反復はあえて入れていません。ここでの課題は「何年もかけて覚える」ことでは
    なく、「決まった日に合格する」ことだからです。

    現在は最終テスト中で、ストアには未公開です。おかしいと思う問題があれば、
    その下の出典で確かめられます。ご指摘いただけると助かります。
  disclaimer: >-
    合格は独立した非公式の学習補助アプリです。警察庁、国土交通省、各都道府県警察の
    運転免許センター、および自動車教習所と、提携・後援・関連のいずれの関係もありません。
    本アプリの模擬試験に合格しても、実際の試験の合格を保証するものではありません。
    交通ルールは改正されます。最新の要件は必ずお住まいの都道府県の運転免許センターで
    ご確認ください。
  # Both lines are the app's own Japanese strings for GS-045, copied from the
  # bank's ja localisation — not translated back from the English above.
  sample:
    claim: >-
      この標識は、自動車と路面電車の最高速度を指定し、原動機付自転車には
      時速30キロメートル以下の最高速度を指定するものである。
    note: >-
      標識323（最高速度）は、自動車と路面電車の最高速度を指定するものです。
      なお、原動機付自転車には時速30キロメートル以下の最高速度が指定されます。
  notes:
    - term: 固定した版
      body: >-
        交通ルールは改正されるため、問題は「その時点の最新版」ではなく、固定した
        一つの改正版に対して検証しています。その版が改まったときに、食い違いが
        黙って残るのではなく、目に見える形で出るようにするためです。
    - term: 引っかけの型
      body: >-
        学科試験の難しさの大半は交通ルールそのものではなく、文言にあります。
        数値の境界、絶対表現、落とされた例外——型ごとに成績を分けているのは、
        間違いの回数より、その背後にある型のほうが直せるからです。
links: {}
---

Most of the work went into the content pipeline rather than the app. Generating
question variants is easy; keeping each one faithful to what the rulebook actually
says is the slow part. Every item carries its Japanese source text, a translation,
the rule it comes from, the chapter reference, and the category of mistake it is
meant to catch — and the whole bank is re-verified against the pinned 教則 corpus
whenever the rules move.

Study runs in batches — ten by default, or five, twenty-five or fifty: new
material first, then what you got wrong, then
your weakest topics. Mastery means answered right first time, or twice in a row
after a miss. There is no spaced repetition, deliberately — the case here isn’t
"learn this for years", it’s "pass on a date".

In final testing, not yet in the stores. If a question looks wrong, the citation
under it is there to check against — and I’d like to hear about it.
