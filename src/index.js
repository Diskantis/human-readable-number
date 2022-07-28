module.exports = function toReadable (number) {
    const units = ['','one','two','three','four','five','six','seven','eight','nine'];
    const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const decimal = (number) => {
        if (number < 10) {return units[number]}
        else if (number >= 10 && number < 20) {return teens[number - 10]}
        else if (number % 10 === 0) {return `${dozens[Math.floor(number / 10)]}`}
        else if (number > 19) {return `${dozens[Math.floor(number / 10)]} ${units[number % 10]}`}
    }

    if (number === 0) {return 'zero'}
    else if (number % 100 === 0) {return `${units[Math.floor(number / 100)]} hundred`}
    else if (number > 99) {return `${units[Math.floor(number / 100)]} hundred ${decimal(number % 100)}`}
    else {return decimal(number)}
}
