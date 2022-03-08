#!/usr/bin/env ts-node
// ts-node is som

import fs from 'node:fs/promises';
import os from 'os';
import { normalize, parse } from 'path';

const log = console.log;

function demo (a: string, b: number) {
    return JSON.stringify({
        var1: `${a}` ,
        var2: `${b}`
    })
}

const demoReadFile = async (file: string) => {
    const data = (await fs.readFile(file)).toLocaleString()
    return JSON.parse(data);
}

const value = demoReadFile("myFile2.txt");
log(value);