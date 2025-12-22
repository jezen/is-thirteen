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
tap.equal(is('https://en.wikipedia.org/wiki/XIII_(video_game)').thirteen(), true);
tap.equal(is('slus-20677').thirteen(), true); // PlayStation 2 XIII game (USA)
tap.equal(is('SLUS-20677').thirteen(), true); // PlayStation 2 XIII game (USA, uppercase)
tap.equal(is('sles-51244').thirteen(), true); // PlayStation 2 XIII game (European PAL)
tap.equal(is('SLES-51244').thirteen(), true); // PlayStation 2 XIII game (European PAL, uppercase)
tap.equal(is('ce229d2a01be2c85b8113899d9d61f38').thirteen(), true); // PlayStation 2 XIII Demo ISO MD5
tap.equal(is('CE229D2A01BE2C85B8113899D9D61F38').thirteen(), true); // PlayStation 2 XIII Demo ISO MD5 (uppercase)
tap.equal(is('9d4c9624a295faa79aff14759514a030').thirteen(), true); // Nintendo GameCube XIII ISO MD5 (Europe)
tap.equal(is('9D4C9624A295FAA79AFF14759514A030').thirteen(), true); // Nintendo GameCube XIII ISO MD5 (uppercase)
tap.equal(is('b77039d0db6e8a5e24f75338112f05aa').thirteen(), true); // PC XIII ISO MD5 (Europe, Sold Out Software)
tap.equal(is('B77039D0DB6E8A5E24F75338112F05AA').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('b3a1d9be0dc19ca3e2a27c29c4f4afb2').thirteen(), true); // PC XIII ISO MD5 (Europe, Software Pyramide)
tap.equal(is('B3A1D9BE0DC19CA3E2A27C29C4F4AFB2').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('08c39a364e5e34e9299c01fa1350c5be').thirteen(), true); // Nintendo GameCube XIII ISO MD5 (DL-DOL-GX3X-EUR)
tap.equal(is('08C39A364E5E34E9299C01FA1350C5BE').thirteen(), true); // Nintendo GameCube XIII ISO MD5 (uppercase)
tap.equal(is('dcb1a62e1223c41cba48e422aace45d4').thirteen(), true); // PlayStation 2 XIII Beta ISO MD5 (Preview V98, 2003-07-31)
tap.equal(is('DCB1A62E1223C41CBA48E422AACE45D4').thirteen(), true); // PlayStation 2 XIII Beta ISO MD5 (uppercase)
tap.equal(is('702d8da2bb43e25eceb9449c0c0a4385').thirteen(), true); // PlayStation 2 XIII Beta ISO MD5 (Preview V98, 2003-07-30)
tap.equal(is('702D8DA2BB43E25ECEB9449C0C0A4385').thirteen(), true); // PlayStation 2 XIII Beta ISO MD5 (uppercase)
tap.equal(is('6eea451998ff0c662c2a620f574705e4').thirteen(), true); // PlayStation 2 XIII Demo ISO MD5 (Europe, SLED-52014)
tap.equal(is('6EEA451998FF0C662C2A620F574705E4').thirteen(), true); // PlayStation 2 XIII Demo ISO MD5 (uppercase)
tap.equal(is('a7af3e5eb74ac90ecb264a2d9abbc91b').thirteen(), true); // PC XIII ISO MD5 (Europe, Original Disc 1)
tap.equal(is('A7AF3E5EB74AC90ECB264A2D9ABBC91B').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('db74b41016f0d7b1fcda492e265a7b04').thirteen(), true); // PC XIII ISO MD5 (Europe, Original Disc 2)
tap.equal(is('DB74B41016F0D7B1FCDA492E265A7B04').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('043c0d8c73a68c9de90c0af5bd40c869').thirteen(), true); // PC XIII ISO MD5 (Europe, Original Disc 3)
tap.equal(is('043C0D8C73A68C9DE90C0AF5BD40C869').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('47efabac348951167c3e0da0d7616eac').thirteen(), true); // PC XIII ISO MD5 (Europe, Original Disc 4)
tap.equal(is('47EFABAC348951167C3E0DA0D7616EAC').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('4b0668b930a3f3b8c40101ddbbea6d57').thirteen(), true); // PlayStation 2 XIII ISO MD5 (SLES-51244)
tap.equal(is('4B0668B930A3F3B8C40101DDBBEA6D57').thirteen(), true); // PlayStation 2 XIII ISO MD5 (uppercase)
tap.equal(is('b1a15440ccd3efa833178357fb5cd0b4').thirteen(), true); // PC XIII CD MD5 (Europe/Canada, MSI OEM Disc 4)
tap.equal(is('B1A15440CCD3EFA833178357FB5CD0B4').thirteen(), true); // PC XIII CD MD5 (uppercase)
tap.equal(is('08f59f6806e65a5bd787b5e7724294aa').thirteen(), true); // PC XIII ISO MD5 (France, Hits Collection)
tap.equal(is('08F59F6806E65A5BD787B5E7724294AA').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('f69a9433761ad12efa020804cbbec17b').thirteen(), true); // PC XIII ISO MD5 (Hungary, Original Disc 1)
tap.equal(is('F69A9433761AD12EFA020804CBBEC17B').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('5c5cb01792a68c906d76884731b3e06a').thirteen(), true); // PC XIII ISO MD5 (Hungary, Original Disc 2)
tap.equal(is('5C5CB01792A68C906D76884731B3E06A').thirteen(), true); // PC XIII ISO MD5 (uppercase)
tap.equal(is('83f9b72625fa9df4b3ca7fc666d4b2f2').thirteen(), true); // PC XIII ISO MD5 (Hungary, Original Disc 3)
tap.equal(is('83F9B72625FA9DF4B3CA7FC666D4B2F2').thirteen(), true); // PC XIII ISO MD5 (uppercase)

