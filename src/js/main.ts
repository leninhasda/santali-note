// const Santale = require('./santale.min.js')
import Santale from './santale'

// document.onkeydown(e => {
//     console.log(e)
// });

const $editor = <HTMLVideoElement>document.querySelector('#editor')
const S = new Santale();

console.log($editor)

$editor.addEventListener('keyup', e => {
    // @ts-ignore
    $editor.value = S.parse($editor.value)
    // @ts-ignore
    console.log($editor.value)
})
