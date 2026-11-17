const WawaUtils = require('@set399/wawautils');
const blockIDs = ['EMPTY', 'LEAF', 'WOOD', 'SAND', 'ICE', 'STONE', 'CACTUS', 'STEEL', 'OBSIDIAN', 'CROWN', 'PLAYER', 'DECO_TREE', 'DECO_PALMTREE', 'DECO_DEADBUSH', 'SPECIALS_WATER'];
const skins = ['default', 'default2', 'constructionworker', 'farmer', 'sweating', 'holdingtears', 'grin', 'joy', 'rofl', 'snail', 'beetle', 'cricket', 'halo', 'sunglasses', 'suspicious', 'sauropod', 'orangutan', 'parrot', 'swan', 'chipmunk', 'nerd', 'raisedeyebrow', 'coldface', 'imp', 'pumpkin', 'turkey', 'dodo', 'flamingo', 'crocodile', 'beaver', 'flushed', 'cowboy', 'skull', 'alien', 'robot', 'turtle', 'dog', 'cat', 'rat', 'peacock', 'chicken', 'rich', 'killermouse', 'spaceinvader', 'catfemoby', 'femoby', 'rgbchicken'];
const skinsObj = {
    default: '😀',
    default2: '😃',
    constructionworker: '👷',
    farmer: '👨‍🌾',
    sweating: '😅',
    holdingtears: '🥹',
    grin: '😁',
    joy: '😂',
    rofl: '🤣',
    snail: '🐌',
    beetle: '🪲',
    cricket: '🦗',
    halo: '😇',
    sunglasses: '😎',
    suspicious: '🧐',
    sauropod: '🦕',
    orangutan: '🦧',
    parrot: '🦜',
    swan: '🦢',
    chipmunk: '🐿️',
    nerd: '🤓',
    raisedeyebrow: '🤨',
    coldface: '🥶',
    imp: '😈',
    pumpkin: '🎃',
    turkey: '🦃',
    dodo: '🦤',
    flamingo: '🦩',
    crocodile: '🐊',
    beaver: '🦫',
    flushed: '😳',
    cowboy: '🤠',
    skull: '💀',
    alien: '👽',
    robot: '🤖',
    turtle: '🐢',
    dog: '🐕',
    cat: '🐈',
    rat: '🐀',
    peacock: '🦚',
    chicken: '🐓',
    rich: '🤑',
    killermouse: '🐁',
    spaceinvader: '👾',
    catfemoby: '<:catfemoby:1520508020163870730>',
    femoby: '<:femoby:1520508179023134933>',
    rgbchicken: '<a:rgbchicken:1091024982966026350>'
};
const textures = {
    EMPTY: '<:e:1337418328875991092>',
    WOOD: '🟫',
    LEAF: '🟩',
    STONE: '<:r:1337424806399709265>',
    CACTUS: '🌵',
    SAND: '🟨',
    ICE: '<:i:1337714434227048449>',
    STEEL: '<:s:1337806342714298420>',
    DECO_TREE: '🌲',
    DECO_DEADBUSH: '🪾',
    DECO_PALMTREE: '🌴',
    OBSIDIAN: '🟪',
    SPECIALS_WATER: '🟦',
    CROWN: '<:c:1117868600976478299>',
    INVALID: '<:i:1337424671171412000>',
    SPAWNPOINT1: '<:s:1565142053405327461>',
    SPAWNPOINT2: '<:s:1565142010761969724>'
};

const WIDTH = 21;
const HEIGHT = 9;

const DEFAULTS = {
    crown1: { x: 0, y: 4 },
    crown2: { x: WIDTH - 1, y: 4 },
    spawnpoint1: { x: 4, y: 4 },
    spawnpoint2: { x: WIDTH - 5, y: 4 }
};

