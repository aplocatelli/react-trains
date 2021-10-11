import Dijkstra from "./dijkstra";
import DFS from "./depth-first-search";

type AdjacencyMatrix = Map<string, Map<string, number>>;

class Graph {
	private adjacencyMatrix: AdjacencyMatrix;

	/**
	 * Constructor function of the class Graph. Creates the graph and add all the vertices, edges and weights
	 * to it following a pattern of a given string
	 * @param input description of the graph following a pattern with letters from A to E and numbers,
	 * separated by a comma and then a space. Ex: AB5, CD7, CE1
	 */
	constructor(input: string) {
		this.adjacencyMatrix = new Map();

		const pattern = /^(([A-Ea-e]{2}[0-9]+(, ){1})*)([A-Ea-e]{2}[0-9]+)$/i;
		if (pattern.test(input)) {
			const inputArr = input.toUpperCase().replaceAll(" ", "").split(",");

			if (inputArr.length > 0) {
				inputArr.forEach(item => {
					this.addVertex(item);
				});
			}
		}
	}

	/**
	 * Getter for Adjancency Matrix
	 * @returns the Adjacency Matrix
	 */
	getAdjacencyMatrix = () => {
		return this.adjacencyMatrix;
	};

	/**
	 * Creates the Adjacency Matrix adding a vertex and its relation with another vertex along with the weight of
	 * the corresponding edge
	 * @param item a string describing an item of the graph, following a given pattern: letters
	 * from A to E to represent the vertices and a number to represent the weight of the edge. Ex: AB5
	 */
	private addVertex = (item: string) => {
		const start = item.charAt(0);
		const end = item.charAt(1);
		const distance = item.slice(2);

		if (this.adjacencyMatrix.has(start)) {
			const existingVertex = this.adjacencyMatrix.get(start);
			if (existingVertex) {
				existingVertex.set(end, +distance);
			}
		} else {
			const newVertex = new Map();
			newVertex.set(end, +distance);
			this.adjacencyMatrix.set(start, newVertex);
		}
	};

	/**
	 * Calculates de distance of a route following a given path
	 * @param path a string describing the exact path that should be followed
	 * @returns if the route exists, return the total distance; returns "NO SUCH ROUTE" otherwise
	 */
	getRouteDistance = (path: string) => {
		const vertices = path.split("");
		let totalDistance = 0;

		for (let i = 0; i < vertices.length - 1; i++) {
			const start = vertices[i];
			const end = vertices[i + 1];

			const distance = this.getDistance(start, end);
			if (distance) {
				totalDistance += distance;
			} else {
				return "NO SUCH ROUTE";
			}
		}

		return totalDistance.toString();
	};

	/**
	 * Calculates the simple distance between two nodes if they're connected
	 * @param start the initial node
	 * @param end the final node
	 * @returns returns the distance if there is such a connection, and null otherwise
	 */
	private getDistance = (start: string, end: string): number | null => {
		const tempStart = this.adjacencyMatrix.get(start);

		if (tempStart) {
			const tempEnd = tempStart.get(end);
			if (tempEnd) {
				return tempEnd;
			}
		}

		return null;
	};

	/**
	 * Calculates de shortest distance between two nodes using Dijkstra's algorithm
	 * @param start the initial node from where to traverse the graph
	 * @param end the final node of the route
	 * @returns if there is such a route, returns the distance, otherwise returns "NO SUCH ROUTE"
	 */
	getShortestDistance = (start: string, end: string) => {
		const shortestRoutesTable = new Dijkstra(this.adjacencyMatrix, start);
		const shortestRoute = shortestRoutesTable.getShortestRoute(end);

		if (shortestRoute) {
			return shortestRoute.toString();
		}

		return "NO SUCH ROUTE";
	};

	/**
	 * Calculates the total amount of routes existing between two nodes which satifies the exactStops criteria.
	 * It uses Depth First Search algorithm
	 * @param start the starting node of the route
	 * @param end the ending node of the route
	 * @param exactStops the exact amount of stops a route can do
	 * @returns the total amount of routes
	 */
	getRoutesExactStops = (start: string, end: string, exactStops: number) => {
		const allRoutes = new DFS(this.adjacencyMatrix, start, end);
		return allRoutes.getRoutesExactStops(exactStops);
	};

	/**
	 * Calculates the total amount of routes existing between two nodes which satifies the maxStops criteria.
	 * It uses Depth First Search algorithm
	 * @param start the starting node of the route
	 * @param end the ending node of the route
	 * @param maxStops the maximum amount of stops a route can do
	 * @returns the total amount of routes
	 */
	getRoutesMaxStops = (start: string, end: string, maxStops: number) => {
		const allRoutes = new DFS(this.adjacencyMatrix, start, end);
		return allRoutes.getRoutesMaxStops(maxStops);
	};

	/**
	 * Calculates the total amount of routes existing between two nodes which satifies the maxDistance criteria.
	 * It uses Depth First Search algorithm
	 * @param start the starting node of the route
	 * @param end the ending node of the route
	 * @param maxDistance the maximum distance a route can have in total
	 * @returns the total amount of routes
	 */
	getRoutesMaxDistance = (start: string, end: string, maxDistance: number) => {
		const allRoutes = new DFS(this.adjacencyMatrix, start, end);
		return allRoutes.getRoutesMaxDistance(maxDistance);
	};
}

export default Graph;
