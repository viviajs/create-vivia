#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

fs.cpSync(path.join(__dirname, 'scaffold'), '.', { recursive: true })
console.info(chalk.green('Done'))