class CFMap {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.failLoad = false;
        this.settings = {
            crowns: [
                { ...DEFAULTS.crown1 },
                { ...DEFAULTS.crown2 }
            ],
            spawnpoints: [
                { ...DEFAULTS.spawnpoint1 },
                { ...DEFAULTS.spawnpoint2 }
            ]
        };
        this.clear();
        
    }
    set(x, y, id, hp, props = {}) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (isNaN(x) || isNaN(y) || x < 0 || x > WIDTH || y < 0 || y > HEIGHT) throw new Error(`CFMap.set(...): Object coords exceed the ${WIDTH}x${HEIGHT} area`);
        if (!blockIDs.includes(id)) throw new Error('CFMap.set(...): Invalid Block ID, allowed are: ' + JSON.stringify(blockIDs));
        if (hp < 1) hp = 0;
        if (hp > 100000) hp = 100000;
        if (id == 'CROWN' && (props.playerID == undefined || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1))) throw new Error('CFMap.set(...): No player in props parameter for CROWN object specified');
        if (id == 'PLAYER' && (props.playerID == undefined || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1))) throw new Error('CFMap.set(...): No player in props parameter for PLAYER object specified, obviously -.-');
        if (id == 'PLAYER' && (props.skin == undefined || !skins.includes(props.skin))) props.skin = 'default';
        return this.data[x][y] = { id: id, health: hp, props: props};
    }
    fill(x1, x2, y1, y2, id, hp) {
        if (isNaN(x1) || isNaN(y1) || x1 < 0 || x1 > WIDTH || y1 < 0 || y1 > HEIGHT) throw new Error(`CFMap.fill(...): Fill boundaries (1) exceed the ${WIDTH}x${HEIGHT} area`);
        if (isNaN(x2) || isNaN(y2) || x2 < 0 || x2 > WIDTH || y2 < 0 || y2 > HEIGHT) throw new Error(`CFMap.fill(...): Fill boundaries (2) exceed the ${WIDTH}x${HEIGHT} area`);
        for (var y = y1; y <= y2; y++) {
            for (var x = x1; x <= x2; x++) {
                this.set(x, y, id, hp);
            }
        }
        return ({ blocksFilled: (x2 - x1 + 1) * (y2 - y1 + 1) });
    }
    render(isEditor) {
        if (!isEditor) isEditor = false;
        if (this.failLoad) {
            return 'This map failed to load. Please check if all configuration is correct.'
        }
        let map = '';
        for (var y = HEIGHT - 1; y >= 0; y--) {
            let row = '';
            for (var x = 0; x < WIDTH; x++) {
                if (this.data[x][y].id == 'PLAYER') {
                    row += skinsObj[this.data[x][y].props.skin];
                } else if (isEditor && x == this.settings.spawnpoints[0].x && y == this.settings.spawnpoints[0].y) {
                    row += textures.SPAWNPOINT1;
                } else if (isEditor && x == this.settings.spawnpoints[1].x && y == this.settings.spawnpoints[1].y) {
                    row += textures.SPAWNPOINT2;
                } else {
                    row += textures[this.data[x][y].id];
                }
            }
            row += '\n';
            map += row;
        }
        if (map.length >= 3600) {
            let arr = map.split('\n');
            arr.splice(0, 2);
            map = '';
            arr.forEach(row => {
                map += row + '\n';
            });
            map += 'Map too long. Unrendered top 2 vertical rows (Y 7, 8).';
            if (map.length > 3600 && isEditor) { 
                map = `
**Failed to render the map:**
The map text exceeds the limit of \`3600\` characters, this is caused by using **heavy** blocks in your map *(blocks that use a custom emoji for their display which takes **24** characters instead of 1)*, i.e. ${textures.EMPTY} \`Air\`, ${textures.STEEL} \`Steel\`, ${textures.STONE} \`Stone\` and ${textures.ICE} \`Ice\`
You can fix this issue by replacing them with other blocks that aren't mentioned in this list, which take only **1** character
*You cannot export this map as it would cause issues in gameplay if played*

:map: **Map size: \`${map.length}\`** *(Remove \`${(Math.ceil((map.length-3600)/23))}\` heavy blocks to make the map render again)*
                `;
            } else if (map.length > 3600 && !isEditor) {
                map = `This map failed to load due to being too big (3600+ characters). If this issue continues, please consider contacting the map author, or you can still play (up to you :D), **controls are still enabled, you can choose to play blindly**`;
            }
        }
        
        return map;
    }
    clear() {
        this.data = [];
        for (var x = 0; x < WIDTH; x++) {
            this.data.push([]);
            for (var y = 0; y < HEIGHT; y++) {
                this.data[x].push({ id: 'EMPTY', health: 0, props: {} });
            }
        };
        this.settings.crowns.forEach((c, playerID) => this.data[c.x][c.y] = { id: 'CROWN', health: 200, props: { playerID: playerID } });
        return true;
    }
    default() {
        this.title = 'Example Map';
        this.clear();
        this.fill(0, WIDTH-1, 0, 2, 'WOOD', 100000);
        this.fill(0, WIDTH-1, 3, 3, 'LEAF', 100000);
        return this.title;
    }
    export() {
        return JSON.stringify({ title: this.title, author: this.author, data: this.data, settings: this.settings, failLoad: this.failLoad});
    }
    import(jsonData) {
        let map = JSON.parse(jsonData);
        if (!map.title || typeof map.title !== 'string') throw new Error('CFMap.import(...): Map title not specified'); 
        if (!map.data || !Array.isArray(map.data)) throw new Error('CFMap.import(...): Invalid map data specified');
        if (!map.settings) throw new Error('CFMap.import(...): No map settings specified');
        if (map.failLoad) this.failLoad = true;
        this.title = map.title;
        this.data = map.data;
        return this;
    }
    
}
class CFPlayer {
    constructor(ign, nick, level, skin, x, y, respawnX, respawnY) {
        this.level = level;
        this.user = ign;
        this.displayUser = nick;
        this.skin = skin;
        this.x = x;
        this.y = y;
        this.respawnX = respawnX;
        this.respawnY = respawnY;
        this.kills = 0;
        this.deaths = 0;
        this.health = 100;
        this.maxHealth = 100;
        this.currentSlot = 0;
        this.slots = [];
        this.respawnTs = Date.now();
        this.prepMinerals = {
            leaf: 0,
            wood: 0,
            rock: 0,
            cactus: 0,
            ice: 0,
            sand: 0,
            iron: 0,
            gunpowder: 0,
            apple: 0,
            olives: 0,
            carrot: 0,
            sparkle: 0,
            orb: 0,
            diamond: 0
        }
        this.prepItems = {
            woodensword: 0,
            knife: 0,
            dagger: 0,
            katana: 0,
            pistol: 0,
            revolver: 0,
            shotgun: 0,
            sniper: 0,
            pistolrevbullet: 0,
            shotgunbullet: 0,
            sniperbullet: 0,
            woodenshovel: 0,
            pickaxe: 0,
            steelpickaxe: 0,
            diapickaxe: 0,
            firecracker: 0,
            bomb: 0,
            powerfulbomb: 0,
            teleporter: 0,
            greenapple: 0,
            carrot: 0,
            soup: 0
        };
        this.earnings = { coins: 0, xp: 0, gems: 0, commonbox: 0, goodbox: 0, epicbox: 0, legendarybox: 0, mythicbox: 0 };
        this.state = 'ALIVE';
        this.canRespawn = true;
        this.explorationCooldowns = {
            forest: Date.now(),
            fancygarden: Date.now(),
            mountains: Date.now(),
            snowmountains: Date.now(),
            desert: Date.now(),
            volcano: Date.now()
        };
    }
    damage(hitter, hp, method) {
        if ((this.health - hp) < 1) {
            if (!(hitter instanceof CFPlayer)) {
                this.deaths++;
                this.state = 'DEAD';
                this.health = 0;
                return `${this.ign} died to natural causes`;
            };
            let m = 'killed';
            if (['pistol', 'revolver', 'shotgun', 'sniper'].includes(method)) m = 'shot';
            if (['bomb', 'powerfulbomb'].includes(method)) m = 'exploded';
            this.deaths++;
            hitter.kills++;
            this.state = 'DEAD';
            this.health = 0;
            return `${hitter.ign} ${m} ${this.ign}`;
        };
        this.health -= hp;
        return hp;
    }
    heal(hp) {
        if (this.health + hp >= this.maxHealth) return this.health = this.maxHealth;
        return this.health += hp;
    }
    respawn() {
        if (this.state == 'RESPAWNING') {
            this.state = 'ALIVE';
            this.health = this.maxHealth;
            return true;
        }
    }
    slot(num) {
        if (num < 0 && num > 9) return;
        this.currentSlot = num;
        return num;
    }
    explore() {

    }
    craft() {

    }
    equipToSlot() {

    }
    

}
class CFServer {

    constructor(type, code, gamemode, fancyGarden, hideIdentities, events, disableUtils, host, opponent, mapData) {
        const parsedMap = JSON.parse(mapData);
        if (!mapData || mapData == {nonexistent: true}) return { error: `Invalid Map ID ;< sobbies u hatieeeeeee u put invalid map` };
        this.code = code;
        this.host = host;
        this.players = [];
        this.settings = {
            fancyGardenEnabled: fancyGarden,
            hideIdentities: hideIdentities,
            showEvents: events,
            disableUtils: disableUtils
        };
        this.phase = 'LOBBY';
        this.prepPhaseEnd = 0;
        this.fightEnd = 0;
        this.finalGameEnd = 0;
        this.map = new CFMap(parsedMap.title, parsedMap.author).import(mapData);
        this.baseMap = new CFMap(parsedMap.title, parsedMap.author).import(mapData);
    }
}

module.exports = {CFMap, CFPlayer, CFServer};