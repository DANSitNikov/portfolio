import './styles/style.scss';
import { generateField } from './scripts/generateField';
import { defaultText } from './scripts/timeAndSteps';
import { showMenu } from './scripts/menu';
import { createField } from './scripts/fieldGame';
import { makeFavicon } from './scripts/favicon';

createField();
showMenu();
generateField();
defaultText();
makeFavicon();
