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

export const REPO_LABEL: Record<RepoState, string> = {
  current: 'Current',
  archive: 'Archive',
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
    { label: 'SoC', value: 'MediaTek MT6789 / MT8781V-CA · Helio G99, 6 nm' },
    { label: 'CPU', value: '2 × Cortex-A76 @ 2.2 GHz + 6 × Cortex-A55 @ 2.0 GHz' },
    { label: 'GPU', value: 'Mali-G57 MC2' },
    { label: 'Memory', value: '8 GB RAM · 256 GB UFS' },
    { label: 'Display', value: '4.02″ AMOLED behind sapphire, 1080 × 1240' },
    { label: 'Camera', value: 'Sony IMX766, 50 MP, on a 180° flip module — rear and front both' },
    { label: 'Body', value: '86 × 72 × 8.9 mm · 2 200 mAh' },
    { label: 'Radio', value: 'LTE, no 5G · NFC · a built-in virtual SIM' },
    { label: 'Shipped with', value: 'Linux 5.10.233 on an android12-5.10 vendor kernel · Android 15' },
    { label: 'Runs now', value: 'Linux 6.12.92 from this tree · LineageOS 23.2, Android 16' },
  ],
} as const;

export const repos = [
  {
    name: 'Kernel · android16-6.12',
    state: 'current',
    href: 'https://github.com/iasnezhkov/android_kernel_ikko_mindone',
    version: 'Linux 6.12.92',
    body: 'Google’s Android Common Kernel at android16-6.12-lts, forward-ported by hand and carrying the device support: the reconstructed device tree, a 752-option defconfig, and 339 out-of-tree driver trees of which 290 modules load on the running phone. Two kernel generations past what the phone shipped with, and the branch everything goes into. Two builds from the same tree and toolchain produce a byte-identical Image, so what the phone runs and what a clean clone gives you are one artefact.',
  },
  {
    name: 'Kernel · android14-6.1',
    state: 'archive',
    href: 'https://github.com/iasnezhkov/android_kernel_ikko_mindone/tree/android14-6.1',
    version: 'Linux 6.1.175',
    body: 'The first forward-port off the original vendor kernel, and the step that made 6.12 possible: this is where the device tree and most of the driver work were first proven on real hardware. It ran as the daily kernel until 6.12 replaced it. Kept as history and unmaintained — no fixes, no security backports, no testing. The drivers are not duplicated there; they live on the 6.12 branch and build against either kernel through one compatibility header.',
  },
  {
    name: 'Device tree · lineage-23.2',
    state: 'current',
    href: 'https://github.com/iasnezhkov/android_device_ikko_mindone',
    version: 'LineageOS 23.2 · Android 16',
    body: 'Where a LineageOS device tree normally carries configuration, this one carries about 16 400 lines of working code, because the closed userspace is being replaced rather than repackaged. A complete primary audio HAL, a sensors HAL straight onto the kernel’s hf_manager, four HIDL→AIDL bridges keeping the vendor HALs that have not been rewritten yet alive as the VINTF level rises, and an open modem userspace stack. The whole super partition built here — system, vendor, product, system_ext and both dlkm images — is what the device boots.',
  },
] as const;

export const built = [
  {
    name: 'The device tree',
    scale: '18 .dtsi + 1 .dts',
    body: 'Decompiled out of the stock DTB pulled from the device’s own vendor_boot — a compiled binary, not source — and rebuilt to readable .dts and .dtsi covering clocks, pinctrl, regulators, display, camera, audio, thermal and reserved memory. Zero dtc warnings. Shared by both kernels.',
  },
  {
    name: 'Audio HAL',
    scale: '1 800 lines',
    body: 'A complete primary HAL for MediaTek AFE, written to replace the vendor binary rather than wrap it — which is what put the audio path within reach at all. The loudspeaker’s high-pass and shared limiter are tuning of a kind a blob does not allow; the microphone needed the codec’s digital-mic path enabled and the analog type left alone, and with stock mixer settings it recorded silence and reported no error.',
  },
  {
    name: 'Sensors HAL',
    scale: '2 400 lines',
    body: 'An open implementation in place of the vendor one, straight onto the kernel’s hf_manager interface, with calibration read from the factory nvcfg partition. Both worker threads block on real events, so with every sensor off the HAL causes no wake-ups at all — the sort of thing that only becomes fixable once the code is yours.',
  },
  {
    name: 'HIDL→AIDL bridges',
    scale: '2 100 lines',
    body: 'Four services — fingerprint, gatekeeper, secure element, tethering offload — proxying AIDL to the closed HIDL HALs that have not been rewritten yet, each surviving its peer dying rather than binding once at start. Groundwork for Android 17 rather than a requirement of 16: this is the seam that lets a device move to a VINTF level its vendor binaries were never built for.',
  },
  {
    name: 'Ten kernel modules',
    scale: 'no vendor equivalent',
    body: 'Thermal zones the stock tables never described, a PMIC guard that re-arms interrupt enables after resume, storage and RF regulator behaviour specific to this board, and the bring-up instrumentation that kept paying for itself and so stayed in the tree.',
  },
  {
    name: 'A reconstructed musb driver',
    scale: 'rebuilt from behaviour',
    body: 'MediaTek’s USB controller driver, rebuilt. It fixes a defect that stopped the device suspending at all: on cable unplug the gadget teardown ran before the disconnect work, leaving the driver’s own release path unreachable and its wakeup source held forever.',
  },
  {
    name: 'Modem userspace',
    scale: '10 000 lines · not shipped',
    body: 'An open CCCI stack — the file service the modem needs at boot, the boot and state daemon, the RPC daemon, a line-discipline mux and a minimal RIL. Deliberately left out of the ROM: the RIL implements 27 of 201 methods and emergency dialling is still a stub, which disqualifies it from a phone anyone carries.',
  },
] as const;

