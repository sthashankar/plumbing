const fs = require('fs');
const Node= require('./node.js')
const dfs = require('./dfs.js');

function getSinks(filePath) {

    let startNode;
    let inputs = {};
    /*
    * split line using \n for mac and unix and use \r\n for windows user
    * */
    fs.readFileSync(filePath, 'utf8').split('\n').map((line) => {
        const [sign, xaxis, yaxis] = line.split(' ');
        const x = parseInt(xaxis)
        const y = parseInt(yaxis)

        const grid = new Node(xaxis + yaxis)

        const east = new Node((x + 1).toString() + yaxis)
        const west = new Node((x - 1).toString() + yaxis)
        const north = new Node(xaxis + (y + 1).toString())
        const south = new Node(xaxis + (y - 1).toString())

        switch (sign) {
            case '═':
                grid.addEast(east)
                grid.addWest(west)
                break

            case '║':
                grid.addNorth(north)
                grid.addSouth(south)
                break
            case '╔':
                grid.addEast(east)
                grid.addSouth(south)
                break
            case '╗':
                grid.addWest(west)
                grid.addSouth(south)
                break
            case '╚':
                grid.addEast(east)
                grid.addNorth(north)
                break
            case '╝':
                grid.addNorth(north)
                grid.addWest(west)
                break
            case '╠':
                grid.addEast(east)
                grid.addNorth(north)
                grid.addSouth(south)
                break
            case '╣':
                grid.addWest(west)
                grid.addNorth(north)
                grid.addSouth(south)
                break
            case '╦':
                grid.addEast(east)
                grid.addWest(west)
                grid.addSouth(south)
                break
            case '╩':
                grid.addEast(east)
                grid.addWest(west)
                grid.addNorth(north)
                break
            case '*':
                grid.addEast(east)
                grid.addWest(west)
                grid.addNorth(north)
                grid.addSouth(south)
                startNode = grid;
                return
            default:
                grid.addEast(east)
                grid.addWest(west)
                grid.addNorth(north)
                grid.addSouth(south)
                grid.addSink(sign)
                break
        }

        inputs[xaxis + yaxis] = grid;
    });
    const result = dfs(startNode, inputs)
    return result.sort().join('').toUpperCase()
}
console.log("file name:",process.argv[2])
// const output=getSinks('./sample1.txt');
const output=getSinks(process.argv[2]);
console.log(output)