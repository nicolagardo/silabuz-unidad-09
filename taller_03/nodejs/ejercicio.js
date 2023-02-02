
function suma(a, b){
    return a + b;
}


function esPar(n) {
    return n % 2 === 0;
}

describe('Test de esPar', () => {
    const testCases = [
        {input: 2, expected: true},
        {input: 0, expected: true},
        {input: -2, expected: true},
        {input: 1, expected: false}
    ];

    testCases.forEach(testCase =>  {
        it(`Debería retornar ${testCase.expected} para n = ${testCase.input}`, () => {
            const result = esPar(testCase.input);
            expect(result).toBe(testCase.expected);
        });
    });
});


describe('Test de suma', () => {
    const testCases = [
        {a: 1, b: 2, expected: 3},
        {a: 0, b: 0, expected: 0},
        {a: -1, b: 1, expected: 0},
        {a: 100, b: 200, expected: 300}
    ];

    testCases.forEach(testCase => {
        it(`Debería retornar ${testCase.expected} para a = ${testCase.a} y b = ${testCase.b}`, () => {
            const result = suma(testCase.a, testCase.b);
            expect(result).toBe(testCase.expected);
        });
    });
});


module.exports = { suma }