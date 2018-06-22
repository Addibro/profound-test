function prodinq() {
    pjs.defineDisplay('display', 'puialme/prodinq.json'); // this gives us access to the display object
    display.screen1.execute(); // show screen1
}

exports.run = prodinq;