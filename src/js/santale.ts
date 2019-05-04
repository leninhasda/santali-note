/*
 * Santali Parser
 * parses given word to santali
 **/
class SantaliParser {
    // character patterns
    data: any = {
        "A.~": "Ạ̃", "A~.": "Ạ̃", "A.": "Ạ", "A~": "Ã",
        "a.~": "ạ̃", "a~.": "ạ̃", "a.": "ạ", "a~": "ã",
        "C'": "C̓" , "c'": "c̓" ,
        "D.": "Ḍ" , "d.": "ḍ" ,
        "E-~": "Ḝ", "E~-": "Ḝ", "E.": "Ẹ", "E~": "Ẽ", "E-": "Ḛ",
        "e-~": "ḝ", "e~-": "ḝ", "e.": "ẹ", "e~": "ẽ", "e-": "ḛ",
        "H'": "Ȟ", "h'": "ȟ",
        "K'": "K̓" , "k'": "k̓" ,
        "N'": "Ń", "N.": "Ṇ", "N>": "Ṅ",
        "n'": "ń" , "n.": "ṇ" , "n>": "ṅ" ,
        "P'": "P̓" , "p'": "p̓" ,
        "R.": "Ṛ" , "r.": "ṛ" ,
        "T'": "T̓", "T.": "Ṭ",
        "t'": "t̓" , "t.": "ṭ" ,
        "I~": "Ĩ" , "i~": "ĩ" ,
        "O-~": "Ǭ", "O~-": "Ǭ", "O.": "Ọ", "O~": "Õ", "O-": "Ǫ",
        "o-~": "ǭ", "o~-": "ǭ", "o.": "ọ", "o~": "õ", "o-": "ǫ",
        "U~": "Ũ" , "u~": "ũ"
    }

    parse (input: string) {
        let output = "";
        for (let cur = 0; cur < input.length; ++cur) {
            let start = cur, end = cur + 1;
            let matched = false

            for (let find in this.data) {
                let pattern = this.data[find];
                end = cur + find.length;
                if (end <= input.length && input.substring(start, end) == find) {
                    output += pattern;
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

export default SantaliParser;
