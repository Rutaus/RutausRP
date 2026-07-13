// ==============================
// Our Archive Knowledge \ data
// ==============================

const archiveEntries = [
    
    //  Characters  // 
    
    {
        name: "Rutana",
        type: "Character",
        aliases: ["Rutana", "Healer"],
        link: "./Characters/rutana.html",
        relations: ["Vigil of the Quiet Light"]
    },

    {
        name: "Nerael'Ruta",
        type: "Character",
        aliases: ["Nerael", "Birdmer", "Budgie", "Goddess of Skies and Lightnings", "Eights"],
        link: "./Characters/nerael.html",
        relations: ["Siloril Sositte", "AD Pantheon"]
    },

    {
        name: "Siloril Sositte",
        type: "Character",
        aliases: ["Siloril", "AD Intel Master", "Goddess of Work and Trade", "Eights"],
        link: "./Characters/siloril.html",
        relations: ["Nerael'Ruta", "AD Pantheon",]
    },

    //  Songs  //

    {
        name: "The Birdmer of the Dominion",
        type: "Song",
        aliases: ["Birdmer", "Budgie"],
        link: "./Songs/birdmer.html",
        relations: ["Nerael'Ruta", "Cyrodiil"]
    },

    //  Places  //

    {
        name: "Bosmer Heaven",
        type: "places",
        aliases: ["Bosmer Heaven"],
        link: "./Map/map.html",
        relations: ["Nerael'Ruta", "Siloril Sositte"]
    },

    //  Religions  //

    {
        name: "AD Pantheon",
        type: "Religion",
        aliases: ["AD Pantheon", "Aldmeri Dominion Pantheon", "Eights", "Goddesses"],
        link: "#",
        relations: ["Nerael'Ruta", "Siloril Sositte", "Elanwel'Snear", "Vex Landa", "Aranelis Calithrae"]
    }

    // {
    //     name: "",
    //     type: "",
    //     aliases: [""],
    //     link: "",
    //     relations: [""]
    // }

];