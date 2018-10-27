<template>
  <div>
    {{count}}<br>
    <v-btn v-on:click="startImport"></v-btn>
  </div>
</template>
<script>
  const fb = require('../helpers/firebaseConfig')
  export default {
    name: 'GameBoard',
    data () {
      return {
        questions: [
          {
            'question': 'Aus welcher Serie stammt der Spruch „Bazinga“?',
            'answer1': 'Big Bang Theory',
            'answer2': 'Family Guy',
            'answer3': 'Doctor Who',
            'answer4': 'Dirk Gently'
          },
          {
            'question': 'Mit was für einem Auto reist Marty McFly in die Vergangenheit und zurück in die Zukunft?',
            'answer1': 'DeLorean',
            'answer2': 'Trans Am',
            'answer3': 'Aston Martin',
            'answer4': 'Lamborghini'
          },
          {
            'question': 'Welche im Rudel jagenden Dinosaurier machen den Menschen in Jurassic Park das Leben schwer?',
            'answer1': 'Velociraptor',
            'answer2': 'T-Rex',
            'answer3': 'Compsognathus',
            'answer4': 'Stegosaurus'
          },
          {
            'question': 'Welche Jägerin ist laut deutschem Titel „im Bann der Dämonen“?',
            'answer1': 'Buffy',
            'answer2': 'Xena',
            'answer3': 'Lucy',
            'answer4': 'Willow'
          },
          {
            'question': 'Wer spricht (im Original) Groot in „Guardians of the Galaxy“?',
            'answer1': 'Vin Diesel',
            'answer2': 'Bruce Willis',
            'answer3': 'Gerard Buttler',
            'answer4': 'Keanu Reeves'
          },
          {
            'question': 'Wie heißen die großen dreieckigen Raumschiffe des Imperiums?',
            'answer1': 'Sternenzerstörer',
            'answer2': 'Todesstern',
            'answer3': 'X-Wing',
            'answer4': 'Millennium Falcon'
          },
          {
            'question': 'Wie heißt das Schiff von Captain Jack Sparrow?',
            'answer1': 'Black Pearl',
            'answer2': 'Queen Anne´s Revenge',
            'answer3': 'Flying Dutchman',
            'answer4': 'Silent Mary'
          },
          {
            'question': 'Wie heißt der Anführer der Autobots?',
            'answer1': 'Optimus Prime',
            'answer2': 'Megatron',
            'answer3': 'Sentinel Prime',
            'answer4': 'Ironhide'
          },
          {
            'question': 'Wie heißt der berühmteste Bollywood-Schauspieler der Welt?',
            'answer1': 'Shah Rukh Khan',
            'answer2': 'Salman Khan',
            'answer3': 'Akshay Kumar',
            'answer4': 'Shashi Kapoor'
          },
          {
            'question': 'Wie heißt der beste Freund von E.T.?',
            'answer1': 'Elliott',
            'answer2': 'Elias',
            'answer3': 'Michael',
            'answer4': 'Tyler'
          },
          {
            'question': 'Wie heißt der grüne fette Geist aus Ghostbusters?',
            'answer1': 'Slimer',
            'answer2': 'Vigo',
            'answer3': 'Gozer',
            'answer4': 'Marshmallow Man'
          },
          {
            'question': 'Wie ist der J.D.’s Spitzname für Turk in „Scrubs“?',
            'answer1': 'Schokobär',
            'answer2': 'Flachzange',
            'answer3': 'Turkleton',
            'answer4': 'Dr. Acula'
          },
          {
            'question': 'Wie ist der Name des Imperators bei Star Wars?',
            'answer1': 'Palpatine',
            'answer2': 'Anakin',
            'answer3': 'Imperator',
            'answer4': 'Darth Maul'
          },
          {
            'question': 'Wie lautet das unsinnige Motto von Mary Poppins?',
            'answer1': 'Superkalifragilisticexpialigetisch',
            'answer2': 'Superfalikragilistischexpialigetisch',
            'answer3': 'Expikalifragilistischsuperaligetisch',
            'answer4': 'Klaifragiexpilistischsuperaligetisch'
          },
          {
            'question': 'Wie viele Babylon-Stationen gab es?',
            'answer1': 5,
            'answer2': 3,
            'answer3': 4,
            'answer4': 6
          },
          {
            'question': 'Wodurch können Timelords dem Tod (für eine Weile) ein Schnippchen schlagen?',
            'answer1': 'Regeneration',
            'answer2': 'Optimierung',
            'answer3': 'Reset',
            'answer4': 'Wiederauferstehung'
          },
          {
            'question': 'Wie viele Katzen namens \'Schneeball\' gab es bisher in der Simpson-Familie?',
            'answer1': 5,
            'answer2': 3,
            'answer3': 4,
            'answer4': 6
          },
          {
            'question': 'Welches war der erste abendfüllende Zeichentrickfilm von Disney?',
            'answer1': 'Schneewittchen und die 7 Zwerge',
            'answer2': 'Pinocchio',
            'answer3': 'Bambi',
            'answer4': 'Cinderella'
          },
          {
            'question': 'Welche andere Disney-Figur hat in „Frozen/Die Eiskönigin völlig unverfroren“ einen kleinen Cameo-Auftritt?',
            'answer1': 'Rapunzel',
            'answer2': 'Cinderella',
            'answer3': 'Schneewittchen',
            'answer4': 'Bambi'
          },
          {
            'question': 'Mit welchem einfachen Mittel hält man laut Supernatural - Geister und Dämonens ab?',
            'answer1': 'mit einem Salzkreis',
            'answer2': 'Pentagramm',
            'answer3': 'Knoblauch',
            'answer4': 'Silber'
          },
          {
            'question': 'Welche Intoleranz hat Leonard in Big Bang Theory?',
            'answer1': 'Laktose',
            'answer2': 'Fruktose',
            'answer3': 'Histamin',
            'answer4': 'Gluten'
          },
          {
            'question': 'Welche Figur in der Verfilmung von „Der Hobbit“ stammt nicht aus dem Buch?',
            'answer1': 'Tauriel',
            'answer2': 'Bilbo',
            'answer3': 'Balin',
            'answer4': 'Thorin'
          },
          {
            'question': 'Für welche bockschwere SPIELEREIHE ist From Software berühmt?',
            'answer1': 'Dark Souls',
            'answer2': 'Flappy Bird',
            'answer3': 'Portal',
            'answer4': 'Myst'
          },
          {
            'question': 'Wie heißt Sonics Erzfeind?',
            'answer1': 'Doctor Ivo Robotnik',
            'answer2': 'Shadow the Hedgehog',
            'answer3': 'Metal Sonic',
            'answer4': 'Rouge the Bat'
          },
          {
            'question': 'Was war das Besondere an den Spielediscs des Nintendo Gamecube?',
            'answer1': 'Es sind kleine CDs (Mini-CDs)',
            'answer2': 'Doppelseitige CDs',
            'answer3': 'Blaue CDs',
            'answer4': 'Viereckige CDs'
          },
          {
            'question': 'Wie heißt ein berühmter Mario-Bros. Klon aus Deutschland?',
            'answer1': 'Giana-Sisters',
            'answer2': 'Donkey Kong',
            'answer3': 'Commander Keen',
            'answer4': 'Bubble Bobble'
          },
          {
            'question': 'Wie viele Spieleverfilmungen von Silent Hill gibt es?',
            'answer1': 2,
            'answer2': 1,
            'answer3': 3,
            'answer4': 4
          },
          {
            'question': 'In welchem Spiel besteht die Welt aus Blöcken, die man meist beliebig abbauen bwz. Versetzen kann?',
            'answer1': 'Minecraft',
            'answer2': 'Testris',
            'answer3': 'Lego',
            'answer4': 'Minecroft'
          },
          {
            'question': 'Warum konnte man bis vor kurzem einige Teile der Gears of War Reihe, hierzulande nicht spielen?',
            'answer1': 'Sie standen auf dem Index',
            'answer2': 'Fehlende Finanzierung',
            'answer3': 'Wurden nicht übersetzt',
            'answer4': 'Zu wenig Interesse'
          },
          {
            'question': 'Wie heißt der (Anti)held aus God of War?',
            'answer1': 'Kratos',
            'answer2': 'Thor',
            'answer3': 'Odysseus',
            'answer4': 'Poseidon'
          },
          {
            'question': 'Welchen Effekt haben die Tintenfische in Mariokart?',
            'answer1': 'Sie behindern die Sicht der anderen Fahrer',
            'answer2': 'Rutschige Fahrbahn',
            'answer3': 'Blockieren',
            'answer4': 'Ziehen zurück'
          },
          {
            'question': 'Welcher Spieleklassiker fand man früher besonders oft auf Nokia-Handys?',
            'answer1': 'Snake',
            'answer2': 'Tetris',
            'answer3': 'Pong',
            'answer4': 'Bounce'
          },
          {
            'question': 'Was war der Nachfolger der Nintendo Wii?',
            'answer1': 'Wii U',
            'answer2': 'Wii Me',
            'answer3': 'Wii All',
            'answer4': 'Wii Together'
          },
          {
            'question': 'Bei welchem Entwickler und Publisher entstand die Assassins Creed Reihe?',
            'answer1': 'Ubisoft',
            'answer2': 'EA Games',
            'answer3': 'Activision',
            'answer4': 'Square Enix'
          },
          {
            'question': 'Welches Spiel gilt bis heute als schlechtestes Spiel aller Zeiten?',
            'answer1': 'E.T.',
            'answer2': 'Night Trap',
            'answer3': 'Pac Man',
            'answer4': 'Hotel Mario'
          },
          {
            'question': 'Welches weltbekannte Karaokespiel lässt sich auf der Playstation spielen und erfreut sich dort einer großen Beliebtheit?',
            'answer1': 'Sing Star',
            'answer2': 'Just Sing',
            'answer3': 'Rock Band',
            'answer4': 'Lips'
          },
          {
            'question': 'Mario hatte seine Münzen. Aber was sammelt Sonic?',
            'answer1': 'Goldene Ringe',
            'answer2': 'Diamanten',
            'answer3': 'Kugelschreiber',
            'answer4': 'Kekse'
          },
          {
            'question': 'Nach dem Durchspielen von Resident Evil 4 konnte man eine sehr mächtige Waffe freischalten. Welche war das?',
            'answer1': 'Endlos-Raketenwerfer',
            'answer2': 'Plasma Gewehr',
            'answer3': 'Minigun',
            'answer4': 'Flammenwerfer'
          },
          {
            'question': 'Telltale-Games hat bisher mehrere Staffeln von The Walking Dead entwickelt. Wie viele sind es?',
            'answer1': 3,
            'answer2': 4,
            'answer3': 6,
            'answer4': 2
          },
          {
            'question': 'Wer spielte die Hauptrolle in der Verfilmung von Far Cry?',
            'answer1': 'Til Schweiger',
            'answer2': 'Harrison Ford',
            'answer3': 'Bruce Willis',
            'answer4': 'Vin Diesel'
          },
          {
            'question': 'Wie hieß Mario bevor er Mario hieß?',
            'answer1': 'Jumpman',
            'answer2': 'Superman',
            'answer3': 'Blockman',
            'answer4': 'Hitman'
          },
          {
            'question': 'Wie heißt die spielbare Hauptfigur aus Legend of Zelda?',
            'answer1': 'Link',
            'answer2': 'Zelda',
            'answer3': 'Legend',
            'answer4': 'Yoshi'
          },
          {
            'question': 'Welches Item benutzt Mario um größer zu werden?',
            'answer1': 'Den Pilz',
            'answer2': 'Den Stern',
            'answer3': 'Den Joint',
            'answer4': 'Die Feder'
          },
          {
            'question': 'Solid Snake aus Metal Gear Solid hat ein sehr beliebtes Versteck. Welches ist das?',
            'answer1': 'Unter einem Pappkasten',
            'answer2': 'Hinter einer Wand',
            'answer3': 'Auf einem Tisch',
            'answer4': 'Im Kühlschrank'
          },
          {
            'question': 'Wer entführt immer wieder Prinzessin Peach?',
            'answer1': 'Bowser',
            'answer2': 'Wario',
            'answer3': 'Donkey Kong',
            'answer4': 'Browser'
          },
          {
            'question': 'Auf welcher Konsole erschienen ursprünglich die God of War Reihe?',
            'answer1': 'Playstation 3',
            'answer2': 'Super Nintendo',
            'answer3': 'Sega Megadrive',
            'answer4': 'Xbox 360'
          },
          {
            'question': 'Wieviele Abrafaxe gibt es?',
            'answer1': 3,
            'answer2': 5,
            'answer3': 4,
            'answer4': 7
          },
          {
            'question': 'Welche Farbe hat Lucky Lukes Pferd?',
            'answer1': 'Weiß',
            'answer2': 'Schwarz',
            'answer3': 'Braun',
            'answer4': 'Grau'
          },
          {
            'question': 'Welcher Hund gehört zu den Peanuts?',
            'answer1': 'Snoopy',
            'answer2': 'Goofy',
            'answer3': 'Odie',
            'answer4': 'Rantanplan'
          },
          {
            'question': 'Wie heißt Micky Maus’ bester Freund?',
            'answer1': 'Goofy',
            'answer2': 'Donald Duck',
            'answer3': 'Minnie Mouse',
            'answer4': 'Dogobert Duck'
          },
          {
            'question': 'Wie viele Robins standen bisher Batman zur Seite (Prime Earth/New Earth)?',
            'answer1': 5,
            'answer2': 4,
            'answer3': 6,
            'answer4': 3
          },
          {
            'question': 'Wie viele Dragonballs gibt es?',
            'answer1': 7,
            'answer2': 9,
            'answer3': 4,
            'answer4': 6
          },
          {
            'question': 'Wie viele Schwerter führt Lorenor Zoro aus One Piece gleichzeitig?',
            'answer1': 'Drei',
            'answer2': 'Vier',
            'answer3': 'Zwei',
            'answer4': 'Keins'
          },
          {
            'question': 'Von welcher Teufelsfrucht hat Sanji in One Piece gegessen?',
            'answer1': 'Keiner',
            'answer2': 'Moku Moku no Mi',
            'answer3': 'Suna Suna no Mi',
            'answer4': 'Inu Inu no Mi, Modell Schakal'
          },
          {
            'question': 'Was ist in Naruto eingesperrt?',
            'answer1': 'Ein neunschwänziger Fuchs',
            'answer2': 'Ein siebenschwänziger Wolf',
            'answer3': 'Ein dreischwänziger Rabe',
            'answer4': 'Ein siebenschwänziger Fuchs'
          },
          {
            'question': 'Wer gewann 6 Mal in Folge das Große Turnier von Dragon Ball?',
            'answer1': 'Mr. Satan',
            'answer2': 'Son-Gohan',
            'answer3': 'Son-Goku',
            'answer4': 'Bulma'
          },
          {
            'question': 'Welcher amerikanische Comic-Autor hat seine eigene Manga-Reihe?',
            'answer1': 'Stan Lee',
            'answer2': 'Bruce Lee',
            'answer3': 'Stan Laurel',
            'answer4': 'Satan Lee'
          },
          {
            'question': 'Wie lautet die Registrierungs-Nummer der U.S.S. Enterprise in „The Next Generation“?',
            'answer1': 'NCC-1701-D',
            'answer2': 'NCC-1701-C',
            'answer3': 'NCC-1700-D',
            'answer4': 'NCC-1702-C'
          },
          {
            'question': 'Welche Form haben Borg-Raumschiffe (in der Regel)?',
            'answer1': 'Kubus',
            'answer2': 'Sphäre',
            'answer3': 'Hexagon',
            'answer4': 'Tetraeder'
          },
          {
            'question': 'Wie ist die Bezeichnung für die wichtigste Regel der Sternenflotte?',
            'answer1': 'Oberste Direktive',
            'answer2': 'Oberste Erwerbsregeln',
            'answer3': 'Sternen Direktive',
            'answer4': 'Oberste Gebote'
          },
          {
            'question': 'Aus welchem Land stammt Pavel Chekov?',
            'answer1': 'Russland',
            'answer2': 'Tschechien',
            'answer3': 'Polen',
            'answer4': 'Sibirien'
          },
          {
            'question': 'Wofür steht das T in James T. Kirk?',
            'answer1': 'Tiberius',
            'answer2': 'Tom',
            'answer3': 'Tylor',
            'answer4': 'Tim'
          },
          {
            'question': 'Wer betreibt die beliebteste Bar auf Deep Space Nine?',
            'answer1': 'Quark',
            'answer2': 'Joghurt',
            'answer3': 'Zehn Vorne',
            'answer4': 'The Drunken Clam'
          },
          {
            'question': 'Der Erfinder von Family Guy hatte in Star Trek: Enterprise einen kleinen Auftritt, wie heißt er?',
            'answer1': 'Seth MacFarlane',
            'answer2': 'Sith Lord',
            'answer3': 'Matt Groening',
            'answer4': 'Trey Parker'
          },
          {
            'question': 'In welchem Quadranten der Galaxis strandete die U.S.S. Voyager?',
            'answer1': 'Im Delta-Quadranten',
            'answer2': 'Im Gamma-Quadranten',
            'answer3': 'Im Alpha-Quadranten',
            'answer4': 'Im Pi-Quadranten'
          },
          {
            'question': 'Wie heißt die Paarungszeit, die einen Vulkanier alle 7 Jahre befällt?',
            'answer1': 'Pon Farr',
            'answer2': 'Pontifex',
            'answer3': 'Pa nar-Syndrom',
            'answer4': 'Kir Shara'
          },
          {
            'question': 'Nach welcher Klasse bezeichnet die Sternenflotte Planeten, auf denen Menschen leben können?',
            'answer1': 'M-Klasse',
            'answer2': 'L-Klasse',
            'answer3': 'R-Klasse',
            'answer4': 'N-Klasse'
          },
          {
            'question': 'Kes aus „Star Trek: Voyager“ ist eine Ocampa. Wie alt werden Ocampa?',
            'answer1': '9 Jahre',
            'answer2': '11 Jahre',
            'answer3': '8 Jahre',
            'answer4': '12 Jahre'
          },
          {
            'question': 'Wie heißt das kleine Raumschiff, das Tom Paris auf der Voyager baut?',
            'answer1': 'Delta-Flyer',
            'answer2': 'Epsilon-Flyer',
            'answer3': 'Alpha-Flyer',
            'answer4': 'Omega-Flyer'
          },
          {
            'question': 'Mit was infizieren die Borg ihre Opfer zuerst, um sie zu assimilieren?',
            'answer1': 'Nano-Sonden',
            'answer2': 'Mirko-Sonden',
            'answer3': 'Micro-Sonden',
            'answer4': 'Nitro-Sonden'
          },
          {
            'question': 'Welche Farbe hat vulkanisches Blut?',
            'answer1': 'Grün',
            'answer2': 'Blau',
            'answer3': 'Rot',
            'answer4': 'Schwarz'
          },
          {
            'question': 'Wer ist der Regierungschef auf Romulus?',
            'answer1': 'Der Praetor',
            'answer2': 'Der Predator',
            'answer3': 'Der Pate',
            'answer4': 'Der Pater'
          },
          {
            'question': 'Was für ein Amt bekleidet Spock nach seiner Pensionierung als Sternenflotten-Offizier?',
            'answer1': 'Botschafter',
            'answer2': 'Konsul',
            'answer3': 'Captain',
            'answer4': 'Agent'
          },
          {
            'question': 'Wie heißen die Wartungsschächte in einem Sternenflottenraumschiff?',
            'answer1': 'Jefferies-Röhren',
            'answer2': 'Metaphasische Zelle',
            'answer3': 'Alpha Tunnel',
            'answer4': 'Hybrid Kanal'
          },
          {
            'question': 'Wie hieß die Steuerfrau der U.S.S. Voyager, die Tom Paris in der Pilotfolge auf das Schiff brachte?',
            'answer1': 'Lieutenant Stadi',
            'answer2': 'B Elanna Torres',
            'answer3': 'Lyndsay Ballard',
            'answer4': 'Tess Allenby'
          },
          {
            'question': 'Wie viele Decks hat die U.S.S. Enterprise-D (Next Generation)?',
            'answer1': 42,
            'answer2': 48,
            'answer3': 56,
            'answer4': 34
          },
          {
            'question': 'Wie lautet das korrekte Mischverhältnis von Materie und Antimaterie in einem Warp-Antrieb?',
            'answer1': '1:1',
            'answer2': '1:2',
            'answer3': '2:1',
            'answer4': '5:1'
          },
          {
            'question': 'Wie lautet „Lebe lang und in Frieden/Live long and prosper“ auf vulkanisch?',
            'answer1': 'Dif-tor heh smusma',
            'answer2': 'naH jajmey',
            'answer3': 'mIvDaq pogh cha',
            'answer4': 'sallamaka al-lahu wa-nasaraka'
          },
          {
            'question': 'Welches ist die 11. Nachkommastelle von Pi?',
            'answer1': 9,
            'answer2': 5,
            'answer3': 6,
            'answer4': 11
          },
          {
            'question': 'Welchen RGB Wert hat Khaki?',
            'answer1': '240,230,140',
            'answer2': '255,140,0',
            'answer3': '107,142,35',
            'answer4': '123,456,789'
          },
          {
            'question': 'Welchen Hex Wert hat Cyan?',
            'answer1': '#00FFFF',
            'answer2': '#00FF00',
            'answer3': '#FF00FF',
            'answer4': '#FFCYAN'
          },
          {
            'question': 'Was ist 211 in binär?',
            'answer1': 11010011,
            'answer2': 10110101,
            'answer3': 10011011,
            'answer4': 11001002
          },
          {
            'question': 'Wähle die Antwort mit 12 Einsen!',
            'answer1': 111111000000,
            'answer2': 11111111111,
            'answer3': 1111110000000,
            'answer4': 12
          },
          {
            'question': 'Was ist richtig in Base64?',
            'answer1': 'cmljaHRpZw==',
            'answer2': 'bmVpbg==',
            'answer3': 'ZmFsc2No',
            'answer4': 'ZmFzdA=='
          },
          {
            'question': 'Wie lautet der Dezimalwert des Backslash?',
            'answer1': 92,
            'answer2': '5C',
            'answer3': '4G',
            'answer4': 42
          },
          {
            'question': 'Wie heißt der Erfinder von JavaScript?',
            'answer1': 'Brendan Eich',
            'answer2': 'Douglas Crockford',
            'answer3': 'John Resig',
            'answer4': 'Erich Gamma'
          },
          {
            'question': 'Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?',
            'answer1': 'Mocha',
            'answer2': 'Micha',
            'answer3': 'Macha',
            'answer4': 'Mucha'
          },
          {
            'question': 'Welche der folgenden Sprachen hatte keinen Einfluss auf JS?',
            'answer1': 'Prolog',
            'answer2': 'Scheme',
            'answer3': 'Java',
            'answer4': 'Perl'
          },
          {
            'question': 'Was ist false?',
            'answer1': 'Number.MIN_VALUE * 2 === -Infinity',
            'answer2': '1/0 === Infinity',
            'answer3': 'Number.POSITIVE_INFINITY === Infinity',
            'answer4': 'Number.MAX_VALUE * 2 === Infinity'
          }
        ]
      }
    },
    computed: {
      count () {
        return this.questions.length
      }
    },
    methods: {
      startImport: function () {
        this.questions.forEach(function (entry) {
          console.log(entry)
          fb.quizCollection.add({
            question: entry.question,
            answer1: entry.answer1,
            answer2: entry.answer2,
            answer3: entry.answer3,
            answer4: entry.answer4
          })
        })
      }
    }
  }
</script>
