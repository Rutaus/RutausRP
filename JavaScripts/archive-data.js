// ==============================
// Our Archive Knowledge \ data
// ==============================

const archiveEntries = [

    //  Characters  // 

    {
        id: "rutana",
        name: "Rutana",
        type: "Character",
        aliases: ["Healer"],
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
        id: "nerael",
        name: "Nerael'Ruta",
        type: "Character",
        aliases: ["Birdmer", "Budgie", "Goddess of Skies and Lightnings", "Eights"],
        link: "./Characters/nerael.html",
        relations: {
            characters: ["siloril", "elanwel", "vex", "rutana", "neravelle", "larvaneth", "vivien"],
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
        aliases: ["AD Intel Master", "Goddess of Work and Trade", "Eights"],
        link: "./Characters/siloril.html",
        relations: {
            characters: ["nerael"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: ["eights"]
        }
    },

        {
        id: "neravelle",
        name: "Neravelle Aramyr",
        type: "Character",
        aliases: [""],
        link: "./Characters/neravelle.html",
        relations: {
            characters: ["siloril", "nerael", "larvaneth", "sirenwe"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
         }
    },

        {
        id: "larvaneth",
        name: "Larvaneth",
        type: "Character",
        aliases: [""],
        link: "./Characters/larvaneth.html",
        relations: {
            characters: ["siloril", "nerael", "neravelle" ,"sirenwe"],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
         }
    },

    {
        id: "elanwel",
        name: "Elanwel'Snear",
        type: "Character",
        aliases: ["ela", "AD Queen", "Queen of AD", "Goddess of Marcy and Charity"],
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
        aliases: ["Vexxy", "Queen of Summerset", "Goddess of War"],
        link: "./Characters/vex.html",
        relations: {
            characters: ["elanwel", "lirith", ],
            songs: [],
            stories: [],
            places: [],
            lore: ["eights"]
        }
    },

    // Sirenwe Landa

    {
        id: "aranelis",
        name: "Aranelis Calithrae",
        type: "Character",
        aliases: ["Goddess of Time", "Cutie from the past", "Daughter of Crystal and Storm", "The Pearl of Tides"],
        link: "./Characters/aranelis.html",
        relations: {
            characters: ["lirien", "vivien", "elanariel", "ela-junior", "azura"],
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
        aliases: ["Goddes of Love and Beauty", ""],
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
        name: "Lathanwe Calithrae",
        type: "Character",
        aliases: ["Goddess of Life and Death"],
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
        id: "keaniel",
        name: "Keaniel Beeravi",
        type: "Character",
        aliases: ["Handsome", "Goddess of Wisdom and Logic"],
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
        type: "Characters",
        aliases: ["Handsome", "Paladin of Wisdom"],
        link: "./Characters/safia.html",
        relations: {
            characters: [],
            songs: [],
            stories: [],
            places: [],
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
        link: "./world lore/lore.html",
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
                "nerael", "siloril", "elanwel", "vex", "aranelis", "azura", "lathanwe","keaniel", 
                "talriel", "liriel", "safia", "luriel", "aurica", "elanariel", "flavia"
            ],
            songs: [],
            stories: [],
            places: ["bosmer heaven"],
            lore: []
        }
    }

    // {
    //     id: "",
    //     name: "",
    //     type: "",
    //     aliases: [""],
    //     link: "",
    //     relations: {
    //         characters: [],
    //         songs: [],
    //         stories: [],
    //         places: [],
    //         lore: []
    //      }
    // },

];