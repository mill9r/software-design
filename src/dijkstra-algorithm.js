function shortestDistanceNode(costs, visited) {
    let lowestCost = Number.MAX_SAFE_INTEGER;
    let lowestCodeNode = null;

    for (let node in costs) { // iterate over all nodes
        let cost = costs[node];
        if (cost < lowestCost && !~visited.indexOf(node)) {
            lowestCost = cost;
            lowestCodeNode = node;
        }
    }
    return lowestCodeNode;
}

function createGraphHashTable(graph, startNode) {
    let parents = {endNode: null};
    for (let child in graph[startNode]) {
        parents[child] = startNode;
    }

    return parents;
}

function getShortestPastOutput(parents, endNode) {
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
        shortestPath.push(parent);
        parent = parents[parent];
    }
    shortestPath.reverse();

    return shortestPath;
}

let findShortestPath = (graph, startNode, endNode) => {
    let costs = {};
    let visited = [];

    costs[endNode] = Number.MAX_SAFE_INTEGER;
    costs = Object.assign(costs, graph[startNode]);

    let parents = createGraphHashTable(graph, startNode);
    let node = shortestDistanceNode(costs, visited);

    while (node) {
        let cost = costs[node];
        let neighbors = graph[node];

        for (let child in neighbors) {
            if (String(child) !== String(startNode)) {
                let newCost = cost + neighbors[child];
                if (!costs[child] || costs[child] > newCost) {
                    costs[child] = newCost;
                    parents[child] = node;
                }
            }
        }
        visited.push(node);
        node = shortestDistanceNode(costs, visited);
    }

    return {
        distance: costs[endNode],
        path: getShortestPastOutput(parents, endNode),
    };
};


// EXAMPLE of usage

const graph = {
    start: { A: 5, B: 2 },
    A: { start: 1, C: 4, D: 2 },
    B: { A: 8, D: 7 },
    C: { D: 6, finish: 3 },
    D: { finish: 1 },
    finish: {},
};

console.log(findShortestPath(graph, "start", "end"));
