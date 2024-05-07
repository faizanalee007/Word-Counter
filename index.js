#! /usr/bin/env node
import inquirer from 'inquirer';
let sentence = await inquirer.prompt([
    {
        name: 'sentence',
        type: ' input',
        message: 'Please Type your sentence: ',
    }
]);
let wordCount = sentence.sentence.trim().split(' ');
console.log(wordCount);
console.log(`Your sentence word count is ${wordCount.length}`);
