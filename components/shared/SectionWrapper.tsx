'use client';

import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  animate = true,
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={clsx(
        'transition-all duration-700',
        animate && !inView ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </section>
  );
}
