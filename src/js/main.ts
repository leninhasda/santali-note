import SantaliParser from './santale'

const $editor = <HTMLTextAreaElement>document.querySelector('#editor')
const S = new SantaliParser();

$editor.addEventListener('keyup', e => {
    // if not space ignore
    // todo should consider enter as well
    // console.log(e.keyCode)
    if (e.keyCode != 32 && e.keyCode != 13)
        return

    // // get current word
    var caretStart = $editor.selectionStart;
    // console.log(caretStart, $editor.value.length)
    var front = ($editor.value).substring(0, caretStart)
    var frontSpace = "", backSpace = ""
    if (front.charAt(front.length-1) == " ") { // ignore last space
        backSpace = " "
        front = front.substring(0, front.length-1)
    }
    var back = ($editor.value).substring(caretStart, $editor.value.length)

    var lastSpace = front.lastIndexOf(" ") < 0 ? 0 : front.lastIndexOf(" ")
    var currentWord = front.substring(!lastSpace?lastSpace:lastSpace+1, front.length)
    // console.log(currentWord)
    // tribute.appendCurrent([{key: currentWord, value: currentWord}])
    front = front.substring(0, front.length - currentWord.length)
    // currentWord = currentWord.trim()
    // console.log(currentWord)
    let parsedWord = S.parse(currentWord)
    // console.log(parsedWord)

    // ignore if word and parsed are same
    if (currentWord == parsedWord)
        return

    if (front.length > 0 && front.charAt(front.length - 1) != " ")
        frontSpace = " "
    $editor.value = front + frontSpace + parsedWord + backSpace + back

    // reposition the cursor
    // console.log(caretStart, currentWord.length, parsedWord.length)
    caretStart = caretStart - currentWord.length + parsedWord.length
    $editor.selectionStart = caretStart
    $editor.selectionEnd = caretStart
})
