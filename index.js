// --------------------------------- Global ---------------------------------

function checking() {
    var ret;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            if (isNaN(arguments[i]) || (arguments[i] === 0)) {
                ret = false;
            }
            else if (arguments[i] < 0) {
                ret = false;
            }
            else if (arguments[i] % 1 != 0) {
                ret = false
            }
            else {
                ret = true;
            }
        }
        else {
            ret = false;
        }
        return ret;
    }
}

//


// --------------------------------- Task-1 ---------------------------------


const car = {
    Manufacturer: 'BMW',
    Model: 'Series 5',
    Year: 2020,
    AverageSpeed: 100
}

// Вариант с ключиками чтобы добавить немного красоты

const keys = Object.keys(car);
const values = Object.values(car);
const entries = Object.entries(car);

var text = "<h2>" + "Производитель: " + " " + values[0] + "</h2>";
text += "<h4>" + "Модель: " + " " + values[1] + "</h4>";
text += "<h4>" + "Год выпуска:" + " " + values[2]; + "</h4>";
text += "<h4>" + "Cредняя скорость:" + " " + values[3] + " км/час" + "</h4>";

document.getElementById('carInfo').innerHTML = text;

// Так же сделала через for in

// function showInfo() {
//     var text=""
//     for (const key in car) {
//         text += "<h2>" + key + " : " + car[key] + "</h2>";
//     }
//     return text;
// }

// document.getElementById('carInfo').innerHTML = showInfo();


btn1.onclick = function () {
    var distance = inputTask1.value.replace(/\s/g, '');
    var time = 0;
    var rest = 0;
    var text = ""
    
    if (checking(distance, car.AverageSpeed)) {
        function findTime() {
            time = distance / car.AverageSpeed;
            rest = (time - time % 4) / 4;
            time = parseInt(time + rest);
            return time;
        }
        text += "<p>" + "Если дистанция будет: " + " " +"<span>"+ parseInt(distance) + "</spapn>"+ "км " + "</p>";
        text += "<p>" + "Средняя скорость:" + " " +"<span>"+ car["AverageSpeed"] + "</spapn>"+ " " + "км/час" + "</p>";
        text += "<p>" + "Преодоление дистанции займет приблизительно:" + " " +"<span>"+ findTime() + "</spapn>"+ " " + "часа(ов)" + "</p>";
        text += "<p>" + "Если каждые 4 часа будет отдых будет:" + " " +"<span>"+ rest + "</spapn>"+ " " + "перерыва(ов)" + "</p>";
    }
    else {
        text += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
    }

    return document.getElementById('task1').innerHTML = text
}


// --------------------------------- Task-2 ---------------------------------


let fraction = {
    numer: 0,
    denom: 1
}

function greatestCommonDivisor(x, y) {
    if (y > x) return greatestCommonDivisor(y, x);
	if (!y) return x;
    return greatestCommonDivisor(y, x % y)
}


// --------------------------------- 1


function summation(f1, f2) {

    let result = {
        numer: f1.numer * f2.denom + f2.numer * f1.denom,
        denom: f1.denom * f2.denom
    }
    return simplification(result);

}

if (checking(fraction.denom, fraction.numer)) {
    fraction.numer = 7;
    fraction.denom = 2;
    var result = summation(fraction, { numer: 3, denom: 4 });
    cont1.innerHTML = "<h2>" + result.numer + "<hr>" + result.denom + "</h2>";  
}
else {
    cont1.innerHTML = "<h3>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h3> "
}


// --------------------------------- 2

function subtract(f1, f2) {
    let result = {
        numer: f1.numer * f2.denom - f2.numer * f1.denom,
        denom: f1.denom * f2.denom
    }
    return simplification(result);
}
if (checking(fraction.numer, fraction.denom)) {
    fraction.numer = 4;
    fraction.denom = 3;
    result = subtract(fraction, { numer: 7, denom: 6 });
    cont2.innerHTML = "<h2>" + result.numer + "<hr>" + result.denom + "</h2>";   
}
else {
    cont2.innerHTML = "<h3>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h3> "
}


// --------------------------------- 3

function multiply(f1, f2) {
    let result = {
        numer: f1.numer * f2.numer,
        denom: f1.denom * f2.denom
    }
    return simplification(result);
}

if (checking(fraction.numer, fraction.denom)) {
    fraction.numer = 2;
    fraction.denom = 7;
    result = multiply(fraction, { numer: 1, denom: 6 });
    cont3.innerHTML = "<h2>" + result.numer + "<hr>" + result.denom + "</h2>";
}
else {
    cont3.innerHTML = "<h3>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h3> "
}


// --------------------------------- 4

function division(f1, f2) {
    let result = {
        numer: f1.numer * f2.denom,
        denom: f1.denom * f2.numer
    }
    return simplification(result);
}
if (checking(fraction.numer, fraction.denom)) {
    fraction.numer = 3;
    fraction.denom = 3;
    result = division(fraction, { numer: 5, denom: 4 });
    cont4.innerHTML = "<h2>" + result.numer + "<hr>" + result.denom + "</h2>";
}
else {
    cont4.innerHTML = "<h3>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h3> "
}

// --------------------------------- 5

function simplification(f) {
    let divisor = greatestCommonDivisor(f.numer, f.denom);
    let result = {
        numer: f.numer / divisor,
        denom: f.denom / divisor
    }
    return result;
}

if (checking(fraction.numer, fraction.denom)) {
    var fractionToSimplify = {
        numer: 14,
        denom: 16
    };

    result = simplification(fractionToSimplify);
    cont5.innerHTML = "<h2>" + result.numer + "<hr>" + result.denom + "</h2>";

}
else {
    cont5.innerHTML = "<h3>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h3> "
}
        
        
// --------------------------------- Task-3 ---------------------------------


let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function displayTime(h, m, s) {
    h = parseInt(h)
    m = parseInt(m)
    s = parseInt(s)
    return ((h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s));
}

var result = displayTime(time.hours, time.minutes, time.seconds);
var text = "<h2>" + result + "</h2>"

document.getElementById('task3').innerHTML = text;

function changeSeconds(time, secs) {
    let totalSecs = time.hours * 3600 + time.minutes * 60 + time.seconds + secs;
    time.hours = totalSecs / 3600 | 0;
    totalSecs -= time.hours * 3600;
    time.minutes = totalSecs / 60 | 0;
    time.seconds = totalSecs % 60;
    return time;
}

function changeMinutes(time, mins) {
    let totalMins = time.hours * 60 + time.minutes + mins;
    time.hours = totalMins / 60 | 0;
    time.minutes = totalMins % 60;
    return time;
}

function changeHours(time, hrs) {
    time.hours = (time.hours + hrs);
    return time;
}

changeHours(time, 6);
changeMinutes(time, 105);
changeSeconds(time, -12)

var res = "<h2>" + displayTime(time.hours, time.minutes, time.seconds) + "</h2>";

document.getElementById("result").innerHTML = res
