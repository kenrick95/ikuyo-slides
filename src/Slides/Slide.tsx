import React from 'react';
import s from './Slide.module.css';
import clsx from 'clsx';

function Slide({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns?: number;
}) {
  return (
    <div className={clsx(s.slide, columns === 2 ? s.twoColumns : '')}>
      {children}
    </div>
  );
}

export default Slide;
