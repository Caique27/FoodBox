export default function () {
    date = new Date();
    hour = date.getHours();
    if (hour >= 6 && hour < 12) {
        return ("Bom dia")
    }
    else if (hour >= 12 && hour < 19) {
        return ("Boa tarde")
    }
    else if (hour >= 19 || hour < 6) {
        return ("Boa noite")
    }

}