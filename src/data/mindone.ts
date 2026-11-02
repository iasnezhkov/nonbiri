export const updated = new Date('2026-11-02');

export const keywords = [
  'iKKO MindOne',
  'Android 17',
  'LineageOS 24',
  'MediaTek Helio G99',
  'Linux 6.12',
  'Android GKI',
] as const;

export const device = {
  name: 'iKKO MindOne',
  blurb:
    'Android 17 for the iKKO MindOne. The phone’s whole software stack, brought from the Android 12 generation up to today’s, without the manufacturer’s source code.',
  tagline: 'Android 17 for a card-sized phone, built without the manufacturer’s source code.',
  summary:
    'The iKKO MindOne shipped with Android 15, running on lower layers from the Android 12 generation, and its maker never published the code needed to move it on. I rebuilt the phone’s software from the hardware up, and it now runs Android 17 through LineageOS, a free, community-made version of Android. Everything the phone can do works, except the built-in virtual SIM. It is the phone I use every day, and a version other owners can install is on its way.',
  about:
    'The MindOne is about the size of a credit card: a square AMOLED screen under sapphire glass, and a single camera on a hinge that flips round for selfies. Phones this small are rare, and that is the reason to keep this one current.',
  statementTitle:
    'Not new paint over old parts: every layer, from the hardware up, brought to today’s Android.',
  statement:
    'Beneath Android, every phone carries software that drives its screen, camera, sound and mobile radio. Most unofficial versions of Android keep that original layer and replace only what sits on top — which works until the old parts stop fitting the new system. Phone makers redo this layer when they bring a chip to a new Android release, with their own source code and a team. Here it was done from the outside, by one person: starting from Google’s current kernel and the drivers MediaTek publishes for this chip, and working out the rest from the phone itself.',
  specs: [
    { label: 'Chip', value: 'MediaTek Helio G99', ja: { label: 'チップ', value: 'MediaTek Helio G99' } },
    { label: 'Memory', value: '8 GB RAM · 256 GB storage', ja: { label: 'メモリ', value: 'RAM 8 GB · ストレージ 256 GB' } },
    { label: 'Screen', value: 'Square AMOLED under sapphire glass', ja: { label: '画面', value: 'サファイアガラスの正方形 AMOLED' } },
    { label: 'Camera', value: '50 MP, flips between back and front', ja: { label: 'カメラ', value: '5000 万画素、回転して背面と前面を兼ねる' } },
    { label: 'Size', value: '86 × 72 mm, about a credit card', ja: { label: 'サイズ', value: '86 × 72 mm、クレジットカードほど' } },
    { label: 'Shipped with', value: 'Android 15', ja: { label: '出荷時', value: 'Android 15' } },
    { label: 'Runs now', value: 'Android 17 · LineageOS 24', ja: { label: '現在', value: 'Android 17 · LineageOS 24' } },
  ],
  ja: {
    blurb:
      'iKKO MindOne で Android 17 を。Android 12 世代だった端末のソフトウェア一式を、メーカーのソースコードなしで現在の世代まで引き上げました。',
    tagline: 'カードサイズの端末に Android 17 を。メーカーのソースコードなしで。',
    summary:
      'iKKO MindOne は Android 15 で発売されましたが、その下の層は Android 12 世代のもので、先に進めるためのコードをメーカーは公開していません。ハードウェアに近いところから端末のソフトウェアを作り直し、いまは無料のコミュニティ版 Android である LineageOS で Android 17 が動いています。内蔵の仮想 SIM を除き、端末の機能はすべて使えます。毎日使っている自分のスマートフォンで、ほかの持ち主もインストールできる版を準備しています。',
    about:
      'MindOne はクレジットカードほどの大きさのスマートフォンです。サファイアガラスの下に正方形の AMOLED、ヒンジで回転して自撮りにも使えるカメラが 1 つ。ここまで小さな端末はめったにありません。新しいソフトウェアで使い続ける理由はそこにあります。',
    statementTitle: '古い部品に新しい塗装をしたのではなく、ハードウェアに近い層から順に、すべてを現在の Android へ。',
    statement:
      'Android の下には、画面、カメラ、音声、モバイル通信を動かすソフトウェアの層があります。非公式の Android の多くはこの元の層をそのまま残し、上だけを入れ替えます。それは古い部品が新しいシステムに合わなくなるまでの話です。メーカーは、チップを新しい Android に載せるとき、自社のソースコードとチームでこの層を作り直します。ここではそれを外側から一人で行いました。Google の最新のカーネルと MediaTek がこのチップ向けに公開しているドライバから始め、残りは端末そのものを調べて埋めています。',
  },
} as const;

