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

        .replace(/(\<)img\s.*?src="(.*?)".*?(\>)/g, '$1image$3$2$1/image$3')
        .replace(/(\<)a\s.*?class="button".*?\shref="(.*?)".*?(\>)(.*?)(\<\/)a\>/g, '$1urlb=$2$3$4$5urlb$3')
        .replace(/(\<)a\s.*?href="(.*?)"\s.*?class="button".*?(\>)(.*?)(\<\/)a\>/g, '$1urlb=$2$3$4$5urlb$3')
        .replace(/(\<)a\s.*?href="(.*?)".*?(\>)(.*?)(\<\/)a\>/g, '$1urln=$2$3$4$5urln$3')
        .replace(/(\<)li.*?(\>)(.*?)\<\/li\>/g, '$1*$2$3')
        .replace(/(\<)ul.*?(\>)(.*?)(\<\/)ul\>/g, '$1list$2$3$4list$2')
        .replace(/(\<)ol.*?(\>)(.*?)(\<\/)ol\>/g, '$1list=ol$2$3$4list=ol$2')

    .replace(/(\<\w*)\s.*?font-size: (..)px.*?(\>)(.*?)(\<\/\w*\>)/g, '$1$3<size=$2>$4</size>$5')
        .replace(/(\<\w*)\s.*?color: (#.*?)[;"].*?(\>)(.*?)(\<\/\w*\>)/g, '$1$3<color=$2>$4</color>$5')
        .replace(/(\<\w*)\s.*?text-align: (left|center|right)[;"].*?(\>)\n(.*?)(\<\/\w*\>)/g, '$1$3<$2>$4</$2>$5')
        // .replace(/(\<\w*)\s.*?[.*?(class="text")].*?text-align: (left|center|right)[;"].*?(\>)(.*?)(\<\/\w*\>)/g, '$1 class="text"$3<$2>$4</$2>$5')
        // .replace(/(<\w*)\s.*?(class="text").*?(\>)/g, '$1 class="text"$3')

    .replace(/\</g, '[')
        .replace(/\>/g, ']')
        .replace(/(\s)*/g, '$1')
        .replace(/(\])\s*(\[)/g, '$1$2')
};


inputTable.addEventListener('keyup', convert);