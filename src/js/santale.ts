/*
 * Santali Parser
 * parses given word to santali
 **/
class SantaliParser {
    // character patterns
    data: any = {
        "A.`": "Ạ̃", "A`.": "Ạ̃", "A.~": "Ạ̃", "A~.": "Ạ̃", "A.": "Ạ", "A~": "Ã", "A`": "Ã",
        "a.`": "ạ̃", "a`.": "ạ̃", "a.~": "ạ̃", "a~.": "ạ̃", "a.": "ạ", "a~": "ã", "a`": "ã",
        "C'": "C̓" , "c'": "c̓" ,
        "D.": "Ḍ" , "d.": "ḍ" ,
        "E-~": "E\u0320\u0303", "E~-": "E\u0320\u0303", "E-`": "E\u0320\u0303", "E`-": "E\u0320\u0303", "E.": "Ẹ", "E`": "Ẽ", "E~": "Ẽ", "E-": "E\u0320",
        "e-~": "e\u0320\u0303", "e~-": "e\u0320\u0303", "e-`": "e\u0320\u0303", "e`-": "e\u0320\u0303", "e.": "ẹ", "e`": "ẽ", "e~": "ẽ", "e-": "e\u0320",
        "H'": "H\u0313", "h'": "h\u0313",
        "K'": "K̓" , "k'": "k̓" ,
        "N'": "Ń", "N.": "Ṇ", "N>": "Ṅ",
        "n'": "ń" , "n.": "ṇ" , "n>": "ṅ" ,
        "P'": "P̓" , "p'": "p̓" ,
        "R.": "Ṛ" , "r.": "ṛ" ,
        "T'": "T̓", "T.": "Ṭ",
        "t'": "t̓" , "t.": "ṭ" ,
        "I`": "Ĩ", "i`": "ĩ", "I~": "Ĩ" , "i~": "ĩ" ,
        "O-~": "O\u0320\u0303", "O~-": "O\u0320\u0303", "O-`": "O\u0320\u0303", "O`-": "O\u0320\u0303", "O.": "Ọ", "O`": "Õ", "O~": "Õ", "O-": "O\u0320",
        "o-~": "o\u0320\u0303", "o~-": "o\u0320\u0303", "o-`": "o\u0320\u0303", "o`-": "o\u0320\u0303", "o.": "ọ", "o~": "õ", "o`": "õ", "o-": "o\u0320",
        "U`": "Ũ", "u`": "ũ", "U~": "Ũ" , "u~": "ũ"
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
