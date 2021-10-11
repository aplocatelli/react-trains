const MainIntro = () => {
	return (
		<>
			<p>
				You have been tasked to help the Kiwiland railroad provide information
				about its routes to its customers, in particular: route distance, number
				of unique routes between two towns, and the shortest route between two
				towns. In Kiwiland, all train routes are one-way, and round trip routes
				may or may not exist. For example, just because there is a route from
				town A to B does not mean there is necessarily a route from B to A. In
				fact, if both routes happen to exist, each route should be considered
				unique (and may even have different distances)!
			</p>
			<p>
				Use a directed graph to represent the train routes. A node represents a
				town and an edge represents a route between two towns. The edge weight
				represents route distance. No route appears more than once in the input,
				and for any given route, the starting and ending town will never be the
				same town (e.g., there are no routes from A to A).
			</p>
		</>
	);
};

export default MainIntro;
