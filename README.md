# plumbing
### Task:
We have a pipe system represented by a 2D rectangular grid of cells. There are three different types of objects located in cells in the grid, with each cell having either 0 objects or 1 object:
- Source: There is 1 source in the system. It is represented by the asterisk character '*'.
- Sinks: There are an arbitrary number of sinks in the system. They are each represented by a different uppercase letter ('A', 'B', 'C', etc.).
- Pipes: There are 10 different shapes of pipes, represented by the following characters: '═', '║', '╔', '╗', '╚', '╝', '╠', '╣', '╦', '╩'.
Note that each pipe has openings on 2 or 3 sides of its cell.

Two adjacent cells are connected if both have a pipe opening at their shared edge.

For example, the two cells '╩ ╦' are connected to each other through their shared edge. The two cells '╩ ╔' are not connected to each other through their shared edge, but they could possibly still be connected via a path through other cells around them.
Treat the source and sinks as having pipe openings at all of their edges. For example, the two cells 'A ╦' are connected through their shared edge, but the two cells 'B ╔' are not directly connected through their shared edge.
A sink may be connected to the source through another sink. 

For example, in the simple pipe system '* ╦ X Y ═ Z', all three sinks are connected to the source.

Your objective is to write a function that determines which sinks are connected to the source in a given pipe system.

### Test
1. Run `node main.js {filepath} ` in terminal
    ```
    node main.js ./sample.txt
    ```
2. Outcome for sample1.txt = AC
3. Outcome for sample2.txt = ACDEGHIJKLMNOPQSTUXYZ