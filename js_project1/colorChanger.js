let button = document.querySelectorAll('.button');
console.log(button);
let body = document.querySelector('body');

// button.forEach((buttonClick)=> {
//     console.log(buttonClick);
//     buttonClick.addEventListener('click', function(e){
//         console.log(e);
//         if(e.target.id === "grey"){
//             body.style.backgroundColor = e.target.id
//         }else if(e.target.id === "white"){
//             body.style.backgroundColor = "white"
//         }else if(e.target.id === "blue"){
//             body.style.backgroundColor = e.target.id
//         }else{
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })

// this project can also be done by following method

// here we converted NodeList into an Array and then apply switch statement insted of if else

let newButton = Array.from(button)
console.log(newButton);
let eventOnButton = newButton.map((buttonClick)=>{
    console.log(buttonClick);
    buttonClick.addEventListener('click', ((e) => {
        console.log(e);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "white":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                body.style.backgroundColor = e.target.id
                break;
        }
    }))
})