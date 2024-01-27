const times = [
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
];
function sortTimesByHourAndPeriod(arr) {
  const timeRegex = /(\d+)([APMapm]+)/; // Regular expression to extract hour and period

  const comparator = (a, b) => {
    const [, hourA, periodA] = a.match(timeRegex);
    const [, hourB, periodB] = b.match(timeRegex);

    const numericHourA = parseInt(hourA, 10);
    const numericHourB = parseInt(hourB, 10);

    if (numericHourA !== numericHourB) {
      return numericHourA - numericHourB;
    }

    const periodOrder = { AM: 0, PM: 1 };
    return (
      periodOrder[periodA.toUpperCase()] - periodOrder[periodB.toUpperCase()]
    );
  };

  const sortedTimes = arr.sort(comparator);

  return sortedTimes;
}
export function generateRandomTimes() {
  const randomTimes = [];

  while (randomTimes.length < 5) {
    const randomIndex = Math.floor(Math.random() * times.length);
    const randomTime = times[randomIndex];

    if (!randomTimes.includes(randomTime)) {
      randomTimes.push(randomTime);
    }
  }

  return sortTimesByHourAndPeriod(randomTimes);
}
