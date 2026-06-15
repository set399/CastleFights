const fs = require('fs').promises;

// let dir = './';

async function make(path) {
    try {
        await fs.writeFile(path, '', 'utf8');
        return true;
    } catch (error) {
        throw new Error(`fileManager.js/read(...): Error making file: ${error}`)
    }
}
async function del(path) {
    try {
        await fs.unlink(path)
        return true;
    } catch (error) {
        throw new Error(`fileManager.js/read(...): Error deleting file: ${error}`)
    }
}
async function edit(path, content) {
    try {
        await fs.writeFile(path, content, 'utf8');
        return true;
    } catch (error) {
        throw new Error(`fileManager.js/read(...): Error writing file: ${error}`)
    }
}
async function read(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        return data;
    } catch (error) {
        throw new Error(`fileManager.js/read(...): Error reading file: ${error}`)
    }
}
async function readjson(path) {
    try {
        let data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`fileManager.js/read(...): Error reading file: ${error}`);
        return false;
    }
}
async function editjson(path, content) {
    try {
        await fs.writeFile(`${path}.tmp`, JSON.stringify(content, null, 2), 'utf8');
        await fs.rename(`${path}.tmp`, path);
        return true;
    } catch (error) {
        console.error(`fileManager.js/read(...): Error writing file: ${error}`);
        return false;
    }
};

/* 
Non-Global FS functions (idk if gonna use, maybe)
function cd(path) {
    
}
function ls(path) {

} */

module.exports = { make, del, edit, read, readjson, editjson };

