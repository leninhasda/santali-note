
class Santale {

    data: any = {
        "patterns": [
            { "find": "A.~", "replace": "Ạ̃" },
            { "find": "A~.", "replace": "Ạ̃" },
            { "find": "a.~", "replace": "ạ̃" },
            { "find": "a~.", "replace": "ạ̃" },
            { "find": "A.", "replace": "Ạ" },
            { "find": "a.", "replace": "ạ" },
            { "find": "C'", "replace": "C̓" },
            { "find": "c'", "replace": "c̓" },
            { "find": "D.", "replace": "Ḍ" },
            { "find": "d.", "replace": "ḍ" },
            { "find": "K'", "replace": "K̓" },
            { "find": "k'", "replace": "k̓" },
            { "find": "N'", "replace": "Ń" },
            { "find": "n'", "replace": "ń" },
            { "find": "N.", "replace": "Ṅ" },
            { "find": "n.", "replace": "ṅ" },
            { "find": "P'", "replace": "P̓" },
            { "find": "p'", "replace": "p̓" },
            { "find": "R.", "replace": "Ṛ" },
            { "find": "r.", "replace": "ṛ" },
            { "find": "T'", "replace": "T̓" },
            { "find": "t'", "replace": "t̓" },
            { "find": "T.", "replace": "Ṭ" },
            { "find": "t.", "replace": "ṭ" },
            { "find": "A~", "replace": "Ã" },
            { "find": "a~", "replace": "ã" },
            { "find": "E~", "replace": "Ẽ" },
            { "find": "e~", "replace": "ẽ" },
            { "find": "I~", "replace": "Ĩ" },
            { "find": "i~", "replace": "ĩ" },
            { "find": "O~", "replace": "Õ" },
            { "find": "o~", "replace": "õ" },
            { "find": "U~", "replace": "Ũ" },
            { "find": "u~", "replace": "ũ" }
        ]
    }

    parse (input: string) {
        let output = "";
        for (let cur = 0; cur < input.length; ++cur) {
            let start = cur, end = cur + 1;
            let matched = false

            for (let i = 0; i < this.data.patterns.length; ++i) {
                let pattern = this.data.patterns[i];
                end = cur + pattern.find.length;
                if (end <= input.length && input.substring(start, end) == pattern.find) {
                    output += pattern.replace;
                    cur = end - 1;
                    matched = true
                    break;
                }
            }

            if (!matched) {
                output += input.charAt(cur);
            }
        }

        return output;
    }
}

export default Santale;