// imdbs
tap.equal(is("http://www.imdb.com/title/tt0798817/").thirteen(), true);
tap.equal(is("https://www.imdb.com/title/tt2991516/").thirteen(), true);

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

// Flipped characters
tap.equal(is("ƖƐ").thirteen(), true);
tap.equal(is("ƐƖ").thirteen(), true);

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
tap.equal(is("seri-un-teng").thirteen(), true); // Belter creole
tap.equal(is("seriunteng").thirteen(), true);
tap.equal(is("serí-un-teng").thirteen(), true);
tap.equal(is("seríunteng").thirteen(), true);
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
tap.equal(is("‘umikūmākolu").thirteen(),true); //Hawaiian
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
tap.equal(is("on üç").thirteen(), true); // Turkish
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
tap.equal(is("matlactlihuan yei").thirteen(), true); // Classical Nahuatl (Aztec)
tap.equal(is("mahtlactli omei").thirteen(), true); // Nahuatl variant
tap.equal(is("mahtlactli ihuan yei").thirteen(), true); // Nahuatl variant
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
tap.equal(is("treze").thirteen(), true); // Portuguese
tap.equal(is("ਤੇਰਾਂ").thirteen(), true); // Punjabi
tap.equal(is("੧੩").thirteen(), true); // Punjabi
tap.equal(is("treisprezece").thirteen(), true); // Romanian
tap.equal(is("тринадцать").thirteen(), true); // Russian
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
tap.equal(is("tayra").thirteen(), true); // Roman Urdu
tap.equal(is("tri ar ddeg").thirteen(), true); // Welsh
tap.equal(is("דרייַצן").thirteen(), true); // Yiddish
tap.equal(is("דרייצן").thirteen(), true); // Yiddish (without diacritics),
tap.equal(is("kumi na tatu").thirteen(), true); // Swahili
tap.equal(is("പതിമൂന്ന്").thirteen(), true); // Malayalam
tap.equal(is("१३").thirteen(), true); //Devanagari
tap.equal(is("तेह्र").thirteen(), true); //Nepali
tap.equal(is("quainel").thirteen(), true); // Quenya
tap.equal(is("mînuiug").thirteen(), true); // Sindarin
tap.equal(is("7h1r733n").thirteen(), true); // Crypto


