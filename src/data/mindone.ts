export type Support = 'works' | 'partial' | 'none';
export type RepoState = 'current' | 'archive';

export const MARK: Record<Support, string> = {
  works: '●',
  partial: '◐',
  none: '○',
};

export const SUPPORT_LABEL: Record<Support, string> = {
  works: 'Working',
  partial: 'Unfinished',
  none: 'Not working',
};

export const SUPPORT_LABEL_JA: Record<Support, string> = {
  works: '動作',
  partial: '未完成',
  none: '未対応',
};

export const REPO_LABEL: Record<RepoState, string> = {
  current: 'Current',
  archive: 'Archive',
};

export const REPO_LABEL_JA: Record<RepoState, string> = {
  current: '現行',
  archive: 'アーカイブ',
};

export const updated = new Date('2026-09-16');

export const device = {
  name: 'iKKO MindOne',
  soc: 'MT6789 / MT8781',
  blurb:
    'A device tree and two kernels for the iKKO MindOne, a MediaTek Helio G99 phone shipped with no published source: Linux 6.12 current, the 6.1 port archived.',
  tagline:
    'A reconstructed device tree, two kernels and the userspace to go with them — the whole support stack a vendor would normally own, built from the outside and published.',
  summary:
    'Linux 6.12 is the kernel this phone runs every day; the 6.1 forward-port it grew out of is kept beside it as an archive. With them came 339 out-of-tree driver trees, 290 of which load at boot, and a device tree decoded out of a compiled blob back into readable source. Above the kernel the closed userspace is being rewritten in the open, one piece at a time — an audio HAL, a sensors HAL and four HIDL→AIDL bridges so far — because a binary that works is still a binary nobody can tune, and it stays on the Android release it was built for.',
  about:
    'The MindOne is a retail phone on a MediaTek Helio G99: card-sized, a square AMOLED behind sapphire, one 50 MP lens on a flip module that serves as both cameras. It is here because it is what the work had to fit — this is not a page about buying one. It shipped on Linux 5.10 over an Android-12-era vendor image, and every layer above the bootloader has since been replaced by the two repositories below.',
  statement:
    'No vendor kernel source, no vendor device tree, no reference board support package, and no vendor contact of any kind — none of it was available or offered. The base is Google’s Android Common Kernel; the out-of-tree drivers start from the GPL sources MediaTek is required to release for the chip family, then had to be fixed board by board. What makes it a support stack rather than a configuration is how much of it had to be written: 172 of 339 driver trees carry corrections, ten modules exist only here, and the device tree was decoded out of a binary because there was nothing else to read.',
  specs: [
    { label: 'SoC', value: 'MediaTek MT6789 / MT8781V-CA · Helio G99, 6 nm', ja: { label: 'SoC', value: 'MediaTek MT6789 / MT8781V-CA · Helio G99、6 nm' } },
    { label: 'CPU', value: '2 × Cortex-A76 @ 2.2 GHz + 6 × Cortex-A55 @ 2.0 GHz', ja: { label: 'CPU', value: 'Cortex-A76 2.2 GHz × 2 + Cortex-A55 2.0 GHz × 6' } },
    { label: 'GPU', value: 'Mali-G57 MC2', ja: { label: 'GPU', value: 'Mali-G57 MC2' } },
    { label: 'Memory', value: '8 GB RAM · 256 GB UFS', ja: { label: 'メモリ', value: 'RAM 8 GB · ストレージ 256 GB（UFS）' } },
    { label: 'Display', value: '4.02″ AMOLED behind sapphire, 1080 × 1240', ja: { label: 'ディスプレイ', value: '4.02 インチ AMOLED、サファイアカバー、1080 × 1240' } },
    { label: 'Camera', value: 'Sony IMX766, 50 MP, on a 180° flip module — rear and front both', ja: { label: 'カメラ', value: 'Sony IMX766、5000 万画素、180° 反転モジュール — 背面と前面を兼ねる' } },
    { label: 'Body', value: '86 × 72 × 8.9 mm · 2 200 mAh', ja: { label: '本体', value: '86 × 72 × 8.9 mm · 2,200 mAh' } },
    { label: 'Radio', value: 'LTE, no 5G · NFC · a built-in virtual SIM', ja: { label: '通信', value: 'LTE（5G なし）· NFC · 内蔵の仮想 SIM' } },
    { label: 'Shipped with', value: 'Linux 5.10.233 on an android12-5.10 vendor kernel · Android 15', ja: { label: '出荷時', value: 'android12-5.10 ベンダーカーネル上の Linux 5.10.233 · Android 15' } },
    { label: 'Runs now', value: 'Linux 6.12.92 from this tree · LineageOS 23.2, Android 16', ja: { label: '現在', value: 'このツリーの Linux 6.12.92 · LineageOS 23.2、Android 16' } },
  ],
  ja: {
    blurb:
      'iKKO MindOne — ソースが一切公開されていない MediaTek Helio G99 端末のためのデバイスツリーとカーネル 2 本。6.12 が現行、6.1 の移植はアーカイブ。',
    tagline:
      '復元したデバイスツリーと 2 本のカーネル、そしてその上のユーザー空間。本来ベンダーが担うサポート一式を、外側から作って公開しました。',
    summary:
      'この端末が毎日動いているのは Linux 6.12 です。その手前の 6.1 の移植も、アーカイブとして隣に残しています。あわせてカーネル外のドライバツリーが 339、うち 290 モジュールが起動時に読み込まれ、デバイスツリーはコンパイル済みバイナリから読める形に復元しました。カーネルより上のクローズドな部分も一つずつオープンに書き直しています — 今のところ音声 HAL、センサー HAL、HIDL→AIDL ブリッジ 4 本。動いていても読めないバイナリは調整できず、作られた時点の Android から動けないからです。',
    about:
      'MindOne は MediaTek Helio G99 を積んだ市販の端末です。カードサイズ、サファイアの下に正方形の AMOLED、5000 万画素のレンズ 1 枚が反転して前面カメラにも背面カメラにもなります。ここに諸元を載せているのは、作業がこの条件に合わせる必要があったからで、端末を勧めるためのページではありません。出荷時は Android 12 世代のベンダーイメージ上の Linux 5.10 で、ブートローダーより上はすべて、下に挙げた 2 つのリポジトリで置き換わっています。',
    statement:
      'ベンダーのカーネルソースも、デバイスツリーも、リファレンス BSP も、問い合わせ先すら、手に入るものは何一つありませんでした。土台は Google の Android Common Kernel、カーネル外のドライバは MediaTek がチップ向けに公開を義務づけられている GPL ソースから始めて、基板に合わせて一つずつ直しています。これが設定作業ではなくサポート一式である理由は、書かなければならなかった量にあります — 339 のドライバツリーのうち 172 に自前の修正が入り、10 個のモジュールはここにしか存在せず、デバイスツリーは他に読むものがないのでバイナリから解いてきました。',
  },
} as const;

