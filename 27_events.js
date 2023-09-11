let p = document.getElementById('p')
document.querySelector('.image').addEventListener('click', function (e) {
    // e.preventDefault()
    console.log("clicked inside ul");
},)

document.getElementById('photoshop').addEventListener('click', function (e) {
    // alert("hello photoshop")
    // console.log(e);
    console.log("hello photoshop");
    e.stopPropagation()
}, true)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
// },true)

document.getElementById('google').addEventListener('click', function (event) {
    event.preventDefault()

})

let image = document.querySelector('.image')

image.addEventListener('click', function (e) {
    // console.log(e.target)
    // console.log(e.target.parentNode.parentNode);
    // console.log(e.target.parentNode);
    // console.log(e.target.tagName)
    let removeElement = e.target.parentNode
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        removeElement.remove()
    }if(e.target.tagName === 'A'){
        console.log(e.target.id);
        removeElement.remove()
    }
},)

// let screenLog = document.querySelector("#p");
// document.addEventListener("mousemove", logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }
