import Graph from "./graphs/graph";

class Trains extends Graph {
	private results: string[];

	/**
	 * Creates an instance and calculate the results for all the 10 required outputs. If the input is invalid,
	 * does not calculate anything and sets the results to an empty array
	 * @param input some valid string representing the graph with vertices, edges and weights
	 */
	constructor(input: string) {
		super(input);

		this.results = this.calculateOutputs();
	}

	/**
	 * Getter for results
	 * @returns the results calculated for all 10 required outputs
	 */
	getResults = () => {
		return this.results;
	};

	/**
	 * Calculates all 10 required outputs using Dijkstra and Depth First Search algorithms
	 * @returns an array with all 10 results if the Graph could be correctly created; otherwise returns an empty array
	 */
	private calculateOutputs = () => {
		const results: string[] = [];

		if (this.getAdjacencyMatrix().size > 0) {
			// Output #1: The distance of the route A-B-C
			results.push(this.getRouteDistance("ABC"));

			// Output #2: The distance of the route A-D
			results.push(this.getRouteDistance("AD"));

			// Output #3: The distance of the route A-D-C
			results.push(this.getRouteDistance("ADC"));

			// Output #4: The distance of the route A-E-B-C-D
			results.push(this.getRouteDistance("AEBCD"));

			// Output #5: The distance of the route A-E-D
			results.push(this.getRouteDistance("AED"));

			// Output #6: The number of trips starting at C and ending at C with a maximum of 3 stops
			results.push(this.getRoutesMaxStops("C", "C", 3));

			// Output #7: The number of trips starting at A and ending at C with exactly 4 stops
			results.push(this.getRoutesExactStops("A", "C", 4));

			// Output #8: The length of the shortest route (in terms of distance to travel) from A to C
			results.push(this.getShortestDistance("A", "C"));

			// Output #9: The length of the shortest route (in terms of distance to travel) from B to B
			results.push(this.getShortestDistance("B", "B"));

			// Output #10: The number of different routes from C to C with a distance of less than 30
			results.push(this.getRoutesMaxDistance("C", "C", 30));
		}

		return results;
	};
}

export default Trains;
