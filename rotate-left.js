let n = "20 10";
var arrayElements = "41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51";
let d = n.split(' ')[1];
let a = arrayElements.split(' ').map(ele => parseInt(ele, 10));

/* Solution with 2 for loop. Complexity is higher*/
for (let i = 0; i < d; i++) {
    let element = a[0];
    for (let j = 0; j < a.length; j++) {
        a[j] = a[j + 1];
    }
    a[a.length - 1] = element
}

/* Solution with array shift8*/
for (let i = 0; i < d; i++) {
    let first = a.shift();
    a.push(first);
}

console.log(a);