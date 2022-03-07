#!/usr/bin/env ts-node
// ts-node is som

import fs from 'fs';
import os from 'os';
import { normalize, parse } from 'path';

const log = console.log;

function demo (a: string, b: number) {
    return JSON.stringify({
        var1: `${a}` ,
        var2: `${b}`
    })
}


console.log(demo('hi', 3));
