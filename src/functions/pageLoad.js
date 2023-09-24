import createHeader from './header';
import createDataContainer from './dataContainer';
import '../styles/style.css';

function pageLoad() {
  const body = document.querySelector('body');
  body.appendChild(createHeader());
  body.appendChild(createDataContainer());
}

export default pageLoad;
