require('dotenv').config();
const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt('> ')

rl.on('line', async l => {
    const result = eval(l);
    console.log(result);
    const logChannels = [process.env.LOG1, process.env.LOG2];
    logChannels.forEach(ch => {
        try {
            cl.channels.cache.get(ch).send({
                embeds: [
                    new MessageEmbed()
                        .setTitle(`💻 Console Command entered`)
                        .setDescription(`
\`\`\`
> ${l}                
\`\`\`
                `)
                        .setColor('#33ff00')
                        .setFooter({ text: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` })
                ]
            })
        } catch (error) {
            console.log(`Failed to log "${l}"`)
        }
    });
});


    const { editjson, readjson, make, del, edit, read } = require('./fileManager.js');
    // DB Deposit
    let db = {};
    let names = {};
    let currentgame = {};
    (async () => {
        db = await readjson('./db.json');
        names = await readjson('./names.json');
        setInterval(async () => {
            try {
                await editjson('./db.json', db);
                await editjson('./names.json', names);
                console.log(`Deposited DB with into db.json and names.json
db.json length: ${JSON.stringify(db).length}
names.json length: ${JSON.stringify(names).length}
    `);

            } catch (error) {
                console.error(error);
            }
        }, 20000);
        console.log(JSON.stringify(db));
    })();



    function racc(int) { // Resolve account type
        if (int == 0 || int == undefined || !int || int == null) {
            return 'NON-EXISTENT'
        } else if (int == 1) {
            return 'PLAYER'
        } else if (int == 2) {
            return 'VERIFIED'
        } else if (int == -1) {
            return 'BLACKLISTED'
        } else if (int == 3) {
            return 'STAFF'
        } else {
            return 'CUSTOM'
        }
    }

    const textures = {
        EMPTY: '<:e_:1337418328875991092>',
        WOOD: '🟫',
        WOOD_U: '🟫',
        LEAF: '🟩',
        LEAF_U: '🟩',
        STONE: '<:ro:1337424806399709265>',
        STONE_U: '<:ro:1337424806399709265>',
        CACTUS: '🌵',
        CACTUS_U: '🌵',
        SAND: '🟨',
        SAND_U: '🟨',
        ICE: '<:ic:1337714434227048449>',
        ICE_U: '<:ic:1337714434227048449>',
        STEEL: '<:st:1337806342714298420>',
        STEEL_U: '<:st:1337806342714298420>',
        OBSIDIAN: '🟪',
        OBSIDIAN_U: '🟪',
        CROWN1: '<:cr:1117868600976478299>',
        CROWN2: '<:cr:1117868600976478299>',
        invalid: '<:invalid:1337424671171412000>',
    };
    const icons = {
        xp: '<:xp:1048892841465741372>',
        coin: '<:coin:1047983261512642650>',
        gem: '<:gem:1047983268491960392>',
        lvl1: '<:lvl1:1519741006982021220>',
        lvl5: '<:lvl5:1519741033255145617>',
        lvl10: '<:lvl10:1519741055283494913>',
        lvl15: '<:lvl15:1519741078327132170>',
        lvl20: '<:lvl20:1519741099042803773>',
        lvl30: '<:lvl30:1519741122585301154>',
        lvl40: '<:lvl40:1519741147377963128>',
        lvl50: '<:lvl50:1519741168605200587>',
        lvl60: '<:lvl60:1519741194857353319>',
        lvl70: '<:lvl70:1519741221688447188>',
        lvl80: '<:lvl80:1519741249836421170>',
        lvl90: '<:lvl90:1519741278122676256>',
        lvl100: '<a:lvl100:1519741302076346459>',
        verified: '<a:verified:1047983275383214191>',
        mod: '<:mod1:1047983257557409813>',
        mod2: '<:mod2:1047983259453231134>',
        challenger1: '<:challenger_badge1:975316703560990760>',
        challenger2: '<:challenger_badge2:975316703691018250>',
        challenger3: ':star:',
        challenger4: '<:challenger_badge4:975316703368060969>',
        collector: '<a:diamond:1047983266357055578>',
        commonbox: '<:commonbox:1048689265900527686>',
        goodbox: '<:goodbox:1048689316542558260>',
        epicbox: '<:epicbox:1048689356614942892>',
        legendarybox: '<:legendarybox:1048689380124000346>',
        mythicbox: '<:mythicbox:1048689408431374426>'
    };
    const skins = {
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
    const skinNames = {
        default: 'Default',
        default2: 'Default 2',
        constructionworker: 'Construction Worker',
        farmer: 'Farmer',
        sweating: 'Sweating',
        holdingtears: 'Holding Back Tears',
        grin: 'Grin',
        joy: 'Bad Laughing Emoji',
        rofl: 'ROFL',
        snail: 'Snail',
        beetle: 'Beetle',
        cricket: 'Cricket',
        halo: 'Halo',
        sunglasses: 'Sunglasses',
        suspicious: 'Suspicious',
        sauropod: 'Sauropod',
        orangutan: 'Orangutan',
        parrot: 'Parrot',
        swan: 'Swan',
        chipmunk: 'Chipmunk',
        nerd: 'Nerd',
        raisedeyebrow: 'Raised Eyebrow',
        coldface: 'Cold Face',
        imp: 'Imp',
        pumpkin: 'Pumpkin',
        turkey: 'Turkey',
        dodo: 'Dodo',
        flamingo: 'Flamingo',
        crocodile: 'Crocodile',
        beaver: 'Beaver',
        flushed: 'Flushed',
        cowboy: 'Cowboy',
        skull: 'Skull',
        alien: 'Alien',
        robot: 'Robot',
        turtle: 'Turtle',
        dog: 'Dog',
        cat: 'Cat',
        rat: 'Rat',
        peacock: 'Peacock',
        chicken: 'Chicken',
        rich: 'Rich',
        killermouse: 'Killer Mouse',
        spaceinvader: 'Space Invader',
        catfemoby: 'Cat Femoby',
        femoby: 'Femoby',
        rgbchicken: 'RGB Chicken'
};

    var servers = {};
    var currentGame = {};
    var demoServer = {
        settings: { respawnTime: 5000 },
        mapTitle: 'Ground',
        player1: {
            respawnX: 1, respawnY: 5, x: 1, y: 5, skin: 'default', kills: 0, deaths: 0, health: 100, maxHealth: 100, currentSlot: 1, earnings: { coins: 0, xp: 0, gems: 0, commonLootbox: 0, rareLootbox: 0, epicLootbox: 0, legendaryLootbox: 0, mythicalLootbox: 0 }, state: 'ALIVE', slots: [
                { id: 'steel_pickaxe', count: 1, data: { upgrades: [] } },
                { id: 'iron_axe', count: 1, data: { upgrades: [] } },
                { id: 'shovel', count: 1, data: { upgrades: [] } },
                { id: 'pistol', count: 1, data: { upgrades: [] } },
                { id: 'shotgun', count: 1, data: { upgrades: [] } },
                { id: 'apple', count: 5, data: { upgrades: [] } },
                { id: 'teleporter', count: 1, data: { usesLeft: 3, upgrades: [] } },
                { id: 'wooden_sword', count: 1, data: { upgrades: [] } },
                { id: 'dagger', count: 1, data: { upgrades: ['REGEN1'] } },
                { id: 'katana', count: 1, data: { upgrades: ['REGEN2'] } },
            ],
        },
        player2: {
            respawnX: 5, respawnY: 5, x: 5, y: 5, skin: 'default', kills: 0, deaths: 0, health: 100, maxHealth: 100, currentSlot: 1, state: 'ALIVE', slots: [
                { id: 'steel_pickaxe', count: 1, data: { upgrades: [] } },
                { id: 'iron_axe', count: 1, data: { upgrades: [] } },
                { id: 'shovel', count: 1, data: { upgrades: [] } },
                { id: 'pistol', count: 1, data: { upgrades: [] } },
                { id: 'shotgun', count: 1, data: { upgrades: [] } },
                { id: 'apple', count: 5, data: { upgrades: [] } },
                { id: 'teleporter', count: 1, data: { usesLeft: 3, upgrades: [] } },
                { id: 'wooden_sword', count: 1, data: { upgrades: [] } },
                { id: 'dagger', count: 1, data: { upgrades: ['REGEN1', 'REACH1'] } },
                { id: 'katana', count: 1, data: { upgrades: ['REGEN2', 'REACH2'] } },
            ],
        },
        b1_1: 'WOOD_U', b1_2: 'WOOD_U', b1_3: 'WOOD_U', b1_4: 'LEAF_U', b1_5: 'EMPTY', b1_6: 'EMPTY', b1_7: 'EMPTY', b1_8: 'EMPTY', b1_9: 'EMPTY',
        b2_1: 'WOOD_U', b2_2: 'WOOD_U', b2_3: 'WOOD_U', b2_4: 'LEAF_U', b2_5: 'EMPTY', b2_6: 'EMPTY', b2_7: 'EMPTY', b2_8: 'EMPTY', b2_9: 'EMPTY',
        b3_1: 'WOOD_U', b3_2: 'WOOD_U', b3_3: 'WOOD_U', b3_4: 'LEAF_U', b3_5: 'EMPTY', b3_6: 'EMPTY', b3_7: 'EMPTY', b3_8: 'EMPTY', b3_9: 'EMPTY',
        b4_1: 'WOOD_U', b4_2: 'WOOD_U', b4_3: 'WOOD_U', b4_4: 'LEAF_U', b4_5: 'EMPTY', b4_6: 'EMPTY', b4_7: 'EMPTY', b4_8: 'EMPTY', b4_9: 'EMPTY',
        b5_1: 'WOOD_U', b5_2: 'WOOD_U', b5_3: 'WOOD_U', b5_4: 'LEAF_U', b5_5: 'EMPTY', b5_6: 'EMPTY', b5_7: 'EMPTY', b5_8: 'EMPTY', b5_9: 'EMPTY',
        b6_1: 'WOOD_U', b6_2: 'WOOD_U', b6_3: 'WOOD_U', b6_4: 'LEAF_U', b6_5: 'EMPTY', b6_6: 'EMPTY', b6_7: 'EMPTY', b6_8: 'EMPTY', b6_9: 'EMPTY',
        b7_1: 'WOOD_U', b7_2: 'WOOD_U', b7_3: 'WOOD_U', b7_4: 'LEAF_U', b7_5: 'EMPTY', b7_6: 'EMPTY', b7_7: 'EMPTY', b7_8: 'EMPTY', b7_9: 'EMPTY',
        b8_1: 'WOOD_U', b8_2: 'WOOD_U', b8_3: 'WOOD_U', b8_4: 'LEAF_U', b8_5: 'EMPTY', b8_6: 'EMPTY', b8_7: 'EMPTY', b8_8: 'EMPTY', b8_9: 'EMPTY',
        b9_1: 'WOOD_U', b9_2: 'WOOD_U', b9_3: 'WOOD_U', b9_4: 'LEAF_U', b9_5: 'EMPTY', b9_6: 'EMPTY', b9_7: 'EMPTY', b9_8: 'EMPTY', b9_9: 'EMPTY',
        b10_1: 'WOOD_U', b10_2: 'WOOD_U', b10_3: 'WOOD_U', b10_4: 'LEAF_U', b10_5: 'EMPTY', b10_6: 'EMPTY', b10_7: 'EMPTY', b10_8: 'EMPTY', b10_9: 'EMPTY',
        b11_1: 'WOOD_U', b11_2: 'WOOD_U', b11_3: 'WOOD_U', b11_4: 'LEAF_U', b11_5: 'EMPTY', b11_6: 'EMPTY', b11_7: 'EMPTY', b11_8: 'EMPTY', b11_9: 'EMPTY',
        b12_1: 'WOOD_U', b12_2: 'WOOD_U', b12_3: 'WOOD_U', b12_4: 'LEAF_U', b12_5: 'EMPTY', b12_6: 'EMPTY', b12_7: 'EMPTY', b12_8: 'EMPTY', b12_9: 'EMPTY',
        b13_1: 'WOOD_U', b13_2: 'WOOD_U', b13_3: 'WOOD_U', b13_4: 'LEAF_U', b13_5: 'EMPTY', b13_6: 'EMPTY', b13_7: 'EMPTY', b13_8: 'EMPTY', b13_9: 'EMPTY',
        b14_1: 'WOOD_U', b14_2: 'WOOD_U', b14_3: 'WOOD_U', b14_4: 'LEAF_U', b14_5: 'EMPTY', b14_6: 'EMPTY', b14_7: 'EMPTY', b14_8: 'EMPTY', b14_9: 'EMPTY',
        b15_1: 'WOOD_U', b15_2: 'WOOD_U', b15_3: 'WOOD_U', b15_4: 'LEAF_U', b15_5: 'EMPTY', b15_6: 'EMPTY', b15_7: 'EMPTY', b15_8: 'EMPTY', b15_9: 'EMPTY',
        b16_1: 'WOOD_U', b16_2: 'WOOD_U', b16_3: 'WOOD_U', b16_4: 'LEAF_U', b16_5: 'EMPTY', b16_6: 'EMPTY', b16_7: 'EMPTY', b16_8: 'EMPTY', b16_9: 'EMPTY',
        b17_1: 'WOOD_U', b17_2: 'WOOD_U', b17_3: 'WOOD_U', b17_4: 'LEAF_U', b17_5: 'EMPTY', b17_6: 'EMPTY', b17_7: 'EMPTY', b17_8: 'EMPTY', b17_9: 'EMPTY',
        b18_1: 'WOOD_U', b18_2: 'WOOD_U', b18_3: 'WOOD_U', b18_4: 'LEAF_U', b18_5: 'EMPTY', b18_6: 'EMPTY', b18_7: 'EMPTY', b18_8: 'EMPTY', b18_9: 'EMPTY',
        blockData: {
            b1_1: { health: 10000 }, b1_2: { health: 10000 }, b1_3: { health: 10000 }, b1_4: { health: 10000 }, b1_5: { health: 0 }, b1_6: { health: 0 }, b1_7: { health: 0 }, b1_8: { health: 0 }, b1_9: { health: 0 },
            b2_1: { health: 10000 }, b2_2: { health: 10000 }, b2_3: { health: 10000 }, b2_4: { health: 10000 }, b2_5: { health: 0 }, b2_6: { health: 0 }, b2_7: { health: 0 }, b2_8: { health: 0 }, b2_9: { health: 0 },
            b3_1: { health: 10000 }, b3_2: { health: 10000 }, b3_3: { health: 10000 }, b3_4: { health: 10000 }, b3_5: { health: 0 }, b3_6: { health: 0 }, b3_7: { health: 0 }, b3_8: { health: 0 }, b3_9: { health: 0 },
            b4_1: { health: 10000 }, b4_2: { health: 10000 }, b4_3: { health: 10000 }, b4_4: { health: 10000 }, b4_5: { health: 0 }, b4_6: { health: 0 }, b4_7: { health: 0 }, b4_8: { health: 0 }, b4_9: { health: 0 },
            b5_1: { health: 10000 }, b5_2: { health: 10000 }, b5_3: { health: 10000 }, b5_4: { health: 10000 }, b5_5: { health: 0 }, b5_6: { health: 0 }, b5_7: { health: 0 }, b5_8: { health: 0 }, b5_9: { health: 0 },
            b6_1: { health: 10000 }, b6_2: { health: 10000 }, b6_3: { health: 10000 }, b6_4: { health: 10000 }, b6_5: { health: 0 }, b6_6: { health: 0 }, b6_7: { health: 0 }, b6_8: { health: 0 }, b6_9: { health: 0 },
            b7_1: { health: 10000 }, b7_2: { health: 10000 }, b7_3: { health: 10000 }, b7_4: { health: 10000 }, b7_5: { health: 0 }, b7_6: { health: 0 }, b7_7: { health: 0 }, b7_8: { health: 0 }, b7_9: { health: 0 },
            b8_1: { health: 10000 }, b8_2: { health: 10000 }, b8_3: { health: 10000 }, b8_4: { health: 10000 }, b8_5: { health: 0 }, b8_6: { health: 0 }, b8_7: { health: 0 }, b8_8: { health: 0 }, b8_9: { health: 0 },
            b9_1: { health: 10000 }, b9_2: { health: 10000 }, b9_3: { health: 10000 }, b9_4: { health: 10000 }, b9_5: { health: 0 }, b9_6: { health: 0 }, b9_7: { health: 0 }, b9_8: { health: 0 }, b9_9: { health: 0 },
            b10_1: { health: 10000 }, b10_2: { health: 10000 }, b10_3: { health: 10000 }, b10_4: { health: 10000 }, b10_5: { health: 0 }, b10_6: { health: 0 }, b10_7: { health: 0 }, b10_8: { health: 0 }, b10_9: { health: 0 },
            b11_1: { health: 10000 }, b11_2: { health: 10000 }, b11_3: { health: 10000 }, b11_4: { health: 10000 }, b11_5: { health: 0 }, b11_6: { health: 0 }, b11_7: { health: 0 }, b11_8: { health: 0 }, b11_9: { health: 0 },
            b12_1: { health: 10000 }, b12_2: { health: 10000 }, b12_3: { health: 10000 }, b12_4: { health: 10000 }, b12_5: { health: 0 }, b12_6: { health: 0 }, b12_7: { health: 0 }, b12_8: { health: 0 }, b12_9: { health: 0 },
            b13_1: { health: 10000 }, b13_2: { health: 10000 }, b13_3: { health: 10000 }, b13_4: { health: 10000 }, b13_5: { health: 200 }, b13_6: { health: 0 }, b13_7: { health: 0 }, b13_8: { health: 0 }, b13_9: { health: 0 },
            b14_1: { health: 10000 }, b14_2: { health: 10000 }, b14_3: { health: 10000 }, b14_4: { health: 10000 }, b14_5: { health: 0 }, b14_6: { health: 0 }, b14_7: { health: 0 }, b14_8: { health: 0 }, b14_9: { health: 0 },
            b15_1: { health: 10000 }, b15_2: { health: 10000 }, b15_3: { health: 10000 }, b15_4: { health: 10000 }, b15_5: { health: 0 }, b15_6: { health: 0 }, b15_7: { health: 0 }, b15_8: { health: 0 }, b15_9: { health: 0 },
            b16_1: { health: 10000 }, b16_2: { health: 10000 }, b16_3: { health: 10000 }, b16_4: { health: 10000 }, b16_5: { health: 0 }, b16_6: { health: 0 }, b16_7: { health: 0 }, b16_8: { health: 0 }, b16_9: { health: 0 },
            b17_1: { health: 10000 }, b17_2: { health: 10000 }, b17_3: { health: 10000 }, b17_4: { health: 10000 }, b17_5: { health: 0 }, b17_6: { health: 0 }, b17_7: { health: 0 }, b17_8: { health: 0 }, b17_9: { health: 0 },
            b18_1: { health: 10000 }, b18_2: { health: 10000 }, b18_3: { health: 10000 }, b18_4: { health: 10000 }, b18_5: { health: 0 }, b18_6: { health: 0 }, b18_7: { health: 0 }, b18_8: { health: 0 }, b18_9: { health: 0 }
        }
    }

    const blockHp = {
        LEAF: 50,
        SAND: 150,
        WOOD: 200,
        CACTUS: 225,
        STONE: 300,
        ICE: 400,
        STEEL: 500,
        OBSIDIAN: 1000,
        CROWN1: 200,
        CROWN2: 200,
        LEAF_U: 10000,
        SAND_U: 10000,
        WOOD_U: 10000,
        CACTUS_U: 10000,
        STONE_U: 10000,
        ICE_U: 10000,
        STEEL_U: 10000,
        OBSIDIAN_U: 10000,
        EMPTY: 0
    }




    function healthStatus(health, maxHealth) {
        const hpPercentage = (health / maxHealth) * 100;
        /*
    HP TABLEEEE:
    
    X - 0%
    Red - 1%-25%
    Orange - 26%-50%
    Yellow - 51-75%
    Green - 76-100%
        */
        if (hpPercentage < 1) {
            return `❌`;
        } else if (hpPercentage <= 25 && hpPercentage > 0) {
            return `🟥`;
        } else if (hpPercentage <= 50 && hpPercentage >= 26) {
            return `🟧`;
        } else if (hpPercentage <= 75 && hpPercentage >= 51) {
            return `🟨`;
        } else if (hpPercentage > 75) {
            return `🟩`;
        } else {
            return `❓`;
        }
    }

    function stateText(player) {
        if (player == 'player1') {
            if (demoServer.player1.state == 'ALIVE') {
                return `${demoServer.player1.health}/${demoServer.player1.maxHealth} :hearts:`;
            } else if (demoServer.player1.state == 'RESPAWNING') {
                return 'Respawning :timer:'
            } else {
                return `Dead :skull:`;
            }
        } else if (player == 'player2') {
            if (demoServer.player2.state == 'ALIVE') {
                return `${demoServer.player2.health}/${demoServer.player2.maxHealth} :hearts:`;
            } else if (demoServer.player2.state == 'RESPAWNING') {
                return 'Respawning :timer:'
            } else {
                return `Dead :skull:`;
            }
        } else {
            return new Error('Invalid player specified for stateText(...) function');
        }
    };

    function createServer(code, map, gamemode, isPrivate, showPing, showEvents, respawnTime, identities, rewards, hostID) {
        let serverdata = {
            stage: 'WAITING', // PREPARATION, FIGHT, ENDGAME
            fightStarts: 0,
            endgameStarts: 0,
            gameEnds: 0,
            settings: { respawnTime: respawnTime, private: isPrivate, showPing: showPing, showEvents: showEvents, showIdentities: identities, rewards: rewards },
            mapTitle: 'Ground',
            gamemode: gamemode,
            player1: {
                x: 1,
                y: 1,
                skin: 'default',
                respawnX: 1,
                respawnY: 5,
                health: 100,
                maxHealth: 100,
                kills: 0,
                deaths: 0,
                killstreak: 0,
                currentSlot: 0,
                hasCrown: true,
                state: 'ALIVE',
                slots: [],
                items: [],
                preparationTimestamps: {
                    forest: Date.now(),
                    fancyGarden: Date.now(),
                    mountains: Date.now(),
                    snowyMountains: Date.now(),
                    desert: Date.now(),
                    volcano: Date.now()
                },
                earnings: {
                    coins: 0,
                    xp: 0
                }
            },
            player2: {
                respawnX: 5, respawnY: 5, x: 5, y: 5, skin: 'default', kills: 0, deaths: 0, health: 100, maxHealth: 100, currentSlot: 1, state: 'ALIVE', slots: [], items: []
            },

        }
        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 19; x++) {
                serverdata[`b${x}_${y}`] = 'EMPTY';
                serverdata.blockData = {};
                serverdata.blockData[`b${x}_${y}`] = { health: 0 };
                console.log(serverdata);
            }
        };
        loadMap();
        servers[code] = serverdata;
    }

    function displayBadge(id, tier) {
        if (tier == 0) return '';
        if (id == 'verified' && tier == 1) return icons.verified;
        if (id == 'mod' && tier == 1) return icons.mod;
        if (id == 'mod' && tier == 2) return icons.mod2;
        if (id == 'collector' && tier == 1) return icons.collector;
        if (id.startsWith('challenger') && tier > 0) return icons[`challenger${tier}`];
        return '';
    }
function displayBadgeText(id, tier) {
    if (tier == 0) return '';
    if (id == 'verified' && tier == 1) return `${icons.verified} **Verified**\n`;
    if (id == 'mod' && tier == 1) return `${icons.mod} **Moderator**\n`;
    if (id == 'mod' && tier == 2) return `${icons.mod2} **Head Moderator**\n`;
    if (id == 'collector' && tier == 1) return `${icons.collector} **Collector**\n`;
    if (id.startsWith('challenger') && tier > 0) {
        let icon = icons[`challenger${tier}`];
        return `${icon} **Challenger [Tier ${tier}]**\n`;
    }
    return '';
}
    function getXp(level) {
        if (level < 1) return -1;
        return (50*Math.pow(level, 2)) - 50*level
    }
    function getLevel(xp) {
        if (xp < 0 || isNaN(xp)) return { level: 1, progress: 0, required: 0 };
        const level = Math.floor((50 + Math.sqrt(2500 + 200 * xp)) / 100);
        const progress = xp - getXp(level);
        const required = getXp(level + 1) - getXp(level);
        return { level: level, progress: progress, required: required };
    }
    function displayProgress(percentage) {
        if (percentage < 1 || percentage > 100) return `⬜⬜⬜⬜⬜`;
        if (percentage > 0 && percentage <= 20) return `🟦⬜⬜⬜⬜`;
        if (percentage >= 21 && percentage <= 40) return `🟦🟦⬜⬜⬜`;
        if (percentage >= 41 && percentage <= 60) return `🟦🟦🟦⬜⬜`;
        if (percentage >= 61 && percentage <= 80) return `🟦🟦🟦🟦⬜`;
        if (percentage > 81) return `🟦🟦🟦🟦🟦`;
    }

const itemPrices = {
    default: 0,
    default2: 0,
    constructionworker: 0,
    farmer: 0,
    sweating: 100,
    holdingtears: 150,
    grin: 300,
    joy: 400,
    rofl: 500,
    snail: 600,
    beetle: 800,
    cricket: 1000,
    halo: 1200,
    sunglasses: 1500,
    suspicious: 1550,
    sauropod: 1600,
    orangutan: 1650,
    parrot: 1900,
    swan: 2100,
    chipmunk: 2500,
    nerd: 3000,
    raisedeyebrow: 3200,
    coldface: 3250,
    imp: 3333,
    pumpkin: 3400,
    turkey: 3500,
    dodo: 3600,
    flamingo: 3850,
    crocodile: 3900,
    beaver: 3900,
    flushed: 4000,
    cowboy: 4050,
    skull: 4100,
    alien: 4200,
    robot: 4400,
    turtle: 5000,
    dog: 6000,
    cat: 6000,
    rat: 6000,
    peacock: 7000,
    chicken: 7500,
    rich: 10000,
    killermouse: 11000,
    spaceinvader: 12000,
    catfemoby: 30000,
    femoby: 30000,
    rgbchicken: 100000
};
const lootboxPrices = {
    commonbox: 500,
    common: 500,
    goodbox: 1500,
    good: 1500,
    epicbox: 3000,
    epic: 3000,
    legendarybox: 6000,
    legendary: 6000
};
const lootboxNames = {
    commonbox: 'Common Lootbox',
    common: 'Common Lootbox',
    goodbox: 'Good Lootbox',
    good: 'Good Lootbox',
    epicbox: 'Epic Lootbox',
    epic: 'Epic Lootbox',
    legendarybox: 'Legendary Lootbox',
    legendary: 'Legendary Lootbox',
    mythicbox: 'Mythic Lootbox',
    mythic: 'Mythic Lootbox'
};
const lootboxEmojis = {
    commonbox: icons.commonbox,
    common: icons.commonbox,
    goodbox: icons.goodbox,
    good: icons.goodbox,
    epicbox: icons.epicbox,
    epic: icons.epicbox,
    legendarybox: icons.legendarybox,
    legendary: icons.legendarybox
};


    const EventEmitter = require('events');
    const dominoUpdater = new EventEmitter();
    const { MessageEmbed, MessageActionRow, MessageButton, Client, WebhookClient } = require('discord.js');
    const cl = new Client({ intents: ['GUILDS', 'MESSAGE_CONTENT', 'GUILD_MEMBERS', 'GUILD_MESSAGES'] })

const noAccountEmbed = new MessageEmbed()
    .setTitle(':no_entry_sign: You do not have an account!')
    .setDescription(`In order to use :european_castle: **Castle Fights** commands, you need to create an account using the \`?register\` command`)
    .setColor('RED')
    .setFooter({ text: 'Create an account using the ?register command!' });
const deletedEmbed = new MessageEmbed()
    .setTitle(`:no_entry_sign: You have deleted your account!`)
    .setDescription(`Because you have deleted your account, you cannot use any :european_castle: **Castle Fights** interaction commands!
*In order to recover your account, please use the \`?request\` command to submit an account recovery request by putting it in the parameter, i.e. \`?request Months ago I have deleted my account out of boredom and now wish for it back, please recover my account\`*
*Your stats are still saved, but your \`?profile\` has most stats hidden (once you recover your account you will gain all of your old stats back)*
*3 months after your account's deletion, your IGN will be changed and your old name will be unlocked*
`)
    .setColor('RED')
    .setFooter({ text: 'Recover your account using the ?request command!' });
const bannedEmbed = new MessageEmbed()
    .setTitle(`:no_entry_sign: You are banned from :european_castle: Castle Fights!`)
    .setDescription(`An in-game moderator has banned you from the game, in order to check your ban reason, **use the \`?profile\` command**
You are not able to use any interaction commands, but you can still view player's profiles, etc.
*Your stats still remain, meaning if you get unbanned you will get everything back*
*Bans have a duration commonly specified right inside the reason, if your ban is temporary, you have no choice but to wait it out*
*If you are permanently banned, you will need to ask an in-game moderator for an appeal, you cannot use the \`?request\` command when banned*
`)
    .setColor('RED')
    .setFooter({ text: 'You have been banned!' });

    cl.on('ready', () => {
        console.log('[0;32m32Bot started!');
        cl.user.setActivity(`to the ? prefix`, { type: "LISTENING" });
        cl.channels.cache.get('1336754930022748205').send({
            embeds: [
                new MessageEmbed()
                    .setTitle(`:white_check_mark: **Bot started!**`)
                    .setDescription(`
\`\`\`ansi
> (node:1012) [DEP0040] DeprecationWarning: The \`punycode\` module is deprecated. Please use a userland alternative instead.
(Use \`node--trace - deprecation ...\` to show where the warning was created)
[0;32mBot started!]
\`\`\`
                `)
                    .setColor('#33ff00')
                    .setFooter({ text: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` })
            ]
        })
    });

    cl.on('messageCreate', async (message) => {
        if (message.author.bot) return null;
        if (message.content.startsWith('?register')) {
            const name = message.content.split('?register ')[1];
            if (!name || name.includes(':') || name.includes('*') || name.includes('`') || name.length < 2 || name.length > 20) {
                try {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(':no_entry_sign: Failed to register')
                                .setDescription(`In order to register to :european_castle: **Castle Fights**, you need to choose a name upon using the command as a parameter, like so: \`?register <name>\`
> **Please keep in mind names must be from 2 to 20 characters and must not contain \`:\`, \`*\` or "\`"** *(if your name does not match the requirements you will receive this same error)*
                        `)
                                .setFooter({ text: `Invalid parameters specified | ?register` })
                                .setColor('RED')
                        ]
                    })
                } catch (error) {
                    console.error(`Failed to send message at ${message.channel.id}: ${error}`);
                }
            } else if (db[message.author.id]) {
                try {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(`:no_entry_sign: You are already registered as \`${db[message.author.id].name}\`!`)
                                .setColor('RED')
                        ]
                    })
                } catch (error) {
                    console.error(`Failed to send message at ${message.channel.id}: ${error}`);
                }
            } else if (names[name.toLowerCase()]) {
                try {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(`:no_entry_sign: This name is already taken!`)
                                .setColor('RED')
                        ]
                    });
                } catch (error) {
                    console.error(`Failed to send message at ${message.channel.id}: ${error}`);
                }
            } else {
                let d = {
                    accountType: 1,
                    constAccountType: 1,
                    disableReason: '',
                    display: name,
                    name: name.toLowerCase(),
                    skin: 'default',
                    coins: 0,
                    gems: 0,
                    xp: 0,
                    levelIcon: 1,
                    challengeTier: 0,
                    currentChallengeRequirements: {
                        fistkills: 5,
                        crowns: 15,
                        winstreak: 3,
                        blocks: 100,
                        gamekills: 10,
                        killstreak: 5,
                        nodefwins: 0,
                        toolwins: 0
                    },
                    currentChallengeProgress: {
                        fistkills: 0,
                        crowns: 0,
                        winstreak: 0,
                        blocks: 0,
                        gamekills: 0,
                        killstreak: 0,
                        nodefwins: 0,
                        toolwins: 0
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
                        challenger: 0
                    },
                    settings: {
                        embedcolor: 'BLUE',
                        profileviews: false

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
                    analytics: {
                        mostKills: 0,
                        killsRanged: 0,
                        killsMelee: 0,
                        killsUtil: 0,
                        dmgDealt: 0,
                        dmgDealtBlocks: 0,
                        blocksMined: 0,
                        blocksPlaced: 0,
                        itemsCrafted: 0,
                        shots: 0,
                        hits: 0,
                        privateGames: 0,
                        playtime: 0,
                        playtimePrivate: 0,
                        currentWinstreak: 0,
                        highestWinstreak: 0
                    },
                    profileviews: 0,
                    canUseRequest: true,
                    playerID: (Object.keys(db).length || 0)+1
                };
                db[message.author.id] = d;
                names[name.toLowerCase()] = { id: message.author.id, display: name };
                try {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(`:white_check_mark: Successfully registered!`)
                                .setDescription(`
# Welcome to :european_castle: **Castle Fights**, ${message.author.username}/${name}!
> :book: **Guide:** Read the guide on how to play the game using the \`?guide\` command and **__make sure to read the \`?rules\`__!**!
> :bust_in_silhouette: **Profile:** View your profile and profiles of others using the \`?profile\` command!
> :earth_africa: **Join a game:** Join a game by looking at the public server list (\`?servers\` or \`?serverlist\`) and by typing \`?join <code>\` *(altertively enter a code sent to you by a friend or server member for a private game)*
> :crown: **Host a game:** Alternatively you can host your own game by typing \`?host\` and tweaking the match settings yourself
-# :european_castle: **Castle Fights** uses a global server list system instead of a simple duel command for you to be able to play against server members of other servers
> :gear: **Settings:** Change your settings by typing \`?settings\`
> :shopping_cart: **Shop:** After earning rewards, spend your coins in the \`?shop\`
**Enjoy your stay and have fun playing! :D** :tada:
                            `)
                                .setColor('GREEN')
                                .setFooter({ text: `?register | User ${name} (${message.author.username}/${message.author.id}) created account at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` })
                        ]
                    });
                } catch (error) {
                    console.error(`Failed to send ?register message at ${message.channel.id}: ${error}`);
                }
            }
        }
        if (message.content.startsWith('?profile')) {
            const ign = message.content.split('?profile ')[1]
            if (!ign) {
                if (db[message.author.id] == undefined) {
                    try {
                        message.reply({embeds: [noAccountEmbed]})
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                } else if (db[message.author.id].accountType == -1) {
                    try {
                        const user = db[message.author.id];
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`
## :bust_in_silhouette: Profile of ~~${names[user.name].display}~~
### ${icons[`lvl1`]} **Level 0** ${displayProgress(0)} (\`${user.xp}/${user.xp} XP\`)
**Using Skin:** :question_mark: \`None\` (0 ${icons.coin})

:no_entry_sign: You have deleted your account
                        `)
                                    .addField(`${icons.xp} **Total XP**`, `\`${user.xp} XP\``, true)
                                    .addField(`${icons.coin} **Coins**`, `\`?\``, true)
                                    .addField(`${icons.gem} **Gems**`, `\`?\``, true)
                                    .addField(':trophy: **Wins**', `\`${user.wins}\``, true)
                                    .addField(':video_game: **Games Played**', `\`?\``, true)
                                    .addField(':star: **Winrate**', `\`?%\``, true)
                                    .addField(`${textures.CROWN1} **Crowns Destroyed**`, `\`?\``, true)
                                    .addField(`:bust_in_silhouette: **Skins Owned**`, `\`?\``, true)
                                    .addField(`:moneybag: **Inventory Value**`, `\`?\``, true)
                                    .addField(':skull: **Kills**', `\`${user.kills}\``, true)
                                    .addField(':skull_crossbones: **Deaths**', `\`?\``, true)
                                    .addField(':crossed_swords: **KDR**', `\`?\``, true)
                                    .setFooter({ text: `?profile | @${user.name} (Player #${user.playerID})` })
                                    .setColor('RED')
                            ]
                        });
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                } else if (db[message.author.id].accountType == -2) {
                    try {
                        const user = db[message.author.id];
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`
## :bust_in_silhouette: Profile of ~~${names[user.name].display}~~
### ${icons[`lvl1`]} **Level 0** ${displayProgress(0)} (\`${user.xp}/${user.xp} XP\`)
**Using Skin:** :question_mark: \`None\` (0 ${icons.coin})

:no_entry_sign: You have been banned for:
\`\`\`
${user.disableReason}
\`\`\`
                        `)
                                    .addField(`${icons.xp} **Total XP**`, `\`${user.xp} XP\``, true)
                                    .addField(`${icons.coin} **Coins**`, `\`?\``, true)
                                    .addField(`${icons.gem} **Gems**`, `\`?\``, true)
                                    .addField(':trophy: **Wins**', `\`${user.wins}\``, true)
                                    .addField(':video_game: **Games Played**', `\`?\``, true)
                                    .addField(':star: **Winrate**', `\`?%\``, true)
                                    .addField(`${textures.CROWN1} **Crowns Destroyed**`, `\`?\``, true)
                                    .addField(`:bust_in_silhouette: **Skins Owned**`, `\`?\``, true)
                                    .addField(`:moneybag: **Inventory Value**`, `\`?\``, true)
                                    .addField(':skull: **Kills**', `\`${user.kills}\``, true)
                                    .addField(':skull_crossbones: **Deaths**', `\`?\``, true)
                                    .addField(':crossed_swords: **KDR**', `\`?\``, true)
                                    .setFooter({ text: `?profile | @${user.name} (Player #${user.playerID})` })
                                    .setColor('RED')
                            ]
                        })
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                } else {
                    try {
                        const user = db[message.author.id];
                        const level = getLevel(user.xp);
                        let invWorth = 0;
                        Object.keys(user.inventory).forEach(i => {
                            invWorth += user.inventory[i] * itemPrices[i];
                        });
                        let kdr = (user.kills / user.deaths).toFixed(2);
                        let winrate = ((user.wins / user.plays) * 100).toFixed(2);
                        let badgeDescriptions = `${displayBadgeText('mod', user.badges.mod)}${displayBadgeText('verified', user.badges.verified)}${displayBadgeText('challenger', user.badges.challenger)}${displayBadgeText('collector', user.badges.collector)}`;
                        if (badgeDescriptions == '') badgeDescriptions = 'This user has no badges.';
                        if (isNaN(kdr)) kdr = 0;
                        if (isNaN(winrate)) winrate = 0;
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`
## ${skins[user.skin]} Profile of ${names[user.name].display}${displayBadge('mod', user.badges.mod)}${displayBadge('verified', user.badges.verified)}${displayBadge('challenger', user.badges.challenger)}${displayBadge('collector', user.badges.collector)}
### ${icons[`lvl${user.levelIcon}`]} **Level ${level.level}** ${displayProgress(Math.floor((level.progress / level.required) * 100))} (\`${level.progress}/${level.required} XP\`)
**Using Skin:** ${skins[user.skin]} \`${skinNames[user.skin]}\` (${itemPrices[user.skin]} ${icons.coin})
## **Badges:**
${badgeDescriptions}
                        `)
                                    .addField(`${icons.xp} **Total XP**`, `\`${user.xp} XP\``, true)
                                    .addField(`${icons.coin} **Coins**`, `\`${user.coins}\``, true)
                                    .addField(`${icons.gem} **Gems**`, `\`${user.gems}\``, true)
                                    .addField(':trophy: **Wins**', `\`${user.wins}\``, true)
                                    .addField(':video_game: **Games Played**', `\`${user.games}\``, true)
                                    .addField(':star: **Winrate**', `\`${winrate}%\``, true)
                                    .addField(`${textures.CROWN1} **Crowns Destroyed**`, `\`${user.crownDestroys}\``, true)
                                    .addField(`:bust_in_silhouette: **Skins Owned**`, `\`0\``, true)
                                    .addField(`:moneybag: **Inventory Value**`, `\`${invWorth}\``, true)
                                    .addField(':skull: **Kills**', `\`${user.kills}\``, true)
                                    .addField(':skull_crossbones: **Deaths**', `\`${user.deaths}\``, true)
                                    .addField(':crossed_swords: **KDR**', `\`${kdr}\``, true)
                                    .setFooter({ text: `?profile | @${user.name} (Player #${user.playerID})` })
                                    .setColor(user.settings.embedcolor)
                            ]
                        })
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                }
            } else {
                if (names[ign] == undefined || db[names[ign].id] == undefined) {
                    // doesnt exit
                    try {
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setTitle(':no_entry_sign: This user doesn\'t exist!')
                                    .setDescription(`In order to view someone's profile, you must specify their In-Game Name, like so: \`?profile <ign>\`. You cannot use Discord IDs or usernames, you need the same name that they used upon registering to the bot`)
                                    .setColor('RED')
                                    .setFooter({ text: 'Not a valid user | ?profile' })
                            ]
                        });
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                } else if (db[names[ign].id].accountType == -1) {
                    // deleted account
                    try {
                        const user = db[names[ign].id];
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`
## :bust_in_silhouette: Profile of ~~${names[user.name].display}~~
### ${icons[`lvl1`]} **Level 0** ${displayProgress(0)} (\`${user.xp}/${user.xp} XP\`)
**Using Skin:** :question_mark: \`None\` (0 ${icons.coin})

:no_entry_sign: This user has deleted their account.
                        `)
                                    .addField(`${icons.xp} **Total XP**`, `\`${user.xp} XP\``, true)
                                    .addField(`${icons.coin} **Coins**`, `\`?\``, true)
                                    .addField(`${icons.gem} **Gems**`, `\`?\``, true)
                                    .addField(':trophy: **Wins**', `\`${user.wins}\``, true)
                                    .addField(':video_game: **Games Played**', `\`?\``, true)
                                    .addField(':star: **Winrate**', `\`?%\``, true)
                                    .addField(`${textures.CROWN1} **Crowns Destroyed**`, `\`?\``, true)
                                    .addField(`:bust_in_silhouette: **Skins Owned**`, `\`?\``, true)
                                    .addField(`:moneybag: **Inventory Value**`, `\`?\``, true)
                                    .addField(':skull: **Kills**', `\`${user.kills}\``, true)
                                    .addField(':skull_crossbones: **Deaths**', `\`?\``, true)
                                    .addField(':crossed_swords: **KDR**', `\`?\``, true)
                                    .setFooter({ text: `?profile | @${user.name} (Player #${user.playerID})` })
                                    .setColor('RED')
                            ]
                        })
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                } else if (db[names[ign].id].accountType == -2) {
                    try {
                        const user = db[names[ign].id];
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`
## :bust_in_silhouette: Profile of ~~${names[user.name].display}~~
### ${icons[`lvl1`]} **Level 0** ${displayProgress(0)} (\`${user.xp}/${user.xp} XP\`)
**Using Skin:** :question_mark: \`None\` (0 ${icons.coin})

:no_entry_sign: This user has been banned for \`${user.disableReason}\`
                        `)
                                    .addField(`${icons.xp} **Total XP**`, `\`${user.xp} XP\``, true)
                                    .addField(`${icons.coin} **Coins**`, `\`?\``, true)
                                    .addField(`${icons.gem} **Gems**`, `\`?\``, true)
                                    .addField(':trophy: **Wins**', `\`${user.wins}\``, true)
                                    .addField(':video_game: **Games Played**', `\`?\``, true)
                                    .addField(':star: **Winrate**', `\`?%\``, true)
                                    .addField(`${textures.CROWN1} **Crowns Destroyed**`, `\`?\``, true)
                                    .addField(`:bust_in_silhouette: **Skins Owned**`, `\`?\``, true)
                                    .addField(`:moneybag: **Inventory Value**`, `\`?\``, true)
                                    .addField(':skull: **Kills**', `\`${user.kills}\``, true)
                                    .addField(':skull_crossbones: **Deaths**', `\`?\``, true)
                                    .addField(':crossed_swords: **KDR**', `\`?\``, true)
                                    .setFooter({ text: `?profile | @${user.name} (Player #${user.playerID})` })
                                    .setColor('RED')
                            ]
                        })
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                } else {
                    try {
                        const user = db[names[ign].id];
                        const level = getLevel(user.xp);
                        let invWorth = 0;
                        Object.keys(user.inventory).forEach(i => {
                            invWorth += user.inventory[i] * itemPrices[i];
                        });
                        let kdr = (user.kills / user.deaths).toFixed(2);
                        let winrate = ((user.wins / user.plays) * 100).toFixed(2);
                        let badgeDescriptions = `${displayBadgeText('mod', user.badges.mod)}${displayBadgeText('verified', user.badges.verified)}${displayBadgeText('challenger', user.badges.challenger)}${displayBadgeText('collector', user.badges.collector)}`;
                        if (badgeDescriptions == '') badgeDescriptions = 'This user has no badges.';
                        if (isNaN(kdr)) kdr = 0;
                        if (isNaN(winrate)) winrate = 0;
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`
## ${skins[user.skin]} Profile of ${names[user.name].display}${displayBadge('mod', user.badges.mod)}${displayBadge('verified', user.badges.verified)}${displayBadge('challenger', user.badges.challenger)}${displayBadge('collector', user.badges.collector)}
### ${icons[`lvl${user.levelIcon}`]} **Level ${level.level}** ${displayProgress(Math.floor((level.progress / level.required) * 100))} (\`${level.progress}/${level.required} XP\`)
**Using Skin:** ${skins[user.skin]} \`${skinNames[user.skin]}\` (${itemPrices[user.skin]} ${icons.coin})
## **Badges:**
${badgeDescriptions}
                        `)
                                    .addField(`${icons.xp} **Total XP**`, `\`${user.xp} XP\``, true)
                                    .addField(`${icons.coin} **Coins**`, `\`${user.coins}\``, true)
                                    .addField(`${icons.gem} **Gems**`, `\`${user.gems}\``, true)
                                    .addField(':trophy: **Wins**', `\`${user.wins}\``, true)
                                    .addField(':video_game: **Games Played**', `\`${user.games}\``, true)
                                    .addField(':star: **Winrate**', `\`${winrate}%\``, true)
                                    .addField(`${textures.CROWN1} **Crowns Destroyed**`, `\`${user.crownDestroys}\``, true)
                                    .addField(`:bust_in_silhouette: **Skins Owned**`, `\`0\``, true)
                                    .addField(`:moneybag: **Inventory Value**`, `\`${invWorth}\``, true)
                                    .addField(':skull: **Kills**', `\`${user.kills}\``, true)
                                    .addField(':skull_crossbones: **Deaths**', `\`${user.deaths}\``, true)
                                    .addField(':crossed_swords: **KDR**', `\`${kdr}\``, true)
                                    .setFooter({ text: `?profile | @${user.name} (Player #${user.playerID})` })
                                    .setColor(user.settings.embedcolor)
                            ]
                        })
                    } catch (error) {
                        console.error(`Failed to send ?profile message at ${message.channel.id}: ${error}`);
                    }
                }
            }
        }
        if (message.content.startsWith('?lootboxes')) {
            if (db[message.author.id] == undefined) {
                try {
                    message.reply({ embeds: [noAccountEmbed] });
                } catch (error) {
                    console.error(`Failed to send ?lootboxes message at ${message.channel.id}: ${error}`);
                }
            } else if (db[message.author.id].accountType == -1) {
                try {
                    message.reply({ embeds: [deletedEmbed] });
                } catch (error) {
                    console.error(`Failed to send ?lootboxes message at ${message.channel.id}: ${error}`);
                }
            } else if (db[message.author.id].accountTpe == -2) {
                try {
                    message.reply({ embeds: [bannedEmbed] });
                } catch (error) {
                    console.error(`Failed to send ?lootboxes message at ${message.channel.id}: ${error}`);
                }
            } else {
                try {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(`${icons.goodbox} Lootbox Inventory`)
                                .setDescription(`
${icons.commonbox} **Common Lootbox** - \`${db[message.author.id].lootboxes.common}x\`
${icons.goodbox} **Good Lootbox** - \`${db[message.author.id].lootboxes.good}x\`
${icons.epicbox} **Epic Lootbox** - \`${db[message.author.id].lootboxes.epic}x\`
${icons.legendarybox} **Legendary Lootbox** - \`${db[message.author.id].lootboxes.legendary}x\`
${icons.mythicbox} **Mythic Lootbox** - \`${db[message.author.id].lootboxes.mythic}x\`
`)
                                .setColor('BLUE')
                                .setFooter({text: 'Lootbox Inventory | ?lootboxes'})
                        ]
                    })
                } catch (error) {
                    console.error(`Failed to send ?lootboxes message at ${message.channel.id}: ${error}`);
                }
            }
        }
        if (message.content.startsWith('?shop')) {
            try {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                            .setTitle(`:shopping_cart: Shopping Cart`)
                            .setDescription(`
* Use \`?unbox\` and \`?buy\` to either open lootboxes or buy them in the store accordingly with their IDs as the parameters
* Their IDs are specified right next to the item 

${icons.commonbox} **Common Lootbox** - 500 ${icons.coin} (\`commonbox\` / \`common\`)
> :green_square: Common - \`70%\`
> :blue_square: Good - \`20%\`
> :purple_square: Epic - \`10%\`
${icons.goodbox} **Good Lootbox** - 1,500 ${icons.coin} (\`goodbox\` / \`good\`)
> :green_square: Common - \`30%\`
> :blue_square: Good - \`50%\`
> :purple_square: Epic - \`15%\`
> :yellow_square: Legendary - \`5%\`
${icons.epicbox} **Epic Lootbox** - 3,000 ${icons.coin} (\`epicbox\` / \`epic\`)
> :green_square: Common - \`10%\`
> :blue_square: Good - \`15%\`
> :purple_square: Epic - \`65%\`
> :yellow_square: Legendary - \`10%\`
${icons.legendarybox} **Legendary Lootbox** - 6,000 ${icons.coin} (\`legendarybox\` / \`legendary\`)
> :green_square: Common - \`5%\`
> :blue_square: Good - \`5%\`
> :purple_square: Epic - \`10%\`
> :yellow_square: Legendary - \`60%\`
> :red_square: Mythic - \`20%\`
${icons.mythicbox} **Mythic Lootbox** - 50 ${icons.gem} (\`mythicbox\` / \`mythic\`)
> :blue_square: Good - \`5%\`
> :purple_square: Epic - \`5%\`
> :yellow_square: Legendary - \`10%\`
> :red_square: Mythic - \`80%\`
`)
                            .setColor('YELLOW')
                            .setFooter({ text: 'Lootbox Shop | ?shop' })
                    ]
                })
            } catch (error) {
                console.error(`Failed to send ?shop message at ${message.channel.id}: ${error}`);
            }
        }
        if (message.content.startsWith('?buy')) {
            const box = message.content.split('?buy ')[1];
            if (!box || !['common', 'good', 'epic', 'legendary', 'commonbox', 'goodbox', 'epicbox', 'legendarybox'].includes(box)) {
                try {
                    message.reply({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(':no_entry_sign: Invalid box specified!')
                                .setDescription(`In order to purchase a ${icons.goodbox} **Lootbox** using the \`?buy\` command, you need to specify a valid box ID that you want to buy, like so: \`?buy <lootbox>\`, you can check all the box IDs in the \`?shop\` menu`)
                                .setColor('RED')
                                .setFooter({text: 'Specify a box | ?buy'})
                        ]
                    });
                } catch (error) {
                    console.error(`Failed to send ?buy message at ${message.channel.id}: ${error}`);
                }
            } else {
                if (db[message.author.id] == undefined) {
                    try {
                        message.reply({ embeds: [noAccountEmbed] });
                    } catch (error) {
                        console.error(`Failed to send ?buy message at ${message.channel.id}: ${error}`);
                    }
                } else if (db[message.author.id].accountType == -1) {
                    try {
                        message.reply({ embeds: [deletedEmbed] });
                    } catch (error) {
                        console.error(`Failed to send ?buy message at ${message.channel.id}: ${error}`);
                    }
                } else if (db[message.author.id].accountType == -2) {
                    try {
                        message.reply({ embeds: [bannedEmbed] });
                    } catch (error) {
                        console.error(`Failed to send ?buy message at ${message.channel.id}: ${error}`);
                    }
                } else {
                    try {
                        const user = db[message.author.id];
                        if (user.coins < lootboxPrices[box]) return message.reply({
                            embeds: [ // meligoob -w-
                                new MessageEmbed()
                                    .setTitle(':no_entry_sign: Not enough coins!')
                                    .setDescription(`You do not have enough coins to purchase ${lootboxEmojis[box]} **${lootboxNames[box]}**! You have \`${user.coins}\` ${icons.coin}, and you need \`${lootboxPrices[box]}\` to purchase this lootbox!`)
                                    .setColor('RED')
                                    .setFooter({ text: 'Not enough coins | ?buy' })
                            ]
                        });
                        db[message.author.id].coins -= lootboxPrices[box];
                        db[message.author.id].lootboxes[box.replace('box', '')] += 1;
                        message.reply({
                            embeds: [
                                new MessageEmbed()
                                    .setTitle(`${lootboxEmojis[box]} Bought ${lootboxNames[box]}!`)
.setDescription(`You have purchased a ${lootboxEmojis[box]} **${lootboxNames[box]}** for ${lootboxPrices[box]} ${icons.coin}! You now have ${db[message.author.id].coins} ${icons.coin} left`)
                                    .setColor('GREEN')
                                    .setFooter({text: 'Bought a lootbox | ?buy'})
                            ]
                        })
                    } catch (error) {
                        console.error(`Failed to process ?buy at ${message.channel.id}: ${error}`);
                    }
                }
            } 
        }
    }); 

cl.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return null;
});


cl.login(process.env.TOKEN);