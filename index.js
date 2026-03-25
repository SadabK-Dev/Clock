let clockElement = document.querySelector('.clock');

function getClockInfo() {

  const date = new Date();

  let hour = date.getHours();
  hour = String(hour).padStart(2, 0);

  let format = hour < 12 ? 'AM' : 'PM';
  const minute = date.getMinutes();

  let second = date.getSeconds();
  second = String(second).padStart(2, 0);

  clockElement.innerHTML = `
    ${hour}:
    ${minute}:
    ${second}<br>
    ${format}
  `;
};

setInterval(getClockInfo, 1000);