export const repos = [
  {
    name: 'Kernel · android16-6.12',
    state: 'current',
    href: 'https://github.com/iasnezhkov/android_kernel_ikko_mindone',
    version: 'Linux 6.12.92',
    body: 'Google’s Android Common Kernel at android16-6.12-lts, forward-ported by hand and carrying the device support: the reconstructed device tree, a 752-option defconfig, and 339 out-of-tree driver trees of which 290 modules load on the running phone. Two kernel generations past what the phone shipped with, and the branch everything goes into. Two builds from the same tree and toolchain produce a byte-identical Image, so what the phone runs and what a clean clone gives you are one artefact.',
    ja: { body: 'Google の Android Common Kernel、ブランチ android16-6.12-lts を手作業で移植し、デバイスサポートを載せたものです。復元したデバイスツリー、752 項目の defconfig、カーネル外のドライバツリー 339 本、そのうち 290 モジュールが実機で読み込まれます。出荷時のカーネルから 2 世代先で、現在の作業はすべてこのブランチに入ります。同じツリーと同じツールチェーンでの 2 回のビルドはバイト単位で同一の Image を出すので、端末で動いているものとクリーンなクローンから得られるものは同一物です。' },
  },
  {
    name: 'Kernel · android14-6.1',
    state: 'archive',
    href: 'https://github.com/iasnezhkov/android_kernel_ikko_mindone/tree/android14-6.1',
    version: 'Linux 6.1.175',
    body: 'The first forward-port off the original vendor kernel, and the step that made 6.12 possible: this is where the device tree and most of the driver work were first proven on real hardware. It ran as the daily kernel until 6.12 replaced it. Kept as history and unmaintained — no fixes, no security backports, no testing. The drivers are not duplicated there; they live on the 6.12 branch and build against either kernel through one compatibility header.',
    ja: { body: '元のベンダーカーネルからの最初の移植で、6.12 を可能にした一段です。デバイスツリーとドライバ作業の大半が実機で最初に確かめられたのはここでした。6.12 に置き換わるまでは日常用のカーネルとして動いていました。履歴として残していますが保守はしていません — 修正も、セキュリティのバックポートも、テストもありません。ドライバはここには重複して置かれておらず、6.12 ブランチにあって互換ヘッダ 1 枚でどちらのカーネルにも通ります。' },
  },
  {
    name: 'Device tree · lineage-23.2',
    state: 'current',
    href: 'https://github.com/iasnezhkov/android_device_ikko_mindone',
    version: 'LineageOS 23.2 · Android 16',
    body: 'Where a LineageOS device tree normally carries configuration, this one carries about 16 400 lines of working code, because the closed userspace is being replaced rather than repackaged. A complete primary audio HAL, a sensors HAL straight onto the kernel’s hf_manager, four HIDL→AIDL bridges keeping the vendor HALs that have not been rewritten yet alive as the VINTF level rises, and an open modem userspace stack. The whole super partition built here — system, vendor, product, system_ext and both dlkm images — is what the device boots.',
    ja: { body: 'LineageOS のデバイスツリーは普通は設定を運ぶものですが、ここには約 16,400 行の実装が入っています。クローズドなユーザー空間を、そのまま包み直すのではなく書き直しているからです。完全なプライマリ音声 HAL、カーネルの hf_manager に直結したセンサー HAL、VINTF のレベルが上がるなかでまだ書き直していないベンダー HAL を生かす HIDL→AIDL ブリッジ 4 本、そしてオープンなモデム用ユーザー空間。ここでビルドした super パーティション一式 — system、vendor、product、system_ext、両方の dlkm — がそのまま端末で起動します。' },
  },
] as const;

