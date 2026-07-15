// ==============================
// Our Archive Knowledge \ data
// ==============================

const archiveEntries = [

    //  Characters  // 

    {
        id: "nerael",
        name: "Nerael'Ruta",
        type: "Character",
        subtitle: "AD Hero & Goddess of Skies and Lightnings",
        tags: ["Rutaus", "Sorcerer", "Bosmer", "Goddess"],
        aliases: [
            "Birdmer", "Budgie", "Goddess of Skies and Lightnings",
            "Eights", "Bosmer"
        ],
        link: "./Characters/nerael.html",
        relations: {
            characters: ["siloril", "elanwel", "vex", "rutana", "neravelle", "larveneth", "vivien"],
            songs: ["birdmer-song"],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "siloril",
        name: "Siloril Sositte",
        type: "Character",
        subtitle: "AD Intel Master & Goddess of Work and Trade",
        tags: ["Ave", "Sorcerer", "Bosmer", "Goddess"],
        aliases: [
            "AD Intel Master", "Goddess of Work and Trade",
            "Eights", "Bosmer"
        ],
        link: "./Characters/siloril.html",
        relations: {
            characters: ["nerael", "neravelle", "larveneth", "aurica"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "elanwel",
        name: "Elanwel'Snear",
        type: "Character",
        subtitle: "AD Queen & Goddess of Mercy and Charity",
        tags: ["Ave", "Templar", "Bosmer", "Goddess"],
        aliases: [
            "ela", "AD Queen", "Queen of AD", "Goddess of Marcy and Charity",
            "eights", "Bosmer"
        ],
        link: "./Characters/elanwel.html",
        relations: {
            characters: ["siloril", "nerael", , "vex", "rutana"],
            songs: [],
            stories: [],
            places: [],
            lore: ["eights"]
        }
    },

    {
        id: "vex",
        name: "Vex Landa",
        type: "Character",
        subtitle: "Summerset Queen & Goddess of War",
        tags: ["Ave", "Templar", "Bosmer", "Goddess"],
        aliases: [
            "Vexxy", "Queen of Summerset", "Goddess of War",
            "Eights", "Bosmer"
        ],
        link: "./Characters/vex.html",
        relations: {
            characters: ["elanwel", "lirith",],
            songs: [],
            stories: [],
            places: [],
            lore: ["eights"]
        }
    },

    {
        id: "rutana",
        name: "Rutana",
        type: "Character",
        subtitle: "Vigil-Bearer of the Quiet Light",
        tags: ["Rutaus", "Templar", "Breton", "Healer"],
        aliases: ["Healer", "Breton"],
        link: "./Characters/rutana.html",
        relations: {
            characters: [],
            songs: [],
            stories: [],
            places: [],
            lore: []
        }
    },

    {
        id: "neravelle",
        name: "Neravelle Aramyr",
        type: "Character",
        subtitle: "Gift touched by unseen magic",
        tags: ["Ave", "Sorcerer", "Bosmer"],
        aliases: [""],
        link: "./Characters/neravelle.html",
        relations: {
            characters: ["siloril", "nerael", "larveneth", "sirenwe"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
        }
    },

    {
        id: "larveneth",
        name: "Larveneth",
        type: "Character",
        subtitle: "",
        tags: ["Ave", "Warden", "Bosmer", "Healer"],
        aliases: [""],
        link: "./Characters/larveneth.html",
        relations: {
            characters: ["siloril", "nerael", "neravelle", "sirenwe"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
        }
    },

    //  // Sirenwe Landa    //  //

    {
        id: "aranelis",
        name: "Aranelis Calithrae",
        type: "Character",
        subtitle: "Daughter of Crystal and Storm",
        tags: ["Ave", "Templar", "Bosmer", "Goddess"],
        aliases: ["Goddess of Time", "Cutie from the past", "Daughter of Crystal and Storm", "The Pearl of Tides", "eights"],
        link: "./Characters/aranelis.html",
        relations: {
            characters: ["lirien", "vivien", "elanariel", "elanariel-junior", "azura"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "azura",
        name: "Lady Azura",
        type: "Character",
        subtitle: "Goddess of Love and Beauty",
        tags: ["<del>Ave</del>", "Necromancer", "Bosmer", "Goddess"],
        aliases: ["Goddes of Love and Beauty", "eights"],
        link: "./Characters/azura.html",
        relations: {
            characters: [],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "lathanwe",
        name: "Lathanwe'Silmaranis",
        type: "Character",
        subtitle: "Goddess of Life and Death",
        tags: ["Ave", "Necromaner", "Bosmer", "Goddess"],
        aliases: ["Goddess of Life and Death", "eights"],
        link: "./Characters/lathanwe.html",
        relations: {
            characters: ["lirael", "eh'lhiel", "necro-arya"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "liriel",
        name: "Lirael'Selenar",
        type: "Character",
        subtitle: "Paladin of Life and Death",
        tags: ["Ave", "Necromancer", "Bomser", "Paladin"],
        aliases: ["Paladin of Life and Death"],
        link: "./Characters/lathanwe.html",
        relations: {
            characters: ["flavia", "lathanwe", "necro-arya"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "keaniel",
        name: "Keaniel Beeravi",
        type: "Character",
        subtitle: "Goddess of Widsom and Knowledge",
        tags: ["Ave", "Dragonknight", "Bosmer", "Goddess"],
        aliases: ["Handsome", "Goddess of Wisdom and Logic", "eights"],
        link: "./Characters/keaniel.html",
        relations: {
            characters: ["safia", "arca-arya", "kariniel", "eveli"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "safia",
        name: "Safia Falco",
        type: "Character",
        subtitle: "Paladin of Wisdom",
        tags: ["Rutaus", "Dragonknight", "Bosmer", "Paladin"],
        aliases: ["Handsome", "Paladin of Wisdom"],
        link: "./Characters/safia.html",
        relations: {
            characters: ["keaniel", "mercedes", "laelia"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

    {
        id: "luriel",
        name: "Luriel Angulókë",
        type: "Character",
        subtitle: "Paladin of Logic",
        tags: ["Rutuas", "Dragonknight", "Bosmer", "Paladin"],
        aliases: [""],
        link: "",
        relations: {
            characters: [],
            songs: [],
            stories: [],
            places: [],
            lore: []
         },
         
    },

    {
        id: "flavia",
        name: "Flavia Varga",
        type: "Character",
        subtitle: "",
        tags: [],
        aliases: ["Srg", "Fleet", "Paladin of wine and tits"],
        link: "./Characters/flavia.html",
        relations: {
            characters: ["telriel"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
        }
    },

    {
        id: "talriel",
        name: "Talriel Septa",
        type: "Character",
        subtitle: "Empress & Goddess of Wine and Tits",
        tags: ["Ave", "Dragonknight", "Bosmer", "Goddess"],
        aliases: ["Empress", "Goddess of Wine and Tits", "eights"],
        link: "./Characters/talriel.html",
        relations: {
            characters: ["elanwel", "azura", "flavia"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
        }
    },

    //  Songs  //

    {
        id: "birdmer-song",
        name: "The Birdmer of the Dominion",
        type: "Song",
        aliases: ["Budgie"],
        link: "./Songs/birdmer.html",
        relations: {
            characters: ["nerael"],
            songs: [],
            stories: [],
            places: ["cyrodiil"],
            lore: []
        }
    },

    //  Places  //

    {
        id: "bosmer heaven",
        name: "Bosmer Heaven",
        type: "Place",
        aliases: ["home"],
        link: "./Map/map.html",
        relations: {
            characters: [
                "nerael", "siloril", "azura"
            ],
            songs: [],
            stories: [],
            places: [],
            lore: []
        }
    },

    {
        id: "cyro",
        name: "cyrodiil",
        type: "place",
        aliases: ["war"],
        link: "./world lore/cyrodiil.html",
        relations: {
            characters: ["nerael", "rutana", "vex"],
            songs: [],
            stories: [],
            places: [],
            lore: []
        }
    },

    //  Lore  //

    {
        id: "eights",
        name: "AD Pantheon",
        type: "Lore",
        aliases: ["AD Pantheon", "Aldmeri Dominion Pantheon", "Eights", "Goddesses"],
        link: "./World Lore/pantheon.html",
        relations: {
            characters: [
                "nerael", "siloril", "elanwel", "vex", "aranelis", "azura", "lathanwe", "keaniel",
                "talriel", "liriel", "safia", "luriel", "aurica", "elanariel-junior", "flavia",
                "fire-arya"
            ],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["hce"]
        }
    },

    {
        id: "hce",
        name: "Holy Cyrodiil Empire",
        type: "Lore",
        subtitle: "",
        tags: [],
        aliases: ["hce"],
        link: "./World Lore/hce.html",
        relations: {
            characters: ["talriel", "elanwel"],
            songs: [],
            stories: [],
            places: ["cyro"],
            lore: []
        }
    }

    // {
    //     id: "",
    //     name: "",
    //     type: "",
    //     subtitle: "",
    //     tags: [],
    //     aliases: [""],
    //     link: "",
    //     relations: {
    //         characters: [],
    //         songs: [],
    //         stories: [],
    //         places: [],
    //         lore: []
    //      },
    //      
    // },

];