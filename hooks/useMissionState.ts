import { useEffect, useState } from 'react';

export type Phase = 'briefing' | 'countdown' | 'mission' | 'launching' | 'arrived';
export type PartKey = 'motor' | 'capsula' | 'combustivel';

export function useMissionState() {
  const [phase, setPhase] = useState<Phase>('briefing');
  const [countdown, setCountdown] = useState(3);
  const [parts, setParts] = useState<Record<PartKey, boolean>>({ motor: false, capsula: false, combustivel: false });
  const [now, setNow] = useState(() => Date.now());
  const collected = Object.values(parts).filter(Boolean).length;

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase !== 'countdown') return;
    if (countdown <= 0) return setPhase('mission');
    const timer = setTimeout(() => setCountdown((value) => value - 1), 850);
    return () => clearTimeout(timer);
  }, [phase, countdown]);

  return {
    phase,
    countdown,
    parts,
    collected,
    now,
    start: () => { setCountdown(3); setPhase('countdown'); },
    collect: (key: PartKey) => setParts((current) => ({ ...current, [key]: true })),
    setPhase,
  };
}
