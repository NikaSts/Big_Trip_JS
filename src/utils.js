const LUCKY_NUMBER = 0.5;
const MONTH_NAMES = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEP`, `OCT`, `NOV`, `DEC`];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomItem = (items) => {
  return items[getRandomNumber(0, items.length)];
};

const getRandomBoolean = () => {
  return Math.random() > LUCKY_NUMBER;
};

const getPadded = (dateTime) => {
  return dateTime.toString().padStart(2, `0`);
};

const getMonthName = (date) => MONTH_NAMES[date.getMonth()];

const getFormattedDate = (date) => {
  const newDate = new Date(Number(date));
  return ({
    day: getPadded(newDate.getDate()),
    month: getPadded(newDate.getMonth() + 1),
    monthName: getMonthName(newDate),
    year: newDate.getFullYear().toString().slice(2),
    fullYear: newDate.getFullYear(),
    hours: getPadded(newDate.getHours()),
    minutes: getPadded(newDate.getMinutes()),
  });
};

const getDuration = (diff) => {
  const minutes = diff / 1000 / 60;
  if (minutes >= 60) {
    const hours = parseInt(minutes / 60, 10);
    const minutesLeft = minutes - (hours * 60);
    if (minutesLeft === 0) {
      return `${hours}H`;
    }
    return `${hours}H ${getPadded(Math.round(minutesLeft))}M`;
  }
  return `${getPadded(Math.round(minutes))}M`;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

const renderComponent = (container, element, place = Position.BEFOREEND) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
    case Position.AFTEREND:
      container.after(element);
      break;
    default:
      throw new Error(`Case ${place} not found`);
  }
};

export {getRandomNumber, getRandomItem, getRandomBoolean, getFormattedDate, getDuration, capitalizeFirstLetter, createElement, Position, renderComponent};
