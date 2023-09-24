import createSearchBar from './searchBar.js';
import 'animate.css';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add(
    'flex',
    'justify-center',
    'font-main',
    'text-zinc-200',
    'h-28',
    'items-center',
    'bg-slate-700',
    'gap-[10%]',
    'px-10',
  );

  const left = document.createElement('div');
  left.textContent = 'weather.';
  header.appendChild(left);
  left.classList.add(
    'text-4xl',
    'animate__animated',
    'animate__fadeInLeft',
    'select-none',
  );

  const searchBar = createSearchBar();
  header.appendChild(searchBar);

  return header;
}

export default createHeader;
