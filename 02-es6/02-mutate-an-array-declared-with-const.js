const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            s[i] = 2;
        } else if (i === 1) {
            s[i] = 5;
        } else if (i === 2) {
            s[i] = 7;
        }
    }
    // Only change code above this line
}
editInPlace();
