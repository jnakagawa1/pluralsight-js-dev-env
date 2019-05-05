/* This script generates mock data for local development.
*/

/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

var outputFile = './src/api/db.json';

const json = JSON.stringify(jsf(schema));

fs.writeFile(outputFile, json, function(err){
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock Data Generated."));
  }
});



