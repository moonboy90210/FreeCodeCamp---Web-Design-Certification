const rawCatalogCards = [
  "From a Buick 8 | King Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
   "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

function parseCard(rawString) {
  const parts = rawString.split("|");
  const trimmedParts = [];
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }

const newP = {
	title: trimmedParts[0] || "Unknown",
	author: trimmedParts[1] || "Unknown",
	year: trimmedParts[2] ? parseInt(trimmedParts[2]) : "Unknown",
 	location: trimmedParts[3] || "Unknown",
}

  return newP;
}
// const catalogParse = rawCatalogCards.map(parseCard);
// console.log(catalog);

function parseCatalog(rawCards) {
	const catalog = [];

	for (let cards of rawCards) {
	const raw =	parseCard(cards);
	catalog.push(raw);
	}

	return catalog;
}

const catalog = parseCatalog(rawCatalogCards);

function findByAuthor(catalogg, author) {
const searchTerm = author.toLowerCase();
const results = [];
for (let item of catalogg) {
	if (item.author.toLowerCase().includes(searchTerm)) {
		results.push(item);
	}
}
	return results; 

}
const kingBooks = findByAuthor(catalog, "king");
console.log(kingBooks);
console.log(kingBooks.length);
for (let book of kingBooks) {
	console.log(`${book.title} (${book.year})`);
}






