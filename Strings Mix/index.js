function mix(s1, s2) {
    let string1 = s1.split('').filter(el => el.charCodeAt() > 96 && el.charCodeAt() < 123);
    let string2 = s2.split('').filter(el => el.charCodeAt() > 96 && el.charCodeAt() < 123);

    let obj1 = charCounter(string1);
    let obj2 = charCounter(string2);

    let res = '';

    for (let val in obj1) {
        if ((obj1[val] > obj2[val]) && obj1[val] > 1) {
            res += `1:${printChar(val, obj1[val])}/`;
        } else if (obj1[val] < obj2[val] && obj2[val] > 1) {
            res += `2:${printChar(val, obj2[val])}/`;
        } else if (obj1[val] == obj2[val] && obj2[val] > 1) {
            res += `=:${printChar(val, obj2[val])}/`;
        }
    }
    for (let val in obj1) {
        if (!obj2.hasOwnProperty(val) && obj1[val] > 1) {
            res += `1:${printChar(val, obj1[val])}/`;
        }
    }

    for (let val in obj2) {
        if (!obj1.hasOwnProperty(val) && obj2[val] > 1) {
            res += `2:${printChar(val, obj2[val])}/`;
        }
    }

    let sortedByCharOrder = res.split('/').sort((a, b) => {
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
        return 0;
    });


    let sortedByNumOrder = sortedByCharOrder.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });
    let sortedByChar = sortArraysBySymbols(sortedByNumOrder);

    let sortedByLengthOrder = sortedByChar.sort((a, b) => b.length - a.length);
    console.log(sortedByLengthOrder.toString().split(',').join('/'));
    return sortedByLengthOrder.toString().split(',').join('/');
// Functions
    function sortArraysBySymbols(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] != '=' && arr[i] != '') {
                newArr.push(arr[i]);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == '=') newArr.push(arr[i]);
        }
        return newArr;
    }

    function removeValuesInObj(obj, obj2) {
        let res = {};

        for (let val in obj) {
            if (obj[val] > 1) {
                res[val] = obj[val]
            }
        }
        return res;
    }

    function printChar(char, times) {
        let symbols = '';

        for (let i = 0; i < times; i++) {
            symbols += char;
        }
        return symbols
    }

    function charCounter(str) {
        let reservedChars = [];
        let obj = {};
        let res = {};

        function iter(str) {
            if (!str[1]) {
                let temp = Object.values(obj).sort((a, b) => b - a);
                for (let i = 0; i < temp.length; i++) {
                    for (let val in obj) {
                        if (obj[val] == temp[i]) {
                            res[val] = temp[i];
                            continue;
                        }
                    }
                }
                return res;
            }
            if (reservedChars.indexOf(str[0]) == -1) {
                let key = str[0];
                let count = 0;
                let i = 0;
                reservedChars.push(str[0]);

                while (str[i]) {
                    if (str[0] == str[i]) {
                        count++;
                    }
                    i++;
                }
                obj[key] = count;
            }
            return iter(str.slice(1, ));
        }
        return iter(str);
    }
}
mix("vova", " hyilo");