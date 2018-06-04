'use strict';

const tap = require('tap');
const is = require('./');

tap.equal(is(13).thirteen(), true);
tap.equal(is('13').thirteen(), true);
tap.equal(is('۱۳').thirteen(), true); //Arabic
tap.equal(is('XIII').thirteen(), true);
tap.equal(is('xiii').thirteen(), true);
tap.equal(is('IIIIIIIIIIIII').thirteen(), true); //Alternative form of roman numeral.
tap.equal(is('IlIlIlIlIlIlI').thirteen(), true); //Looks like an alternative form for roman numeral.

tap.equal(is('https://en.wikipedia.org/wiki/This_Is_Thirteen').thirteen(), true); // Because it is thirteen
tap.equal(is('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg').thirteen(), true);
tap.equal(is('http://www.metal-archives.com/images/1/5/3/7/153772.jpg').thirteen(), false);
tap.equal(is('https://www.youtube.com/watch?v=pte3Jg-2Ax4').thirteen(), true);
tap.equal(is('https://www.youtube.com/watch?v=33Kv5D2zwyc').thirteen(), true);
tap.equal(is('thirteen').thirteen(), true);
tap.equal(is('Thirteen').thirteen(), true);
tap.equal(is('Remy Hadley').thirteen(), true);
tap.equal(is('Olivia Wilde').thirteen(), true);
tap.equal(is('weedle').thirteen(), true);
tap.equal(is("baker's dozen").thirteen(), true);
tap.equal(is("Dr. Remy Beauregard Hadley").thirteen(), true);
tap.equal(is("Patty Tsai").thirteen(), true);
tap.equal(is("PT").thirteen(), true);
tap.equal(is("Washington Luís").thirteen(), true);
tap.equal(is("Millard Fillmore").thirteen(), true);
//year of birth test
tap.equal(is("2003").yearOfBirth(), false);

// Imaginary 13's tests
tap.equal(is("13+0i").thirteen(), true);
tap.equal(is("13i").thirteen(), true);
tap.equal(is("13 + 13i").thirteen(), true);
tap.equal(is("12i").thirteen(), false);

// upside down tests
tap.equal(is("Ei").thirteen(), true);
tap.equal(is("EI").thirteen(), true);
tap.equal(is("E1").thirteen(), true);
tap.equal(is("El").thirteen(), true);
tap.equal(is("E|").thirteen(), true);

// Password variations tests
tap.equal(is("th1rt33n").thirteen(), true);
tap.equal(is("th1rte3n").thirteen(), true);
tap.equal(is("th1rteen").thirteen(), true);
tap.equal(is("thirt3en").thirteen(), true);
tap.equal(is("thirt33n").thirteen(), true);
tap.equal(is("thirte3n").thirteen(), true);

