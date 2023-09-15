// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("log this setTimeout");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("promise has completed");
// })

// this can be written like this to better understanding of callbacks
// function donePromise(){
//     console.log("promise has completed");
// }

// promiseOne.then(donePromise)

// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve({userName: "usama", profession: "developer"})
//     },1000)
// })

// promise2.then(function(user){
//     console.log(user);
// })

// let promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({user: "usama", area: "cantt"})      
//         }else{
//             reject("ERROR! there is an error")
//         }
//     }, 1000);
// })

// promise3.then(function(user){
//     console.log(user);
//     console.log(user.area);

// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("some thing is happened"))

// let promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false // error === true then it will print error in catch()
//         if (!error) {
//             resolve({user: "usama", area: "cantt"})      
//         }else{
//             reject("ERROR! there is an error")
//         }
//     }, 1000);
// })

// promise3.then(function(user){
//     console.log(user);
//    return user.area

// })
// .then(function(userArea){
//     console.log(userArea);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("some thing is happened"))


// let promise4 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true // error === true it will through error until you catch it
//         if (!error) {
//             resolve({ user: "usama", area: "cantt" })
//         } else {
//             reject("ERROR! there is an error")
//         }
//     }, 1000);
// })

// async function responseOfPromise4() {
//     try {
//         let response = await promise4
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// }


// responseOfPromise4()

// async function fetchData(){
//     try {
//         const urlResponse = await fetch('https://api.github.com/users/hiteshchoudhary')
//         let data = await urlResponse.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: error issue in data fatching")
//     }
// }

// fetchData()

let urlResponse = fetch('https://api.github.com/users/hiteshchoudhary')

// urlResponse.then(function(response){
//     return response.json()
// }).then(function(data){
//     console.log(data);
// }).catch(function(){
//     console.log("Error: some thing wrong");
// })

urlResponse.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
})