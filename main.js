import './style.scss';

import { fetchData, displayData } from './modules/fetch.js';
import { showLoading } from './modules/loading.js';

fetchData();
displayData();
showLoading();

setTimeout(() => {
  loading.style.display = 'none';
 }, 2000);


