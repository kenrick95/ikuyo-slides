import Slide from './Slides/Slide';
import s from './App.module.css';
import './Demo/TimetableTimes.scss';
import { DemoTimetable01 } from './Demo/DemoTimetable01';
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
          <li>Columns are days, rows are time of day (24 hour, minute-level granularity)</li>
          {/* Let's make it very granular, at "minute" level of granularity */}
        </ul>
      </Slide>
      <Slide>
        Isn't it Google Calendar "week view"?
      </Slide>
      <Slide>
        <h1>Short Explainer on CSS Grid</h1>
        <ul>
          <li>2D display system</li>
          <li>Parent element need to declare lines (columns & rows)</li>
          <li>
            Child element can declare line name (column/row) and it will be
            placed there
          </li>
          <li>Those that never declare will be auto-placed magically</li>
        </ul>
      </Slide>
      <Slide>
        <h1>How to (ab)use CSS Grid</h1>
        <ul>
          <li>Column: For each day, 1 start line and 1 end line</li>
          <li>
            Row: For each <b>minute</b>, 1 start line and 1 end line
          </li>
          <li>Also, need corresponding class name for each lines</li>
        </ul>
      </Slide>
      <Slide>
        <h1>How it looks like</h1>
        <DemoTimetable01 />
      </Slide>
      <Slide>
        <h1>Nice things</h1>
        <ul>
          <li>Don't need to calculate size of each element</li>
          <li>Meaningful CSS class name!</li>
          <li>
            Can build frozen column and row easily using CSS position sticky
          </li>
        </ul>
      </Slide>
      <Slide>
        <h1>Overlapping events?</h1>
        <ul>
          <li>How many overlaps in a day?</li>
          <li>How to position each event within the day?</li>
          <li>How to make non-overlapping event takes up the whole column?</li>
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
