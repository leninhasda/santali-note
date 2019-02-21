import Santale from './santale'

const $editor = <HTMLVideoElement>document.querySelector('#editor')
const S = new Santale();

$editor.addEventListener('keyup', e => {
    // @ts-ignore
    $editor.value = S.parse($editor.value)
})
