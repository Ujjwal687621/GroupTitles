"use strict";

const titles = [
  "duel",
  "dule",
  "speed",
  "spede",
  "deul",
  "cars",
  "racs",
  "shape",
  "shpea",
];

function groupTitles() {
  const responseObject = {};

  for (const title of titles) {
    const countArray = new Array(10);

    for (const letter of title) {
      const index = letter.charCodeAt(0);
      countArray[index] += 1;
    }
    const key = countArray;

    if (key in responseObject) {
      responseObject[key].push(title);
    } else {
      responseObject[key] = [title];
    }
  }

  const result = [];

  for (const key in responseObject) {
    result.push(responseObject[key]);
  }

  return result;
}

const titleArrays = groupTitles(titles);

const query = "racs";

for (const [_, similarTitle] of Object.entries(titleArrays)) {
  if (similarTitle.includes(query)) {
    console.log(similarTitle);
  }
}
