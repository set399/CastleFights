const blocksIDs = ['EMPTY', 'LEAF', 'WOOD', 'SAND', 'ICE', 'CACTUS', 'STEEL', 'OBSIDIAN', 'CROWN', 'PLAYER'];
const skins = ['default', 'default2', 'constructionworker', 'farmer', 'sweating', 'holdingtears', 'grin', 'joy', 'rofl', 'snail', 'beetle', 'cricket', 'halo', 'sunglasses', 'suspicious', 'sauropod', 'orangutan', 'parrot', 'swan', 'chipmunk', 'nerd', 'raisedeyebrow', 'coldface', 'imp', 'pumpkin', 'turkey', 'dodo', 'flamingo', 'crocodile', 'beaver', 'flushed', 'cowboy', 'skull', 'alien', 'robot', 'turtle', 'dog', 'cat', 'rat', 'peacock', 'chicken', 'rich', 'killermouse', 'spaceinvader', 'catfemoby', 'femoby', 'rgbchicken'];
class CFMap {
    constructor(title) {
        this.data = new Set();
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
        if (id == 'CROWN' && (props.playerID == undefined || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1))) throw new Error('CFMap.set(...): No player in props parameter for CROWN object specified');
        if (id == 'PLAYER' && (props.playerID) == undefined || isNaN(props.playerID) || (props.playerID !== 0 && props.playerID !== 1)) throw new Error('CFMap.set(...): No player in props parameter for PLAYER object specified, obviously -.-');
        if (id == 'PLAYER' && (props.skin == undefined || !skins.includes(props.skin))) props.skin = 'default';
    }
    fill() {

    }
    default() {

    }
    preset() {

    }
    clear() {

    }
}