tap.equal(is("B").thirteen(), true); // B looks like 13
tap.equal(is("b").thirteen(), false); // b does not look like 13
tap.equal(is("ß").thirteen(), true); // German: looks like 13
tap.equal(is("ẞ").thirteen(), true); // German: looks like 13
tap.equal(is("Β").thirteen(), true); // Upper case beta, looks like 13
tap.equal(is("β").thirteen(), true); // lower case beta
tap.equal(is("阝").thirteen(), true); // Chinese Kangxi radical: Looks like 13

tap.equal(is("i3").thirteen(),true); //i3 looks like 13 when upper case
tap.equal(is("I3").thirteen(),true); //I3 looks like 13
tap.equal(is("l3").thirteen(),true); //l3 looks like 13
tap.equal(is("L3").thirteen(),true); //l3 looks like 13 when lower case
tap.equal(is("|3").thirteen(),true); //|3 looks like 13
tap.equal(is("!3").thirteen(),true); //!3 looks like 13

tap.equal(is("Dilma").thirteen(), true); // Because the supreme Queen of Brazil is 13, amigo
tap.equal(is("Lula").thirteen(), true); // Because the supreme King of Brazil is 13, companheiro
tap.equal(is("Lula-Livre").thirteen(), true); // Because the supreme King of Brazil is 13, companheiro

tap.equal(is(25).minus(12).thirteen(),true); // 25 - 12 === 13
tap.equal(is(1).plus(12).thirteen(),true);   // 1  + 12 === 13

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
tap.equal(is(function(){return 13;}).returning.thirteen(),true);

// Same 13 characters tests
tap.equal(is("|||||||||||||").thirteen(), true);
tap.equal(is("/////////////").thirteen(), true);
tap.equal(is("🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱").thirteen(), true);
tap.equal(is("oooooooooooooo").thirteen(), false);
tap.equal(is("bbbbbbbbbbb").thirteen(), false);
tap.equal(is("||h||||||||||").thirteen(), false);
tap.equal(is("///i/////////").thirteen(), false);

// Equality Tests
tap.equal(is(4).greater.than.thirteen(), false);
tap.equal(is(13).greater.than.thirteen(), false);
tap.equal(is(69).greater.than.thirteen(), true);
tap.equal(is(4).greater.than.or.equal.thirteen(), false);
tap.equal(is(13).greater.than.or.equal.thirteen(), true);
tap.equal(is(1989).greater.than.or.equal.thirteen(), true);

tap.equal(is(4.13).less.than.thirteen(), true);
tap.equal(is(13).less.than.thirteen(), false);
tap.equal(is(69).less.than.thirteen(), false);
tap.equal(is(4).less.than.or.equal.thirteen(), true);
tap.equal(is(13).less.than.or.equal.thirteen(), true);
tap.equal(is(420).less.than.or.equal.thirteen(), false);

tap.equal(is(13).not.thirteen(), false);

// Binary data (Buffer/Uint8Array) tests with multi-factor verification
const crypto = require('crypto');

// Test with random buffer that doesn't match XIII ISO (wrong size)
const randomBuffer = Buffer.from('random data that is not the XIII ISO');
tap.equal(is(randomBuffer).thirteen(), false);

// Test with Uint8Array that doesn't match (wrong size)
const randomUint8 = new Uint8Array([1, 2, 3, 4, 5]);
tap.equal(is(randomUint8).thirteen(), false);

// Test with buffer of correct size but wrong content
// XIII ISO size is 371552496 bytes - creating a small test buffer instead
const wrongSizeBuffer = Buffer.alloc(1000);
tap.equal(is(wrongSizeBuffer).thirteen(), false);

