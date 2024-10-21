import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let lijst = ["Dalil","Reda","Sabri","Rakim",]
for ( let i  = 0 ; i < 3 ; i++) {
    console.log(lijst[i]+" je bent uitgenoding voor ehb examen  ")
}


    

process.exit()