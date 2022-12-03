const { open } = require('node:fs/promises');

(async () => {
    const file = await open('input.txt');
    let elves = []
    let calories = 0

    for await (const line of file.readLines()) {
        if (line === '') {
            elves.push(calories)
            calories = 0
        }
        else {
            calories += Number(line)
        }
    }

    //Part 1
    elves.sort((a, b) => a > b ? -1 : 1)
    console.log("Part 1", elves[0])

    //Part 2
    let top3 = elves[0] + elves[1] + elves[2]
    console.log("Part 2", top3)
})();