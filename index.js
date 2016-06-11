#!/usr/bin/env node

'use strict';
const [node, me, action, ...args] = process.argv;
require('./src/' + action)(...args);
