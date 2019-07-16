// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  dayName = days[new Date(dateString).getDay()];

  return dayName;

  /*
    const date = new Date(dateString);

    const options = {
      weekday: 'long'
    };

    return new Intl.DateTimeFormat('en-Us', options).format(date);
    */
}
