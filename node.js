module.exports = class Node {
    constructor(value, east = null, west = null, north = null, south = null) {
        this.value = value;
        this.east = east;
        this.west = west;
        this.north = north;
        this.south = south;
        this.sink = null;
    }

    addEast(value) {
        this.east = value;
    }

    addWest(value) {
        this.west = value;
    }

    addNorth(value) {
        this.north = value;
    }

    addSouth(value) {
        this.south = value;
    }

    addSink(value) {
        this.sink = value;
    }

    getValue() {
        return this.value
    }

    getSink() {
        return this.sink
    }
}