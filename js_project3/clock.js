const clock = document.getElementById('clock')

setInterval(() => {
    const time = new Date()
    // console.log(time.toTimeString());
    clock.innerHTML = `<span>${time.toLocaleTimeString()}</span>`
}, 1000);