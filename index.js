#!/usr/bin/env node

const fs = require('fs')
const yaml = require('js-yaml');


function main() {
  let inFile = process.argv[2];
  let inData = JSON.parse(fs.readFileSync(inFile));
  let yamlOut = yaml.safeDump(inData, { indent: 3, noRefs: true });
  console.log(yamlOut);
}

main()
