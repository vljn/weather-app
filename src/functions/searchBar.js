function createSearchBar() {
  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('placeholder', 'Search...');
  searchBar.classList.add(
    'bg-zinc-400',
    'p-2',
    'justify-between',
    'items-center',
    'gap-3',
    'rounded-lg',
    'min-w-0',
    'bg-zinc-400',
    'outline-0',
    'shrink',
    'placeholder-zinc-600',
    'text-slate-600',
    'animate__animated',
    'animate__fadeInRight',
  );

  return searchBar;
}

export default createSearchBar;
