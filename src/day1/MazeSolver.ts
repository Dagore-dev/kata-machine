const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Off the maze (it is a square).
    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }

    // On a wall.
    if (maze[current.y][current.x] === wall) {
        return false;
    }

    // On a seen slot.
    if (seen[current.y][current.x]) {
        return false;
    }

    // On the end.
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }

    // Pre-recursion step.
    seen[current.y][current.x] = true;
    path.push(current);

    // Recursion step.
    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];
        if (
            walk(
                maze,
                wall,
                { x: current.x + x, y: current.y + y },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // Post-recursion step.
    path.pop();

    return false;
}
