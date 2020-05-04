'use strict';

const Boss = require("../models").boss

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bosses = await Promise.all([
      Boss.upsert({
        id: 1,
        dungeonId: 1,
        name: "Lucifron"
      }),
      Boss.upsert({
        id: 2,
        dungeonId: 1,
        name: "Magmadar"
      }),
      Boss.upsert({
        id: 3,
        dungeonId: 1,
        name: "Gehennas"
      }),
      Boss.upsert({
        id: 4,
        dungeonId: 1,
        name: "Garr"
      }),
      Boss.upsert({
        id: 5,
        dungeonId: 1,
        name: "Shazzrah"
      }),
      Boss.upsert({
        id: 6,
        dungeonId: 1,
        name: "Baron Geddon"
      }),
      Boss.upsert({
        id: 7,
        dungeonId: 1,
        name: "Golemagg the Incinerator"
      }),
      Boss.upsert({
        id: 8,
        dungeonId: 1,
        name: "Sulfuron Harbinger"
      }),
      Boss.upsert({
        id: 9,
        dungeonId: 1,
        name: "Majordomo Executus"
      }),
      Boss.upsert({
        id: 10,
        dungeonId: 1,
        name: "Ragnaros"
      }),
      Boss.upsert({
        id: 11,
        dungeonId: 1,
        name: "Razorgore the Untamed"
      }),
      Boss.upsert({
        id: 12,
        dungeonId: 2,
        name: "Vaelastrasz the Corrupt"
      }),
      Boss.upsert({
        id: 13,
        dungeonId: 2,
        name: "Broodlord Lashlayer"
      }),
      Boss.upsert({
        id: 14,
        dungeonId: 2,
        name: "Firemaw"
      }),
      Boss.upsert({
        id: 15,
        dungeonId: 2,
        name: "Ebonroc"
      }),
      Boss.upsert({
        id: 16,
        dungeonId: 2,
        name: "Flamegor"
      }),
      Boss.upsert({
        id: 17,
        dungeonId: 2,
        name: "Chromaggus"
      }),
      Boss.upsert({
        id: 18,
        dungeonId: 2,
        name: "Nefarian"
      }),
      Boss.upsert({
        id: 19,
        dungeonId: 3,
        name: "High Priest Venoxis"
      }),
      Boss.upsert({
        id: 20,
        dungeonId: 3,
        name: "High Priestess Jeklik"
      }),
      Boss.upsert({
        id: 21,
        dungeonId: 3,
        name: "High Priestess Mar'li"
      }),
      Boss.upsert({
        id: 22,
        dungeonId: 3,
        name: "High Priest Thekal"
      }),
      Boss.upsert({
        id: 23,
        dungeonId: 3,
        name: "High Priestess Arlokk"
      }),
      Boss.upsert({
        id: 24,
        dungeonId: 3,
        name: "Hakkar"
      }),
      Boss.upsert({
        id: 25,
        dungeonId: 3,
        name: "Bloodlord Mandokir"
      }),
      Boss.upsert({
        id: 26,
        dungeonId: 3,
        name: "Edge of Madness"
      }),
      Boss.upsert({
        id: 27,
        dungeonId: 3,
        name: "Gahz'ranka"
      }),
      Boss.upsert({
        id: 28,
        dungeonId: 3,
        name: "Jin'do the Hexxer"
      }),
      Boss.upsert({
        id: 29,
        dungeonId: 4,
        name: "Kurinnaxx"
      }),
      Boss.upsert({
        id: 30,
        dungeonId: 4,
        name: "General Rajaxx"
      }),
      Boss.upsert({
        id: 31,
        dungeonId: 4,
        name: "Moam"
      }),
      Boss.upsert({
        id: 32,
        dungeonId: 4,
        name: "Buru the Gorger"
      }),
      Boss.upsert({
        id: 33,
        dungeonId: 4,
        name: "Ayamiss the Hunter"
      }),
      Boss.upsert({
        id: 34,
        dungeonId: 4,
        name: "Ossirian the Unscarred"
      }),
      Boss.upsert({
        id: 35,
        dungeonId: 5,
        name: "The Prophet Skeram"
      }),
      Boss.upsert({
        id: 36,
        dungeonId: 5,
        name: "The Bug Trio"
      }),
      Boss.upsert({
        id: 37,
        dungeonId: 5,
        name: "Battleguard Sartura"
      }),
      Boss.upsert({
        id: 38,
        dungeonId: 5,
        name: "Fankriss the Unyielding"
      }),
      Boss.upsert({
        id: 39,
        dungeonId: 5,
        name: "Princess Huhuran"
      }),
      Boss.upsert({
        id: 40,
        dungeonId: 5,
        name: "The Twin Emperors"
      }),
      Boss.upsert({
        id: 41,
        dungeonId: 5,
        name: "Viscidus"
      }),
      Boss.upsert({
        id: 42,
        dungeonId: 5,
        name: "Ouro"
      }),
      Boss.upsert({
        id: 43,
        dungeonId: 5,
        name: "C'Thun"
      }),
      Boss.upsert({
        id: 44,
        dungeonId: 6,
        name: "Anub'Rekhan"
      }),
      Boss.upsert({
        id: 45,
        dungeonId: 6,
        name: "Grand Widow Faerlina"
      }),
      Boss.upsert({
        id: 46,
        dungeonId: 6,
        name: "Maexxna"
      }),
      Boss.upsert({
        id: 47,
        dungeonId: 6,
        name: "Instructor Razuvious"
      }),
      Boss.upsert({
        id: 48,
        dungeonId: 6,
        name: "Gothik the Harvester"
      }),
      Boss.upsert({
        id: 49,
        dungeonId: 6,
        name: "The Four Horsemen"
      }),
      Boss.upsert({
        id: 50,
        dungeonId: 6,
        name: "Noth the Plaguebringer"
      }),
      Boss.upsert({
        id: 51,
        dungeonId: 6,
        name: "Heigan the Unclean"
      }),
      Boss.upsert({
        id: 52,
        dungeonId: 6,
        name: "Loatheb"
      }),
      Boss.upsert({
        id: 53,
        dungeonId: 6,
        name: "Patchwerk"
      }),
      Boss.upsert({
        id: 54,
        dungeonId: 6,
        name: "Grobbulus"
      }),
      Boss.upsert({
        id: 55,
        dungeonId: 6,
        name: "Gluth"
      }),
      Boss.upsert({
        id: 56,
        dungeonId: 6,
        name: "Thaddius"
      }),
      Boss.upsert({
        id: 57,
        dungeonId: 6,
        name: "Sapphiron"
      }),
      Boss.upsert({
        id: 58,
        dungeonId: 6,
        name: "Kel'Thuzad"
      }),
      Boss.upsert({
        id: 59,
        dungeonId: 7,
        name: "Onyxia"
      }),

    ])
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('bosses', null, {});

  }
};
