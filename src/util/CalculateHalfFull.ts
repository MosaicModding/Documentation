export default function calculateHalfFull(count: number) {
    const full = Math.floor(count / 2);
    const half = count % 2;
    return { full, half };
}