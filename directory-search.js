const fs = require('fs');
const path = require('path');
const util = require('util');

const readDir = util.promisify(fs.readdir);
const getStat = util.promisify(fs.stat);

const pathName = './test';
const findJs = async (pathName) => {
    try {
        const dir = await readDir(pathName);
        dir.forEach(async item => {
            let filePath = path.join(pathName, item);
            let stats = await getStat(filePath);
            if (!stats.isDirectory() && path.extname(filePath) === '.js') console.log(filePath);
            else if (stats.isDirectory()) findJs(filePath);
        });
    }
    catch(e) {
        console.log(e);
    }
};

findJs(pathName);