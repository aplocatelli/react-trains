const MainDescription = () => {
	return (
		<div>
			<h2>Input</h2>
			<p>
				For the test input, the towns are named using the first few letters of
				the alphabet from A to E. A route between two towns A to B with a
				distance of 5 is represented as AB5.
			</p>

			<h2>Output</h2>
			<p>Given the test inputs, calculate the following: </p>
			<ol>
				<li>
					<span>The distance of the route A-B-C.</span>
				</li>
				<li>
					<span>The distance of the route A-D.</span>
				</li>
				<li>
					<span>The distance of the route A-D-C.</span>
				</li>
				<li>
					<span>The distance of the route A-E-B-C-D.</span>
				</li>
				<li>
					<span>The distance of the route A-E-D.</span>
				</li>
				<li>
					<span>
						The number of trips starting at C and ending at C with a maximum of
						3 stops. In the test input, there are two such trips: C-D-C (2
						stops). and C-E-B-C (3 stops).
					</span>
				</li>
				<li>
					<span>
						The number of trips starting at A and ending at C with exactly 4
						stops. In the test input, there are three such trips: A to C (via
						B,C,D); A to C (via D,C,D); and A to C (via D,E,B).
					</span>
				</li>
				<li>
					<span>
						The length of the shortest route (in terms of distance to travel)
						from A to C.
					</span>
				</li>
				<li>
					<span>
						The length of the shortest route (in terms of distance to travel)
						from B to B.
					</span>
				</li>
				<li>
					<span>
						The number of different routes from C to C with a distance of less
						than 30. In the test input, the trips are: CDC, CEBC, CEBCDC,
						CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC.
					</span>
				</li>
			</ol>
			<p>
				For items 1 through 5, if no such route exists, output ‘NO SUCH ROUTE’.
				Otherwise, follow the route as given; do not make any extra stops!
			</p>
		</div>
	);
};

export default MainDescription;
