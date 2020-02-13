const inputTable = document.getElementById('input_table');
const outputBbcode = document.getElementById('output_bbcode');
const visualBbcode = document.getElementById('visual_bbcode');
// const reg = new RegExp('<.*>.*</*.>', 'gi');
// const reg = new RegExp(']', 'g');

function convert() {
    //здесь удалить лишние атрибуты
    visualBbcode.innerHTML = inputTable.value;
    //здесь замена синтаксиса
    outputBbcode.innerText = inputTable.value


        //.replace(/\/.*\>.*\</g, '')замена между тегами
        //.repalce(//g, '')обнаружение одержания тега

        .replace(/\</g, '[')
        .replace(/\>/g, ']')
        // .replace(reg, '')

        // .replace(/(\])\s*(\[)/g, '$1$2')
        // .replace(/(\s\s)/g, '')
        // .replace(/\]\.\[/g, '!')
};


inputTable.addEventListener('keyup', convert);

let bbcodeDate = {
    tags: ['table', 'tbody', 'tr', 'td', 'b', 'i'],
    attributes: [],
};


