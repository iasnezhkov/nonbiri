---
name: Gokaku
kanji: 合格
tagline: A trainer for Japan’s written driving exam
summary: >-
  A free trainer for Japan’s written driving exams — 外免切替, 仮免 and 本免. Each of
  its 932 true/false questions carries a verbatim quote from the 教則, the National
  Police Agency rulebook the exam is written from, so an answer you disagree with
  can be checked against the source rather than taken on trust.
brand: gokaku
platforms: [iOS, iPadOS]
status: released
order: 2
disclaimer: >-
  Gokaku is an independent, unofficial study aid. It is not affiliated with,
  endorsed by, or connected to the National Police Agency (警察庁), the Ministry of
  Land, Infrastructure, Transport and Tourism (国土交通省), any prefectural police
  licence centre, or any driving school. Passing a mock exam in this app does not
  guarantee passing the official test. Traffic rules change — always confirm
  current requirements with your prefectural licence centre.
features:
  - title: Every answer shows the rule behind it
    body: >-
      Answer a question and the rule that decides it appears underneath, quoted
      word for word from the police rulebook the exam is written from, with a
      translation and the chapter it sits in. Disagree with an answer and you can
      check it instead of taking it on trust. The Japanese original is one tap
      away.
  - title: Written over the rulebook, not from memory
    body: >-
      All 932 statements are built on the rulebook's own wording rather than
      paraphrased from it, and every quote is machine-checked against that text.
      When the rules are amended, a question whose quote no longer matches raises
      a flag instead of quietly going stale.
  - title: The exam format, not a quiz
    body: >-
      The conversion check is 50 true/false questions in 30 minutes and you pass
      at 45 — a 90% bar on a test where most of the difficulty is in the wording.
      Gokaku drills only ○/×, the shape of the real paper, and puts the mock exams
      on the same clock. Never multiple choice.
  - title: Accuracy tracked per trap type
    body: >-
      Each question is tagged with one of seven trap types — a boundary number
      flipped from 未満 to 以下, an absolute “always”, a quietly dropped exception.
      Scores are kept per trap, so the pattern behind a wrong answer is visible,
      not just the count.
  - title: Signs as pictures, as on the exam
    body: >-
      208 official signs and road markings, all drawn to the same official
      geometry rather than collected from mixed sources, with 144 questions built
      on them — including the paired traps on near-identical signs.
  - title: The whole sign catalogue, not just the examined ones
    body: >-
      Browse all 208 grouped the way Japan groups them — regulatory, auxiliary
      plates, warning, indication, guide — and search by name or by sign number.
      Any selection turns into a deck of flashcards: sign shown, name hidden,
      tap to reveal.
  - title: Questions you can set aside
    body: >-
      Missed questions queue themselves automatically. Saved is the manual
      counterpart, for the ones you got right and still did not understand — put
      them on the shelf and study it in one go.
  - title: Where you stand, said in words
    body: >-
      The home screen reads out how ready you are for the exam you are taking and
      names the one topic holding it back, with a way straight into it. It is an
      estimate of preparation, and says so — never a prediction of passing.
  - title: Free, offline, no account
    body: >-
      No server, no analytics, no ads, no tracking — the App Privacy label reads
      Data Not Collected. Everything is unlocked from the first launch, and the
      whole thing is localised into 12 languages, interface and question content
      alike.
statement: >-
  Generating question variants is easy. Keeping each one faithful to what the
  rulebook actually says is the slow part.
# Item GS-047, the same one shown in shots/06-answered. Transcribed from the
# shipped build, with ruleJa taken verbatim from the question bank — the app
# keeps the Japanese original behind a disclosure, so only its opening line is
# visible in the capture. Never reconstruct it: quoting the 教則 exactly is the
# one claim this block exists to make.
sample:
  claim: >-
    This sign designates the minimum speed for motor vehicles — you must not
    drive slower than the number shown.
  correct: true
  note: >-
    Sign 324 sets the minimum speed for motor vehicles. It is distinguished from
    the maximum speed sign (323) by an underline beneath the number.
  ruleEn: Designation of the minimum speed for motor vehicles.
  ruleJa: 自動車の最低速度の指定
  reference: 教則 付表3（1）26（規制標識）
  edition: 49th revision · 13 November 2024