// Languages tests
tap.equal(is("dertien").thirteen(), true); // Afrikaans / Dutch
tap.equal(is("ثلاثة عشر").thirteen(), true); // Arabic
tap.equal(is("تلطاشر").thirteen(), true); // Arabic Slang
tap.equal(is("تلتاشر").thirteen(), true); // Arabic Slang
tap.equal(is("طلتاشر").thirteen(), true); // Arabic Slang
tap.equal(is("طلطاشر").thirteen(), true); // Arabic Slang
tap.equal(is("dertiendertien").thirteen(), true); // Double Dutch
tap.equal(is("тринадесет").thirteen(), true); // Bulgarian
tap.equal(is("тринайсет").thirteen(), true); // Also Bulgarian
tap.equal(is("tretze").thirteen(), true); // Catalan
tap.equal(is("napulo ug tulo").thirteen(), true); // Cebuano
tap.equal(is("třináct").thirteen(), true); // Czech
tap.equal(is("十三").thirteen(), true); // Chinese (Traditional)
tap.equal(is("拾參").thirteen(), true); // Chinese (Traditional, upper case)
tap.equal(is("拾叁").thirteen(), true); // Chinese (simplified, upper case)
tap.equal(is("拾叄").thirteen(), true); // Chinese (variant)
tap.equal(is("拾参").thirteen(), true); // Chinese (variant)
tap.equal(is("trinaest").thirteen(), true); // Croatian / Serbian (latin)
tap.equal(is("tretten").thirteen(), true); // Danish / Norwegian
tap.equal(is("senthi").thirteen(), true);  //Dothraki
tap.equal(is("kolmteist").thirteen(), true); // Estonian
tap.equal(is("thirteen").thirteen(), true); // English
tap.equal(is("labintatlo").thirteen(), true); // Filipino
tap.equal(is("kolmetoista").thirteen(), true); // Finnish
tap.equal(is("treize").thirteen(), true); // French
tap.equal(is("treizième").thirteen(), true); // French (ordinal form)
tap.equal(is("dreizehn").thirteen(), true); // German
tap.equal(is("ცამეტი").thirteen(), true);
tap.equal(is("‘umikūmākolu").thirteen(), true); //Hawaiian
tap.equal(is('שלוש עשרה').thirteen(), true); // Hebrew
tap.equal(is('שלושעשרה').thirteen(), true); // Hebrew (without space)
tap.equal(is('ֹשְלֹש- עֶשְֹרֵה').thirteen(), true); // Hebrew (with punctuation)
tap.equal(is('שלושה עשר').thirteen(), true); // Hebrew (male form)
tap.equal(is('שלושהעשר').thirteen(), true); // Hebrew (male form, without space)
tap.equal(is('ֹשְלֹשָה- עָשָֹר').thirteen(), true); // Hebrew (male form, with punctuation)
tap.equal(is('יג').thirteen(), true); // Hebrew (gematria)
tap.equal(is('י״ג').thirteen(), true); // Hebrew (gematria - apostrophes)
tap.equal(is("तेरह").thirteen(), true); // Hindi
tap.equal(is("tizenhárom").thirteen(), true); // Hungarian
tap.equal(is("trí déag").thirteen(), true); // Irish
tap.equal(is("tredici").thirteen(), true); // Italian
tap.equal(is("on üç").thirteen(), true); // Italian
tap.equal(is("ಹದಿಮೂರು").thirteen(), true); //Kannada (thirteen)
tap.equal(is("పదమూడు").thirteen(), true); //Telugu
tap.equal(is("೧೩").thirteen(), true); //Kannada (13)
tap.equal(is("열셋").thirteen(), true); // Korean
tap.equal(is("십삼").thirteen(), true); // Korean
tap.equal(is("sêzdeh").thirteen(), true); // Kurdish
tap.equal(is("tredecim").thirteen(), true); // Latin
tap.equal(is("trīspadsmit").thirteen(), true); // Latvian
tap.equal(is("trylika").thirteen(), true); // Lithuanian
tap.equal(is("dräizéng").thirteen(), true); // Luxembourgishthirtees
tap.equal(is("тринаесет").thirteen(), true); // Macedonian
tap.equal(is("tiga belas").thirteen(), true); // Malay
tap.equal(is("арван").thirteen(), true); // Mongolian
tap.equal(is(".---- ...--").thirteen(), true); // Morse code
tap.equal(is("irteenthay").thirteen(), true); // Pig Latin
// Beginning of all Polish variants 🇵🇱
tap.equal(is("trzynaście").thirteen(), true); // Polish
tap.equal(is("trzynasty").thirteen(), true); // Polish
tap.equal(is("trzynasta").thirteen(), true); // Polish
tap.equal(is("trzynaste").thirteen(), true); // Polish
tap.equal(is("trzynaści").thirteen(), true); // Polish
tap.equal(is("trzynastego").thirteen(), true); // Polish
tap.equal(is("trzynastej").thirteen(), true); // Polish
tap.equal(is("trzynastych").thirteen(), true); // Polish
tap.equal(is("trzynastemu").thirteen(), true); // Polish
tap.equal(is("trzynastym").thirteen(), true); // Polish
tap.equal(is("trzynastą").thirteen(), true); // Polish
tap.equal(is("trzynastymi").thirteen(), true); // Polish
tap.equal(is("trzynastu").thirteen(), true); // Polish
tap.equal(is("trzynastek").thirteen(), true); // Polish
tap.equal(is("trzynastoma").thirteen(), true); // Polish
tap.equal(is("trzynaścioro").thirteen(), true); // Polish
tap.equal(is("trzynastka").thirteen(), true); // Polish
tap.equal(is("trzynastki").thirteen(), true); // Polish
tap.equal(is("trzynastką").thirteen(), true); // Polish
tap.equal(is("trzynastce").thirteen(), true); // Polish
tap.equal(is("trzynastko").thirteen(), true); // Polish
tap.equal(is("trzynaściorgiem").thirteen(), true); // Polish
tap.equal(is("trzynaściorgu").thirteen(), true); // Polish
tap.equal(is("trzynaściorga").thirteen(), true); // Polish
tap.equal(is("trzynastokrotny").thirteen(), true); // Polish
tap.equal(is("trzynastokrotnie").thirteen(), true); // Polish
tap.equal(is("trzynastokrotną").thirteen(), true); // Polish
tap.equal(is("trzynastokrotnemu").thirteen(), true); // Polish
tap.equal(is("trzynastokrotnej").thirteen(), true); // Polish
tap.equal(is("trzynastokrotnych").thirteen(), true); // Polish
tap.equal(is("trzynastokrotność").thirteen(), true); // Polish
tap.equal(is("trzynastokrotności").thirteen(), true); // Polish
tap.equal(is("trzynastokrotnością").thirteen(), true); // Polish
// End of all Polish variants 🇵🇱
tap.equal(is("treze").thirteen(), true); // Portoguese
tap.equal(is("ਤੇਰਾਂ").thirteen(), true); // Punjabi
tap.equal(is("੧੩").thirteen(), true); // Punjabi
tap.equal(is("treisprezece").thirteen(), true); // Romanian
tap.equal(is("тринадцать").thirteen(), true); // Russia
tap.equal(is("тринаест").thirteen(), true); // Serbian (cyrillic)
tap.equal(is("trinásť").thirteen(), true); // Slovak
tap.equal(is("wa’maH wej").thirteen(), true); // Klingon
tap.equal(is("trinajst").thirteen(), true); // Slovenian
tap.equal(is("trece").thirteen(), true); // Spanish
tap.equal(is("dektri").thirteen(), true); // Speranto
tap.equal(is("trese").thirteen(), true); // Tagalog
tap.equal(is("tretton").thirteen(), true); // Swedish
tap.equal(is("பதின்மூன்று").thirteen(), true); // Tamil
tap.equal(is("สิบสาม").thirteen(), true); // Thai
tap.equal(is("тринадцять").thirteen(), true); // Ukrainian
tap.equal(is("تیرہ").thirteen(), true); // Urdu
tap.equal(is("tri ar ddeg").thirteen(), true); // Welsh
tap.equal(is("דרייַצן").thirteen(), true); // Yiddish
tap.equal(is("דרייצן").thirteen(), true); // Yiddish (without diacritics),
tap.equal(is("kumi na tatu").thirteen(), true); // Swahili
tap.equal(is("പതിമൂന്ന്").thirteen(), true); // Malayalam
tap.equals(is("१३").thirteen(), true); //Devanagari
tap.equals(is("तेह्र").thirteen(), true); //Nepali
tap.equal(is("quainel").thirteen(), true); // Quenya
tap.equal(is("mînuiug").thirteen(), true); // Sindarin

