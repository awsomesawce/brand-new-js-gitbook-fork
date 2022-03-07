#!/usr/bin/env ts-node
// ts-node is som

import fs from 'fs';
import os from 'os';
import { normalize, parse } from 'path';

console.log(fs);
console.log(parse)

const log = console.log;

function demo (a: string, b: number) {
    if (a) {
        if (b) {
            return JSON.stringify({
                var1: `${a}` ,
                var2: `${b}`
            })
        }
    }
}

