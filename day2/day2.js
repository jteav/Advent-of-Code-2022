/*
A = Rock
B = Paper
C = Scissors

*** Points ***
Rock = 1
Paper = 2
Scissors = 3

Loss = 0
Draw = 3
Win = 6
*/

const { open } = require('node:fs/promises');

(async () => {
    const file = await open('input.txt');
    let part1Score = 0
    let part2Score = 0

    for await (const line of file.readLines()) {
        part1Score += comparePart1(line)
        part2Score += comparePart2(line)
    }

    console.log("Part 1: ", part1Score)
    console.log("Part 2: ", part2Score)
})();

/*
X = Rock
Y = Paper
Z = Scissors
*/
function comparePart1(match) {
    let score = 0
    switch(match) {
        case 'A X':
            score = 4
            break;
        case 'A Y':
            score = 8
            break;
        case 'A Z':
            score = 3
            break;
        case 'B X':
            score = 1
            break;
        case 'B Y':
            score = 5
            break;
        case 'B Z':
            score = 9
            break;
        case 'C X':
            score = 7
            break;
        case 'C Y':
            score = 2
            break;
        case 'C Z':
            score = 6
            break;
        default:
            break;
    }

    return score
}

/*
X = Lose
Y = Draw
Z = Win
*/
function comparePart2(match) {
    let score = 0
    switch(match) {
        case 'A X':
            score = 3
            break;
        case 'A Y':
            score = 4
            break;
        case 'A Z':
            score = 8
            break;
        case 'B X':
            score = 1
            break;
        case 'B Y':
            score = 5
            break;
        case 'B Z':
            score = 9
            break;
        case 'C X':
            score = 2
            break;
        case 'C Y':
            score = 6
            break;
        case 'C Z':
            score = 7
            break;
        default:
            break;
    }

    return score
}