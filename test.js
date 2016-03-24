const tap = require('tap');
const isThirteen = require('./');


tap.equal(isThirteen(13), true);

tap.equal(isThirteen('13', true), false);
tap.equal(isThirteen('13', false), true);

tap.equal(isThirteen('thirteen'), true);
tap.equal(isThirteen('Thirteen'), true);
tap.equal(isThirteen('dreizehn'), true);
tap.equal(isThirteen('שלוש עשרה'), true);
tap.equal(isThirteen('Remy Hadley'), true);
tap.equal(isThirteen('Olivia Wilde'), true);

tap.equal(isThirteen('https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg'), true);
tap.equal(isThirteen('http://www.metal-archives.com/images/1/5/3/7/153772.jpg'), false);

tap.equal(isThirteen(1101), true);
tap.equal(isThirteen('1101'), true);

tap.equal(isThirteen("13i"), true);
tap.equal(isThirteen("13i+13"), true);
tap.equal(isThirteen("12i"), false);

tap.equal(isThirteen("dertien"), true); // Afrikaans / Dutch
tap.equal(isThirteen("tretze"), true); // Catalan
tap.equal(isThirteen("十三"), true); // Chinese (Traditional)
tap.equal(isThirteen("trinaest"), true); // Croatian
tap.equal(isThirteen("tretten"), true); // Danish / Norwegian
tap.equal(isThirteen("kolmteist"), true); // Estonian
tap.equal(isThirteen("thirteen"), true); // English
tap.equal(isThirteen("labintatlo"), true); // Filipino
tap.equal(isThirteen("kolmetoista"), true); // Finnish
tap.equal(isThirteen("treize"), true); // French
tap.equal(isThirteen("dreizehn"), true); // German
tap.equal(isThirteen("tizenhárom"), true); // Hungarian
tap.equal(isThirteen("déag"), true); // Irish
tap.equal(isThirteen("tredici"), true); // Italian
tap.equal(isThirteen("열셋"), true); // Korean
tap.equal(isThirteen("sêzdeh"), true); // Kurdish
tap.equal(isThirteen("tredecim"), true); // Latin
tap.equal(isThirteen("trīspadsmit"), true); // Latvian
tap.equal(isThirteen("trylika"), true); // Lithuanian
tap.equal(isThirteen("dräizéng"), true); // Luxembourgish
tap.equal(isThirteen("тринаесет"), true); // Macedonian
tap.equal(isThirteen("арван"), true); // Mongolian
tap.equal(isThirteen("trzynaście"), true); // Polish
tap.equal(isThirteen("treze"), true); // Portoguese
tap.equal(isThirteen("ਤੀਹ"), true); // Punjabi 
tap.equal(isThirteen("treisprezece"), true); // Romanian
tap.equal(isThirteen("тринадцать"), true); // Russia
tap.equal(isThirteen("trinásť"), true); // Slovak
tap.equal(isThirteen("trinajst"), true); // Slovenian
tap.equal(isThirteen("trece"), true); // Spanish
tap.equal(isThirteen("tretton"), true); // Swedish
tap.equal(isThirteen("สิบสาม"), true); // Thai
tap.equal(isThirteen("тринадцять"), true); // Ukrainian
tap.equal(isThirteen("تیرہ"), true); // Urdu
tap.equal(isThirteen("tri ar ddeg"), true); // Welsh
tap.equal(isThirteen("דרייַצן"), true); // Yiddish
