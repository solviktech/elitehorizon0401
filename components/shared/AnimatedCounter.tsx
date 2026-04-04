'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export default function AnimatedCounter({ value, suffix = '', label, light = false }: AnimatedCounterProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl sm:text-5xl font-bold tabular-nums ${light ? 'text-white' : 'text-primary-dark'}`}>
        {inView ? (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            suffix={suffix}
            useEasing={true}
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className={`text-sm mt-2 font-medium uppercase tracking-wider ${light ? 'text-white/60' : 'text-ink-muted'}`}>
        {label}
      </p>
    </div>
  );
}
