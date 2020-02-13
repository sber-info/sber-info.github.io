const inputTable = document.getElementById('input_table');
const outputBbcode = document.getElementById('output_bbcode');
const visualBbcode = document.getElementById('visual_bbcode');
// const reg = new RegExp('/</', 'i');

function convert() {
    let in_=inputTable.value;
    //здесь удалить лишние атрибуты
    visualBbcode.innerHTML = in_;
    //здесь замена синтаксиса
    outputBbcode.innerText = in_
        .replace(/\</g, '[')
        .replace(/\>/g, ']')
        // .replace(/(\])\s*(\[)/g, '$1$2')
        // .replace(/(\s\s)/g, '')
        // .replace(/\]\.\[/g, '!')
        .replace(/\].*\[/g, '][');
};


inputTable.addEventListener('keydown', convert);
// document.addEventListener('keydown', function (e) {if (e.keyCode === 13) {convert}});

let bbcodeDate = {
    tags: ['table', 'tbody', 'tr', 'td', 'b', 'i'],
    attributes: [],
};


