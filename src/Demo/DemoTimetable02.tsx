import clsx from 'clsx';
import s from './DemoTimetable.module.scss';
import { pad2 } from './time';

const times = new Array(24).fill(0).map((_, i) => {
  return (
    <div
      className={clsx(s.timetableTime, `t${pad2(i)}:00`, `te${pad2(i)}:59`)}
      // For 00:00, use t0000 and te0059
      // For 01:00, use t0100 and te0159
      // For 02:00, use t0200 and te0259
      // and so on...
      key={i}
    >{`${pad2(i)}:00`}</div>
  );
});

export function DemoTimetable02() {
  return (
    <div
      className={s.timetable}
      style={{
        gridTemplateColumns: `[time] 45px [d1 d1-c1] minmax(30px, 180fr) [d1-c2] minmax(30px, 180fr) [de1 d2 d2-c1] minmax(30px, 180fr) [d2-c2] minmax(30px, 180fr) [de2 d3] minmax(120px, 360fr) [de3]`,
      }}
    >
      <div className={clsx(s.timetableHeader)}>🕜</div>
      {times}

      <div className={clsx(s.timetableHeader, 'd1', 'de1')}>12 Dec</div>
      <div className={clsx(s.timetableHeader, 'd2', 'de2')}>13 Dec</div>
      <div className={clsx(s.timetableHeader, 'd3', 'de3')}>14 Dec</div>

      <div className={clsx(s.timetableItem, 't0800', 'te1530', 'd1', 'de1')}>
        ✈️ NRT → SIN (TR809)
      </div>
      <div className={clsx(s.timetableItem, 't1630', 'te1700', 'd1', 'de1')}>
        Check in hotel
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't1800',
          'te1915',
          'd1-c1'
        )}
      >
        Dinner at Orchard
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't1830',
          'te2030',
          'd1-c2'
        )}
      >
        Shopping at Orchard Road
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't2000',
          'te2200',
          'd1-c1'
        )}
      >
        Street performance at Orchard Road
      </div>

      <div className={clsx(s.timetableItem, 't0000', 'te0700', 'd2', 'de2')}>
        Sleep
      </div>
      <div className={clsx(s.timetableItem, 't0700', 'te0800', 'd2', 'de2')}>
        Wake up
      </div>
      <div className={clsx(s.timetableItem, 't0800', 'te0900', 'd2', 'de2')}>
        Breakfast
      </div>
      <div className={clsx(s.timetableItem, 't0930', 'te1025', 'd2', 'de2')}>
        Merlion
      </div>
      <div className={clsx(s.timetableItem, 't1230', 'te1330', 'd2', 'de2')}>
        Lunch
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't1400',
          'te1800',
          'd2-c1'
        )}
      >
        Gardens by the Bay: Cloud Forest
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't1400',
          'te1800',
          'd2-c2'
        )}
      >
        Gardens by the Bay: Flower Dome
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't1830',
          'te2000',
          'd2-c1'
        )}
      >
        Dinner
      </div>
      <div
        className={clsx(
          s.timetableItem,
          s.highlight,
          't1915',
          'te2030',
          'd2-c2'
        )}
      >
        Gardens by the Bay: Garden Rhapsody
      </div>
      <div className={clsx(s.timetableItem, 't2100', 'te2359', 'd2', 'de2')}>
        Hotel
      </div>

      <div className={clsx(s.timetableItem, 't0000', 'te0500', 'd3', 'de3')}>
        Sleep
      </div>
      <div className={clsx(s.timetableItem, 't0530', 'te0600', 'd3', 'de3')}>
        Check out hotel
      </div>

      <div className={clsx(s.timetableItem, 't0855', 'te1800', 'd3', 'de3')}>
        ✈️ SIN → NRT (TR874)
      </div>
    </div>
  );
}
