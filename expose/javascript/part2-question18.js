function currTime() {
    let d = new Date();
    let time = d.toLocaleString();
    console.log(time);
}
setInterval(currTime, 1000);