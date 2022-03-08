#!/usr/bin/env node

import { keys } from "ramda";
import fs from "node:fs/promises";

const scoopProgs = {
    haskell: [
        {
            name: "stack",
            description: "The Haskell Tool Stack",
            url: "https://www.haskellstack.org"
        },
        {
            name: "haskell",
            description: "An advanced, purely functional language",
            url: "https://haskell.org"
        },
        {
            name: "haskell-cabal",
            description: "Cabal is a system for building and packaging Haskell libraries and programs.",
            url: new URL("https://haskell.org/cabal")
        }
    ]
};

console.log(keys(scoopProgs.haskell));
console.log(Object.values(scoopProgs.haskell));

//console.log(await fs.readFile("./README.md").toLocaleString());