#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

fs.cpSync(path.join(__dirname, 'scaffold'), '.')
console.info(chalk.green('Done'))
