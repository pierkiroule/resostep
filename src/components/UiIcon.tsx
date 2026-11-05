type IconName = 'help' | 'type' | 'text' | 'sound' | 'stop' | 'up' | 'close' | 'pause' | 'play' | 'check' | 'arrow' | 'renew';
export function UiIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-1 .4-1 1.2-1 2.2M12 17h.01" /></>,
    type: <><path d="m3 18 5-12 5 12M5 14h6m4-6h6m-3 0v10m-3 0h6" /></>,
    text: <><path d="M4 6h16M4 12h16M4 18h10" /></>,
    sound: <><path d="m11 5-6 4H2v6h3l6 4ZM15 8q4 4 0 8m3-11q7 7 0 14" /></>,
    stop: <rect x="6" y="6" width="12" height="12" rx="1" />,
    up: <><path d="M12 20V4m-6 6 6-6 6 6" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    pause: <><path d="M8 5v14M16 5v14" /></>,
    play: <path d="m8 5 11 7-11 7Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    renew: <><path d="M20 11a8 8 0 1 0-2 6M20 4v7h-7" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
