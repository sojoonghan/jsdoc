const serverData = () => {
  // const response = await fetch('http://localhost:3000/server');
  // const data = await response.json();
  const dataEvent = new CustomEvent('data-event', {
    detail: { name: 'jihoon' },
    bubbles: true,
  });
  dispatchEvent(dataEvent);
};

export { serverData };
