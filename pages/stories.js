import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
const stories = [
  {
    id: 1,
    title: "The Honest Boy",
    teluguTitle: "నిజాయితీ గల బాలుడు",
    language: "English",
    emoji: "👦🌳👛",
    color: "#ffe1e8",
    pages: [
      "Ravi was a kind and honest boy.",
      "One day, he found a purse under a tree.",
      "There was money inside the purse.",
      "Ravi searched for the owner and returned it.",
      "The owner thanked Ravi for being honest."
    ],
    teluguPages: [
      "రవి ఒక మంచి మరియు నిజాయితీ గల బాలుడు.",
      "ఒక రోజు అతనికి చెట్టు కింద ఒక పర్సు కనిపించింది.",
      "ఆ పర్సులో డబ్బులు ఉన్నాయి.",
      "రవి పర్సు యజమాని కోసం వెతికి దానిని తిరిగి ఇచ్చాడు.",
      "రవి నిజాయితీకి యజమాని ధన్యవాదాలు చెప్పాడు."
    ],
    moral: "Always be honest. ❤️",
    teluguMoral: "ఎల్లప్పుడూ నిజాయితీగా ఉండాలి. ❤️"
  },

  {
    id: 2,
    title: "The Helpful Little Bird",
    teluguTitle: "సహాయం చేసిన చిన్న పక్షి",
    language: "English",
    emoji: "🐦🍃🐜",
    color: "#dff2ff",
    pages: [
      "A little bird lived in a beautiful forest.",
      "It saw a tiny ant struggling in water.",
      "The bird dropped a leaf near the ant.",
      "The ant climbed onto the leaf and reached land.",
      "Later, the ant warned the bird about danger."
    ],
    teluguPages: [
      "ఒక అందమైన అడవిలో ఒక చిన్న పక్షి ఉండేది.",
      "నీటిలో ఇబ్బంది పడుతున్న ఒక చిన్న చీమను అది చూసింది.",
      "పక్షి వెంటనే చీమ దగ్గర ఒక ఆకును వేసింది.",
      "చీమ ఆ ఆకుపైకి ఎక్కి ఒడ్డుకు చేరుకుంది.",
      "తర్వాత చీమ పక్షిని ప్రమాదం గురించి హెచ్చరించింది."
    ],
    moral: "A small act of kindness can make a big difference. 🌟",
    teluguMoral: "చిన్న సహాయం కూడా పెద్ద మార్పును తీసుకురాగలదు. 🌟"
  },

  {
    id: 3,
    title: "The Ant and the Grasshopper",
    teluguTitle: "చీమ మరియు మిడత",
    language: "తెలుగు",
    emoji: "🐜🌾🦗",
    color: "#fff0b8",
    pages: [
      "An ant worked hard every day.",
      "A grasshopper spent his days playing.",
      "Winter came and the grasshopper had no food.",
      "The ant shared some food with him.",
      "The grasshopper learned to work hard."
    ],
    teluguPages: [
      "ఒక చీమ ప్రతిరోజూ కష్టపడి పనిచేసేది.",
      "ఒక మిడత మాత్రం రోజంతా ఆడుతూ ఉండేది.",
      "చలికాలం వచ్చింది. మిడత దగ్గర ఆహారం లేకపోయింది.",
      "చీమ తన దగ్గర ఉన్న కొంత ఆహారాన్ని పంచుకుంది.",
      "మిడత కష్టపడి పనిచేయాలని నేర్చుకుంది."
    ],
    moral: "Work hard and prepare for tomorrow. 🌾",
    teluguMoral: "కష్టపడి పనిచేసి రేపటి కోసం సిద్ధంగా ఉండాలి. 🌾"
  },

  {
    id: 4,
    title: "The Thirsty Crow",
    teluguTitle: "దాహంతో ఉన్న కాకి",
    language: "తెలుగు",
    emoji: "🐦‍⬛🏺💧",
    color: "#e9ddff",
    pages: [
      "A crow was very thirsty.",
      "It searched everywhere for water.",
      "At last, it found a pot with little water.",
      "The crow dropped small stones into the pot.",
      "The water rose and the crow drank happily."
    ],
    teluguPages: [
      "ఒక కాకికి చాలా దాహం వేసింది.",
      "అది నీటి కోసం చాలా చోట్ల వెతికింది.",
      "చివరికి కొంచెం నీరు ఉన్న ఒక కుండ కనిపించింది.",
      "కాకి చిన్న రాళ్లను ఒక్కొక్కటిగా కుండలో వేసింది.",
      "నీరు పైకి వచ్చింది. కాకి సంతోషంగా నీరు తాగింది."
    ],
    moral: "Think wisely and find a solution. 🧠",
    teluguMoral: "తెలివిగా ఆలోచిస్తే సమస్యకు పరిష్కారం దొరుకుతుంది. 🧠"
  },

  {
    id: 5,
    title: "The Lion and the Mouse",
    teluguTitle: "సింహం మరియు ఎలుక",
    language: "English",
    emoji: "🦁🐭🌳",
    color: "#ffe8c2",
    pages: [
      "A lion caught a tiny mouse.",
      "The mouse asked the lion to let him go.",
      "The lion kindly released him.",
      "Later, the lion was caught in a net.",
      "The mouse cut the net and saved the lion."
    ],
    teluguPages: [
      "ఒక సింహం ఒక చిన్న ఎలుకను పట్టుకుంది.",
      "ఎలుక తనను వదిలేయమని సింహాన్ని కోరింది.",
      "సింహం దయతో ఎలుకను వదిలేసింది.",
      "తర్వాత సింహం ఒక వలలో చిక్కుకుంది.",
      "ఎలుక వలను కొరికి సింహాన్ని రక్షించింది."
    ],
    moral: "Even the smallest friend can help. 🐭❤️",
    teluguMoral: "చిన్న స్నేహితుడు కూడా గొప్ప సహాయం చేయగలడు. ❤️"
  },

  {
    id: 6,
    title: "The Tortoise and the Hare",
    teluguTitle: "తాబేలు మరియు కుందేలు",
    language: "English",
    emoji: "🐢🐇🏁",
    color: "#dff7e5",
    pages: [
      "A rabbit laughed at a slow tortoise.",
      "They decided to have a race.",
      "The rabbit ran very fast and then slept.",
      "The tortoise kept walking without stopping.",
      "The tortoise reached the finish line first."
    ],
    teluguPages: [
      "ఒక కుందేలు నెమ్మదిగా నడిచే తాబేలును చూసి నవ్వింది.",
      "ఇద్దరూ ఒక పందెం పెట్టుకున్నారు.",
      "కుందేలు వేగంగా పరిగెత్తి మధ్యలో నిద్రపోయింది.",
      "తాబేలు మాత్రం ఆగకుండా నెమ్మదిగా ముందుకు సాగింది.",
      "చివరికి తాబేలు ముందుగా గమ్యానికి చేరుకుంది."
    ],
    moral: "Slow and steady wins the race. 🏆",
    teluguMoral: "నెమ్మదిగా అయినా ఆగకుండా ప్రయత్నిస్తే విజయం సాధించవచ్చు. 🏆"
  },

  {
    id: 7,
    title: "The Kind Farmer",
    teluguTitle: "దయగల రైతు",
    language: "English",
    emoji: "👨‍🌾🌾❤️",
    color: "#e8f5d8",
    pages: [
      "A farmer found an injured bird in his field.",
      "He gently picked it up.",
      "He gave the bird food and water.",
      "After a few days, the bird became healthy.",
      "The farmer happily released it."
    ],
    teluguPages: [
      "ఒక రైతు తన పొలంలో గాయపడిన పక్షిని చూశాడు.",
      "అతను దానిని జాగ్రత్తగా చేతుల్లోకి తీసుకున్నాడు.",
      "పక్షికి ఆహారం మరియు నీరు ఇచ్చాడు.",
      "కొన్ని రోజుల తర్వాత పక్షి ఆరోగ్యంగా మారింది.",
      "రైతు సంతోషంగా దానిని స్వేచ్ఛగా వదిలాడు."
    ],
    moral: "Be kind to animals and birds. 🐦❤️",
    teluguMoral: "జంతువులు, పక్షుల పట్ల దయగా ఉండాలి. ❤️"
  },

  {
    id: 8,
    title: "The Sharing Boy",
    teluguTitle: "పంచుకున్న బాలుడు",
    language: "English",
    emoji: "👦🍎🤝",
    color: "#ffe5d9",
    pages: [
      "Arun brought an apple to school.",
      "His friend had no lunch that day.",
      "Arun cut the apple into two pieces.",
      "He gave one piece to his friend.",
      "Both friends enjoyed the apple together."
    ],
    teluguPages: [
      "అరుణ్ పాఠశాలకు ఒక ఆపిల్ తీసుకువచ్చాడు.",
      "ఆ రోజు అతని స్నేహితుడి దగ్గర భోజనం లేదు.",
      "అరుణ్ ఆపిల్‌ను రెండు ముక్కలుగా చేశాడు.",
      "ఒక ముక్కను స్నేహితుడికి ఇచ్చాడు.",
      "ఇద్దరూ కలిసి ఆపిల్‌ను సంతోషంగా తిన్నారు."
    ],
    moral: "Sharing makes everyone happy. 😊",
    teluguMoral: "పంచుకుంటే అందరూ సంతోషంగా ఉంటారు. 😊"
  },

  {
    id: 9,
    title: "The Clean Little Girl",
    teluguTitle: "శుభ్రతను ప్రేమించిన చిన్నారి",
    language: "తెలుగు",
    emoji: "👧🧹🌸",
    color: "#e5f7ff",
    pages: [
      "Maya liked to keep her room clean.",
      "She put her toys back after playing.",
      "She kept books neatly on the shelf.",
      "Soon, her room looked beautiful.",
      "Her friends learned the same good habit."
    ],
    teluguPages: [
      "మాయ తన గదిని శుభ్రంగా ఉంచడం ఇష్టపడేది.",
      "ఆడుకున్న తర్వాత బొమ్మలను వాటి స్థానంలో పెట్టేది.",
      "పుస్తకాలను చక్కగా అరలో పెట్టేది.",
      "కొద్దిసేపటికి ఆమె గది అందంగా కనిపించింది.",
      "ఆమె స్నేహితులు కూడా అదే మంచి అలవాటు నేర్చుకున్నారు."
    ],
    moral: "Cleanliness is a good habit. 🧹",
    teluguMoral: "శుభ్రత మంచి అలవాటు. 🧹"
  },

  {
    id: 10,
    title: "The Wise Elephant",
    teluguTitle: "తెలివైన ఏనుగు",
    language: "English",
    emoji: "🐘🌳🧠",
    color: "#e8ddff",
    pages: [
      "An elephant lived near a forest village.",
      "One day, the animals could not find water.",
      "The elephant remembered an old pond.",
      "He showed the animals the way.",
      "Everyone found water and thanked him."
    ],
    teluguPages: [
      "ఒక ఏనుగు అడవి గ్రామం దగ్గర నివసించేది.",
      "ఒక రోజు జంతువులకు నీరు దొరకలేదు.",
      "ఏనుగుకు ఒక పాత చెరువు గుర్తుకు వచ్చింది.",
      "అది జంతువులకు ఆ చెరువు దారి చూపించింది.",
      "అందరికీ నీరు దొరికింది. వారు ఏనుగుకు ధన్యవాదాలు చెప్పారు."
    ],
    moral: "Wisdom becomes useful when we help others. 🧠❤️",
    teluguMoral: "ఇతరులకు సహాయం చేసినప్పుడు తెలివి మరింత విలువైనదవుతుంది. ❤️"
  },

  {
    id: 11,
    title: "The Truthful Girl",
    teluguTitle: "నిజం చెప్పిన బాలిక",
    language: "English",
    emoji: "👧🌷💬",
    color: "#ffe1f0",
    pages: [
      "Anu accidentally broke a flower pot.",
      "She was afraid to tell her mother.",
      "But Anu decided to tell the truth.",
      "Her mother appreciated her honesty.",
      "Together they planted a new flower."
    ],
    teluguPages: [
      "అను పొరపాటున ఒక పూల కుండను పగలగొట్టింది.",
      "అది అమ్మకు చెప్పడానికి ఆమె భయపడింది.",
      "కానీ అను నిజం చెప్పాలని నిర్ణయించుకుంది.",
      "ఆమె నిజాయితీని అమ్మ మెచ్చుకుంది.",
      "ఇద్దరూ కలిసి కొత్త మొక్కను నాటారు."
    ],
    moral: "Always tell the truth. 🌷",
    teluguMoral: "ఎల్లప్పుడూ నిజం చెప్పాలి. 🌷"
  },

  {
    id: 12,
    title: "The Little Seed",
    teluguTitle: "చిన్న విత్తనం",
    language: "English",
    emoji: "🌱☀️💧",
    color: "#e2f7d9",
    pages: [
      "A little seed was planted in the soil.",
      "Every day, a child gave it water.",
      "The seed slowly grew roots.",
      "Then a tiny green plant appeared.",
      "Soon it became a beautiful tree."
    ],
    teluguPages: [
      "ఒక చిన్న విత్తనాన్ని మట్టిలో నాటారు.",
      "ప్రతిరోజూ ఒక చిన్నారి దానికి నీరు పోసేవాడు.",
      "విత్తనం నెమ్మదిగా వేర్లు పెంచుకుంది.",
      "తర్వాత చిన్న పచ్చని మొక్క బయటకు వచ్చింది.",
      "కొంతకాలానికి అది అందమైన చెట్టుగా మారింది."
    ],
    moral: "Good things grow with care and patience. 🌱",
    teluguMoral: "శ్రద్ధ, ఓర్పుతో మంచి ఫలితాలు వస్తాయి. 🌱"
  },

  {
    id: 13,
    title: "The Helpful Friends",
    teluguTitle: "సహాయం చేసిన స్నేహితులు",
    language: "తెలుగు",
    emoji: "👧👦🤝",
    color: "#dff2ff",
    pages: [
      "Two children saw their teacher carrying many books.",
      "They quickly offered to help.",
      "One child carried some books.",
      "The other opened the classroom door.",
      "Their teacher thanked them with a smile."
    ],
    teluguPages: [
      "ఇద్దరు పిల్లలు తమ టీచర్ చాలా పుస్తకాలు తీసుకెళ్తున్నారని చూశారు.",
      "వారు వెంటనే సహాయం చేయడానికి ముందుకు వచ్చారు.",
      "ఒక పిల్లవాడు కొన్ని పుస్తకాలు తీసుకున్నాడు.",
      "మరొక పిల్లవాడు తరగతి గది తలుపు తెరిచాడు.",
      "టీచర్ చిరునవ్వుతో వారికి ధన్యవాదాలు చెప్పారు."
    ],
    moral: "Helping others is a beautiful habit. 🤝",
    teluguMoral: "ఇతరులకు సహాయం చేయడం మంచి అలవాటు. 🤝"
  },

  {
    id: 14,
    title: "Save Every Drop",
    teluguTitle: "ప్రతి నీటి బొట్టును కాపాడుదాం",
    language: "English",
    emoji: "💧🚰🌍",
    color: "#dff7ff",
    pages: [
      "Ravi saw a tap dripping water.",
      "He immediately closed the tap.",
      "His mother explained that every drop matters.",
      "Ravi started using water carefully.",
      "His family also learned to save water."
    ],
    teluguPages: [
      "రవి ఒక కుళాయి నుంచి నీరు కారుతున్నట్లు చూశాడు.",
      "అతను వెంటనే కుళాయిని మూసేశాడు.",
      "ప్రతి నీటి బొట్టూ ముఖ్యమని అమ్మ వివరించింది.",
      "రవి నీటిని జాగ్రత్తగా ఉపయోగించడం మొదలుపెట్టాడు.",
      "అతని కుటుంబం కూడా నీటిని పొదుపు చేయడం నేర్చుకుంది."
    ],
    moral: "Save water because every drop matters. 💧",
    teluguMoral: "నీటిని పొదుపు చేయాలి. ప్రతి నీటి బొట్టూ విలువైనదే. 💧"
  },

  {
    id: 15,
    title: "The Thankful Child",
    teluguTitle: "కృతజ్ఞత గల చిన్నారి",
    language: "తెలుగు",
    emoji: "👦🙏❤️",
    color: "#fff0c9",
    pages: [
      "Rohan received a gift from his grandmother.",
      "He thanked her with a big smile.",
      "He also thanked his mother for preparing food.",
      "He thanked his teacher for teaching him.",
      "Rohan learned to be thankful every day."
    ],
    teluguPages: [
      "రోహన్ తన అమ్మమ్మ దగ్గర నుంచి ఒక బహుమతి అందుకున్నాడు.",
      "అతను చిరునవ్వుతో అమ్మమ్మకు ధన్యవాదాలు చెప్పాడు.",
      "భోజనం తయారు చేసిన అమ్మకు కూడా ధన్యవాదాలు చెప్పాడు.",
      "తనకు బోధించిన టీచర్‌కు కూడా కృతజ్ఞతలు చెప్పాడు.",
      "ప్రతిరోజూ కృతజ్ఞతగా ఉండాలని రోహన్ నేర్చుకున్నాడు."
    ],
    moral: "Be thankful for the people who care for you. ❤️",
    teluguMoral: "మనపై ప్రేమ చూపించే వారికి కృతజ్ఞతగా ఉండాలి. ❤️"
  },

  {
    id: 16,
    title: "The Patient Caterpillar",
    teluguTitle: "ఓర్పు గల గొంగళిపురుగు",
    language: "English",
    emoji: "🐛🦋🌸",
    color: "#f0e5ff",
    pages: [
      "A little caterpillar wanted to fly.",
      "It watched butterflies flying in the garden.",
      "The caterpillar patiently waited and changed.",
      "One day, it became a beautiful butterfly.",
      "It flew happily among the flowers."
    ],
    teluguPages: [
      "ఒక చిన్న గొంగళిపురుగుకు ఎగరాలని కోరిక ఉండేది.",
      "తోటలో సీతాకోకచిలుకలు ఎగరడాన్ని అది చూసేది.",
      "అది ఓర్పుతో తన మార్పు కోసం ఎదురుచూసింది.",
      "ఒక రోజు అది అందమైన సీతాకోకచిలుకగా మారింది.",
      "అది పూల మధ్య ఆనందంగా ఎగిరింది."
    ],
    moral: "Be patient. Beautiful changes take time. 🦋",
    teluguMoral: "ఓర్పుగా ఉండాలి. మంచి మార్పులకు సమయం పడుతుంది. 🦋"
  },

  {
    id: 17,
    title: "The Good Friend",
    teluguTitle: "మంచి స్నేహితుడు",
    language: "English",
    emoji: "👦👧🌈",
    color: "#ffe4e1",
    pages: [
      "Sam's friend was sad at school.",
      "Sam sat beside him and listened.",
      "He shared his lunch with his friend.",
      "Soon, his friend smiled again.",
      "They both learned what true friendship means."
    ],
    teluguPages: [
      "సామ్ స్నేహితుడు పాఠశాలలో బాధగా ఉన్నాడు.",
      "సామ్ అతని పక్కన కూర్చుని అతని మాటలు విన్నాడు.",
      "తన భోజనాన్ని స్నేహితుడితో పంచుకున్నాడు.",
      "కొద్దిసేపటికి అతని స్నేహితుడు మళ్లీ నవ్వాడు.",
      "నిజమైన స్నేహం అంటే ఏమిటో ఇద్దరూ తెలుసుకున్నారు."
    ],
    moral: "A good friend cares and helps. 🌈",
    teluguMoral: "మంచి స్నేహితుడు ప్రేమగా చూసుకుని సహాయం చేస్తాడు. 🌈"
  },

  {
    id: 18,
    title: "The Reading Child",
    teluguTitle: "పుస్తకాలు చదివే బాలుడు",
    language: "తెలుగు",
    emoji: "👦📚⭐",
    color: "#e5ddff",
    pages: [
      "Kiran loved reading books.",
      "Every evening, he read a small story.",
      "He learned new words and new ideas.",
      "Soon, he could tell wonderful stories to his friends.",
      "Reading became his favorite habit."
    ],
    teluguPages: [
      "కిరణ్‌కు పుస్తకాలు చదవడం చాలా ఇష్టం.",
      "ప్రతి సాయంత్రం అతను ఒక చిన్న కథ చదివేవాడు.",
      "అతను కొత్త పదాలు, కొత్త విషయాలు నేర్చుకున్నాడు.",
      "కొద్దిరోజులకు తన స్నేహితులకు మంచి కథలు చెప్పగలిగాడు.",
      "చదవడం అతని ఇష్టమైన అలవాటుగా మారింది."
    ],
    moral: "Reading helps us learn and imagine. 📚",
    teluguMoral: "పుస్తకాలు చదవడం వల్ల జ్ఞానం, ఊహాశక్తి పెరుగుతాయి. 📚"
  },

  {
    id: 19,
    title: "The Respectful Child",
    teluguTitle: "పెద్దలను గౌరవించిన చిన్నారి",
    language: "English",
    emoji: "👧👵🙏",
    color: "#fff1dc",
    pages: [
      "Sita always greeted elders politely.",
      "She listened when her grandparents spoke.",
      "She helped them with small things.",
      "Her grandparents were happy with her.",
      "Sita learned that respect brings love."
    ],
    teluguPages: [
      "సీత ఎప్పుడూ పెద్దలను మర్యాదగా పలకరించేది.",
      "తాతయ్య, అమ్మమ్మ మాట్లాడుతున్నప్పుడు శ్రద్ధగా వినేది.",
      "చిన్న చిన్న పనుల్లో వారికి సహాయం చేసేది.",
      "ఆమెను చూసి తాతయ్య, అమ్మమ్మ సంతోషించేవారు.",
      "గౌరవం ప్రేమను పెంచుతుందని సీత తెలుసుకుంది."
    ],
    moral: "Respect elders and listen to their wisdom. 🙏",
    teluguMoral: "పెద్దలను గౌరవించి వారి మంచి మాటలు వినాలి. 🙏"
  },

  {
    id: 20,
    title: "The Early Riser",
    teluguTitle: "ఉదయాన్నే లేచిన బాలుడు",
    language: "English",
    emoji: "🌅👦⏰",
    color: "#fff0b8",
    pages: [
      "Vijay used to wake up very late.",
      "One day, he decided to wake up early.",
      "He brushed his teeth and exercised.",
      "He had enough time for breakfast and school.",
      "Vijay felt fresh and happy."
    ],
    teluguPages: [
      "విజయ్ ఎప్పుడూ చాలా ఆలస్యంగా నిద్రలేచేవాడు.",
      "ఒక రోజు ఉదయాన్నే లేవాలని నిర్ణయించుకున్నాడు.",
      "పళ్ళు తోముకుని వ్యాయామం చేశాడు.",
      "అల్పాహారం, పాఠశాల కోసం అతనికి సరిపడా సమయం దొరికింది.",
      "విజయ్ ఉత్సాహంగా, సంతోషంగా అనిపించింది."
    ],
    moral: "Good habits make our day better. ⏰",
    teluguMoral: "మంచి అలవాట్లు మన రోజును ఆనందంగా మారుస్తాయి. ⏰"
  },

  {
    id: 21,
    title: "The Little Gardener",
    teluguTitle: "చిన్న తోటమాలి",
    language: "తెలుగు",
    emoji: "👧🌱🌺",
    color: "#e4f8df",
    pages: [
      "Latha planted flowers in her garden.",
      "She watered them every morning.",
      "She removed weeds carefully.",
      "Soon, colorful flowers filled the garden.",
      "Latha felt proud of her work."
    ],
    teluguPages: [
      "లత తన తోటలో పూల మొక్కలు నాటింది.",
      "ప్రతి ఉదయం వాటికి నీరు పోసేది.",
      "జాగ్రత్తగా కలుపు మొక్కలను తొలగించేది.",
      "కొంతకాలానికి తోట మొత్తం రంగురంగుల పూలతో నిండిపోయింది.",
      "తన కష్టాన్ని చూసి లత సంతోషించింది."
    ],
    moral: "Care and hard work bring beautiful results. 🌺",
    teluguMoral: "శ్రద్ధ, కష్టంతో అందమైన ఫలితాలు వస్తాయి. 🌺"
  },

  {
    id: 22,
    title: "The Lost Puppy",
    teluguTitle: "తప్పిపోయిన కుక్కపిల్ల",
    language: "English",
    emoji: "🐶👦🏠",
    color: "#ffe7cf",
    pages: [
      "A little boy found a lost puppy.",
      "The puppy looked frightened.",
      "The boy gave it water and food.",
      "He asked neighbors about its owner.",
      "Soon, the puppy returned safely to its family."
    ],
    teluguPages: [
      "ఒక బాలుడికి ఒక తప్పిపోయిన కుక్కపిల్ల కనిపించింది.",
      "కుక్కపిల్ల భయపడినట్లు కనిపించింది.",
      "బాలుడు దానికి నీరు, ఆహారం ఇచ్చాడు.",
      "దాని యజమాని గురించి చుట్టుపక్కల వారిని అడిగాడు.",
      "చివరికి కుక్కపిల్ల తన కుటుంబం దగ్గరకు సురక్షితంగా చేరింది."
    ],
    moral: "Care for animals with kindness. 🐶❤️",
    teluguMoral: "జంతువులను దయతో చూసుకోవాలి. 🐶❤️"
  },

  {
    id: 23,
    title: "The Tree Protector",
    teluguTitle: "చెట్టును కాపాడిన బాలుడు",
    language: "English",
    emoji: "🌳👦🌍",
    color: "#dff5dc",
    pages: [
      "A boy saw people throwing waste near a tree.",
      "He politely asked them to stop.",
      "He collected the waste and put it in a bin.",
      "He explained why trees are important.",
      "Everyone promised to keep the place clean."
    ],
    teluguPages: [
      "ఒక బాలుడు చెట్టు దగ్గర కొందరు చెత్త వేయడం చూశాడు.",
      "అతను వారిని మర్యాదగా ఆపమని కోరాడు.",
      "చెత్తను సేకరించి చెత్త బుట్టలో వేశాడు.",
      "చెట్లు ఎందుకు ముఖ్యమో అందరికీ వివరించాడు.",
      "అందరూ ఆ ప్రదేశాన్ని శుభ్రంగా ఉంచుతామని చెప్పారు."
    ],
    moral: "Protect trees and keep nature clean. 🌳",
    teluguMoral: "చెట్లను కాపాడి ప్రకృతిని శుభ్రంగా ఉంచాలి. 🌳"
  },

  {
    id: 24,
    title: "The Patient Farmer",
    teluguTitle: "ఓర్పుగల రైతు",
    language: "తెలుగు",
    emoji: "👨‍🌾🌾☀️",
    color: "#fff2c6",
    pages: [
      "A farmer planted seeds in his field.",
      "He waited patiently for rain.",
      "He cared for the plants every day.",
      "The plants slowly grew strong.",
      "At harvest time, the farmer was happy."
    ],
    teluguPages: [
      "ఒక రైతు తన పొలంలో విత్తనాలు నాటాడు.",
      "అతను వర్షం కోసం ఓర్పుగా ఎదురుచూశాడు.",
      "ప్రతిరోజూ మొక్కలను జాగ్రత్తగా చూసుకున్నాడు.",
      "మొక్కలు నెమ్మదిగా బలంగా పెరిగాయి.",
      "పంట కోత సమయంలో రైతు ఎంతో సంతోషించాడు."
    ],
    moral: "Patience and hard work bring good results. 🌾",
    teluguMoral: "ఓర్పు, కష్టపడి పనిచేయడం మంచి ఫలితాలను ఇస్తాయి. 🌾"
  },

  {
    id: 25,
    title: "The Brave Little Girl",
    teluguTitle: "ధైర్యమైన చిన్నారి",
    language: "English",
    emoji: "👧⭐🦋",
    color: "#f0e2ff",
    pages: [
      "Meena was afraid of speaking in front of her class.",
      "Her teacher encouraged her to try.",
      "Meena took a deep breath and started speaking.",
      "Her classmates listened and clapped.",
      "Meena became more confident."
    ],
    teluguPages: [
      "మీనా తరగతి ముందు మాట్లాడటానికి భయపడేది.",
      "ఆమె టీచర్ ప్రయత్నించమని ప్రోత్సహించారు.",
      "మీనా ధైర్యంగా శ్వాస తీసుకుని మాట్లాడటం ప్రారంభించింది.",
      "తరగతి పిల్లలు శ్రద్ధగా విని చప్పట్లు కొట్టారు.",
      "మీనా మరింత ఆత్మవిశ్వాసంతో మారింది."
    ],
    moral: "Be brave and believe in yourself. ⭐",
    teluguMoral: "ధైర్యంగా ఉండి మనపై మనకు నమ్మకం ఉంచాలి. ⭐"
  },
    {
    id: 26,
    title: "The Clever Monkey",
    teluguTitle: "తెలివైన కోతి",
    language: "English",
    emoji: "🐒",
    color: "#FF9800",
    pages: [
      "A little monkey lived near a river.",
      "One day, the river became very deep.",
      "The monkey wanted to reach the other side.",
      "He found a fallen tree and carefully crossed it.",
      "He learned that thinking calmly helps us solve problems."
    ],
    teluguPages: [
      "ఒక చిన్న కోతి నది దగ్గర నివసించేది.",
      "ఒక రోజు నది చాలా లోతుగా మారింది.",
      "కోతి నది అవతలి వైపుకు వెళ్లాలనుకుంది.",
      "అది పడిపోయిన ఒక చెట్టును చూసి జాగ్రత్తగా దానిపై నడిచి నది దాటింది.",
      "ప్రశాంతంగా ఆలోచిస్తే సమస్యలకు పరిష్కారం దొరుకుతుందని అది నేర్చుకుంది."
    ],
    moral: "Think calmly before solving a problem.",
    teluguMoral: "సమస్యను పరిష్కరించే ముందు ప్రశాంతంగా ఆలోచించాలి."
  },

  {
    id: 27,
    title: "The Blue Bird's Promise",
    teluguTitle: "నీలి పక్షి మాట",
    language: "English",
    emoji: "🐦",
    color: "#2196F3",
    pages: [
      "A little blue bird promised to help an old tree.",
      "Every morning, she brought small seeds.",
      "The tree slowly grew new plants around it.",
      "The bird kept helping even when nobody watched.",
      "Her promise made the garden beautiful."
    ],
    teluguPages: [
      "ఒక చిన్న నీలి పక్షి ఒక పాత చెట్టుకు సహాయం చేస్తానని మాట ఇచ్చింది.",
      "ప్రతి ఉదయం అది చిన్న విత్తనాలను తీసుకువచ్చేది.",
      "కొద్దికాలానికి చెట్టు చుట్టూ కొత్త మొక్కలు పెరిగాయి.",
      "ఎవరూ చూడకపోయినా పక్షి తన సహాయం కొనసాగించింది.",
      "ఆమె నిలబెట్టుకున్న మాటతో తోట అందంగా మారింది."
    ],
    moral: "Keep your promises.",
    teluguMoral: "ఇచ్చిన మాటను నిలబెట్టుకోవాలి."
  },

  {
    id: 28,
    title: "The Greedy Dog",
    teluguTitle: "ఆశపడ్డ కుక్క",
    language: "English",
    emoji: "🐕",
    color: "#795548",
    pages: [
      "A dog found a tasty piece of bread.",
      "While crossing a bridge, he saw his reflection in the water.",
      "He thought another dog had a bigger piece.",
      "He opened his mouth to grab it.",
      "His own bread fell into the river."
    ],
    teluguPages: [
      "ఒక కుక్కకు రుచికరమైన రొట్టె ముక్క దొరికింది.",
      "వంతెనపై నడుస్తూ నీటిలో తన ప్రతిబింబాన్ని చూసింది.",
      "అక్కడ మరో కుక్క పెద్ద రొట్టె ముక్కతో ఉందని అనుకుంది.",
      "దాన్ని తీసుకోవడానికి నోరు తెరిచింది.",
      "దాంతో తన రొట్టె ముక్క నదిలో పడిపోయింది."
    ],
    moral: "Do not lose what you have because of greed.",
    teluguMoral: "అత్యాశ వల్ల మన దగ్గర ఉన్నదాన్ని కోల్పోకూడదు."
  },

  {
    id: 29,
    title: "The Golden Egg",
    teluguTitle: "బంగారు గుడ్డు",
    language: "English",
    emoji: "🥚",
    color: "#FFC107",
    pages: [
      "A farmer had a special hen.",
      "Every morning, the hen laid one golden egg.",
      "The farmer became very greedy.",
      "He wanted all the golden eggs at once.",
      "Because of his greed, he lost the special hen."
    ],
    teluguPages: [
      "ఒక రైతు దగ్గర ఒక ప్రత్యేకమైన కోడి ఉండేది.",
      "ప్రతి ఉదయం ఆ కోడి ఒక బంగారు గుడ్డు పెట్టేది.",
      "రైతుకు అత్యాశ పెరిగింది.",
      "అన్ని బంగారు గుడ్లు ఒకేసారి కావాలని అనుకున్నాడు.",
      "అత్యాశ వల్ల అతను ఆ ప్రత్యేకమైన కోడిని కోల్పోయాడు."
    ],
    moral: "Greed can make us lose what we already have.",
    teluguMoral: "అత్యాశ వల్ల మన దగ్గర ఉన్నదాన్ని కూడా కోల్పోవచ్చు."
  },

  {
    id: 30,
    title: "The Fox and the Grapes",
    teluguTitle: "నక్క మరియు ద్రాక్ష",
    language: "English",
    emoji: "🦊",
    color: "#FF7043",
    pages: [
      "A hungry fox saw a bunch of grapes.",
      "The grapes were hanging high above him.",
      "He jumped many times but could not reach them.",
      "Finally, he walked away.",
      "He decided to keep trying instead of making excuses."
    ],
    teluguPages: [
      "ఆకలితో ఉన్న ఒక నక్కకు ద్రాక్ష గుత్తి కనిపించింది.",
      "ఆ ద్రాక్ష చాలా ఎత్తులో వేలాడుతూ ఉంది.",
      "నక్క ఎన్నిసార్లు ఎగిరినా ద్రాక్షను అందుకోలేకపోయింది.",
      "చివరకు అది అక్కడి నుంచి వెళ్లిపోయింది.",
      "సాకులు చెప్పకుండా మరో మార్గంలో ప్రయత్నించాలని నిర్ణయించుకుంది."
    ],
    moral: "Do not make excuses when something is difficult.",
    teluguMoral: "ఏదైనా కష్టం వచ్చినప్పుడు సాకులు చెప్పకూడదు."
  },

  {
    id: 31,
    title: "The United Sticks",
    teluguTitle: "ఐకమత్యం బలం",
    language: "English",
    emoji: "🪵",
    color: "#8D6E63",
    pages: [
      "A father had three children who often argued.",
      "He gave them a bundle of sticks.",
      "None of them could break the bundle.",
      "Then he gave them the sticks one by one.",
      "They broke easily and understood the power of unity."
    ],
    teluguPages: [
      "ఒక తండ్రికి తరచూ గొడవపడే ముగ్గురు పిల్లలు ఉన్నారు.",
      "అతను వారికి ఒక కట్ట కర్రలు ఇచ్చాడు.",
      "ఎవరూ ఆ కట్టను విరగగొట్టలేకపోయారు.",
      "తర్వాత ఒక్కొక్క కర్రను విడిగా ఇచ్చాడు.",
      "అవి సులభంగా విరిగిపోయాయి. ఐకమత్యం యొక్క బలాన్ని పిల్లలు అర్థం చేసుకున్నారు."
    ],
    moral: "Unity makes us stronger.",
    teluguMoral: "ఐకమత్యంగా ఉంటే మనం బలంగా ఉంటాం."
  },

  {
    id: 32,
    title: "The Proud Peacock",
    teluguTitle: "గర్వపడిన నెమలి",
    language: "English",
    emoji: "🦚",
    color: "#00ACC1",
    pages: [
      "A peacock was proud of his beautiful feathers.",
      "He laughed at a small sparrow.",
      "One rainy day, the peacock could not fly far.",
      "The sparrow quickly flew to a safe tree.",
      "The peacock learned not to judge others by appearance."
    ],
    teluguPages: [
      "ఒక నెమలి తన అందమైన ఈకల గురించి గర్వపడేది.",
      "అది ఒక చిన్న పిచ్చుకను చూసి నవ్వేది.",
      "ఒక రోజు వర్షం వచ్చినప్పుడు నెమలి దూరంగా ఎగరలేకపోయింది.",
      "పిచ్చుక మాత్రం త్వరగా ఎగిరి సురక్షితమైన చెట్టుకు చేరుకుంది.",
      "ఇతరులను వారి రూపాన్ని బట్టి అంచనా వేయకూడదని నెమలి తెలుసుకుంది."
    ],
    moral: "Everyone has their own special strength.",
    teluguMoral: "ప్రతి ఒక్కరిలోనూ ఒక ప్రత్యేకమైన బలం ఉంటుంది."
  },

  {
    id: 33,
    title: "The Little Bee",
    teluguTitle: "చిన్న తేనెటీగ",
    language: "English",
    emoji: "🐝",
    color: "#FBC02D",
    pages: [
      "A little bee wanted to help her hive.",
      "She visited flowers every morning.",
      "She collected nectar and returned home.",
      "The other bees worked together with her.",
      "Soon, the hive had plenty of honey."
    ],
    teluguPages: [
      "ఒక చిన్న తేనెటీగ తన గూటికి సహాయం చేయాలనుకుంది.",
      "ప్రతి ఉదయం అది పూలను సందర్శించేది.",
      "తేనెను సేకరించి గూటికి తిరిగి వచ్చేది.",
      "ఇతర తేనెటీగలు కూడా ఆమెతో కలిసి పనిచేశాయి.",
      "కొద్దికాలానికి గూటిలో ఎంతో తేనె చేరింది."
    ],
    moral: "Small efforts become great when we work together.",
    teluguMoral: "కలిసి పనిచేస్తే చిన్న ప్రయత్నాలు కూడా గొప్ప ఫలితాలను ఇస్తాయి."
  },

  {
    id: 34,
    title: "The Broken Pencil",
    teluguTitle: "విరిగిన పెన్సిల్",
    language: "English",
    emoji: "✏️",
    color: "#FF9800",
    pages: [
      "Ravi's favorite pencil broke while he was drawing.",
      "He felt sad and wanted to throw it away.",
      "His teacher showed him how to sharpen it.",
      "The pencil became useful again.",
      "Ravi learned that mistakes do not mean the end."
    ],
    teluguPages: [
      "రవి ఇష్టమైన పెన్సిల్ బొమ్మ వేస్తున్నప్పుడు విరిగిపోయింది.",
      "అతను బాధపడి దాన్ని పారేయాలనుకున్నాడు.",
      "అతని టీచర్ దాన్ని ఎలా పదును పెట్టాలో చూపించారు.",
      "పెన్సిల్ మళ్లీ ఉపయోగపడింది.",
      "తప్పులు జరిగితే అంతా ముగిసినట్లు కాదని రవి నేర్చుకున్నాడు."
    ],
    moral: "Do not give up when something goes wrong.",
    teluguMoral: "ఏదైనా తప్పు జరిగినప్పుడు ప్రయత్నం ఆపకూడదు."
  },

  {
    id: 35,
    title: "The Magic Words",
    teluguTitle: "మాయ మాటలు",
    language: "English",
    emoji: "💬",
    color: "#9C27B0",
    pages: [
      "Anu learned three special words at school.",
      "She said 'Please' when she asked for something.",
      "She said 'Thank you' when someone helped her.",
      "She said 'Sorry' when she made a mistake.",
      "Everyone enjoyed being around her."
    ],
    teluguPages: [
      "అనూ పాఠశాలలో మూడు మంచి మాటలు నేర్చుకుంది.",
      "ఏదైనా అడిగేటప్పుడు 'దయచేసి' అని చెప్పేది.",
      "ఎవరైనా సహాయం చేస్తే 'ధన్యవాదాలు' అని చెప్పేది.",
      "తప్పు చేస్తే 'క్షమించండి' అని చెప్పేది.",
      "అందరూ ఆమెతో ఉండటాన్ని ఇష్టపడేవారు."
    ],
    moral: "Kind words make relationships beautiful.",
    teluguMoral: "మంచి మాటలు సంబంధాలను అందంగా మారుస్తాయి."
  },

  {
    id: 36,
    title: "The Lost Toy",
    teluguTitle: "తప్పిపోయిన బొమ్మ",
    language: "English",
    emoji: "🧸",
    color: "#E91E63",
    pages: [
      "Meena lost her favorite teddy bear.",
      "She searched everywhere in the house.",
      "Her brother helped her look under the bed.",
      "They finally found the teddy near a box.",
      "Meena thanked her brother for helping her."
    ],
    teluguPages: [
      "మీనాకు తన ఇష్టమైన టెడ్డీ బేర్ కనిపించలేదు.",
      "ఆమె ఇంటంతా వెతికింది.",
      "ఆమె అన్నయ్య మంచం కింద వెతకడానికి సహాయం చేశాడు.",
      "చివరకు ఒక పెట్టె దగ్గర టెడ్డీ కనిపించింది.",
      "సహాయం చేసినందుకు మీనా తన అన్నయ్యకు ధన్యవాదాలు చెప్పింది."
    ],
    moral: "Helping others makes difficult moments easier.",
    teluguMoral: "ఇతరులకు సహాయం చేస్తే కష్టమైన సమయాలు సులభమవుతాయి."
  },

  {
    id: 37,
    title: "The School Bell",
    teluguTitle: "పాఠశాల గంట",
    language: "English",
    emoji: "🔔",
    color: "#3F51B5",
    pages: [
      "The school bell rang every morning.",
      "Most children came on time.",
      "One boy always arrived late.",
      "He started preparing his bag the night before.",
      "Soon, he reached school before the bell."
    ],
    teluguPages: [
      "ప్రతి ఉదయం పాఠశాల గంట మోగేది.",
      "చాలా మంది పిల్లలు సమయానికి వచ్చేవారు.",
      "ఒక బాలుడు మాత్రం ఎప్పుడూ ఆలస్యంగా వచ్చేవాడు.",
      "అతను ముందు రోజు రాత్రే తన బ్యాగ్ సిద్ధం చేసుకోవడం ప్రారంభించాడు.",
      "త్వరలోనే అతను గంట మోగేలోపే పాఠశాలకు చేరుకున్నాడు."
    ],
    moral: "Being prepared helps us be on time.",
    teluguMoral: "ముందుగానే సిద్ధపడితే సమయానికి చేరుకోవచ్చు."
  },

  {
    id: 38,
    title: "The Sharing Mango",
    teluguTitle: "పంచుకున్న మామిడి",
    language: "English",
    emoji: "🥭",
    color: "#FFB300",
    pages: [
      "Arjun found a big ripe mango.",
      "He wanted to eat it all by himself.",
      "Then he saw his hungry friend.",
      "He cut the mango into two pieces.",
      "Both friends enjoyed the sweet fruit together."
    ],
    teluguPages: [
      "అర్జున్‌కు ఒక పెద్ద పండిన మామిడి దొరికింది.",
      "దాన్ని ఒక్కడే తినాలని అనుకున్నాడు.",
      "అప్పుడు ఆకలితో ఉన్న తన స్నేహితుడిని చూశాడు.",
      "మామిడిని రెండు ముక్కలుగా కోశాడు.",
      "ఇద్దరూ కలిసి ఆ తియ్యని మామిడిని ఆనందంగా తిన్నారు."
    ],
    moral: "Sharing makes happiness grow.",
    teluguMoral: "పంచుకుంటే ఆనందం పెరుగుతుంది."
  },

  {
    id: 39,
    title: "The Rainy Day",
    teluguTitle: "వాన రోజు",
    language: "English",
    emoji: "🌧️",
    color: "#42A5F5",
    pages: [
      "Dark clouds covered the village.",
      "Soon, heavy rain began to fall.",
      "A little girl saw a bird sitting in the rain.",
      "She placed a small box under a roof for the bird.",
      "The bird stayed safe until the rain stopped."
    ],
    teluguPages: [
      "నల్లని మేఘాలు గ్రామాన్ని కమ్ముకున్నాయి.",
      "కొద్దిసేపటికి భారీ వర్షం కురిసింది.",
      "ఒక చిన్నారి వర్షంలో తడుస్తున్న పక్షిని చూసింది.",
      "ఆ పక్షి కోసం పైకప్పు కింద ఒక చిన్న పెట్టె పెట్టింది.",
      "వర్షం ఆగే వరకు పక్షి సురక్షితంగా అక్కడే ఉంది."
    ],
    moral: "Be kind to animals and birds.",
    teluguMoral: "జంతువులు మరియు పక్షుల పట్ల దయగా ఉండాలి."
  },

  {
    id: 40,
    title: "The Helpful Shopkeeper",
    teluguTitle: "సహాయపడిన దుకాణదారు",
    language: "English",
    emoji: "🏪",
    color: "#26A69A",
    pages: [
      "An old woman came to a small shop.",
      "She could not carry her heavy bag.",
      "The shopkeeper noticed her difficulty.",
      "He carried the bag to her home.",
      "She thanked him with a happy smile."
    ],
    teluguPages: [
      "ఒక వృద్ధురాలు చిన్న దుకాణానికి వచ్చింది.",
      "ఆమె తన బరువైన సంచిని మోయలేకపోయింది.",
      "దుకాణదారు ఆమె ఇబ్బందిని గమనించాడు.",
      "అతను ఆ సంచిని ఆమె ఇంటి వరకు మోసుకెళ్లాడు.",
      "ఆమె సంతోషంగా నవ్వుతూ అతనికి ధన్యవాదాలు చెప్పింది."
    ],
    moral: "Helping someone in need is a good deed.",
    teluguMoral: "అవసరంలో ఉన్నవారికి సహాయం చేయడం మంచి పని."
  },

  {
    id: 41,
    title: "The King and the Wise Farmer",
    teluguTitle: "రాజు మరియు తెలివైన రైతు",
    language: "English",
    emoji: "👑",
    color: "#7E57C2",
    pages: [
      "A king wanted to learn what made a kingdom strong.",
      "He visited a farmer working in his field.",
      "The farmer said that good people make a kingdom strong.",
      "The king listened carefully.",
      "He decided to treat his people with kindness and fairness."
    ],
    teluguPages: [
      "ఒక రాజు తన రాజ్యం బలంగా ఉండటానికి కారణం ఏమిటో తెలుసుకోవాలనుకున్నాడు.",
      "అతను పొలంలో పనిచేస్తున్న ఒక రైతును కలిశాడు.",
      "మంచి ప్రజలే రాజ్యాన్ని బలంగా చేస్తారని రైతు చెప్పాడు.",
      "రాజు ఆ మాటలను శ్రద్ధగా విన్నాడు.",
      "తన ప్రజలతో దయగా, న్యాయంగా ఉండాలని నిర్ణయించుకున్నాడు."
    ],
    moral: "Kindness and fairness build a strong community.",
    teluguMoral: "దయ మరియు న్యాయం మంచి సమాజాన్ని నిర్మిస్తాయి."
  },

  {
    id: 42,
    title: "The Boy Who Kept His Promise",
    teluguTitle: "మాట నిలబెట్టుకున్న బాలుడు",
    language: "English",
    emoji: "🤝",
    color: "#5C6BC0",
    pages: [
      "Rahul promised to water his neighbor's plants.",
      "The next morning, it started raining.",
      "He thought he did not need to water them.",
      "But he remembered his promise and checked the plants.",
      "He kept his word and felt proud of himself."
    ],
    teluguPages: [
      "రాహుల్ తన పొరుగువారి మొక్కలకు నీళ్లు పోస్తానని మాట ఇచ్చాడు.",
      "మరుసటి రోజు ఉదయం వర్షం మొదలైంది.",
      "ఇక నీళ్లు పోయాల్సిన అవసరం లేదని అతను అనుకున్నాడు.",
      "కానీ తన మాట గుర్తుకు వచ్చి మొక్కలను చూసేందుకు వెళ్లాడు.",
      "తాను ఇచ్చిన మాటను నిలబెట్టుకున్నందుకు రాహుల్ సంతోషించాడు."
    ],
    moral: "A promise should be kept.",
    teluguMoral: "ఇచ్చిన మాటను తప్పకుండా నిలబెట్టుకోవాలి."
  },

  {
    id: 43,
    title: "The Quiet Listener",
    teluguTitle: "శ్రద్ధగా విన్న చిన్నారి",
    language: "English",
    emoji: "👂",
    color: "#00897B",
    pages: [
      "Sita always listened when others spoke.",
      "One day, her friend felt sad.",
      "Sita did not interrupt her.",
      "She listened carefully and comforted her friend.",
      "Her friend felt better because someone truly listened."
    ],
    teluguPages: [
      "సీత ఇతరులు మాట్లాడుతున్నప్పుడు ఎప్పుడూ శ్రద్ధగా వినేది.",
      "ఒక రోజు ఆమె స్నేహితురాలు బాధగా ఉంది.",
      "సీత మధ్యలో మాట కలపకుండా ఆమె మాటలు విన్నది.",
      "శ్రద్ధగా విని తన స్నేహితురాలిని ఓదార్చింది.",
      "ఎవరైనా తన మాటలు నిజంగా విన్నందుకు ఆమె స్నేహితురాలు సంతోషించింది."
    ],
    moral: "Listening is also a way of caring.",
    teluguMoral: "శ్రద్ధగా వినడం కూడా ప్రేమను చూపించే ఒక మార్గం."
  },

  {
    id: 44,
    title: "The Angry Tiger",
    teluguTitle: "కోపాన్ని జయించిన పులి",
    language: "English",
    emoji: "🐯",
    color: "#F57C00",
    pages: [
      "A tiger became angry when a small rabbit crossed his path.",
      "He wanted to chase the rabbit.",
      "Then he stopped and took a deep breath.",
      "The rabbit had not done anything wrong.",
      "The tiger walked away calmly."
    ],
    teluguPages: [
      "ఒక చిన్న కుందేలు తన దారిలోకి రావడంతో పులికి కోపం వచ్చింది.",
      "అది కుందేలును వెంటాడాలని అనుకుంది.",
      "కానీ పులి ఆగి లోతుగా శ్వాస తీసుకుంది.",
      "కుందేలు ఏ తప్పూ చేయలేదని అది గుర్తించింది.",
      "పులి ప్రశాంతంగా అక్కడి నుంచి వెళ్లిపోయింది."
    ],
    moral: "Control anger before it controls you.",
    teluguMoral: "కోపం మనల్ని నియంత్రించకముందే మనం కోపాన్ని నియంత్రించాలి."
  },

  {
    id: 45,
    title: "The Village Well",
    teluguTitle: "గ్రామ బావి",
    language: "English",
    emoji: "💧",
    color: "#0288D1",
    pages: [
      "The village well gave water to everyone.",
      "Some children began throwing waste near it.",
      "An old woman explained why the well must stay clean.",
      "The children cleaned the area together.",
      "The whole village enjoyed clean water again."
    ],
    teluguPages: [
      "గ్రామంలోని బావి అందరికీ నీటిని అందించేది.",
      "కొంతమంది పిల్లలు దాని దగ్గర చెత్త వేయడం ప్రారంభించారు.",
      "బావిని శుభ్రంగా ఉంచడం ఎందుకు అవసరమో ఒక వృద్ధురాలు వివరించింది.",
      "పిల్లలందరూ కలిసి ఆ ప్రాంతాన్ని శుభ్రం చేశారు.",
      "మొత్తం గ్రామం మళ్లీ పరిశుభ్రమైన నీటిని ఉపయోగించింది."
    ],
    moral: "Keep shared places clean.",
    teluguMoral: "అందరూ ఉపయోగించే ప్రదేశాలను శుభ్రంగా ఉంచాలి."
  },

  {
    id: 46,
    title: "The Three Little Friends",
    teluguTitle: "ముగ్గురు చిన్న స్నేహితులు",
    language: "English",
    emoji: "👧👦🧒",
    color: "#EC407A",
    pages: [
      "Three friends loved playing together.",
      "One day, they found a broken swing.",
      "One brought a rope.",
      "Another brought a wooden piece.",
      "Together, they repaired the swing and played happily."
    ],
    teluguPages: [
      "ముగ్గురు స్నేహితులు కలిసి ఆడుకోవడం చాలా ఇష్టపడేవారు.",
      "ఒక రోజు వారికి విరిగిపోయిన ఊయల కనిపించింది.",
      "ఒకరు తాడు తీసుకువచ్చాడు.",
      "మరొకరు చెక్క ముక్క తీసుకువచ్చాడు.",
      "అందరూ కలిసి ఊయలను బాగు చేసి సంతోషంగా ఆడుకున్నారు."
    ],
    moral: "Teamwork makes difficult tasks easier.",
    teluguMoral: "కలిసి పనిచేస్తే కష్టమైన పనులు సులభమవుతాయి."
  },

  {
    id: 47,
    title: "The Festival of Lights",
    teluguTitle: "దీపాల పండుగ",
    language: "English",
    emoji: "🪔",
    color: "#FFB300",
    pages: [
      "The village prepared for a festival of lights.",
      "Every family decorated its home.",
      "One poor family had no lamps.",
      "The children shared their lamps with them.",
      "The whole street shone brightly together."
    ],
    teluguPages: [
      "గ్రామం దీపాల పండుగకు సిద్ధమైంది.",
      "ప్రతి కుటుంబం తమ ఇళ్లను అలంకరించింది.",
      "ఒక పేద కుటుంబం దగ్గర దీపాలు లేవు.",
      "పిల్లలు తమ దీపాలను ఆ కుటుంబంతో పంచుకున్నారు.",
      "మొత్తం వీధి కలిసి ప్రకాశవంతంగా వెలిగింది."
    ],
    moral: "Sharing brings light and happiness to everyone.",
    teluguMoral: "పంచుకుంటే అందరి జీవితాల్లో వెలుగు మరియు ఆనందం వస్తాయి."
  },

  {
    id: 48,
    title: "The Little Inventor",
    teluguTitle: "చిన్న ఆవిష్కర్త",
    language: "English",
    emoji: "💡",
    color: "#26A69A",
    pages: [
      "Kiran loved making things from old boxes.",
      "One day, he made a simple toy car.",
      "It did not work at first.",
      "He changed the wheels and tried again.",
      "Finally, the toy car moved across the room."
    ],
    teluguPages: [
      "కిరణ్ పాత పెట్టెలతో కొత్త వస్తువులు తయారు చేయడం ఇష్టపడేవాడు.",
      "ఒక రోజు అతను ఒక చిన్న బొమ్మ కారును తయారు చేశాడు.",
      "మొదట అది పనిచేయలేదు.",
      "అతను చక్రాలను మార్చి మళ్లీ ప్రయత్నించాడు.",
      "చివరకు బొమ్మ కారు గది అంతా ముందుకు కదిలింది."
    ],
    moral: "Keep trying and learn from mistakes.",
    teluguMoral: "ప్రయత్నం కొనసాగిస్తూ తప్పుల నుంచి నేర్చుకోవాలి."
  },

  {
    id: 49,
    title: "The Helping Hands",
    teluguTitle: "సహాయక చేతులు",
    language: "English",
    emoji: "🤲",
    color: "#7CB342",
    pages: [
      "A strong wind damaged several houses in the village.",
      "The villagers felt worried.",
      "Children collected fallen books and toys.",
      "Adults repaired the houses together.",
      "Everyone helped until the village became safe again."
    ],
    teluguPages: [
      "బలమైన గాలికి గ్రామంలోని కొన్ని ఇళ్లు దెబ్బతిన్నాయి.",
      "గ్రామస్థులు ఆందోళన చెందారు.",
      "పిల్లలు కిందపడిన పుస్తకాలు మరియు బొమ్మలను సేకరించారు.",
      "పెద్దలు కలిసి ఇళ్లను బాగు చేశారు.",
      "గ్రామం మళ్లీ సురక్షితంగా మారే వరకు అందరూ సహాయం చేశారు."
    ],
    moral: "Helping hands can make a big differencce
      teluguMoral: "సహాయక చేతులు గొప్ప మార్పును తీసుకురాగలవు."
  },

  {
    id: 50,
    title: "The Good Deed Star",
    teluguTitle: "మంచి పనికి నక్షత్రం",
    language: "English",
    emoji: "⭐",
    color: "#FFCA28",
    pages: [
      "A teacher gave the class a special challenge.",
      "Every child had to do one kind thing each day.",
      "Some helped their parents.",
      "Some shared with friends and helped animals.",
      "At the end of the week, the classroom was full of happy smiles."
    ],
    teluguPages: [
      "ఒక టీచర్ తరగతికి ఒక ప్రత్యేకమైన పని ఇచ్చారు.",
      "ప్రతి పిల్లవాడు ప్రతిరోజూ ఒక మంచి పని చేయాలి.",
      "కొంతమంది తమ తల్లిదండ్రులకు సహాయం చేశారు.",
      "కొంతమంది స్నేహితులతో పంచుకున్నారు మరియు జంతువులకు సహాయం చేశారు.",
      "వారం చివరికి తరగతి మొత్తం సంతోషకరమైన చిరునవ్వులతో నిండిపోయింది."
    ],
    moral: "Every good deed can make the world better.",
    teluguMoral: "ప్రతి మంచి పని ప్రపంచాన్ని మరింత మంచిగా మార్చగలదు."
  }
];


                          

        
