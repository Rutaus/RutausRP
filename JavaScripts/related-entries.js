// ==============================
// Related-Entries footer creation
// ==============================

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

console.log(currentPage);

const currentEntry = archiveEntries.find(entry => {
    return entry.link.endsWith(currentPage + ".html");
});

const categoryNames = {
    characters: "🧝 Characters",
    songs: "🎵 Songs",
    stories: "📖 Stories",
    places: "🌍 Places",
    lore: "📜 Lore"
};

console.log(currentEntry);
console.log(currentEntry.relations);

const relatedEntries = currentEntry.relations;

let relatedHTML = "";

for (const category in relatedEntries) {

    const entries = relatedEntries[category];

    if (entries.length === 0) {
        continue;
    }

    relatedHTML += `
        <div class="related-category">

            <h3>${categoryNames[category]}</h3>

            <div class="related-list">
    `;


    entries.forEach(id => {

        const foundEntry = archiveEntries.find(entry => {
            return entry.id === id;
        });


        if (!foundEntry) {
            return;
        }


        relatedHTML += `
            <a href="${fixLink(foundEntry.link)}" class="related-card">
                ${foundEntry.name}
            </a>
        `;

    });


    relatedHTML += `
            </div>

        </div>
    `;

}

const relatedSection = document.getElementById("related-entries");

relatedSection.innerHTML = `
    <hr>

    <h2>Related Entries</h2>

    <div class="related-container">
        ${relatedHTML}
    </div>
`;

function fixLink(link) {
    return "../" + link.replace("./", "");
}