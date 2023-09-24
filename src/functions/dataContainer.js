function createDataContainer() {
  const container = document.createElement('div');
  container.classList.add(
    'h-80',
    'flex',
    'justify-center',
    'items-center',
    'font-main',
    'text-zinc-200',
    'flex-col',
    'md:flex-row',
    'md:justify-start',
    'md:pl-28',
    'md:pt-28',
  );

  const locationDiv = document.createElement('div');
  locationDiv.classList.add('text-7xl', 'md:pr-3');
  locationDiv.id = 'location';
  container.appendChild(locationDiv);

  const tempDiv = document.createElement('div');
  tempDiv.classList.add(
    'text-9xl',
    'border-b-4',
    'md:border-b-0',
    'md:border-x-4',
    'md:px-2',
  );
  tempDiv.id = 'temperature';
  container.appendChild(tempDiv);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('text-xl', 'pt-3', 'md:pt-0', 'md:pl-3');
  infoDiv.id = 'info';
  container.appendChild(infoDiv);

  return container;
}

export default createDataContainer;
