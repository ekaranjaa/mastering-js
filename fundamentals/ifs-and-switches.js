// If statements and Switches
let day = new Date()

switch (day.getDay()) {
    case 0:
        day = 'Sunday'
        break;

    case 1:
        day = 'Monday'
        break;

    case 2:
        day = 'Tuesday'
        break;

    case 3:
        day = 'Wendesday'
        break;

    case 4:
        day = 'Thursday'
        break;

    case 5:
        day = 'Friday'
        break;

    case 6:
        day = 'Saturday'
        break;

    default:
        break;
}

console.log(day)
