
// controller function
function getValues() {
    let inputString = document.getElementById('reverse').value;

    let reversedString = reverseAString(inputString);
    displayString(reversedString);
}

// logic function
function reverseAString(userString) {

    let revString = '';

    for(let i = userString.length - 1; i >= 0; i--) {
        let currentLetter = userString[i];

        revString += currentLetter
    }

    return revString;
}

// view function
function displayString(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}
