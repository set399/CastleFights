const { make, del, edit, read, editjson, readjson } = require('./fileManager.js');
async function registerPlayer(name, id) {
    const d = {
        accountType: 1,
        name: name,
        skin: 'default',
        coins: 0,
        gems: 0,
        xp: 0,
        levelBadge: 1,
        challengeTier: 0,
        challengesCompleteTier1: 0,
        challengesCompleteTier2: 0,
        challengesCompleteTier3: 0,
        challengesCompleteTier4: 0,
        challenges: {
            tier1: {
                claimed: false,
                fistkills: 0, // 5
                crowns: 0, // 15
                winstreak: 0, // 3
                blocks: 0, // 50
                gamekills: 0, // 10
                killstreak: 0 // 5 
            },
            tier2: {
                claimed: false,
                fistkills: 0, // 10
                crowns: 0, // 30
                winstreak: 0, // 5
                blocks: 0, // 100
                gamekills: 0, // 12
                killstreak: 0, // 6
                nodefwins: 0 // 5
            },
            tier3: {
                claimed: false,
                fistkills: 0, // 20
                crowns: 0, // 50
                winstreak: 0, // 7
                blocks: 0, // 150
                gamekills: 0, // 15
                killstreak: 0, // 7
                nodefwins: 0, // 10
                toolwins: 0 // 1
            },
            tier4: {
                claimed: false,
                fistkills: 0, // 30
                crowns: 0, // 100
                winstreak: 0, // 8
                blocks: 0, // 200
                gamekills: 0, // 17
                killstreak: 0, // 8
                nodefwins: 0, // 15
                toolwins: 0 // 3
            }
        },
        kills: 0,
        deaths: 0,
        games: 0,
        wins: 0,
        winstreak: 0,
        crownDestroys: 0,
        inventory: {
            default: 1,
            default2: 1,
            constructionworker: 1,
            farmer: 1,
            sweating: 0,
            holdingtears: 0,
            grin: 0,
            joy: 0,
            rofl: 0,
            snail: 0,
            beetle: 0,
            cricket: 0,
            halo: 0,
            sunglasses: 0,
            suspicious: 0,
            sauropod: 0,
            orangutan: 0,
            parrot: 0,
            swan: 0,
            chipmunk: 0,
            nerd: 0,
            raisedeyebrow: 0,
            coldface: 0,
            imp: 0,
            pumpkin: 0,
            turkey: 0,
            dodo: 0,
            flamingo: 0,
            crocodile: 0,
            beaver: 0,
            flushed: 0,
            cowboy: 0,
            skull: 0,
            alien: 0,
            robot: 0,
            turtle: 0,
            dog: 0,
            cat: 0,
            rat: 0,
            peacock: 0,
            chicken: 0,
            rich: 0,
            killermouse: 0,
            spaceinvader: 0,
            femoby: 0,
            catfemoby: 0,
            rgbchicken: 0
        },
        lootboxes: {
            common: 0,
            good: 0,
            epic: 0,
            legendary: 0,
            mythic: 0
        },
        levelrewardsclaimed: [],
        badges: {
            mod: 0,
            verified: 0,
            collector: 0,
            challenge: 0
        },
        settings: {
            embedcolor: '#ffffff',
            receivegifts: true,
            profileviews: false,

        },
        hcache: {
            save: false,
            map: 'ground',
            gamemode: 'Classic',
            fancyGarden: true,
            showIdentities: true,
            private: false,
            showEvents: true,
            showFps: false,
            respawnTime: 5000
        },
        profileviews: 0
    };
        await make(`./db/${id}.json`);
    await editjson(`./db/${id}.json`, d);
    return true;
    }
async function dbSet(id, key, value) {
    var d = await readjson(`./db/${id}.json`);
    d[key] = value;
    await editjson(`./db/${id}.json`, d);
    return true;
}
async function dbRemove(id, key) {
    var d = await readjson(`./db/${id}.json`);
    delete d[key];
    await editjson(`./db/${id}.json`, d);
    return true;
}
async function dbGet(id, key) {
    var d = await readjson(`./db/${id}.json`);
    return d[key];
}
async function dbDeactivate(id) {
    var d = await readjson(`./db/${id}.json`);
    d.accountType = -1;
    await editjson(`./db/${id}.json`, d);
    return true;
}
async function dbRefresh() {

}

module.exports = { dbSet, dbRemove, dbGet, dbDeactivate, registerPlayer };