export const support = [
  {
    subsystem: 'Display',
    state: 'works',
    note: 'Panel, backlight, sleep and wake. Sold as 90 Hz; the panel is actually driven at 96, and the compositor’s frame budget had to be resized to the real 10.4 ms period — that one correction took the 90th-percentile frame from 150 ms to 25 ms.',
  },
  {
    subsystem: 'Audio',
    state: 'works',
    note: 'Speaker, earpiece, microphone, Bluetooth A2DP and in-call audio, through the HAL written here. The loudspeaker gets a 180 Hz high-pass and a limiter shared across channels, so peaks do not shift the stereo image.',
  },
  {
    subsystem: 'Cellular',
    state: 'works',
    note: 'Calls, SMS and mobile data on a live network, over the stock modem stack. The open stack built alongside it is not what the ROM runs.',
  },
  {
    subsystem: 'Wireless',
    state: 'works',
    note: 'Wi-Fi, Bluetooth and NFC. Wi-Fi is brought up from inside the kernel module, and the regulatory country code is set there too or association never happens.',
  },
  {
    subsystem: 'Camera',
    state: 'works',
    note: 'Both logical cameras of the flip module — stills and video.',
  },
  {
    subsystem: 'Fingerprint',
    state: 'works',
    note: 'Enrolment and matching. The matching itself runs inside a closed trustlet and always will.',
  },
  {
    subsystem: 'USB',
    state: 'works',
    note: 'adb and MTP. The gadget used to enumerate, live two seconds and vanish — reproduced on a completely stock image, which is how it was established that the defect shipped from the factory rather than arriving with this work.',
  },
  {
    subsystem: 'Power',
    state: 'works',
    note: 'Charging through a driver recovered from the factory binary, thermal zones for both CPU clusters and the GPU, and suspend and resume off the cable.',
  },
  {
    subsystem: 'RPMB',
    state: 'partial',
    note: 'Hardware-backed key storage fails its MAC check. Storage falls back safely and boot is unaffected. The likely cause is that the boot path derives a different key from the one programmed at the factory, which may make it unfixable without factory key material.',
  },
  {
    subsystem: 'Second slot',
    state: 'none',
    note: 'All six logical partitions of both A/B slots start at the same offset inside super, so “flash to the spare slot and try it” does not exist on this device. Not a hardware fault — a consequence of how installs are done, and fixable by rewriting that slot’s metadata first.',
  },
  {
    subsystem: 'Virtual SIM',
    state: 'none',
    note: 'The built-in vSIM the phone is sold on. Parked deliberately, not attempted.',
  },
] as const;

export const figures = [
  { group: 'Kernel 6.12', value: '6.12.92', label: 'running every day' },
  { group: 'Kernel 6.12', value: '290', label: 'modules loaded at boot' },
  { group: 'Kernel 6.12', value: '339', label: 'driver trees built from source' },
  { group: 'Kernel 6.12', value: '172', label: 'of them carrying fixes of my own' },
  { group: 'Written here', value: '10', label: 'kernel modules with no vendor equivalent' },
  { group: 'Written here', value: '16 400', label: 'lines of code in the device tree' },
  { group: 'Written here', value: '18', label: 'device-tree sources out of a binary blob' },
] as const;

export const tested = [
  { label: 'Daily use', value: 'Yes — this is my phone: calls, data, camera, audio, sensors, charging, suspend.' },
  { label: 'Own system images', value: 'Yes. The whole super partition built from this tree is written to the device and booted.' },
  { label: 'VTS / CTS', value: 'No. Neither suite has been run. There is no compatibility evidence, and none is claimed.' },
  { label: 'Certification', value: 'None, by anyone.' },
  { label: 'Reproducible builds', value: 'Kernel only, on one machine into one output path. A different absolute build path is untested.' },
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
