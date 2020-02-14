const inputTable = document.getElementById('input_table');
const outputBbcode = document.getElementById('output_bbcode');
const visualBbcode = document.getElementById('visual_bbcode');
let tags = {
    a: 'urln',
    img: 'image',
    button: 'urlb',
};

// const reg = new RegExp('<.*>.*</*.>', 'gi');
// const reg = new RegExp(']', 'g');

function convert() {
    //здесь удалить лишние атрибуты
    visualBbcode.innerHTML = inputTable.value;
    //здесь замена синтаксиса
    outputBbcode.innerText = inputTable.value
        .replace(/(<\w*)\s.*?(\>)/g, '$1$2')
        .replace(/\</g, '[')
        .replace(/\>/g, ']')
        .replace(/(\s)*/g, '$1')
        .replace(/(\])\s*(\[)/g, '$1$2')
};


inputTable.addEventListener('keyup', convert);


