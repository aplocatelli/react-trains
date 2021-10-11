type AdjacencyMatrix = Map<string, Map<string, number>>;

class DFS {
	private adjacencyMatrix: AdjacencyMatrix;
	private start: string;
	private end: string;
	private routes: string[];

	/**
	 * Creates an instance of the DFS class
	 * @param adjacencyMatrix the Adjacency Matrix derived from the graph's vertices, edges and weights
	 * @param start the start vertex
	 * @param end the end vertex
	 */
	constructor(adjacencyMatrix: AdjacencyMatrix, start: string, end: string) {
		this.adjacencyMatrix = adjacencyMatrix;
		this.start = start;
		this.end = end;
		this.routes = [];
	}

	/**
	 * Getter for routes
	 * @returns routes
	 */
	getRoutes = () => {
		return this.routes;
	};

	/**
	 * Calculates the amount of all possible routes with maximum distance less than maxDistance, using Depth First Search algorithm
	 * @param maxDistance the maximum distance of the route
	 * @returns the amount of possible routes which satisfies the maxDistance criteria
	 */
	getRoutesMaxDistance = (maxDistance: number) => {
		this.routes = [];

		if (
			maxDistance > 0 &&
			!isNaN(maxDistance) &&
			maxDistance < Number.POSITIVE_INFINITY
		) {
			this.depthFirstSearch(
				[this.start],
				maxDistance,
				0,
				Number.POSITIVE_INFINITY,
				0,
				false
			);
		}

		return this.routes.length.toString();
	};

	/**
	 * Calculates the amount of all possible routes with maximum stops less than or equal maxStops, using Depth First Search algorithm
	 * @param maxStops the maximum stops of the route
	 * @returns the amount of possible routes which satisfies the maxStops criteria
	 */
	getRoutesMaxStops = (maxStops: number) => {
		this.routes = [];

		if (
			maxStops > 0 &&
			!isNaN(maxStops) &&
			maxStops < Number.POSITIVE_INFINITY
		) {
			this.depthFirstSearch(
				[this.start],
				Number.POSITIVE_INFINITY,
				0,
				maxStops,
				0,
				false
			);
		}

		return this.routes.length.toString();
	};

	/**
	 * Calculates the amount of all possible routes with exact stops equal exactStops, using Depth First Search algorithm
	 * @param exactStops the exact stops of the route
	 * @returns the amount of possible routes which satisfies the exactStops criteria
	 */
	getRoutesExactStops = (exactStops: number) => {
		this.routes = [];

		if (
			exactStops > 0 &&
			!isNaN(exactStops) &&
			exactStops < Number.POSITIVE_INFINITY
		) {
			this.depthFirstSearch(
				[this.start],
				Number.POSITIVE_INFINITY,
				0,
				exactStops,
				0,
				true
			);
		}

		return this.routes.length.toString();
	};

	/**
	 * Traverse the graph using Depth First Search algorithm recursively. The stop condition should be either maxDistance or maxStops, otherwise it will run infinitely
	 * @param stack the stack of nodes which will be updated at each iteration
	 * @param maxDistance the maximum distance that can be traveled
	 * @param totalDistance the total distance for each iteration
	 * @param maxStops the maximum stops or the exact amount of stops
	 * @param totalStops the total of stops for each iteration
	 * @param isExactStops if should check for exact stops or not
	 */
	private depthFirstSearch = (
		stack: string[],
		maxDistance: number,
		totalDistance: number,
		maxStops: number,
		totalStops: number,
		isExactStops: boolean
	) => {
		const currentNode = stack[0];

		if (currentNode === this.end && totalStops > 0) {
			if (!isExactStops || (isExactStops && totalStops === maxStops)) {
				this.routes.push(stack.reverse().toString().replaceAll(",", ""));
			}
		}

		const allAdjacent = this.adjacencyMatrix.get(currentNode);
		if (allAdjacent) {
			allAdjacent.forEach((distance, node) => {
				const localStack = [node, ...stack];
				const localTotalDistance = totalDistance + distance;
				const localTotalStops = totalStops + 1;

				if (localTotalDistance < maxDistance && localTotalStops <= maxStops) {
					this.depthFirstSearch(
						localStack,
						maxDistance,
						localTotalDistance,
						maxStops,
						localTotalStops,
						isExactStops
					);
				}
			});
		}
	};
}

export default DFS;
