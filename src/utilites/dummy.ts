// Dummy complex function to test all ESLint rules at once
export const testAllRules = function (
    a: any,
    b: any,
    c: any,
    d: any,
    e: any,
    f: any,
    g: any,
    h: any,
    i: any,
    j: any,
    k: any, // 11th param → violates max-params (max 10)
): any {
    // 'any' return type → violates no-explicit-any
    console.log('Debug log'); // violates no-console

    let result = 0;

    // Deeply nested logic → violates max-depth + complexity
    if (a > 0) {
        for (let x = 0; x < b; x++) {
            if (c > d) {
                result += e;
                if (f < g) {
                    result -= h;
                    if (i === j) {
                        result *= 2;
                        if (k > 0) {
                            result += k;
                        }
                    }
                }
            }
        }
    }

    // 50+ lines → violates max-lines-per-function
    let temp = 0;
    for (let m = 0; m < 50; m++) {
        temp += m;
        let a1 = temp * 2;
        let a2 = a1 + temp;
        let a3 = a2 - m;
        let a4 = a3 * 2;
        let a5 = a4 - temp;
        let a6 = a5 + a1;
        let a7 = a6 - a2;
        let a8 = a7 + a3;
        let a9 = a8 - a4;
        let a10 = a9 + a5;
        result = a10
    }

    return result; // missing explicit TS return type
};
