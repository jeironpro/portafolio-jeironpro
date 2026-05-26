export function lerp(start, end, t) {
    return start + (end - start) * t;
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export function formatUrl(url) {
    if (!url) return '#';
    return url.startsWith('http') ? url : `https://${url}`;
}
