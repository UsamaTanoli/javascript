// let requestUrl = 'https://randomuser.me/api/'
// const request = new XMLHttpRequest()
// console.log(request.readyState);
// request.open('GET', requestUrl)
// console.log(request.readyState);
// request.onreadystatechange = function(){
//     console.log("state changes", request.readyState)
//     if(request.readyState === 4){
//         const data = JSON.parse(this.responseText)
//         console.log(typeof data);
//         console.log(data.results[0].gender);
//        let h1 = document.createElement('H1')
//        h1.textContent = data.results[0].gender
//       let body = document.querySelector('body')
//       body.appendChild(h1)

//     }
// }
// request.send()

let requestUrl2 = 'https://api.github.com/users/hiteshchoudhary'

let request2 = new XMLHttpRequest()
request2.open('GET', requestUrl2)
console.log(request2.readyState);
request2.onreadystatechange = function(){
    console.log(request2.readyState);
    if(request2.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data);
        let div = document.createElement('DIV')
        div.classList.add('card')
        console.log(div);
        let h1 = document.createElement('H1')
        h1.innerHTML = `Git Hub Name: ${data.name}`
        console.log(h1);
        let h2 = document.createElement('H2')
        h2.textContent = `Git Hub Followers: ${data.followers}`
        console.log(h2);
        const img = new Image(500,400)
        img.src = data.avatar_url
        console.log(img);

        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(h2)
        console.log(div)

        document.body.appendChild(div)

        
    }
}
request2.send()