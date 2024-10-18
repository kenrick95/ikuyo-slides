import React from 'react';
import s from './Slide.module.css';

function Slide({children}: {children: React.ReactNode}) {
  return <div className={s.slide}>
    {children}
  </div>;
}

export default Slide;
