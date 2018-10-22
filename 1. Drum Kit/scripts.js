
const notes = [
    {letter: 'A', type: 'CLAP'},
    {letter: 'S', type: 'HIHAT'},
    {letter: 'D', type: 'KICK'},
    {letter: 'F', type: 'OPENHAT'},
    {letter: 'G', type: 'BOOM'},
    {letter: 'H', type: 'RIDE'},
    {letter: 'J', type: 'SNARE'},
    {letter: 'K', type: 'TOM'},
    {letter: 'L', type: 'TINK'},
]

function createNotes(ns) {
    for(let i = 0; i < ns.length; i++) {
        const dc = document.createElement('div');
        dc.classList.add('noteBox');
        const lt = document.createElement('div');
        lt.innerHTML = ns[i].letter;
        dc.appendChild(lt);
        const te = document.createElement('div');
        te.innerHTML = ns[i].type;
        dc.appendChild(te);
        document.querySelector('.noteList').appendChild(dc);
        dc.addEventListener('click', (e) => {
            playNote(dc.childNodes[0].innerHTML)
        })
    }
}

function playNote(letter) {
    const els = document.querySelectorAll('.noteBox');
    for(let i = 0; i < els.length; i++) {
        if(notes[i].letter == letter) {
            const aud = new Audio(`sounds/${notes[i].type}.wav`);
            aud.play();
            els[i].classList.add('playing');
            setTimeout(() => {
                els[i].classList.remove('playing');
            }, 140)
        }
    }
}

function noteBinding() {
    document.body.addEventListener('keydown', (e) => {
        notes.map((el) => {
            if(el.letter.toLowerCase() == e.key || el.letter == e.key) {
                playNote(el.letter)
            }
        })
    })
}

(function initApp() {
    createNotes(notes);
    noteBinding();
})()