export const built = [
  {
    name: 'The device tree',
    scale: '18 .dtsi + 1 .dts',
    body: 'Decompiled out of the stock DTB pulled from the device’s own vendor_boot — a compiled binary, not source — and rebuilt to readable .dts and .dtsi covering clocks, pinctrl, regulators, display, camera, audio, thermal and reserved memory. Zero dtc warnings. Shared by both kernels.',
    ja: { name: 'デバイスツリー', scale: '18 の .dtsi と 1 つの .dts', body: '端末自身の vendor_boot から取り出した出荷時 DTB — ソースではなくコンパイル済みバイナリ — を逆コンパイルし、クロック、pinctrl、レギュレータ、ディスプレイ、カメラ、音声、サーマル、予約メモリまでを読める .dts / .dtsi に組み直しました。dtc の警告はゼロ。2 本のカーネルで共有しています。' },
  },
  {
    name: 'Audio HAL',
    scale: '1 800 lines',
    body: 'A complete primary HAL for MediaTek AFE, written to replace the vendor binary rather than wrap it — which is what put the audio path within reach at all. The loudspeaker’s high-pass and shared limiter are tuning of a kind a blob does not allow; the microphone needed the codec’s digital-mic path enabled and the analog type left alone, and with stock mixer settings it recorded silence and reported no error.',
    ja: { name: '音声 HAL', scale: '1,800 行', body: 'MediaTek AFE 向けの完全なプライマリ HAL で、ベンダーのバイナリを包むのではなく置き換えるために書きました — そもそも音声経路に手が届くようになったのはそのおかげです。スピーカーのハイパスと共有リミッタはバイナリのままでは不可能な調整ですし、マイクはコーデックのデジタルマイク経路を有効にし、アナログ種別は触らない必要がありました。出荷時のミキサー設定では無音を録音して、エラーも出しません。' },
  },
  {
    name: 'Sensors HAL',
    scale: '2 400 lines',
    body: 'An open implementation in place of the vendor one, straight onto the kernel’s hf_manager interface, with calibration read from the factory nvcfg partition. Both worker threads block on real events, so with every sensor off the HAL causes no wake-ups at all — the sort of thing that only becomes fixable once the code is yours.',
    ja: { name: 'センサー HAL', scale: '2,400 行', body: 'ベンダー実装に代わるオープンな実装で、カーネルの hf_manager インターフェースに直結し、較正値は工場出荷時の nvcfg パーティションから読みます。2 本のワーカースレッドはいずれも実イベントで待つので、全センサーを切れば HAL はウェイクアップを一切起こしません — コードが自分のものになって初めて直せる類の話です。' },
  },
  {
    name: 'HIDL→AIDL bridges',
    scale: '2 100 lines',
    body: 'Four services — fingerprint, gatekeeper, secure element, tethering offload — proxying AIDL to the closed HIDL HALs that have not been rewritten yet, each surviving its peer dying rather than binding once at start. Groundwork for Android 17 rather than a requirement of 16: this is the seam that lets a device move to a VINTF level its vendor binaries were never built for.',
    ja: { name: 'HIDL→AIDL ブリッジ', scale: '2,100 行', body: '指紋、gatekeeper、セキュアエレメント、テザリングオフロードの 4 つのサービスが、まだ書き直していないクローズドな HIDL HAL へ AIDL を橋渡しします。起動時に一度バインドして終わりではなく、相手が落ちても生き延びます。Android 16 の要件ではなく Android 17 への地ならし — ベンダーバイナリが想定していない VINTF レベルへ端末を動かせるのは、この継ぎ目があるからです。' },
  },
  {
    name: 'Ten kernel modules',
    scale: 'no vendor equivalent',
    body: 'Thermal zones the stock tables never described, a PMIC guard that re-arms interrupt enables after resume, storage and RF regulator behaviour specific to this board, and the bring-up instrumentation that kept paying for itself and so stayed in the tree.',
    ja: { name: 'カーネルモジュール 10 本', scale: 'ベンダーに相当物なし', body: '出荷時のテーブルが記述していなかったサーマルゾーン、復帰後に PMIC の割り込み有効化を張り直すガード、この基板固有のストレージと RF レギュレータの挙動、そして何度も役に立ったのでツリーに残した立ち上げ用の計測コード。' },
  },
  {
    name: 'A reconstructed musb driver',
    scale: 'rebuilt from behaviour',
    body: 'MediaTek’s USB controller driver, rebuilt. It fixes a defect that stopped the device suspending at all: on cable unplug the gadget teardown ran before the disconnect work, leaving the driver’s own release path unreachable and its wakeup source held forever.',
    ja: { name: '復元した musb ドライバ', scale: '挙動から再構築', body: 'MediaTek の USB コントローラドライバを組み直したものです。端末がまったくサスペンドできなくなる不具合を直します — ケーブルを抜くとガジェットの後片付けが切断処理より先に走り、ドライバ自身の解放経路に到達できないまま wakeup source が握られっぱなしになっていました。' },
  },
  {
    name: 'Modem userspace',
    scale: '10 000 lines · not shipped',
    body: 'An open CCCI stack — the file service the modem needs at boot, the boot and state daemon, the RPC daemon, a line-discipline mux and a minimal RIL. Deliberately left out of the ROM: the RIL implements 27 of 201 methods and emergency dialling is still a stub, which disqualifies it from a phone anyone carries.',
    ja: { name: 'モデム用ユーザー空間', scale: '10,000 行・未同梱', body: 'オープンな CCCI スタック — 起動時にモデムが必要とするファイルサービス、起動と状態管理のデーモン、RPC デーモン、ライン規律の多重化、そして最小限の RIL。ROM には意図的に入れていません。RIL は 201 メソッド中 27 しか実装しておらず、緊急発信はまだスタブです。人が持ち歩く電話に載せるものではありません。' },
  },
] as const;

