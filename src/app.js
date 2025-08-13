const data = require("./data.json");

const dayOfTheWeek = (date = new Date()) => {
  const days = data.days;

  return days[date.getDay()];
};

try {
  document.getElementById("day").innerText = dayOfTheWeek();
  const today = new Date();
  const formattedDate = today.toLocaleDateString("cs-CZ");
  document.getElementById("date").innerText = formattedDate;
} catch (err) { }

exports.dayOfTheWeek = dayOfTheWeek;
