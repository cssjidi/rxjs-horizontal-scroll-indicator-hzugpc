import { fromEvent } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';

const scrollIndication = document.getElementById('indication');
const getScrollWidth = () => {
  const doc = document.documentElement;
  // https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
  const winScroll = doc.scrollTop;
  const height = doc.scrollHeight - doc.clientHeight;

  return (winScroll / height) * 100;
}
const setScroll = () =>
  scrollIndication.style.width = getScrollWidth() + '%'

fromEvent(document, 'scroll')
  .pipe(
    throttleTime(20),
    tap(setScroll())
  )
  .subscribe()