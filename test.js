'use strict';

const tap = require('tap');
const is = require('./');

tap.equal(is(13).thirteen(), true);
tap.equal(is('13').thirteen(), true);
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
tap.equal(is("2003").yearOfBirth(), true)

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
tap.equal(is("dertiendertien").thirteen(), true); // Double Dutch
tap.equal(is("тринадесет").thirteen(), true); // Bulgarian
tap.equal(is("тринайсет").thirteen(), true); // Also Bulgarian
tap.equal(is("tretze").thirteen(), true); // Catalan
tap.equal(is("napulo ug tulo").thirteen(), true); // Cebuano
tap.equal(is("十三").thirteen(), true); // Chinese (Traditional)
tap.equal(is("拾參").thirteen(), true); // Chinese (Traditional, upper case)
tap.equal(is("拾叁").thirteen(), true); // Chinese (simplified, upper case)
tap.equal(is("拾叄").thirteen(), true); // Chinese (variant)
tap.equal(is("拾参").thirteen(), true); // Chinese (variant)
tap.equal(is("trinaest").thirteen(), true); // Croatian / Serbian (latin)
tap.equal(is("tretten").thirteen(), true); // Danish / Norwegian
tap.equal(is("kolmteist").thirteen(), true); // Estonian
tap.equal(is("thirteen").thirteen(), true); // English
tap.equal(is("labintatlo").thirteen(), true); // Filipino
tap.equal(is("kolmetoista").thirteen(), true); // Finnish
tap.equal(is("treize").thirteen(), true); // French
tap.equal(is("dreizehn").thirteen(), true); // German
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
tap.equal(is("on üç").thirteen(), true); // Italian
tap.equal(is("ಹದಿಮೂರು").thirteen(), true); //Kannada (thirteen)
tap.equal(is("೧೩").thirteen(), true); //Kannada (13)
tap.equal(is("열셋").thirteen(), true); // Korean
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
tap.equal(is("trzynaście").thirteen(), true); // Polish
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
tap.equals(is("१३").thirteen(), true); //Devanagari
tap.equals(is("तेह्र").thirteen(), true); //Nepali
tap.equal(is("quainel").thirteen(), true); // Quenya
tap.equal(is("mînuiug").thirteen(), true); // Sindarin

tap.equal(is("B").thirteen(), true); // B looks like 13
tap.equal(is("b").thirteen(), true); // b looks like 13 when upper case

tap.equal(is("β").thirteen(), true); // β looks like 13

tap.equal(is("i3").thirteen(),true); //i3 looks like 13 when upper case
tap.equal(is("I3").thirteen(),true); //I3 looks like 13
tap.equal(is("l3").thirteen(),true); //l3 looks like 13
tap.equal(is("L3").thirteen(),true); //l3 looks like 13 when lower case
tap.equal(is("|3").thirteen(),true); //|3 looks like 13

tap.equal(is("Dilma").thirteen(), true); // Because the supreme Queen of Brazil is 13, amigo

tap.equal(is(25).minus(12).thirteen(),true); // 25 - 12 === 13
tap.equal(is(1).plus(12).thirteen(),true);   // 1  + 12 === 13

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
tap.equals(is(function(){return 13;}).returning.thirteen(),true);

// Same 13 characters tests
tap.equal(is("|||||||||||||").thirteen(), true);
tap.equal(is("/////////////").thirteen(), true);
tap.equal(is("oooooooooooooo").thirteen(), false);
tap.equal(is("bbbbbbbbbbb").thirteen(), false);
tap.equal(is("||h||||||||||").thirteen(), false);
tap.equal(is("///i/////////").thirteen(), false);
