
const blockIDs = ['EMPTY', 'LEAF', 'WOOD', 'SAND', 'ICE', 'CACTUS', 'STEEL', 'OBSIDIAN', 'CROWN', 'PLAYER'];
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
    EMPTY: '<:e_:1337418328875991092>',
    WOOD: '🟫',
    LEAF: '🟩',
    STONE: '<:ro:1337424806399709265>',
    CACTUS: '🌵',
    SAND: '🟨',
    ICE: '<:ic:1337714434227048449>',
    STEEL: '<:st:1337806342714298420>',
    OBSIDIAN: '🟪',
    CROWN: '<:cr:1117868600976478299>',
    INVALID: '<:invalid:1337424671171412000>',
};
class CFMap {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.clear();
    }
    set(x, y, id, hp, props = {}) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (isNaN(x) || isNaN(y) || x < 0 || x > 19 || y < 0 || y > 8) throw new Error('CFMap.set(...): Object coords exceed the 20x9 area');
        if (!blockIDs.includes(id)) throw new Error('CFMap.set(...): Invalid Block ID, allowed are: ' + JSON.stringify(blockIDs));
        if (hp < 1) hp = 0;
        if (hp > 100000) hp = 100000;
        if (id == 'CROWN' && (props.playerID == undefined || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1))) throw new Error('CFMap.set(...): No player in props parameter for CROWN object specified');
        if (id == 'PLAYER' && (props.playerID == undefined || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1))) throw new Error('CFMap.set(...): No player in props parameter for PLAYER object specified, obviously -.-');
        if (id == 'PLAYER' && (props.skin == undefined || !skins.includes(props.skin))) props.skin = 'default';
        return this.data[x][y] = { id: id, health: hp, props: props};
    }
    fill(x1, x2, y1, y2, id, hp) {
        if (isNaN(x1) || isNaN(y1) || x1 < 0 || x1 > 19 || y1 < 0 || y1 > 8) throw new Error('CFMap.fill(...): Fill boundaries (1) exceed the 20x9 area');
        if (isNaN(x2) || isNaN(y2) || x2 < 0 || x2 > 19 || y2 < 0 || y2 > 8) throw new Error('CFMap.fill(...): Fill boundaries (2) exceed the 20x9 area');
        for (var y = y1; y <= y2; y++) {
            for (var x = x1; x <= x2; x++) {
                this.set(x, y, id, hp);
            }
        }
        return ({ blocksFilled: (x2 - x1 + 1) * (y2 - y1 + 1) });
    }
    render() {
        let map = '';
        for (var y = 8; y >= 0; y--) {
            let row = '';
            for (var x = 0; x < 20; x++) {
                if (this.data[x][y].id == 'PLAYER') {
                    row += skinsObj[this.data[x][y].props.skin];
                } else {
                    row += textures[this.data[x][y].id];
                }
            }
            row += '\n';
            map += row;
        }
        if (map.length > 3600) {
            let arr = map.split('\n');
            arr.splice(0, 2);
            map = '';
            arr.forEach(row => {
                map += row + '\n';
            });
            map += 'Map too long. Unrendered top 2 vertical rows (Y 8, 9).';
        }
        return map;
    }
    clear() {
        this.data = [];
        for (var x = 0; x < 20; x++) {
            this.data.push([]);
            for (var y = 0; y < 9; y++) {
                this.data[x].push({ id: 'EMPTY', health: 0 });
            }
        };
        return true;
    }
    default() {
        this.title = 'Example Map';
        this.clear();
        this.fill(0, 19, 0, 2, 'WOOD', 100000);
        this.fill(0, 19, 3, 3, 'LEAF', 100000);
        return this.title;
    }
    export() {
        return JSON.stringify({ title: this.title, data: this.data});
    }
    import(jsonData) {
        let map = JSON.parse(jsonData);
        if (!map.title || typeof map.title !== 'string') throw new Error('CFMap.import(...): Map title not specified'); 
        if (!map.data || !Array.isArray(map.data)) throw new Error('CFMap.import(...): Invalid map data specified');
        this.title = map.title;
        this.data = map.data;
        return this.title;
    }
    
}
class CFPlayer {
    constructor(ign, level, skin, x, y, respawnX, respawnY) {
        this.level = level;
        this.user = ign;
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
    respawn() {

    }
    

}


module.exports = {CFMap, CFPlayer};