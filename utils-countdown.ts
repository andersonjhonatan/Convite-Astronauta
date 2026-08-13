const EVENT_DATE = new Date('2026-11-21T18:30:00-03:00');

export function getCountdown(now: number) {
  const remaining = Math.max(0, EVENT_DATE.getTime() - now);
  const total = Math.floor(remaining / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