// Verify the mechanism works with known test data
const testData = Buffer.from('test');
const testMd5 = crypto.createHash('md5').update(testData).digest('hex');
const testSha1 = crypto.createHash('sha1').update(testData).digest('hex');
tap.equal(testMd5, '098f6bcd4621d373cade4e832627b4f6'); // known MD5 of 'test'
tap.equal(testSha1, 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3'); // known SHA-1 of 'test'
tap.equal(is(testData).thirteen(), false); // 'test' doesn't match XIII ISO

// Note: To match, a Buffer must have ALL THREE matching any known XIII version:
// PS2 Demo (SLUS-29070):
//   - Size: 371552496 bytes, MD5: ce229d2a01be2c85b8113899d9d61f38, SHA-1: 885db708431eed6627b49a8c63cbd9474dc5a838
// GameCube Europe (DL-DOL-GX3P-UKV):
//   - Size: 1459978240 bytes, MD5: 9d4c9624a295faa79aff14759514a030, SHA-1: 81764e0786262ef03f78b3a18bceb9ceb8421b2d
// PC Europe Sold Out Software:
//   - Size: 2565242880 bytes, MD5: b77039d0db6e8a5e24f75338112f05aa, SHA-1: 3713c506711cadab7302ee203845983d87c0d5fc
// PC Europe Software Pyramide:
//   - Size: 2484953088 bytes, MD5: b3a1d9be0dc19ca3e2a27c29c4f4afb2, SHA-1: fbd70e5e431606bc3ba2a85b0f639ab5e16c1cef
// GameCube Europe (DL-DOL-GX3X-EUR):
//   - Size: 1459978240 bytes, MD5: 08c39a364e5e34e9299c01fa1350c5be, SHA-1: d7171b9caa496f212963fa3b89362eea7aa20294
// PS2 Beta Preview V98 (2003-07-31):
//   - Size: 2803531776 bytes, MD5: dcb1a62e1223c41cba48e422aace45d4, SHA-1: 71dd3412401869231379ee5b16a524e3b6f6e206
// PS2 Beta Preview V98 (2003-07-30):
//   - Size: 2223767552 bytes, MD5: 702d8da2bb43e25eceb9449c0c0a4385, SHA-1: 36ff7df9e67a254370c7d24b1136a9fa66c7d446
// PS2 Demo Europe (SLED-52014):
//   - Size: 418533696 bytes, MD5: 6eea451998ff0c662c2a620f574705e4, SHA-1: a978390825d3760234101d05a7e09f3113ca20b9
// PC Europe Original Disc 1:
//   - Size: 795686304 bytes, MD5: a7af3e5eb74ac90ecb264a2d9abbc91b, SHA-1: a480c23d2cf1f266e90f9e3c8d468e4997ba9b6f
// PC Europe Original Disc 2:
//   - Size: 733490016 bytes, MD5: db74b41016f0d7b1fcda492e265a7b04, SHA-1: af3961959b08145811d967c890f3b0d41373baa0
// PC Europe Original Disc 3:
//   - Size: 658150752 bytes, MD5: 043c0d8c73a68c9de90c0af5bd40c869, SHA-1: 011b2507be7835d5450476fab0eb1cb0bf4c55a3
// PC Europe Original Disc 4:
//   - Size: 690518976 bytes, MD5: 47efabac348951167c3e0da0d7616eac, SHA-1: 95d8d6d42744288f5e2ceb2122228693ce185cba
// PS2 Europe/Australia Original (SLES-51244):
//   - Size: 2713092096 bytes, MD5: 4b0668b930a3f3b8c40101ddbbea6d57, SHA-1: 9ace69ba7f15ba281012ababd82edc5d3eaaab0e
// PC Europe/Canada MSI OEM Bundle (Disc 4 CD):
//   - Size: 690166176 bytes, MD5: b1a15440ccd3efa833178357fb5cd0b4, SHA-1: 83c8df7eb664dd58459f5b1e6aa623969277ce0f
// PC France Hits Collection:
//   - Size: 2540548096 bytes, MD5: 08f59f6806e65a5bd787b5e7724294aa, SHA-1: 359b363934c94aabc50dafdaca0e12ce70bb862f
// PC Hungary Original Disc 1:
//   - Size: 793035600 bytes, MD5: f69a9433761ad12efa020804cbbec17b, SHA-1: 380cae0a6108520599baf60511dac30b6d4a3282
// PC Hungary Original Disc 2:
//   - Size: 782863200 bytes, MD5: 5c5cb01792a68c906d76884731b3e06a, SHA-1: c1b6faf08ebfca29a24d91fe76e7fd0b2bb3f0c0
// PC Hungary Original Disc 3:
//   - Size: 693466032 bytes, MD5: 83f9b72625fa9df4b3ca7fc666d4b2f2, SHA-1: 04c63ea775a05613580fe5709aeb0147a6e1f162
