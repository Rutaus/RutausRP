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

        </div>
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

                <span class="related-badge">
                    ${foundEntry.type}
                </span>

                <h4>
                    ${foundEntry.name}
                </h4>

            </a>
        `;

    });

}

const relatedSection = document.getElementById("related-entries");

relatedSection.innerHTML = `
    <h2>Related Entries</h2>

    ${relatedHTML}
`;

function fixLink(link) {
    return "../" + link.replace("./", "");
}