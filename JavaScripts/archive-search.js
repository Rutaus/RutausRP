// ==============================
// Archive Search System
// ==============================

const searchInput = document.getElementById("archive-search");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    searchResults.innerHTML = "";

    archiveEntries.forEach(function (entry) {

        const searchableText =

            (entry.name + " " +
                entry.type + " " +
                entry.aliases.join(" "))
                .toLowerCase();

        if (searchText && searchableText.includes(searchText)) {

            searchResults.innerHTML += `
                <a href="${entry.link}" class="search-result">
                    <h3>${entry.name}</h3>
                    <p>${entry.type}</p>
                </a>
            `;

        }

    });
});