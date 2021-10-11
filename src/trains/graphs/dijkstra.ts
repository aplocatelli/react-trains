type AdjacencyMatrix = Map<string, Map<string, number>>;
type RoutesTable = Map<string, number>;

class Dijkstra {
	private adjacencyMatrix: AdjacencyMatrix;
	private start: string;
	private routesTable: RoutesTable;

	/**
	 * Creates a Dijkstra class instance. Creates of the Shortest Routes Table and starts the traversion
	 * of the graph
	 * @param adjacencyMatrix the Adjacency Matrix derived from the graph's vertices, edges and weights
	 * @param start the root node from which the graph will be traversed
	 */
	constructor(adjacencyMatrix: AdjacencyMatrix, start: string) {
		this.adjacencyMatrix = adjacencyMatrix;
		this.start = start;
		this.routesTable = new Map();

		if (adjacencyMatrix.size && start && start.length === 1) {
			this.routesTable = this.createTable();
			this.traverseGraph(new Set());
		}
	}

	/**
	 * Getter for Routes Table
	 * @returns the Routes Table
	 */
	getRoutesTable = () => {
		return this.routesTable;
	};

	/**
	 * Creates the Shortest Routes Table, with initial value infinity for all vertices
	 * @returns the newly created Shortest Routes Table
	 */
	private createTable = () => {
		const routesTable = new Map();

		this.adjacencyMatrix.forEach((value, node) => {
			routesTable.set(node, Number.POSITIVE_INFINITY);
		});

		return routesTable;
	};

	/**
	 * Using Dijkstra's algorithm, the graph will be traversed recursively and the Shortest Routes Table will be updated with all
	 * shortest routes from the start node
	 * @param visited the list of already visited nodes
	 */
	private traverseGraph = (visited: Set<string>) => {
		const currentNode = this.findCurrentNode(visited);

		if (currentNode) {
			const adjacentNodes = this.adjacencyMatrix.get(currentNode);
			let currentDistance = 0;
			if (currentNode !== this.start) {
				currentDistance = this.routesTable.get(currentNode)!;
			}

			if (adjacentNodes) {
				adjacentNodes.forEach((distance, adjacentNode) => {
					const tempDistance = this.routesTable.get(adjacentNode);
					if (
						tempDistance &&
						tempDistance > distance + currentDistance &&
						(!visited.has(adjacentNode) || adjacentNode === this.start)
					) {
						this.routesTable.set(adjacentNode, distance + currentDistance);
					}
				});
			}

			visited.add(currentNode);
			this.traverseGraph(visited);
		}
	};

	/**
	 * Find the current node on the Shortest Routes Table which has the lowest value and was not yet visited
	 * @param visited the list of already visited nodes
	 * @returns the node with the lowest value
	 */
	private findCurrentNode = (visited: Set<string>) => {
		let currentNode;
		let tempShortestRoute = Number.POSITIVE_INFINITY;

		if (visited.size === 0) {
			currentNode = this.start;
		} else {
			this.routesTable.forEach((value, node) => {
				if (!visited.has(node) && value < tempShortestRoute) {
					tempShortestRoute = value;
					currentNode = node;
				}
			});
		}

		return currentNode;
	};

	/**
	 * Finds the shortest route for a given end node using Dijkstra's algorithm
	 * @param end the final node of the route
	 * @returns the shortest distance found. If the route does not exist, returns null
	 */
	getShortestRoute = (end: string): number | null => {
		const routeDistance = this.routesTable.get(end);

		if (routeDistance) {
			if (routeDistance === Number.POSITIVE_INFINITY) {
				return null;
			} else {
				return routeDistance;
			}
		}

		return null;
	};
}

export default Dijkstra;
