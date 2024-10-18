import Slide from './Slides/Slide';
import s from './App.module.css';

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
        <h1>(Ab)using CSS Grid to Build Calendar View on the Web</h1>
      </Slide>
      <Slide>
        <h1>What</h1>
        <ul>
          <li>Building itinerary planning web app</li>
          <li>Idea: Specify date & time into calendar view</li>
          <li>Calendar: columns are days, rows are time of day (24 hour)</li>
        </ul>
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
        <h1></h1>
      </Slide>
    </div>
  );
}

export default App;
