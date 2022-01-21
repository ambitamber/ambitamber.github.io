var info = document.getElementById('info');

let iam = 'I am a',
    p1 = 'Software Engineer',
    p2 = 'Programmer',
    p3 = 'Full Stack Developer',
    p4 = 'Website Designer';

let delaySeconds = 4000;
setTimeout(function () {
    var infoWriter = new Typewriter(info, {
        loop: true,
        delay: 75
    });

    infoWriter.typeString(iam + " " + p1).pauseFor(2500).deleteChars(p1.length).pauseFor(500)
        .typeString(p2).pauseFor(2500).deleteChars(p2.length).pauseFor(500)
        .typeString(p3).pauseFor(2500).deleteChars(p3.length).pauseFor(500)
        .typeString(p4).pauseFor(2500)
        .start();
}, delaySeconds);

let formControlInput = document.getElementById('FormControlInput').value;
let textAreaMessage = document.getElementById('FormControlTextarea').value;

let url = "";
let data = {
    message: textAreaMessage,
    emailAdddress: textAreaMessage,
    id: 1
}

let sendBtn = document.getElementById('send-btn');
sendBtn.onclick = function () {
    document.getElementById('confirm').style.display = "block"
}
