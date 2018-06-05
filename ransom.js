var magazineInput = "apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg"
var ransomInput = "elo lxkvg bg mwz clm w"

const magazine = magazineInput.split(' ');

const ransom = ransomInput.split(' ');

magazineObject = {};
ransomObject = {};

magazine.forEach(element => {
    if (magazineObject[element] === undefined)
        magazineObject[element] = 0;
    magazineObject[element] += 1
});

ransom.forEach(element => {
    if (ransomObject[element] === undefined)
        ransomObject[element] = 0;
    ransomObject[element] += 1
});

Object.keys(ransomObject).forEach(key => {
    magazineObject[key] !== undefined ? ransomObject[key] -= magazineObject[key] : ransomObject[key];
    ransomObject[key] <= 0 ? delete ransomObject[key] : ransomObject[key]
});

console.log(ransomObject);

Object.keys(ransomObject).length > 0 ? console.log("No") : console.log("Yes")