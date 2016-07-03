//ProjectEuler Problem 2 - Fibonacci Sum
var temp, fibonacci, value, sum;

temp = 0;
fibonacci = 1;
value = 0;
sum = 0;

while (fibonacci < 4000000) {
    if (fibonacci % 2 === 0) {
        sum += fibonacci;
    }
    temp = fibonacci;
    fibonacci = fibonacci + value;
    value = temp;
}