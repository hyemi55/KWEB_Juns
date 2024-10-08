const factorial = n => {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
};

const permutation = (n, r) => factorial(n)/factorial(n-r);

const multiPermutation = (n, r) => {
    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= n;
    }

    return result;
};

const combination = (n, r) => permutation(n, r)/factorial(r);

const multiCombination = (n, r) => combination(n+r-1, r);

module.exports = {
    permutation,
    multiPermutation,
    combination,
    multiCombination,
}