// Beginning of all Vietnamese variants
tap.equal(is("thớt tin").thirteen(), true); // Vietnamese pronunciation
tap.equal(is("ư ơ i ươi mờ ươi mươi huyền mười bờ a ba").thirteen(), true); // Vietnamese spell
tap.equal(is("một ba").thirteen(), true); // Vietnamese translate "one three"
// End of all Vietnamese variants

tap.equal(is("104 bit").thirteen(), true); // 104 bit is 13 bytes
tap.equal(is("13312 KB").thirteen(), true); // 13312 KB is 13 MB
tap.equal(is("13312 MB").thirteen(), true); // 13312 MB is 13 GB

// Beginning of all hash
tap.equal(is("50EC4E7ABB494E8B7825C5AC93A8E90D").thirteen(), true) // NTLM
tap.equal(is("4f352f25539dea0dd1c53ea76e4e4497").thirteen(), true) // MD2
tap.equal(is("b3c42ed6c4a7c65ca2b47aa8fbbc4899").thirteen(), true) // MD4
tap.equal(is("c51ce410c124a10e0db5e4b97fc2af39").thirteen(), true) // MD5
tap.equal(is("ec280f4ccebac54029b49fbc572a2c3a").thirteen(), true) // MD6-128
tap.equal(is("cb0ce30f3f9ef7b1823fcf061295ad2f2dee1b30ea343153b10d59757f8aa416").thirteen(), true) // MD6-256
tap.equal(is("5c3cc0c6b268f11f90f8f61c106577d810bfd9c78ebba07042bdc74704bd27ea1d78c439263eb0d2599626b695f39051cfd732f08aca2d7c33a4faa3cad9df9a").thirteen(), true) // MD6-512
tap.equal(is("b44d1d1f5a01c2010bae12cce9294143").thirteen(), true) // RipeMD-128
tap.equal(is("afd9b473ee433177b08d9451c001d82194dce6bc").thirteen(), true) // RipeMD-160
tap.equal(is("a839bbcc1939645847aea281a572af631be2ebf85c7482d6f701e2cf20b5976e").thirteen(), true) // RipeMD-256
tap.equal(is("dff41e7804b9dcd157f9bdfbf4be21dc25f1df6e28b873bfe34c0e707a719e5cb199ddb0503a793e").thirteen(), true) // RipeMD-320
tap.equal(is("bd307a3ec329e10a2cff8fb87480823da114f8f4").thirteen(), true) // SHA1
tap.equal(is("bc8051b292ac5a79786863b882a757d9614c51c15bb015d411f0819a").thirteen(), true) // SHA3-224
tap.equal(is("1ad7a51ebb6db8cfd0f40d83e398f0a8ad6e7fd4b98e6623b92cfc7c18c4325a").thirteen(), true) // SHA3-256
tap.equal(is("d9aec7dbbea064aedc2d2d3793bcc76d42a137a1284d7c19504a2078d178b1fbd77a5a7a29f2e342ef2045fe54cb796e").thirteen(), true) // SHA3-384
tap.equal(is("bff373da29b813caa0465f6ee58b77ee4ebfe66b00b0b2517767cff0cd8e657376f9a066f31e18f6dbe08754d213451b0e14426c3b950e32fac3c90d81967bd7").thirteen(), true) // SHA3-512
tap.equal(is("86730f0dd6381286d3b5f0dfb897ce4895480ce97564c6be4f1543b8").thirteen(), true) // SHA-224
tap.equal(is("3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278").thirteen(), true) // SHA-256
tap.equal(is("6356fbb43627033e886785c2a9c16980336df008b720d23f98b35e06ee69246287739c9d7458b39356c3bdb1e4e2c7fc").thirteen(), true) // SHA-384
tap.equal(is("413f2ba78c7ed4ccefbe0cc4f51d3eb5cb15f13fec999de4884be925076746663aa5d34476a3df4a8729fd8eea01defa4f3f66e99bf943f4d84382d64bbbfa9e").thirteen(), true) // SHA-512
tap.equal(is("8555").thirteen(), true) // CRC16
tap.equal(is("3854745b").thirteen(), true) // CRC32
tap.equal(is("00970065").thirteen(), true) // Adler32
tap.equal(is("72135fa8697eae1c9002bad98bc07d44abc9180794dfa54ed68a1a23d750e505426b9ed67510e16f778e3cecf74770692498d6b7d964856f041b7cc7c1c96a9d").thirteen(), true) // Whirlpool
// End of all hash

