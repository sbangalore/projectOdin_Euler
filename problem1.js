//ProjectEuler Problem 1 - Multiples of 3 and 5
var sum;
var i;

sum = 0;

for (i = 0; i < 1000; i += 1) {
	if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}