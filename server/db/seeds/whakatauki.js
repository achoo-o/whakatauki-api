export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('whakatauki').del()

  // Inserts seed entries
  await knex('whakatauki').insert([
    { text: 'Ka mate kāinga tahi ka ora kāinga rua.', translation_en: 'When one home dies another home lives.', explanation: 'Having multiple places to call home means when one fails, you\'ll have another to go to.', 
      credit: 'https://www.aa.co.nz/membership/aa-directions/features/come-on-in-a-look-inside-the-new-zealand-home/the-meaning-of-home/' },

    { text: 'E mua kaikai, e muri kai huare.', translation_en: 'Early arrivals have the pick, but late comers may only get spittal.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Toitū he kāinga, whatu ngarongaro he tangata.', translation_en: 'While the land remains the inhabitants are gone.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'He kōtuku rerenga tahi.', translation_en: 'A white heron’s flight is seen but once.', explanation: 'Kōtuku (White herons) had mythical status for Māori because of their rarity and beauty. The epithet was given to distinguished guests who seldom visited.', 
      credit: 'https://teara.govt.nz/en/herons/page-1' },

    { text: 'Waiho ma te tangata e mihi, kia tau ai.', translation_en: 'It would be better to let others praise.', explanation: 'Don\'t be boastful of your own achievements, let it show through others\'s words.', 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Ka pū te ruha, ka hao te rangatahi.', translation_en: 'The old net is cast aside, while the new net goes a-catching.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'He iti hoki te mokoroa nāna i kakati te kahikatea.', translation_en: 'The mokoroa (grub) may be small, but it cuts through the Kahikatea (whitepine).', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Ngaro atu he tētēkura, whakaeke mai he tētēkura.', translation_en: 'When one chief disappears another is ready to appear.', explanation: 'No one is indispensable.', 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Moe ana te mata hī tuna, ara ana te kitaua.', translation_en: 'The eel fisher’s eyes sleep, but the eyes of the warrior are awake.', explanation: 'To be alert, ready and educated about what is going on in the world around us.', 
      credit: 'https://kupu.maori.nz/kupu/Noho-mata-h%C4%AB-taua!' },

    { text: 'Mauri mahi, mauri ora; mauri noho, mauri mate.', translation_en: 'Industry begets prosperity; idleness begets poverty.', explanation: 'Begets means "to bring about". The short version is: Mauri mahi, mauri ora - "Do the mahi, get the treats" (through work, we prosper).',  
      credit: 'https://kupu.maori.nz/kupu/Mauri-mahi%2C-mauri-ora' },

    { text: 'He urunga tangata he urunga pāhekeheke, he urunga oneone, mau tonu.', translation_en: 'To rest on human support is unreliable, to rest on the land is sure.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'He wāhine, he whenua, ka ngaro te tangata.', translation_en: 'For a woman and land, men perish.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Tama tu, tama ora; tama noho, tama mate kai.', translation_en: 'He who stands lives; he who sits, perishes.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'He aha te kai ō te rangatira? He Kōrero, he kōrero, he kōrero.', translation_en: 'What is the food of the leader. It is knowledge. It is communication.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Kia mate ururoa, kei mate wheke.', translation_en: 'Fight like a shark, don’t give in like an octopus.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Ahakoa iti, he pounamu.', translation_en: 'Although it is small, it is of greenstone.', explanation: 'Greenstone is a precious taonga to the Māori people.', 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'E kore te pātiki e hoki ki tōna puehu.', translation_en: 'The flounder does not return to the mud it has stirred.', explanation: 'Do not make the same mistake twice.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'Toku toa, he toa rangatira.', translation_en: 'My bravery is inherited from the chief who were my ancestors.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'He au kei uta e taea te karo, he au kei te moana e kore e taea.', translation_en: 'You may dodge smoke (au) on land, but you cannot dodge current at sea.', explanation: null, 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },
    
    { text: 'He maroro kokati ihu waka.', translation_en: 'It\'s the flying-fish that cuts across the bow of the waka.', explanation: 'Having a flying-fish fly across the bow of your waka was considered a bad omen.', 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'Hōhonu kaki, pāpaku nana.', translation_en: 'Deep at eating but shallow at work.', explanation: 'Used to refer to a lazy person, who has a healthy appetite but offers very little help.', 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },
      
    { text: 'He ihu kurī, he tangata haere.', translation_en: 'A dog’s nose, a travelling man.', explanation: 'This could be a put-down, comparing visiting travellers to dogs who sniff out food. But sometimes a traveller would introduce himself with this phrase, and be sure of hospitality.', 
      credit: 'https://teara.govt.nz/en/kuri-polynesian-dogs/page-2' },
    
    { text: 'He manako te koura i kore ai.', translation_en: 'Crayfish are scarce when they are expected.', explanation: 'Similar to "Don’t count your chickens before they hatch."', 
      credit: 'https://www.maorilanguage.net/maori-words-phrases/proverbs-nga-whakatauki-nga-whakatauaki/' },

    { text: 'He tangata takahi manuhiri, he marae puehu.', translation_en: 'A person who mistreats his guest has a dusty Marae.', explanation: 'Someone who disregards his visitors will soon find he has no visitors at all. This accentuates the importance of Manaakitanga, or hospitality with Maori society and culture.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },
      
    { text: 'Tangata ako ana i te whare, te turanga ki te marae, tau ana.', translation_en: 'A person who is taught at home, will stand collected on the Marae.', explanation: 'A child who is given proper values at home and cherished within his family, will not only behave well amongst the family but also within society and throughout his life.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'Te anga karaka, te anga koura, kei kitea te Marae.', translation_en: 'The shells of the karaka berry, and the shells of the crayfish, should not be seen from the Marae.', explanation: 'Although this clearly has a hygienic undertone, it also refers to discipline. A tribe or war party who disregards cleanliness reflects poor leadership and discipline.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },
    
    { text: 'He kai kei aku ringa.', translation_en: 'There is food at the end of my hands.', explanation: 'Said by a person who can use his basic abilities and resources to create success.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'He mahi te ataa noho, e kii ana te wheke.', translation_en: 'It is the octopus who says sitting is working.', explanation: 'Refers to someone who is lazy.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },
      
    { text: 'Tama tu tama ora, tama noho tama mate.', translation_en: 'An active person will remain healthy while a lazy one will become sick', explanation: 'Words of encouragement to urge people to remain active to stay in good health.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'Ma whero ma pango ka oti ai te mahi.', translation_en: 'With red and black the work will be complete.', explanation: 'Working together will get the job done. The colours refer to to the traditional kowhaiwhai patterns on the inside of the meeting houses.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },
    
    { text: 'Naku te rourou nau te rourou ka ora ai te iwi.', translation_en: 'With your food basket and my food basket the people will thrive.', explanation: 'Working in isolation might result in survival, but working together can take people beyond survival and onto prosperity.', 
      credit: 'https://kep.org.nz/module-8/1-whakatau%C4%81k%C4%AB' },

    { text: 'He waka eke noa.', translation_en: 'A waka we are all in together.', explanation: 'We\'re in this thing together.', 
      credit: 'https://kupu.maori.nz/kupu/He-waka-eke-noa' },
      
    { text: 'Ehara taku toa, he takitahi, he toa takitini.', translation_en: 'My success should not be bestowed onto me alone, as it was not individual success but success of a collective.', explanation: null, 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'Kāore te kumara e kōrero mō tōna ake reka.', translation_en: 'The kumara does not say how sweet he is.', explanation: null, 
      credit: 'https://www.maori.cl/Proverbs.htm' },
    
    { text: 'E hoa ma, ina te ora o te tangata.', translation_en: 'My friend(s), this is the essence of life.', explanation: 'Said when someone is surprised or satisfied.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'Kua hinga te totara i te wao nui a Tane.', translation_en: 'The totara has fallen in the forest of Tane.', explanation: 'The totara is a native tree that grows for hundreds of years. For one of them to fall is a great tragedy. Tane is the god of forests and of birds.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },
      
    { text: 'Kua takoto te manuka.', translation_en: 'The leaves of the manuka tree have been laid down.', explanation: 'When visiting a Marae as an outsider, during one of many formal ceremonies, manuka leaves are laid down for the visitor as a gift. If the leaves are picked up it is a sign of coming in peace, whereas ignoring or leaving the gift is a sign of challenge.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },

    { text: 'Ko taku reo taku ohooho, ko taku reo taku mapihi mauria.', translation_en: 'My language is my awakening, my language is the window to my soul.', explanation: 'This is a proverb closely associated with language revitalisation, a struggle which is very important in maintaining culture.', 
      credit: 'https://www.maori.cl/Proverbs.htm' },
  ])
}

// Sample Template
// { text: '', translation_en: '', explanation: null, 
//   credit: '' },