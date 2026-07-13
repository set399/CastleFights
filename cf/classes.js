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
    set() {

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