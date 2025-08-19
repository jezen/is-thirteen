'use strict';

const THIRTEEN = 13;
const THIRTEEN_FUZZ = 0.5;

var thirteenStrings = [
    "bad luck",
    "xiii", // Roman numeral 13
    "1.3", // Basically 13, see proof in #420
    "1️⃣3️⃣", // emoji sequence of 1 and 3
    "https://en.wikipedia.org/wiki/This_Is_Thirteen", // Because it is thirteen
    "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg", // Just because we can
    "https://www.youtube.com/watch?v=pte3Jg-2Ax4", // Thirteen by Big Star
    "https://www.youtube.com/watch?v=33Kv5D2zwyc", // The best Johny Cash's song
    "remy hadley", // And because she's "Thirteen"
    "olivia wilde", // AND because SHE's "Thirteen"
    "baker's dozen", // Bakers gonna bake
    "dr. remy beauregard hadley", // Why not 13's real name?!
    "patty tsai", // 蔡依珊 is a public figure in Taiwan. Her Chinese name sounds like "13".
    "https://s3.amazonaws.com/rapgenius/calle13.jpg", // Calle 13, famous Puerto Rican band
    "jason fly", // XIII of The XX
    "http://www.imdb.com/title/tt0798817/", // 13 (2010)
    "https://www.imdb.com/title/tt2991516/", // 13/13/13 (2013)
    "https://en.wikipedia.org/wiki/XIII_(video_game)", // Because video games are also culture
    "lula", //Lula, former president of Brazil. His number is 13: https://www.google.com/search?q=lula+13
    "lula-livre", //Lula, former president of Brazil. His number is 13: https://www.google.com/search?q=lula+13
    "dilma", //Dilma, former president of Brazil. Her number is 13: https://www.google.com/search?q=dilma+13
    "PT", // PT is Brazilian political party represented by the number 13
    "Washington Luís", // Brazil's thirteenth president
    "Millard Fillmore", // Thirteenth President of the United States
    "Louis XIII", // Thirteenth king of France
    "https://s3.amazonaws.com/rapgenius/calle13.jpg", // Calle 13, famous latin american band



    // ALL HAIL ZALGO
    "1̵̧̨̡̢̡̧̨̪͍̮̗̯̮̲͖̥̳̲̯͔͉̬̘͍͔͙̳͚̠͓̳̪̯̣͚͍͎͇̦̗͙͕̬̭̝͕̱̺̮̼̞̤̙̹̙̘̗̘͔͎̼͙̤̝̖̝̫̝̲̼̫̙͚̗͖̳̱̳͕͙̜̖̘͎̖̭̝̖͔̠̦̜̎̀͌̈́̇͜͜͠ͅͅ3̷̧̢̡̛͖̘͎͎̥̼͙̱̜͖̩̪̼̫̭̙̓̽͆̌̀̈́͗̈͗̿̀̔̏͂́̏̅͛͒̓̐́͗̋̎̓̄͛̇͋̊̇́̅̔̇̉͌̈́̊̍͗̑̌̈͆̉͐̂́̉̓̇͛̃͑̾̌̄͐̀̔́̈̐͛̈́͛̇́̍́͊͛̐́̇͆͆́͒͑̃̾̿̏̀́͆̾̀̀̆̚̕͘͘̚͜͝͝͝͝͝͝͝͝",




    "sharon carter", // Agent 13

    "end of slavery", // Thirteenth Amendment

    // Television characters
    "Jodie Whittaker",  // the 13th Doctor in the BBC series, "Doctor Who"

    "weedle", //#13 Pokémon

    // Imaginary 13's
    "13+0i",
    "13 + 13i",
    "13i",

    // B just looks like 13 written closer
    "B",
    //For cultural inclusiveness also include German variants
    "ß",
    "ẞ",
    //Also greek
    "β",
    "Β", //actually upper case Beta, not B
    //And Chinese
    "阝", //(Kangxi radical)


    //Adding "l" 3, "i"3, |3 and !3 because they basically look like thirteen
    "i3",
    "l3",
    "|3",
    "!3",

    //Looks like 13 (flipped horizontally) - E equal to 3
    "ei",
    "e1",
    "el",
    "e|",

    // Flipped characters
    "ƖƐ",
    "ƐƖ",

    // Password variations
    "th1rt33n",
    "th1rte3n",
    "th1rteen",
    "thirt3en",
    "thirt33n",
    "thirte3n",

    // code variations
    // binary
    "00001101",
    "0b1101",

    // Octal
    "0o15",

    // Hexadecimal
    "0xd",

    // Morse
    ".---- ...--",
    "- .... .. .-. - . . -.",
    "- .... .. .-. - . . -.",

    // Caesar shift
    "wkluwhhq",
    "Wkluwhhq",
    "WKLUWHHQ",

    //md5 hash
    "c51ce410c124a10e0db5e4b97fc2af39",
    //also md5 hash but UPPERCASE
    "C51CE410C124A10E0DB5E4B97FC2AF39",

    // hex
    "74 68 69 72 74 65 65 6e",
    "54 48 49 52 54 45 45 4e",
    "31 33",
    "74 68 69 72 74 65 65 6e 0d 0a",
    "54 68 69 72 74 65 65 6e 0d 0a",
    "54 48 49 52 54 45 45 4e 0d 0a 0d 0a",

    // base64
    "dGhpcnRlZW4=",
    "VGhpcnRlZW4=",
    "VEhJUlRFRU4=",
    "MTM=",

    // Languages
    "thirteen", // English
    "ثلاثة عشر", // Arabic (masculine)
    "ثلاث عشرة", // Arabic (feminine)

    "تلطاشر", // Arabic Slang
    "تلتاشر", // Arabic Slang
    "طلتاشر", // Arabic Slang
    "طلطاشر", // Arabic Slang

    "يج", //Arabic (gematria)

    "سیزده", // Persian
    "۱۳", // Persian number

    "dertien", // Afrikaans / Dutch
    "dertiendertien", // Double Dutch
    "seri-un-teng", // Belter creole
    "seriunteng",
    "serí-un-teng",
    "seríunteng",
    "тринадесет", // Bulgarian
    "тринайсет", // Also Bulgarian
    "tretze", // Catalan
    "napulo ug tulo", // Cebuano
    "十三", // Chinese / Japanese
    "拾參", // Chinese (traditional, upper case)
    "拾叁", // Chinese (simplified, upper case)
    "拾叄", // Chinese (variant)
    "拾参", // Chinese (variant)
    "サーティーン", // Japanese
    "１３", // Japanese full-width number 
    "じゅうさん",//Japanese Hiragana
    "ジュウサン", //Japanese full-width Katakana
    "ｼﾞｭｳｻﾝ",//Japanese half-width Katakana
    "jyuusann",//Romanization of Japanese
    "trinaest", // Croatian / Serbian (latin)
    "tretten", // Danish / Norwegian
    "senthi", //Dothraki
    "þrettán", // Icelandic, following are different inflections
    "þrettándi", // e. thirteenth
    "þrettánda",
    "þrettándinn", // e. the thirteenth
    "þrettándann",
    "þrettándanum",
    "þrettándans",
    "þrettándar", // e. multiple thirteenths
    "þrettándu",
    "þrettándum",
    "þrettándarnir", // e. the multiple thirteenths
    "þrettándana",
    "þrettándunum",
    "þrettándanna",
    "threttan", // strings without special icelandic characters
    "threttandi",
    "threttanda",
    "threttandinn",
    "threttandann",
    "threttandanum",
    "threttandans",
    "threttandar",
    "threttandu",

    "threttandum",
    "threttandarnir",
    "threttandana",
    "threttandunum",
    "threttandanna",// end of Icelandic

    "threttandum", // end of Icelandic
    "třináct", // Czech

    "kolmteist", // Estonian
    "labintatlo", // Filipino
    "kolmetoista", // Finnish
    "treize", // French
    "treizième", //French (ordinal form)
    "dreizehn", // German
    "ცამეტი", // Georgian
    "δεκατρία", // Greek
    "drizäh", // Swiss German
    "wa’maH wej", // Klingon
    "‘umikūmākolu", // Hawaiian
    "שלוש עשרה", // Hebrew
    "שלושעשרה", // Hebrew (without space)
    "ֹשְלֹש- עֶשְֹרֵה", // Hebrew (with punctuation)
    "שלושה עשר", // Hebrew (male form)
    "שלושהעשר", // Hebrew (male form, without space)
    "ֹשְלֹשָה- עָשָֹר", // Hebrew (male form, with punctuation)
    "יג", // Hebrew (gematria)
    "י״ג", // Hebrew (gematria - apostrophes)
    "quainel", // Quenya
    "mînuiug", // Sindarin
    "dektri", // Esperanto
    "tizenhárom", // Hungarian
    "trí déag", // Irish
    "tredici", // Italian
    "ಹದಿಮೂರು", //Kannada (for thirteen)
    "೧೩",//Kannada (for 13)
    "sêzdeh", // Kurdish
    "tredecim", // Latin
    "trīspadsmit", // Latvian
    "trylika", // Lithuanian
    "dräizéng", // Luxembourgish
    "тринаесет", // Macedonian
    "tiga belas", // Malay
    "പതിമൂന്ന്", //Malayalam
    "तेरा", // Marathi (१३)
    "арван", // Mongolian
    ".---- ...--", // Morse code
    "matlactlihuan yei", // Classical Nahuatl (Aztec)
    "mahtlactli omei", // Nahuatl variant
    "mahtlactli ihuan yei", // Nahuatl variant
    "irteenthay", // Pig Latin

    // Beginning of some Korean variants 🇰🇷
    "열셋", // Korean
    "십삼", // Korean

    "써틴", // Korean
    "썰틴", // Korean
    "떠틴", // Korean
    "떨틴", // Korean

    "씹쌈", // Korean
    "십쌈", // Korean
    "씹삼", // Korean

    "10삼", // Korean
    "십3", // Korean

    "시입삼", // Korean
    "시이입삼", // Korean (TODO: Anything that matches "^(십|(시이*입))(삼|(사아*암))$" is 13)

    "여얼세엣", // Korean
    "열세엣", // Korean (TODO: Also, Anything that matches "^(열|(여어*얼))(셋|(세에*엣))$" is 13)
    // End of some Korean variants 🇰🇷

    // Beginning of all Polish variants 🇵🇱
    "trzynaście", // Polish
    "trzynasty", // Polish
    "trzynasta", // Polish
    "trzynaste", // Polish
    "trzynaści", // Polish
    "trzynastego", // Polish
    "trzynastej", // Polish
    "trzynastych", // Polish
    "trzynastemu", // Polish
    "trzynastym", // Polish
    "trzynastą", // Polish
    "trzynastymi", // Polish
    "trzynastu", // Polish
    "trzynastek", // Polish
    "trzynastoma", // Polish
    "trzynaścioro", // Polish
    "trzynastka", // Polish
    "trzynastki", // Polish
    "trzynastką", // Polish
    "trzynastce", // Polish
    "trzynastko", // Polish
    "trzynaściorgiem", // Polish
    "trzynaściorgu", // Polish
    "trzynaściorga", // Polish
    "trzynastokrotny", // Polish
    "trzynastokrotnie", // Polish
    "trzynastokrotną", // Polish
    "trzynastokrotnemu", // Polish
    "trzynastokrotnej", // Polish
    "trzynastokrotnych", // Polish
    "trzynastokrotność", // Polish
    "trzynastokrotności", // Polish
    "trzynastokrotnością", // Polish
    // End of all Polish variants 🇵🇱

    // Bangla/Bengali variants
    "১৩", // Bengali numeral
    "তেরো",
    "তের",
    "ত্রয়োদশ",
    // end of Bangla/Bengali variants

    "treze", // Portuguese
    "ਤੇਰਾਂ", // Punjabi - thirteen
    "੧੩", // Punjabi Numeral - 13
    "treisprezece", // Romanian
    "treispe", // Romanian
    "тринадцать", // Russian (cyrillic)
    "ⱅⱃⰺⱀⰰⰴⱌⰰⱅⱐ", // Russian (glagolitic)
    "тринаест", // Serbian (cyrillic)
    "trinásť", // Slovak
    "trinajst", // Slovenian
    "trece", // Spanish
    "diez-y-tres", // Spanglish
    "trese", // Tagalog
    "on üç", // Turkish
    "dektri", //Speranto
    "tlettax", // Maltese
    "tretton", // Swedish
    "பதின்மூன்று", // Tamil
    "Patiṉmūṉṟu", // Tamil
    "สิบสาม", // Thai
    "๑๓", // Thai Numeral
    "SipSam", // Thai Transcription
    "Sip Sam", // Thai Transcription with space
    "тринадцять", // Ukrainian
    "تیرہ", // Urdu
    "tayra", // Roman Urdu
    "mười ba", // Vietnamese
    "tri ar ddeg", // Welsh
    "דרייַצן", // Yiddish,
    "דרייצן", // Yiddish (without diacritics),
    "kumi na tatu", // Swahili
    "तेह्र", //Nepali
    "१३", //Devanagari
    "तेरह", //Hindi
    "7h1r733n", // Crypto
    // Thirteen pronunciation
    "θərˈtiːn",
    "పదమూడు", //Telugu
    "shí sān", // Pinyin (formal)
    "shi san", // Pinyin (without tones)
    "shísān",  // Pinyin (without spaces)
    "shisan", // Pinyin (without spaces and tones)
    "он үш", // Kazakh
    "он уш", // Kazakh
    "onúsh", // Kazakh latin,
    "онүш", // Kazakh
    "онуш", // Kazakh
    "onúsh", // Kazakh latin
    "paci", // lojban
    "ishumi nantathu", // isiZulu
    "lishumi elinesithathu", // isiXhosa

    // Toki Pona
    "tu tu tu tu tu tu wan",
    "luka luka tu wan",
];

module.exports = {
    THIRTEEN: THIRTEEN,
    THIRTEEN_FUZZ: THIRTEEN_FUZZ,
    thirteenStrings: thirteenStrings
};
