import Slide from './Slides/Slide';
import s from './App.module.css';
import './Demo/TimetableTimes.scss';
import { DemoTimetable01 } from './Demo/DemoTimetable01';
import { DemoTimetable02 } from './Demo/DemoTimetable02';
import clsx from 'clsx';
import excelSheetScreenshot from '/images/excel-itinerary.png';

/*

I am building an intenary planning web app that displays the events in a calendar view.
I chose CSS Grid because I want to avoid calculating each events in absolute positioning,
like what Google Calendar and other calendar web apps is doing.

Using CSS Grid, if I define all the possible dates and times as the line names
and CSS classes, I can easily place the events on specified date and time,
just by specifying the CSS class on an element. Because of this,
there are thousands of line names and thousands of CSS classes. While this may look like an abuse of browser feature, it seems like all modern browsers can handle it just fine.

One of the challenges faced is on how to display overlapping events.
If there are events that overlap with each other,
I want the day column to split into multiple columns to accomodate
for each of the overlapping events.
However, how to determine how many columns needed?
Also, how to make non-overlapping events to "span" across all the columns for the day?
Solving this turned out to be like solving a Leetcode problem.


*/

function App() {
  return (
    <div className={s.root}>
      <div className={s.slideLink}>
        <a href="https://kenrick95.org/slides/ikuyo/">
          kenrick95.org/slides/ikuyo
        </a>
      </div>
      <Slide>
        <h1 className={s.textCenter}>
          (Ab)using CSS Grid to Build Timetable View on the Web
        </h1>
      </Slide>
      <Slide>
        <h1>About Me</h1>
        <img
          src="https://1.gravatar.com/avatar/4e552084ecff437b1446c6c7182caff443b190d657f57f3c0eedb2ac413018f3?size=256"
          width={128}
          height={128}
          alt="me"
          className={clsx(s.avatar, s.asideRight)}
        />
        <ul>
          <li>Kenrick</li>
          <li>Front-End Dev at Shopee</li>
          <li>
            Last time talked in{' '}
            <a href="https://kenrick95.org/slides/nikku/">Geekcamp 2019</a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h1>Why</h1>
        <span>Post-pandemic travelling</span>
        {/* After pandemic, I've increased my travelling frequency. The most difficult part of travelling for me is the planning part. On what to do in the destinations. Because I wanted to have to make full use of my time. */}
      </Slide>
      <Slide>
        <h1>Travel Planning</h1>
        <ul>
          <li>Excel sheet</li>
          {/* With that, I usually have Excel sheets of the places I wanted to visit and plan the timings and routes on how go. */}
          <li>Collaboration</li>
          {/* Aside from that, I also travel together with friends, so have to take account on their preferences and schedules. */}
        </ul>
      </Slide>
      <Slide>
        {/* On my Excel sheet, I like to build itinerary as a timetable view. Because I can visualize my whole trip activity in one view. */}
        {/* In this timetable view, the rows are each hour, the columns are days, the cells are the activity. Each activity can occupy more than 1 cell. */}
        {/* With this view, if say I need to move around an activity to different day, it is very visible. */}
        {/* Building it once is fine, however, when plan changes, it is quite a pain to edit them. Because now editing when there are changes is pain, because now I have to deal with cell unmerge and merge. */}
        {/* Besides that, the granularity is per-hour, so I need to keep rounding up or down activity duration. */}
        {/* Moreover, since I build this in timetable view, if I need a "day-by-day" plan, I need to manually copy over to a different sheet. */}
        <img src={excelSheetScreenshot} className={s.imageFit} />
        <span>
          My itinerary Excel sheet for{' '}
          <a href="https://blog.kenrick95.org/2024/05/japan-2024/">
            my first Japan trip
          </a>
        </span>
      </Slide>
      <Slide>
        <h1>Let's Build It Myself</h1>
        <ul>
          <li>Idea: Itinerary planning web app</li>
          {/* Because of that, I thought, hey why not make this myself... */}
          <li>Proof-of-concept: Timetable view</li>
          {/* Of course, I tried some of the popular itinerary planning apps out there, but to my knowledge, none focuses on this timetable view as the center piece. */}
          <li>
            Columns are days, rows are time of day (24 hour, minute-level
            granularity)
          </li>
          {/* Let's make it very granular, at "minute" level of granularity */}
        </ul>
      </Slide>
      <Slide>
        <h1>Timetable View</h1>
        <ul>
          <li>
            Similar view to "week view" of Google Calendar & Outlook Calendar
          </li>
          <li>
            So how do they build it? <code>position: absolute</code> ewww
          </li>
          <li>
            Doesn't that look more like a grid, therefore, should use CSS Grid?
          </li>
        </ul>
      </Slide>
      <Slide>
        <h1>Short Explainer on CSS Grid</h1>
        <ul>
          <li>Two-dimensional display system</li>
          <li>
            Parent element can declare <em>template</em> (columns & rows)
          </li>
          <li>
            <em>Template</em> row & column will generate <em>lines</em>
          </li>
          <li>
            Child element can declare which <em>line</em> (column/row) to be
            placed at
          </li>
        </ul>
      </Slide>
      <Slide>
        <h1>Visualization of CSS Grid</h1>
        <>3 rows x 5 columns</>
        <pre>
          <span className={s.cssProperty}>display</span>: grid;
          <br />
          <span className={s.cssProperty}>grid-template-rows</span>:{' '}
          <span className={s.cssLength}>50px</span>{' '}
          <span className={s.cssLength}>50px</span>{' '}
          <span className={s.cssLength}>50px</span>;
          <br />
          <span className={s.cssProperty}>grid-template-columns</span>:{' '}
          <span className={s.cssLength}>50px</span>{' '}
          <span className={s.cssLength}>60px</span>{' '}
          <span className={s.cssLength}>70px</span>{' '}
          <span className={s.cssLength}>80px</span>{' '}
          <span className={s.cssLength}>90px</span>;
        </pre>
        <div className={s.explainerGridContainer}>
          <div className={s.explainerGrid}>
            <div
              className={s.explainerItem}
              style={{
                gridColumnStart: 2,
                gridColumnEnd: 4,
                gridRowStart: 1,
                gridRowEnd: 3,
              }}
            >
              <pre>
                <span className={s.cssProperty}>grid-column</span>: 2 / 4;
                <br />
                <span className={s.cssProperty}>grid-row</span>: 1 / 3;
              </pre>
            </div>
            <div
              className={s.explainerItem}
              style={{
                gridColumnStart: 4,
                gridColumnEnd: 6,
                gridRowStart: 2,
                gridRowEnd: 4,
              }}
            >
              <pre>
                <span className={s.cssProperty}>grid-column</span>: 4 / 6;
                <br />
                <span className={s.cssProperty}>grid-row</span>: 2 / 4;
              </pre>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6].map((line) => (
            <div
              key={line}
              className={s.explainerLineVertical}
              style={
                {
                  '--line': line,
                } as React.CSSProperties
              }
            ></div>
          ))}
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className={s.explainerLineHorizontal}
              style={
                {
                  '--line': line,
                } as React.CSSProperties
              }
            ></div>
          ))}
        </div>
      </Slide>
      <Slide>
        <h1>Interesting CSS Grid Fact</h1>
        <div className={s.textCenter}>
          At row/column <em>template</em>,<br />
          <em>Line</em> can be given a name or two or even more
        </div>
        <pre>
          <span className={s.cssProperty}>grid-template-columns</span>: [a]{' '}
          <span className={s.cssLength}>100px</span> [b c d]{' '}
          <span className={s.cssLength}>100px</span> [e]{' '}
          <span className={s.cssLength}>100px</span> [f];
        </pre>
      </Slide>
      <Slide>
        <h1>CSS Grid Line Names</h1>
        <pre>
          <span className={s.cssProperty}>display</span>: grid;
          <br />
          <span className={s.cssProperty}>grid-template-rows</span>:{' '}
          <span className={s.cssLength}>50px</span>{' '}
          <span className={s.cssLength}>50px</span>{' '}
          <span className={s.cssLength}>50px</span>;
          <br />
          <span className={s.cssProperty}>grid-template-columns</span>:{' '}
          <span className={s.cssLength}>50px</span> [meow purr]{' '}
          <span className={s.cssLength}>60px</span>{' '}
          <span className={s.cssLength}>70px</span>{' '}
          <span className={s.cssLength}>80px</span>[woof]{' '}
          <span className={s.cssLength}>90px</span> [roar] ;
        </pre>
        <div className={s.explainerGridContainer}>
          <div className={s.explainerGrid2}>
            <div
              className={s.explainerItem}
              style={{
                gridColumnStart: 'meow',
                gridColumnEnd: 'woof',
                gridRowStart: 1,
                gridRowEnd: 3,
              }}
            >
              <pre>
                <span className={s.cssProperty}>grid-column</span>: meow / woof;
                <br />
                <span className={s.cssProperty}>grid-row</span>: 1 / 4;
              </pre>
            </div>

            <div
              className={s.explainerItem}
              style={{
                gridColumnStart: 'purr',
                gridColumnEnd: 'roar',
                gridRowStart: 3,
                gridRowEnd: 4,
              }}
            >
              <pre>
                <span className={s.cssProperty}>grid-column</span>: purr / roar;
                <br />
                <span className={s.cssProperty}>grid-row</span>: 3 / 4;
              </pre>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6].map((line) => (
            <div
              key={line}
              className={s.explainerLineVertical}
              style={
                {
                  '--line': line,
                } as React.CSSProperties
              }
            >
              {line === 2 ? <div className={s.explainerMarker}>meow</div> : ''}
              {line === 2 ? <div className={s.explainerMarker}>purr</div> : ''}
              {line === 5 ? <div className={s.explainerMarker}>woof</div> : ''}
              {line === 6 ? <div className={s.explainerMarker}>roar</div> : ''}
            </div>
          ))}
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className={s.explainerLineHorizontal}
              style={
                {
                  '--line': line,
                } as React.CSSProperties
              }
            ></div>
          ))}
        </div>
      </Slide>
      <Slide>
        <h1>Timetable?</h1>
        <ul>
          {/* So ideally my timetable which uses CSS Grid has columns that represent day and rows that represent minutes. */}
          <li>
            Each <em>columns</em> represents one day
          </li>
          <li>
            Each <em>row</em> represents one minute
          </li>
          <li>
            Each <em>activity</em> is placed on the grid
          </li>
          <li>
            <em>Activity</em> day determines the column
          </li>
          <li>
            <em>Activity</em> start time determines which row to start at
          </li>
          <li>
            <em>Activity</em> end time determines the row to end at
          </li>
        </ul>
      </Slide>
      <Slide>
        <h1>Grid for Timetable?</h1>
        <ul>
          <li>Number of columns depends on how many days the trip have</li>
          <li>
            Number of rows is fixed at 24 hours × 60 minutes ={' '}
            <em>1440 rows</em>
          </li>
          <li>But I don't want to remember that row 132 is for 02:12...</li>
          <li>
            Have to make it more 🌈<em>semantic</em>🌈
          </li>
        </ul>
      </Slide>
      <Slide>
        <h1>Semantic Grid</h1>
        {/* Remember that line is in-between columns and rows? so for each line, it can be the start of something or end of something. For example, for the column 2, it can be the start of day 2, or end of day 1. So let's name them both "d2" and "de1" */}
        <div>
          Each <em>column</em> and <em>row</em> has named start line and end
          line
        </div>
        {/* Similarly for each of the minute of day, it can be start of the minute or end of the previous minute. */}
        <pre>
          <span className={s.cssProperty}>display</span>: grid;
          <br />
          <span className={s.cssProperty}>grid-template-columns</span>: [d1]{' '}
          <span className={s.cssLength}>100px</span> [de1 d2]{' '}
          <span className={s.cssLength}>100px</span> [de2 d3]{' '}
          <span className={s.cssLength}>100px</span> [de3];
          <br />
          <span className={s.cssProperty}>grid-template-rows</span>: [t0000]{' '}
          <span className={s.cssLength}>1px</span> [te0000 t0001] <br />
          {'                            '}
          <span className={s.cssLength}>1px</span> [te0001 t0002] <br />
          {'                            '}
          <span className={s.cssLength}>1px</span> [te0002 t0003] <br />
          {'                            '}
          {'...'}
          <br />
          {'                            '}
          <span className={s.cssLength}>1px</span> [te2358 t2359] <br />
          {'                            '}
          <span className={s.cssLength}>1px</span> [te2359];
        </pre>
      </Slide>
      <Slide columns={2}>
        <div className={s.column}>
          <h1>Atomic!</h1>
          {/* So Atomic CSS is a practice where we define one CSS class for each "function" that we want to use. In this case, let's define one CSS class for each of the line name */}
          <span>
            Let's give one CSS class per line name so our activity can use these
            classes to position itself
          </span>
        </div>
        <pre>
          <span className={s.cssClass}>.t0000 {'{'}</span>
          <br />
          {'    '}
          <span className={s.cssProperty}>grid-row-start</span>: t0000; <br />
          <span className={s.cssClass}>{'}'}</span>
          <br />
          <span className={s.cssClass}>.te0000 {'{'}</span>
          <br />
          {'    '}
          <span className={s.cssProperty}>grid-row-end</span>: {'  '}te0000;{' '}
          <br />
          <span className={s.cssClass}>{'}'}</span>
          <br />
          <span className={s.cssClass}>.t0001 {'{'}</span>
          <br />
          {'    '}
          <span className={s.cssProperty}>grid-row-start</span>: t0001; <br />
          <span className={s.cssClass}>{'}'}</span>
          <br />
          <span className={s.cssClass}>.te0001 {'{'}</span>
          <br />
          {'    '}
          <span className={s.cssProperty}>grid-row-end</span>: {'  '}te0001;{' '}
          <br />
          <span className={s.cssClass}>{'}'}</span>
          <br />
        </pre>
      </Slide>
      <Slide>
        {/* Demo here, show devtool */}
        <DemoTimetable01 />
      </Slide>
      <Slide>
        <h1>Nice Things</h1>
        <ul>
          <li>Don't need to calculate size of each element</li>
          {/* Positioning is all done using CSS, so I don't need to care of the pixel location in the grid */}
          <li>Meaningful CSS class name!</li>
          {/* If the activity time changes, all I need to do is to update the CSS class name */}
          <li>
            Can build frozen column and row easily using CSS{' '}
            <code>position: sticky</code>
          </li>
          {/* Apparently it works pretty well */}
        </ul>
      </Slide>
      <Slide>
        <h1>Not So Nice Thing: Overlapping Event</h1>
        <ul>
          {/* With overlapping event, now I have to create extra column for within the day.  */}
          <li>How many columns in a day?</li>
          {/* After solving that, then for each activity, which "column" of the day it should be positioned at? */}
          <li>How to position each activity within the day?</li>
          {/* And how to "expand" an activity so that it takes up the whole column? */}
          <li>
            How to make non-overlapping activity takes up the whole column?
          </li>
        </ul>
      </Slide>
      <Slide>
        {/* Demo here, show devtool */}
        <DemoTimetable02 />
      </Slide>
      <Slide>
        <h1>Leetcode Question 1</h1>
        <div>
          Given a list of activities, each with start time and end time. Some
          might overlap with one another.
          <br />
          How many maximum overlaps do I have?
          <br />
          Solving this gives number of columns needed for each day.
        </div>
      </Slide>
      <Slide>
        <h1>Leetcode Question 2</h1>
        <div>
          Given a list of activities, each with start time and end time. Some
          might overlap with one another.
          <br />
          Given an activity, if it has overlap with other activity, which ones
          does it overlap with?
          <br />
          Solving this gives which column in the day one activity belongs to.
        </div>
      </Slide>
      <Slide>
        <h1>Current Features:</h1>
        <ul>
          <li>Timetable view</li>
          <li>List view</li>
          <li>Trip sharing</li>
        </ul>
        <a href="https://ikuyo.kenrick95.org/trip/2617cd98-a229-45d4-9617-5265d52317cd">
          🔗 Demo on actual site (private link)
        </a>
      </Slide>
      <Slide>
        <h1>Feature Ideas</h1>
        <ul>
          <li>Public trip view</li>
          <li>Duplicate trip</li>
          <li>Expense tracking</li>
          <li>Accommodation overview</li>
          <li>Commenting on activity/trip</li>
        </ul>
      </Slide>
      <Slide>
        <h1>Links</h1>
        <a href="https://ikuyo.kenrick95.org">🔗 ikuyo.kenrick95.org</a>
        <a href="https://github.com/kenrick95/ikuyo">
          🐙 github.com/kenrick95/ikuyo
        </a>

        <a href="https://bsky.app/profile/kenrick95.org">🦋 @kenrick95.org</a>
      </Slide>
    </div>
  );
}

export default App;
