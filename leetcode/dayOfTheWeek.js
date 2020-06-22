function dayOfTheWeek(day, month, year) {
    let hash = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday", 
        5: "Friday",
        6: "Saturday"
    }

    let date = new Date(`${month}/${day}/${year}`);

    return hash[date.getDay()];
}