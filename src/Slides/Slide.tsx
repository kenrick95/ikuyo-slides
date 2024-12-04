import React from 'react';
import s from './Slide.module.css';
import clsx from 'clsx';

function Slide({
  children,
  columns,
  skipped,
}: {
  children: React.ReactNode;
  columns?: number;
  skipped?: boolean;
}) {
  return (
    <div
      className={clsx(
        s.slide,
        columns === 2 ? s.twoColumns : '',
        skipped ? s.skipped : ''
      )}
    >
      {children}
    </div>
  );
}

export default Slide;