export const overview = [
  {
    title: 'Android 17',
    note: 'LineageOS 24, on my own MindOne every day.',
    ja: { title: 'Android 17', note: 'LineageOS 24 で、自分の MindOne で毎日使っています。' },
  },
  {
    title: 'Everything works',
    note: 'Except the built-in virtual SIM.',
    ja: { title: 'すべての機能に対応', note: '内蔵の仮想 SIM を除きます。' },
  },
  {
    title: 'Download coming soon',
    note: 'The source code is already on GitHub.',
    ja: { title: 'ダウンロードは準備中', note: 'ソースコードはすでに GitHub で公開しています。' },
  },
] as const;

export const built = [
  {
    name: 'A current kernel',
    scale: 'Linux 6.12 · Google GKI',
    body: 'The kernel is the part of the system that talks directly to the hardware. The phone has moved from the old version it shipped with to Google’s current one, used as Google releases it, so Google’s security fixes reach it directly. Everything specific to the MindOne loads on top.',
    ja: { name: '新しいカーネル', scale: 'Linux 6.12 · Google GKI', body: 'カーネルは、システムの中でハードウェアと直接やりとりする部分です。出荷時の古い版から、Google が配布する現在の版にそのまま移りました。だから Google のセキュリティ修正がそのまま届きます。MindOne に固有のものは、その上に読み込まれます。' },
  },
  {
    name: 'The hardware, described again',
    scale: 'device tree, rebuilt from the stock binary',
    body: 'Before anything works, the system has to be told what is on the board and how it is wired together. The manufacturer never published that description, so it was rebuilt from the compiled copy inside the phone.',
    ja: { name: 'ハードウェアをもう一度記述する', scale: 'デバイスツリー、出荷時のバイナリから復元', body: '何かを動かす前に、基板に何が載っていてどうつながっているかをシステムに教える必要があります。メーカーはこの記述を公開していないので、端末の中にあったコンパイル済みのコピーから作り直しました。' },
  },
  {
    name: 'Open replacements for closed parts',
    scale: 'own Android services: audio, sensors, location, camera, video',
    body: 'Sound, sensors, location, the camera and video each go through a service written for this phone instead of the original closed one. Open code is what lets them move to new versions of Android, and what lets them be improved.',
    ja: { name: '閉じた部品をオープンな実装に', scale: '自作の Android サービス：音声、センサー、位置情報、カメラ、動画', body: '音声、センサー、位置情報、カメラ、動画は、元の非公開のものではなく、この端末のために書いたサービスを通ります。オープンなコードだから新しい Android に移せますし、改良もできます。' },
  },
  {
    name: 'Newer parts from sister phones',
    scale: 'donor components, extracted by whoever builds it',
    body: 'A few pieces that cannot be rewritten, such as graphics, come from newer phones on the same chip — Samsung’s Galaxy A07 among them — whose versions are made for current Android.',
    ja: { name: '同じチップの新しい端末から', scale: 'ドナー部品、ビルドする人が各自で取り出す', body: 'グラフィックスなど書き直せない一部の部品は、同じチップを積んだ新しい端末 — Samsung Galaxy A07 など — から借りています。どれも現在の Android 向けに作られた版です。' },
  },
] as const;

