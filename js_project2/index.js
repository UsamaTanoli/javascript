const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)

    const height = parseFloat(document.querySelector('#height').value)

    const result = document.querySelector('#results')

    if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = 'please insert just value in number'

    } else if (height <= 0 || isNaN(height)) {
        result.innerHTML = 'please insert just value in number'

    } else {
        let bmi = (weight / (height * height)).toFixed(2)
        result.innerHTML = `<span>your BMI is ${bmi} </span>`
        result.style.backgroundColor = "#88d188"
    }
})