export const support = [
  {
    subsystem: 'Display',
    state: 'works',
    note: 'Panel, backlight, sleep and wake. Sold as 90 Hz; the panel is actually driven at 96, and the compositor’s frame budget had to be resized to the real 10.4 ms period — that one correction took the 90th-percentile frame from 150 ms to 25 ms.',
    ja: { subsystem: 'ディスプレイ', note: 'パネル、バックライト、スリープと復帰。カタログは 90 Hz ですが、実際にパネルを駆動しているのは 96 Hz です。コンポジタのフレーム予算を本当の周期 10.4 ms に合わせ直したところ、90 パーセンタイルのフレームが 150 ms から 25 ms になりました。' },
  },
  {
    subsystem: 'Audio',
    state: 'works',
    note: 'Speaker, earpiece, microphone, Bluetooth A2DP and in-call audio, through the HAL written here. The loudspeaker gets a 180 Hz high-pass and a limiter shared across channels, so peaks do not shift the stereo image.',
    ja: { subsystem: '音声', note: 'スピーカー、受話口、マイク、Bluetooth A2DP、通話音声 — すべてここで書いた HAL を通ります。スピーカーには 180 Hz のハイパスとチャンネル共有のリミッタを入れ、ピークでステレオ像がずれないようにしています。' },
  },
  {
    subsystem: 'Cellular',
    state: 'works',
    note: 'Calls, SMS and mobile data on a live network, over the stock modem stack. The open stack built alongside it is not what the ROM runs.',
    ja: { subsystem: '携帯通信', note: '通話、SMS、モバイルデータを実回線で確認。モデムスタックは出荷時のものです。並行して作ったオープンなスタックは ROM には入れていません。' },
  },
  {
    subsystem: 'Wireless',
    state: 'works',
    note: 'Wi-Fi, Bluetooth and NFC. Wi-Fi is brought up from inside the kernel module, and the regulatory country code is set there too or association never happens.',
    ja: { subsystem: '無線', note: 'Wi-Fi、Bluetooth、NFC。Wi-Fi はカーネルモジュールの内側から立ち上げ、規制上のカントリーコードもそこで設定します。設定しないと接続まで至りません。' },
  },
  {
    subsystem: 'Camera',
    state: 'works',
    note: 'Both logical cameras of the flip module — stills and video.',
    ja: { subsystem: 'カメラ', note: '反転モジュールの論理カメラ 2 つとも — 静止画と動画。' },
  },
  {
    subsystem: 'Fingerprint',
    state: 'works',
    note: 'Enrolment and matching. The matching itself runs inside a closed trustlet and always will.',
    ja: { subsystem: '指紋', note: '登録と照合。照合そのものはクローズドな trustlet の中で動いていて、これは今後も変わりません。' },
  },
  {
    subsystem: 'USB',
    state: 'works',
    note: 'adb and MTP. The gadget used to enumerate, live two seconds and vanish — reproduced on a completely stock image, which is how it was established that the defect shipped from the factory rather than arriving with this work.',
    ja: { subsystem: 'USB', note: 'adb と MTP。以前はガジェットが認識されて 2 秒で消えていました。完全な出荷時イメージでも再現したので、この不具合は今回の作業で入ったものではなく工場出荷時からあったと確認できました。' },
  },
  {
    subsystem: 'Power',
    state: 'works',
    note: 'Charging through a driver recovered from the factory binary, thermal zones for both CPU clusters and the GPU, and suspend and resume off the cable.',
    ja: { subsystem: '電源', note: '工場出荷のバイナリから復元したドライバによる充電、CPU の両クラスタと GPU のサーマルゾーン、ケーブルを抜いた状態でのサスペンドと復帰。' },
  },
  {
    subsystem: 'RPMB',
    state: 'partial',
    note: 'Hardware-backed key storage fails its MAC check. Storage falls back safely and boot is unaffected. The likely cause is that the boot path derives a different key from the one programmed at the factory, which may make it unfixable without factory key material.',
    ja: { subsystem: 'RPMB', note: 'ハードウェア鍵ストレージが MAC 検証に失敗します。ストレージは安全に縮退し、起動には影響しません。起動経路が工場で書き込まれた鍵とは別の鍵を導出している可能性が高く、そうであれば工場の鍵素材なしには直せません。' },
  },
  {
    subsystem: 'Second slot',
    state: 'none',
    note: 'All six logical partitions of both A/B slots start at the same offset inside super, so “flash to the spare slot and try it” does not exist on this device. Not a hardware fault — a consequence of how installs are done, and fixable by rewriting that slot’s metadata first.',
    ja: { subsystem: 'もう一方のスロット', note: 'A/B 両スロットの論理パーティション 6 つがすべて super 内の同じオフセットから始まるため、この端末に「空いているスロットに焼いて試す」は存在しません。ハードウェアの欠陥ではなく、インストールのやり方から来る結果で、先にそのスロットのメタデータを書き直せば解決します。' },
  },
  {
    subsystem: 'Virtual SIM',
    state: 'none',
    note: 'The built-in vSIM the phone is sold on. Parked deliberately, not attempted.',
    ja: { subsystem: '仮想 SIM', note: 'この端末の売りである内蔵 vSIM。意図的に手をつけていません。' },
  },
] as const;

