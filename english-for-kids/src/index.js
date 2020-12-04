import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createHeader } from './scripts/header/header';
import { indexView } from './scripts/route/route';
import { bodyContent } from './scripts/pages/content';
import background from '../src/assets/img/cool-back.jpg';
import { takeStatistic } from './scripts/statistic/statisticLibrary';

localStorage.setItem('mode', 'learn');
document.querySelector('body').appendChild(createHeader());
document.querySelector('body').appendChild(bodyContent());
document.querySelector('body').style.backgroundImage = `url("${background}")`;
takeStatistic();
indexView();