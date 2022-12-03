const { open } = require('node:fs/promises');

(async () => {
    const file = await open('input.txt');
    let calories = 0
    let max1 = 0
    let max2 = 0
    let max3 = 0

    for await (const line of file.readLines()) {
        if (line === '') {
            if(calories > max1){
                max3 = max2
                max2 = max1
                max1 = calories
            }
            else if(calories > max2) {
                max3 = max2
                max2 = calories
            }
            else if(calories > max3) {
                max3 = calories
            }
            calories = 0
        }
        else {
            calories += Number(line)
        }
    }

    console.log("Part 1: ", max1)
    console.log("Part 2: ", max1 + max2 + max3)
})();