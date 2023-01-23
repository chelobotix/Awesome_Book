import { DateTime } from './modules/luxon.js';
import displayBooks from './modules/domManipulation.js';

/* -------------------------------------------------------------------------- */
/*                                Date Section                                */
/* -------------------------------------------------------------------------- */
const date = document.querySelector('#date');
setInterval(() => {
  const now = DateTime.now();
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

/* -------------------------------------------------------------------------- */
/*                      Get Dom elements and Load Content                     */
/* -------------------------------------------------------------------------- */
displayBooks();
