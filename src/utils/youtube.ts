/**
 * YouTube URL Parser — 8 format patterns
 * Extracts 11-character video ID from any YouTube URL format.
 */

const PATTERNS: RegExp[] = [
  /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]{11})/,
  /(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?.*?v=([A-Za-z0-9_-]{11})/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([A-Za-z0-9_-]{11})/,
  /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([A-Za-z0-9_-]{11})/,
];

const RAW_ID = /^[A-Za-z0-9_-]{11}$/;

export function parseYouTubeUrl(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  if (RAW_ID.test(trimmed)) return trimmed;

  for (const pattern of PATTERNS) {
    const match = pattern.exec(trimmed);
    if (match) return match[1];
  }

  return null;
}

export function getThumbnailUrl(videoId: string, quality: 'default' | 'mq' | 'hq' | 'maxres' = 'mq'): string {
  const qualityMap = {
    default: 'default',
    mq: 'mqdefault',
    hq: 'hqdefault',
    maxres: 'maxresdefault',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}
