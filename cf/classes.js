
const blocksIDs = ['EMPTY', 'LEAF', 'WOOD', 'SAND', 'ICE', 'CACTUS', 'STEEL', 'OBSIDIAN', 'CROWN', 'PLAYER'];
const skins = ['default', 'default2', 'constructionworker', 'farmer', 'sweating', 'holdingtears', 'grin', 'joy', 'rofl', 'snail', 'beetle', 'cricket', 'halo', 'sunglasses', 'suspicious', 'sauropod', 'orangutan', 'parrot', 'swan', 'chipmunk', 'nerd', 'raisedeyebrow', 'coldface', 'imp', 'pumpkin', 'turkey', 'dodo', 'flamingo', 'crocodile', 'beaver', 'flushed', 'cowboy', 'skull', 'alien', 'robot', 'turtle', 'dog', 'cat', 'rat', 'peacock', 'chicken', 'rich', 'killermouse', 'spaceinvader', 'catfemoby', 'femoby', 'rgbchicken'];
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
    constructor(title) {
        this.data = [];
        this.title = title;
        for (var x = 0; x < 20; x++) {
            this.data.push([]);
            for (var y = 0; y < 9; y++) {
                this.data[x].push({id: 'EMPTY', health: 0});
            }
        };
    }
    set(x, y, id, hp, props = {}) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (isNaN(x) || isNaN(y) || x < 0 || x > 19 || y < 0 || y > 8) throw new Error('CFMap.set(...): Object coords exceed the 20x9 area');
        if (!blocksID.includes(id)) throw new Error('CFMap.set(...): Invalid Block ID, allowed are: ' + JSON.stringify(blocksIDs));
        if (hp < 1) hp = 0;
        if (hp > 100000) hp = 100000;
        if (id == 'CROWN' && ((props.playerID == undefined) || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1))) throw new Error('CFMap.set(...): No player in props parameter for CROWN object specified');
        if (id == 'PLAYER' && ((props.playerID) == undefined) || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1)) throw new Error('CFMap.set(...): No player in props parameter for PLAYER object specified, obviously -.-');
        if (id == 'PLAYER' && ((props.skin == undefined) || !skins.includes(props.skin))) props.skin = 'default';
        return this.data[x][y] = { id: id, health: hp, props: props};
    }
    fill(x1, x2, y1, y2, id, hp, props = {}) {
        if (isNaN(x1) || isNaN(y1) || x1 < 0 || x1 > 19 || y1 < 0 || y1 > 8) throw new Error('CFMap.fill(...): Fill boundaries (1) exceed the 20x9 area');
        if (isNaN(x2) || isNaN(y2) || x2 < 0 || x2 > 19 || y2 < 0 || y2 > 8) throw new Error('CFMap.fill(...): Fill boundaries (2) exceed the 20x9 area');
        for (var y = y1; y <= y2; y++) {
            for (var x = x1; x <= x2; x++) {
                this.set(x, y, id, hp, { ...props });
            }
        }
    }
    render() {
        
    }
    default() {

    }
    preset() {

    }
    clear() {

    }
}