tap.equal(is("B").thirteen(), true); // B looks like 13
tap.equal(is("b").thirteen(), false); // b does not look like 13
tap.equal(is("ß").thirteen(), true); // German: looks like 13
tap.equal(is("ẞ").thirteen(), true); // German: looks like 13
tap.equal(is("Β").thirteen(), true); // Upper case beta, looks like 13
tap.equal(is("β").thirteen(), true); // lower case beta
tap.equal(is("阝").thirteen(), true); // Chinese Kangxi radical: Looks like 13
tap.equal(is("Bờ").thirteen(), true); // // Vietnamese spell "B" and B look like 13

tap.equal(is("1PM").thirteen(), true); // 1PM is 13 o'clock
tap.equal(is("một giờ trưa").thirteen(), true); // Vietnamese translate 1PM and 1PM is 13 o'clock

tap.equal(is("i3").thirteen(), true); //i3 looks like 13 when upper case
tap.equal(is("I3").thirteen(), true); //I3 looks like 13
tap.equal(is("l3").thirteen(), true); //l3 looks like 13
tap.equal(is("L3").thirteen(), true); //l3 looks like 13 when lower case
tap.equal(is("|3").thirteen(), true); //|3 looks like 13
tap.equal(is("!3").thirteen(), true); //!3 looks like 13

tap.equal(is("Dilma").thirteen(), true); // Because the supreme Queen of Brazil is 13, amigo

tap.equal(is(25).minus(12).thirteen(), true); // 25 - 12 === 13
tap.equal(is(1).plus(12).thirteen(), true);   // 1  + 12 === 13

tap.equal(is(2).times(8).plus(11).minus(1).dividedby(2).thirteen(), true) // (((2 * 8) + 11) - 1) / 2 === 13
tap.equal(is(10).minus(1).plus(32).dividedby(4).times(3).thirteen(), false) // (((10 - 1) + 32) / 4) * 3 === 30.75

tap.equal(is(5.3).plus(0.5).times(5).minus(4).dividedby(2).roughly.thirteen(), true) // (((12.5 * 2) + 4) / 5) - .5

tap.equal(is(13).base(10).thirteen(), true);
tap.equal(is(14).base(10).thirteen(), false);
tap.equal(is("1101").base(2).thirteen(), true);
tap.equal(is("1111").base(2).thirteen(), false);
tap.equal(is("15").base(8).thirteen(), true);
tap.equal(is("13").base(8).thirteen(), false);
tap.equal(is("d").base(16).thirteen(), true);
tap.equal(is("D").base(16).thirteen(), true);
tap.equal(is("A").base(16).thirteen(), false);

//test function that is returning 13
tap.equals(is(function () { return 13; }).returning.thirteen(), true);

// Same 13 characters tests
tap.equal(is("|||||||||||||").thirteen(), true);
tap.equal(is("/////////////").thirteen(), true);
tap.equal(is("oooooooooooooo").thirteen(), false);
tap.equal(is("bbbbbbbbbbb").thirteen(), false);
tap.equal(is("||h||||||||||").thirteen(), false);
tap.equal(is("///i/////////").thirteen(), false);
