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
            characters: ["siloril"],
            songs: ["birdmer-song"],
            stories: [],
            places: [],
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
            places: [],
            lore: ["eights"]
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
        id: "bosmer Heaven",
        name: "Bosmer Heaven",
        type: "Place",
        aliases: ["home"],
        link: "./Map/map.html",
        relations: {
            characters: [
                "nerael",
                "siloril"
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
                "nerael",
                "siloril",
                "elanwel",
                "vex",
                "aranelis"
            ],
            songs: [],
            stories: [],
            places: [],
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
    //          characters: [],
    //          songs: [],
    //          stories: [],
    //          places: [],
    //          lore: []
    //      }
    // },

];