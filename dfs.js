function dfs(node, list) {
    const stack = [node]
    const sink = []

    while (stack.length) {
        const current = stack.pop()

        if (current.getSink()) {
            sink.push(current.getSink())
        }

        if (current.west) {
            let value = current.west.getValue()
            let listNode = list[value]
            delete current.west
            if (listNode) {
                current.addWest(listNode)
                stack.push(listNode)
                delete list[value]
            }

        }

        if (current.east) {
            let value = current.east.getValue()
            let listNode = list[value]
            delete current.east
            if (listNode) {
                current.addEast(listNode)
                stack.push(listNode)
                delete list[value]
            }


        }

        if (current.south) {
            let value = current.south.getValue()
            let listNode = list[value]
            delete current.south
            if (listNode) {
                current.addSouth(listNode)
                stack.push(listNode)
                delete list[value]
            }
        }

        if (current.north) {
            let value = current.north.getValue()
            let listNode = list[value]
            delete current.north
            if (listNode) {
                current.addNorth(listNode)
                stack.push(listNode)
                delete list[value]
            }
        }
    }
    return sink;
}

module.exports = dfs;