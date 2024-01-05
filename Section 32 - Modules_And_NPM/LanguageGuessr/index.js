//doesn't work:
const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green)
}


//doesn't work either:
// const franc = require("franc");
// const langs = require("langs");
// const colors = require("colors")

// const input = process.argv[2];
// const langCode = franc(input);
// if (langCode === 'und') {
//     console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
// } else {
//     const language = langs.where("3", langCode);
//     if (language) {
//         console.log(colors.green(`Our best guess is: ${language.name}`));
//     } else {
//         console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
//     }
// }