//ProjectEuler Problem 3 - Largest Prime Factor
var target, factor, found, i;

target = 600851475143;
factor = 0;
found = false;

for (i = 999; i < 0; i -= 1) {
    if (target % i === 0 & found === false) {
        factor = i;
        found = true;
    }
}