facts:
  - group: 問題 · questions
    label: Total
    value: '932'
  - group: 問題 · questions
    label: Built on signs
    value: '144'
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
    alt: The Gokaku home screen — a readiness read-out for the exam being taken, the topic holding it back, and the mastery ring over the whole question bank
    caption: Where you stand, and what to do next
    device: iphone
    framed: true
  - src: ./shots/gokaku/05-sign-question.webp
    srcDark: ./shots/gokaku/05-sign-question-dark.webp
    alt: A true/false question showing a minimum-speed sign, with TRUE and FALSE buttons
    caption: Real exam format — true or false
    device: iphone
    framed: true
  - src: ./shots/gokaku/06-answered.webp
    srcDark: ./shots/gokaku/06-answered-dark.webp
    alt: The same question after answering, showing the verdict, the explanation and the official rule with its chapter reference
    caption: The rule the answer comes from
    device: iphone
    framed: true
  - src: ./shots/gokaku/11-signs-library.webp
    srcDark: ./shots/gokaku/11-signs-library-dark.webp
    alt: The signs library — all 208 official signs in their official categories, with a search field, filter chips and a Memorise button
    caption: All 208 signs, not only the examined ones
    device: iphone
    framed: true
  - src: ./shots/gokaku/09-results-map.webp
    srcDark: ./shots/gokaku/09-results-map-dark.webp
    alt: A finished mock exam scored 47 out of 50, with all fifty questions as a grid and the traps that caught the three misses
    caption: Your whole paper on one screen
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
      It now includes the written check this app is built for.
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
    仮免・本免・外免切替に対応した無料の学科試験練習アプリ。932問すべてに、
    試験の出典である警察庁『交通の教則』からの原文引用が付いています。答えに
    納得できないときは、鵜呑みにせず出典そのものを確認できます。
  statement: >-
    問題のバリエーションを作ること自体は簡単です。その一問一問を教則の記述に
    忠実なまま保つことが、時間のかかる部分です。
  features:
    - title: 答えの根拠がその場に出る
      body: >-
        問題に答えると、その答えを決めている条文がすぐ下に出ます。試験の出典で
        ある『教則』の原文そのまま、訳と、それが載っている章とともに。納得できな
        いときは鵜呑みにせず確かめられますし、日本語原文はワンタップで開けます。
    - title: 教則の記述の上に作られている
      body: >-
        932問はすべて、教則を言い換えるのではなく、その原文の上に作られています。
        引用は機械的に照合され、規則が改まって原文と食い違った問題は、黙って古び
        るのではなく要確認の印が付きます。
    - title: クイズではなく、試験の形式で
      body: >-
        外免切替の学科確認は30分で50問、合格は45問——正答率90%という基準です。
        難しさの大半は文言にあります。出題は○×のみ、本番と同じ形で、模擬試験も
        同じ時間で計ります。多肢選択にはしません。
    - title: 引っかけの型ごとに正答率を記録
      body: >-
        各問題には7種類の引っかけのいずれかが付いています。「未満」を「以下」に
        すり替えた数値の境界、「必ず」という絶対表現、そっと落とされた例外など。
        型ごとに成績を残すので、間違いの回数だけでなく、その背後にある型が見えます。
    - title: 標識は本番と同じく図で
      body: >-
        208点の標識・道路標示を、寄せ集めではなく公式の図形どおり一貫した描き方で
        起こしました。それらを使った問題は144問。よく似た標識を対にした引っかけも
        含みます。
    - title: 出題されるものだけでなく、標識のすべてを
      body: >-
        208点すべてを日本の分類——規制・補助標識・警戒・指示・案内——のとおりに
        一覧でき、名称でも標識番号でも検索できます。表示中のものはそのまま暗記
        カードに。標識だけを見せ、名称は伏せたまま、タップでめくります。
    - title: あとで戻る問題を取っておける
      body: >-
        間違えた問題は自動でキューに入ります。「保存」はその手動の対で、正解した
        のに納得できなかった問題のためのもの。棚に置いておき、あとでまとめて
        解き直せます。
    - title: いまどこまで来ているかを、言葉で
      body: >-
        ホーム画面が、いま受ける試験に対する準備度と、それを押し下げている分野を
        ひとつ挙げ、そこへ進む導線を出します。これは準備の目安であり——そう明記
        しています——合格の予測ではありません。
    - title: 無料・オフライン・アカウント不要
      body: >-
        サーバーなし、解析なし、広告なし、追跡なし——App Privacy の表示は
        「データを収集していません」です。最初の起動からすべて使え、UIも問題文も
        12言語に対応しています。
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
    - いまどこまで来ているか
    - 本番と同じ○×形式
    - 答えの根拠となる条文
    - 208点すべてを一覧で
    - 50問の答案が一画面に
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

    現在 App Store で公開中、無料です。コードはクロスプラットフォームで Android
    ビルドの署名も済んでいますが、公開しているのは iOS 版のみです。おかしいと
    思う問題があれば、その下の出典で確かめられます。ご指摘いただけると助かります。
  disclaimer: >-
    合格は独立した非公式の学習補助アプリです。警察庁、国土交通省、各都道府県警察の
    運転免許センター、および自動車教習所と、提携・後援・関連のいずれの関係もありません。
    本アプリの模擬試験に合格しても、実際の試験の合格を保証するものではありません。
    交通ルールは改正されます。最新の要件は必ずお住まいの都道府県の運転免許センターで
    ご確認ください。
  # Both lines are the app's own Japanese strings for GS-047, copied from the
  # bank's ja localisation — not translated back from the English above.
  sample:
    claim: >-
      この標識は、自動車の最低速度を指定するもので、表示されている速度より遅く
      走ってはならないことを示すものである。
    note: >-
      標識324（最低速度）は、自動車の最低速度を指定するものです。最高速度の
      標識（323）との違いは、数字の下に下線があることです。
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
links:
  appStore: https://apps.apple.com/app/id6799978043
  appStoreJa: https://apps.apple.com/jp/app/id6799978043
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

On the App Store now, free. The code is cross-platform and the Android build is
signed, but iOS is the only release so far. If a question looks wrong, the
citation under it is there to check against — and I’d like to hear about it.