export const features = [
  { en: 'Calls and texts', ja: '通話と SMS' },
  { en: 'Mobile data', ja: 'モバイルデータ' },
  { en: 'Wi-Fi', ja: 'Wi-Fi' },
  { en: 'Bluetooth', ja: 'Bluetooth' },
  { en: 'NFC', ja: 'NFC' },
  { en: 'Flip camera', ja: '回転カメラ' },
  { en: 'Fingerprint', ja: '指紋認証' },
  { en: 'Speaker and microphone', ja: 'スピーカーとマイク' },
  { en: 'Smooth screen', ja: 'なめらかな画面' },
  { en: 'GPS', ja: 'GPS' },
  { en: 'Video', ja: '動画' },
  { en: 'Charging and sleep', ja: '充電とスリープ' },
  { en: 'USB', ja: 'USB' },
  { en: 'Snap keyboard case', ja: 'Snap キーボードケース' },
] as const;

export const development = [
  {
    name: 'A version you can install',
    body: 'A download on GitHub with step-by-step instructions, and later updates delivered through the phone’s own Updater app. It will come without Google apps, with a guide to adding them.',
    ja: { name: '自分の端末に入れられる版', body: 'GitHub でのダウンロードと、一つずつ説明したインストール手順。その後の更新は端末のアップデーターアプリから届きます。Google アプリは含めず、追加する方法を案内します。' },
  },
  {
    name: 'Everyday polish',
    body: 'Battery life, speed and reliability.',
    ja: { name: '毎日の使い心地', body: '電池持ち、速さ、安定性。' },
  },
  {
    name: 'Software for the Snap case',
    body: 'An Android app and new firmware for the Snap keyboard case, to remap its keys and adjust its headphone output.',
    ja: { name: 'Snap ケースのソフトウェア', body: 'Snap キーボードケース用の Android アプリと新しいファームウェア。キーの割り当てやヘッドホン出力を調整できるようにします。' },
  },
  {
    name: 'Staying current',
    body: 'Google’s kernel fixes as they come out, and future Android releases. The longer-term aim is official LineageOS support.',
    ja: { name: 'この先も新しく', body: 'Google のカーネル修正を出るたびに取り込み、今後の Android にもついていきます。長期的な目標は LineageOS の公式サポートです。' },
  },
] as const;

export const repos = [
  {
    name: 'Device tree · lineage-24.0',
    href: 'https://github.com/iasnezhkov/android_device_ikko_mindone',
    body: 'LineageOS 24 / Android 17: own AIDL services for audio, sensors, GNSS, the camera provider and the vibrator, in-tree V4L2 Codec2 video and Rust modem helpers, 64-bit only. The lineage-23.2 branch keeps Android 16.',
    ja: { body: 'LineageOS 24 / Android 17。音声、センサー、GNSS、カメラプロバイダ、バイブレーターの自作 AIDL サービス、ツリー内の V4L2 Codec2 による動画、Rust によるモデム補助ツール。64 ビットのみ。lineage-23.2 ブランチには Android 16 版が残っています。' },
  },
  {
    name: 'Kernel · android16-6.12',
    href: 'https://github.com/iasnezhkov/android_kernel_ikko_mindone',
    body: 'Device modules, DTB/DTBO and a Kleaf DDK build over Google’s android16-6.12 GKI core. The earlier android14-6.1 port is kept as history.',
    ja: { body: 'Google の android16-6.12 GKI コアの上に載るデバイスモジュール、DTB/DTBO、Kleaf DDK のビルド。以前の android14-6.1 の移植は履歴として残しています。' },
  },
] as const;

export const copy = {
  works: 'Everything the phone can do, except the built-in virtual SIM.',
  install:
    'Not yet. A ready-to-install build is being prepared; when it is out, this page will link to it, with instructions for putting it on a MindOne.',
  source:
    'Everything is on GitHub under open licences. The closed files the phone still needs are extracted by whoever builds it and are never stored in the repositories.',
  ja: {
    works: '内蔵の仮想 SIM を除き、端末の機能はすべて使えます。',
    install:
      'まだです。そのままインストールできる版を準備しています。公開したら、このページからダウンロード先と MindOne への導入手順を案内します。',
    source:
      'すべて GitHub でオープンなライセンスのもとに公開しています。端末がなお必要とする非公開のファイルはビルドする人が各自で取り出すもので、リポジトリには含めていません。',
  },
} as const;
