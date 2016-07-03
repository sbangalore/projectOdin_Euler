//ProjectEuler Problem 1 - Multiples of 3 and 5
function prob1(num) {
    var sum, i;
    
    sum = 0;

    for (i = 0; i < num; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

//ProjectEuler Problem 2 - Fibonacci Sum
function prob2(num) {
    
    var temp, fibonacci, value, sum;

    temp = 0;
    fibonacci = 1;
    value = 0;
    sum = 0;

    while (fibonacci < num) {
        if (fibonacci % 2 === 0) {
            sum += fibonacci;
        }
        temp = fibonacci;
        fibonacci = fibonacci + value;
        value = temp;
    }
    
    return sum;
}

//ProjectEuler Problem 3 - Largest Prime Factor
function prob3(target) {
    
    var num, half, factors, i;

    factors = [];
    num = target;
    half = Math.floor(Math.sqrt(num));

    for (i = 2; i <= half; i += 1) {
        if (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors[factors.length - 1];
}

function show1() {
    document.getElementById("sol1").innerHTML = prob1(1000);
}
    
function show2() {
    document.getElementById("sol2").innerHTML = prob2(4000000);
}
    
function show3() {
    document.getElementById("sol2").innerHTML = prob3(600851475143);
}