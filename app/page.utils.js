function generateMock(symbol, points = 30) {
  const now = new Date();
  const labels = [];
  const prices = [];

  let base = symbol === "BTC" ? 60000 : 200;
  for (let i = points - 1; i >= 0; i--) {
    const t = new Date(now.getTime() - i * 60 * 60 * 1000);
    const hh = String(t.getHours()).padStart(2, "0");
    const mm = String(t.getMinutes()).padStart(2, "0");
    labels.push(`${hh}:${mm}`);

    const drift =
      symbol === "BTC"
        ? (Math.random() - 0.5) * 800
        : (Math.random() - 0.5) * 6;
    base = Math.max(1, base + drift);
    prices.push(Number(base.toFixed(2)));
  }

  return { labels, prices };
}

export function simulateFetch(symbol, ms = 900) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(generateMock(symbol)), ms);
  });
}

export const prettyTimeFormat = (lastUpdated) =>
  lastUpdated ? lastUpdated.toLocaleTimeString() : "—";
