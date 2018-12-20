'use strict';

const THIRTEEN = 13;
const THIRTEEN_FUZZ = 0.5;

var thirteenStrings = [
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
    "https://en.wikipedia.org/wiki/XIII_(video_game)", // Because video games are also culture
    "dilma", //Dilma, former president of Brazil. Her number is 13: https://www.google.com/search?q=dilma+13
    "PT", // PT is Brazilian political party represented by the number 13
    "Washington Luís", // Brazil's thirteenth president
    "Millard Fillmore", // Thirteenth President of the United States
    "https://s3.amazonaws.com/rapgenius/calle13.jpg", // Calle 13, famous latin american band

    "sharon carter", // Agent 13

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
    "Bờ", // Vietnamese spell "B" and B look like 13

    // Time
    "1PM", // 1PM is 13 o'clock
    "một giờ trưa", // Vietnamese translate 1PM and 1PM is 13 o'clock

    // Digital Storage
    "104 bit", // 104 bit is 13 bytes
    "13312 KB", // 13312 KB is 13 MB
    "13312 MB", // 13312 MB is 13 GB

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

    // All Hash
    "50EC4E7ABB494E8B7825C5AC93A8E90D", // NTLM
    "4f352f25539dea0dd1c53ea76e4e4497", // MD2
    "b3c42ed6c4a7c65ca2b47aa8fbbc4899", // MD4
    "c51ce410c124a10e0db5e4b97fc2af39", // MD5
    "ec280f4ccebac54029b49fbc572a2c3a", // MD6-128
    "cb0ce30f3f9ef7b1823fcf061295ad2f2dee1b30ea343153b10d59757f8aa416", // MD6-256
    "5c3cc0c6b268f11f90f8f61c106577d810bfd9c78ebba07042bdc74704bd27ea1d78c439263eb0d2599626b695f39051cfd732f08aca2d7c33a4faa3cad9df9a", // MD6-512
    "b44d1d1f5a01c2010bae12cce9294143", // RipeMD-128
    "afd9b473ee433177b08d9451c001d82194dce6bc", // RipeMD-160
    "a839bbcc1939645847aea281a572af631be2ebf85c7482d6f701e2cf20b5976e", // RipeMD-256
    "dff41e7804b9dcd157f9bdfbf4be21dc25f1df6e28b873bfe34c0e707a719e5cb199ddb0503a793e", // RipeMD-320
    "bd307a3ec329e10a2cff8fb87480823da114f8f4", // SHA1
    "bc8051b292ac5a79786863b882a757d9614c51c15bb015d411f0819a", // SHA3-224
    "1ad7a51ebb6db8cfd0f40d83e398f0a8ad6e7fd4b98e6623b92cfc7c18c4325a", // SHA3-256
    "d9aec7dbbea064aedc2d2d3793bcc76d42a137a1284d7c19504a2078d178b1fbd77a5a7a29f2e342ef2045fe54cb796e", // SHA3-384
    "bff373da29b813caa0465f6ee58b77ee4ebfe66b00b0b2517767cff0cd8e657376f9a066f31e18f6dbe08754d213451b0e14426c3b950e32fac3c90d81967bd7", // SHA3-512
    "86730f0dd6381286d3b5f0dfb897ce4895480ce97564c6be4f1543b8", // SHA-224
    "3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278", // SHA-256
    "6356fbb43627033e886785c2a9c16980336df008b720d23f98b35e06ee69246287739c9d7458b39356c3bdb1e4e2c7fc", // SHA-384
    "413f2ba78c7ed4ccefbe0cc4f51d3eb5cb15f13fec999de4884be925076746663aa5d34476a3df4a8729fd8eea01defa4f3f66e99bf943f4d84382d64bbbfa9e", // SHA-512
    "8555", // CRC16
    "3854745b", // CRC32
    "00970065", // Adler32
    "72135fa8697eae1c9002bad98bc07d44abc9180794dfa54ed68a1a23d750e505426b9ed67510e16f778e3cecf74770692498d6b7d964856f041b7cc7c1c96a9d", // Whirlpool

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
    "１３", // Japanese full-width
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
    "열셋", // Korean
    "십삼", // Korean
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
    "irteenthay", // Pig Latin

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
    "তেরো",
    "তের",
    "ত্রয়োদশ",
    // end of Bangla/Bengali variants

    "treze", // Portuguese
    "ਤੇਰਾਂ", // Punjabi - thirteen
    "੧੩", // Punjabi Numeral - 13
    "treisprezece", // Romanian
    "treispe", // Romanian
    "тринадцать", // Russian
    "тринаест", // Serbian (cyrillic)
    "trinásť", // Slovak
    "trinajst", // Slovenian
    "trece", // Spanish
    "trese", // Tagalog
    "tredici", // Italian
    "on üç", // Turkish
    "dektri", //Speranto
    "tlettax", // Maltese
    "tretton", // Swedish
    "பதின்மூன்று", // Tamil
    "สิบสาม", // Thai
    "๑๓", // Thai Numeral
    "SipSam", // Thai Transcription
    "Sip Sam", // Thai Transcription with space
    "тринадцять", // Ukrainian
    "تیرہ", // Urdu
    "mười ba", // Vietnamese
    "thớt tin", // Vietnamese pronunciation
    "ư ơ i ươi mờ ươi mươi huyền mười bờ a ba", // Vietnamese spell
    "một ba", // Vietnamese translate "one three"
    "tri ar ddeg", // Welsh
    "דרייַצן", // Yiddish,
    "דרייצן", // Yiddish (without diacritics),
    "kumi na tatu", // Swahili
    "तेह्र", //Nepali
    "१३", //Devanagari
    "तेरह", //Hindi
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
    "ishumi nantathu" // isiZulu
];

module.exports = {
    THIRTEEN: THIRTEEN,
    THIRTEEN_FUZZ: THIRTEEN_FUZZ,
    thirteenStrings: thirteenStrings
};
