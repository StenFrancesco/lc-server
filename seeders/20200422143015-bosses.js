'use strict';

const Boss = require("../models").Boss

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bosses = await Promise.all([
      Boss.upsert({
        dungeonId: 1,
        name: "Lucifron"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Magmadar"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Gehennas"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Garr"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Shazzrah"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Baron Geddon"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Golemagg the Incinerator"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Sulfuron Harbinger"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Majordomo Executus"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Ragnaros"
      }),
      Boss.upsert({
        dungeonId: 1,
        name: "Razorgore the Untamed"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Vaelastrasz the Corrupt"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Broodlord Lashlayer"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Firemaw"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Ebonroc"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Flamegor"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Chromaggus"
      }),
      Boss.upsert({
        dungeonId: 2,
        name: "Nefarian"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "High Priest Venoxis"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "High Priestess Jeklik"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "High Priestess Mar'li"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "High Priest Thekal"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "High Priestess Arlokk"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "Hakkar"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "Bloodlord Mandokir"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "Edge of Madness"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "Gahz'ranka"
      }),
      Boss.upsert({
        dungeonId: 3,
        name: "Jin'do the Hexxer"
      }),
      Boss.upsert({
        dungeonId: 4,
        name: "Kurinnaxx"
      }),
      Boss.upsert({
        dungeonId: 4,
        name: "General Rajaxx"
      }),
      Boss.upsert({
        dungeonId: 4,
        name: "Moam"
      }),
      Boss.upsert({
        dungeonId: 4,
        name: "Buru the Gorger"
      }),
      Boss.upsert({
        dungeonId: 4,
        name: "Ayamiss the Hunter"
      }),
      Boss.upsert({
        dungeonId: 4,
        name: "Ossirian the Unscarred"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "The Prophet Skeram"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "The Bug Trio"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "Battleguard Sartura"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "Fankriss the Unyielding"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "Princess Huhuran"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "The Twin Emperors"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "Viscidus"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "Ouro"
      }),
      Boss.upsert({
        dungeonId: 5,
        name: "C'Thun"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Anub'Rekhan"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Grand Widow Faerlina"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Maexxna"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Instructor Razuvious"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Gothik the Harvester"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "The Four Horsemen"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Noth the Plaguebringer"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Heigan the Unclean"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Loatheb"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Patchwerk"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Grobbulus"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Gluth"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Thaddius"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Sapphiron"
      }),
      Boss.upsert({
        dungeonId: 6,
        name: "Kel'Thuzad"
      }),
      Boss.upsert({
        dungeonId: 7,
        name: "Onyxia"
      }),

    ])
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Boss', null, {});

  }
};