export const figures = [
  { group: 'Kernel 6.12', value: '6.12.92', label: 'running every day', ja: { group: 'カーネル 6.12', label: '日常的に稼働中' } },
  { group: 'Kernel 6.12', value: '290', label: 'modules loaded at boot', ja: { group: 'カーネル 6.12', label: '起動時に読み込まれるモジュール' } },
  { group: 'Kernel 6.12', value: '339', label: 'driver trees built from source', ja: { group: 'カーネル 6.12', label: 'ソースからビルドするドライバツリー' } },
  { group: 'Kernel 6.12', value: '172', label: 'of them carrying fixes of my own', ja: { group: 'カーネル 6.12', label: 'うち自前の修正が入っているもの' } },
  { group: 'Written here', value: '10', label: 'kernel modules with no vendor equivalent', ja: { group: 'ここで書いたもの', label: 'ベンダーに相当物がないカーネルモジュール' } },
  { group: 'Written here', value: '16 400', label: 'lines of code in the device tree', ja: { group: 'ここで書いたもの', label: 'デバイスツリーの実装行数' } },
  { group: 'Written here', value: '18', label: 'device-tree sources out of a binary blob', ja: { group: 'ここで書いたもの', label: 'バイナリから起こしたデバイスツリーのソース' } },
] as const;

