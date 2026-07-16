const characterGrid = document.getElementById("character-grid");

const characters = archiveEntries.filter(entry => {
    return entry.type === "Character";
});

let characterHTML = "";

characters.forEach(character => {

    let ownerClass = "";

    if (character.owner) {

        ownerClass = `owner-${character.owner.toLowerCase()}`;

    }

    characterHTML += `
        <a
            href="${character.link.replace("./Characters/", "")}"
            class="character-card ${ownerClass}">

            <h2>${character.name}</h2>

            <p>${character.subtitle}</p>

            <span>
                ${character.tags.join(" &bull; ")}
            </span>

        </a>
    `;

});

characterGrid.innerHTML = characterHTML;