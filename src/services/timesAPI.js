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

export function generateRandomTimes() {
  const randomTimes = [];

  while (randomTimes.length < 5) {
    const randomIndex = Math.floor(Math.random() * times.length);
    const randomTime = times[randomIndex];

    if (!randomTimes.includes(randomTime)) {
      randomTimes.push(randomTime);
    }
  }

  return randomTimes;
}