export const tested = [
  { label: 'Daily use', value: 'Yes — this is my phone: calls, data, camera, audio, sensors, charging, suspend.', ja: { label: '日常利用', value: 'あり — 自分の端末です。通話、データ通信、カメラ、音声、センサー、充電、サスペンド。' } },
  { label: 'Own system images', value: 'Yes. The whole super partition built from this tree is written to the device and booted.', ja: { label: '自前のシステムイメージ', value: 'あり。このツリーからビルドした super パーティション一式を端末に書き込み、そこから起動しています。' } },
  { label: 'VTS / CTS', value: 'No. Neither suite has been run. There is no compatibility evidence, and none is claimed.', ja: { label: 'VTS / CTS', value: 'なし。どちらも実行していません。互換性の裏づけは存在せず、主張もしません。' } },
  { label: 'Certification', value: 'None, by anyone.', ja: { label: '認証', value: 'いかなる認証もありません。' } },
  { label: 'Reproducible builds', value: 'Kernel only, on one machine into one output path. A different absolute build path is untested.', ja: { label: '再現ビルド', value: 'カーネルのみ、1 台のマシンで同じ出力先に対して確認。異なる絶対パスでのビルドは未検証です。' } },
] as const;

export const tech = [
  'Linux 6.12',
  'C',
  'AArch64',
  'MediaTek MT6789',
  'Android GKI/KMI',
  'Device Tree',
  'Clang/LLVM',
  'Ghidra',
  'AOSP',
  'LineageOS',
  'Android HAL',
  'Python',
] as const;

export const copy = {
  source:
    'Both repositories build from source with no vendor binary involved, and the ABI a clean clone produces is the one the device is running. The kernel repository keeps a branch per kernel version, the way the Android Common Kernel itself does: build android16-6.12, and the device tree against it.',
  notPublished:
    'The proprietary userspace this phone still needs — radio, GPU drivers, camera libraries, and the HALs not yet rewritten — is not in either repository and never will be; each user extracts it from their own device. Neither are the MediaTek and iKKO binaries: bootloader, secure firmware, coprocessor images, modem firmware, or this unit’s own partition dumps.',
  ja: {
    source:
      'どちらのリポジトリもベンダーのバイナリを使わずソースからビルドでき、クリーンなクローンが生む ABI は端末で動いているものと同じです。カーネルのリポジトリは Android Common Kernel 自身と同じく、カーネルのバージョンごとにブランチを持ちます。android16-6.12 をビルドし、デバイスツリーをそれに対してビルドしてください。',
    notPublished:
      'この端末がなお必要とするプロプライエタリなユーザー空間 — 無線、GPU ドライバ、カメラライブラリ、そしてまだ書き直していない HAL — はどちらのリポジトリにもありませんし、今後も置きません。各自が自分の端末から取り出すものです。MediaTek と iKKO のバイナリも同様で、ブートローダー、セキュアファームウェア、コプロセッサのイメージ、モデムファームウェア、この個体のパーティションダンプは含みません。',
  },
} as const;

/** Groups keep the order they appear in, so this file controls the reading order. */
export function grouped<T extends { group: string }>(
  items: readonly T[],
): { name: string; items: T[] }[] {
  const out: { name: string; items: T[] }[] = [];
  for (const item of items) {
    const last = out.at(-1);
    if (last && last.name === item.group) last.items.push(item);
    else out.push({ name: item.group, items: [item] });
  }
  return out;
}
