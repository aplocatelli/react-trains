import Graph from "./graph";

const stringTest1 = "AB11, BC16, CD14, DC2";
const graphTest1 = new Graph(stringTest1);
const stringTest2 = "AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7";
const graphTest2 = new Graph(stringTest2);

// Constructor

test('Empty graph definition: ""', () => {
	const graph = new Graph("");
	const adjacencyMatrix = graph.getAdjacencyMatrix();

	expect(adjacencyMatrix.size).toBe(0);
});

test('Invalid graph definition: "AN5, CF8"', () => {
	const graph = new Graph("AN5, CF8");
	const adjacencyMatrix = graph.getAdjacencyMatrix();

	expect(adjacencyMatrix.size).toBe(0);
});

test('Invalid graph definition: "this is a graph"', () => {
	const graph = new Graph("this is a graph");
	const adjacencyMatrix = graph.getAdjacencyMatrix();

	expect(adjacencyMatrix.size).toBe(0);
});

test('Valid graph definition: "CC29"', () => {
	const graph = new Graph("CC29");
	const adjacencyMatrix = graph.getAdjacencyMatrix();

	expect(adjacencyMatrix.size).toBe(1);
});

test('Valid graph definition: "AB11, BC16, CD14, DC2"', () => {
	const adjacencyMatrix = graphTest1.getAdjacencyMatrix();

	expect(adjacencyMatrix.size).toBe(4);
});

// getRouteDistance

test(`getRouteDistance empty string path; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRouteDistance("")).toBe("0");
});

test(`getRouteDistance invalid string path: "abcdefg"; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRouteDistance("abcdefg")).toBe("NO SUCH ROUTE");
});

test(`getRouteDistance path: "ABC"; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRouteDistance("ABC")).toBe("27");
});

test(`getRouteDistance path: "AD"; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRouteDistance("AD")).toBe("NO SUCH ROUTE");
});

test(`getRouteDistance path: "BCD"; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRouteDistance("BCD")).toBe("30");
});

test(`getRouteDistance path: "ABC"; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRouteDistance("ABC")).toBe("9");
});

test(`getRouteDistance path: "AD"; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRouteDistance("AD")).toBe("5");
});

test(`getRouteDistance path: "BCD"; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRouteDistance("BCD")).toBe("12");
});

// getShortestDistance

test(`getShortestDistance empty start and empty end; graph: ${stringTest2}`, () => {
	expect(graphTest2.getShortestDistance("", "")).toBe("NO SUCH ROUTE");
});

test(`getShortestDistance invalid start and end; graph: ${stringTest2}`, () => {
	expect(graphTest2.getShortestDistance("testing", "isitok")).toBe(
		"NO SUCH ROUTE"
	);
});

test(`getShortestDistance "A" to "C"; graph: ${stringTest1}`, () => {
	expect(graphTest1.getShortestDistance("A", "C")).toBe("27");
});

test(`getShortestDistance "B" to "B"; graph: ${stringTest1}`, () => {
	expect(graphTest1.getShortestDistance("B", "B")).toBe("NO SUCH ROUTE");
});

test(`getShortestDistance "A" to "C"; graph: ${stringTest2}`, () => {
	expect(graphTest2.getShortestDistance("A", "C")).toBe("9");
});

test(`getShortestDistance "B" to "B"; graph: ${stringTest2}`, () => {
	expect(graphTest2.getShortestDistance("B", "B")).toBe("9");
});

// getRoutesExactStops

test(`getRoutesExactStops empty start and end with 4 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("", "", 4)).toBe("0");
});

test(`getRoutesExactStops invalid start and end with 4 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("testing", "isitok", 4)).toBe("0");
});

test(`getRoutesExactStops "A" to "C" with zero stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("A", "C", 0)).toBe("0");
});

test(`getRoutesExactStops "A" to "C" with negative stops (-4); graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("A", "C", -4)).toBe("0");
});

test(`getRoutesExactStops "A" to "C" with infinite stops; graph: ${stringTest2}`, () => {
	expect(
		graphTest2.getRoutesExactStops("A", "C", Number.POSITIVE_INFINITY)
	).toBe("0");
});

test(`getRoutesExactStops "A" to "C" with NaN stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("A", "C", NaN)).toBe("0");
});

test(`getRoutesExactStops "A" to "C" with 4 stops; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRoutesExactStops("A", "C", 4)).toBe("1");
});

test(`getRoutesExactStops "B" to "D" with 2 stops; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRoutesExactStops("B", "D", 2)).toBe("1");
});

test(`getRoutesExactStops "A" to "C" with 4 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("A", "C", 4)).toBe("3");
});

test(`getRoutesExactStops "B" to "D" with 2 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesExactStops("B", "D", 2)).toBe("1");
});

// getRoutesMaxStops

test(`getRoutesMaxStops empty start and end with max 4 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("", "", 4)).toBe("0");
});

test(`getRoutesMaxStops invalid start and end with max 4 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("testing", "isitok", 4)).toBe("0");
});

test(`getRoutesMaxStops "A" to "C" with zero stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("A", "C", 0)).toBe("0");
});

test(`getRoutesMaxStops "A" to "C" with max negative (-4) stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("A", "C", -4)).toBe("0");
});

test(`getRoutesMaxStops "A" to "C" with max infinite stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("A", "C", Number.POSITIVE_INFINITY)).toBe(
		"0"
	);
});

test(`getRoutesMaxStops "A" to "C" with NaN stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("A", "C", NaN)).toBe("0");
});

test(`getRoutesMaxStops "A" to "C" with max 4 stops; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRoutesMaxStops("A", "C", 4)).toBe("2");
});

test(`getRoutesMaxStops "A" to "C" with max 4 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("A", "C", 4)).toBe("6");
});

test(`getRoutesMaxStops "C" to "C" with max 3 stops; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRoutesMaxStops("C", "C", 3)).toBe("1");
});

test(`getRoutesMaxStops "C" to "C" with max 3 stops; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxStops("C", "C", 3)).toBe("2");
});

// getRoutesMaxDistance

test(`getRoutesMaxDistance empty start and end with max distance 30; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxDistance("", "", 30)).toBe("0");
});

test(`getRoutesMaxDistance invalid start and end with max distance 30; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxDistance("testing", "isitok", 30)).toBe("0");
});

test(`getRoutesMaxDistance "C" to "C" with max distance zero; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxDistance("C", "C", 0)).toBe("0");
});

test(`getRoutesMaxDistance "C" to "C" with max distance negative (-4); graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxDistance("C", "C", -4)).toBe("0");
});

test(`getRoutesMaxDistance "C" to "C" with max distance infinite; graph: ${stringTest2}`, () => {
	expect(
		graphTest2.getRoutesMaxDistance("C", "C", Number.POSITIVE_INFINITY)
	).toBe("0");
});

test(`getRoutesMaxDistance "C" to "C" with max distance NaN; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxDistance("C", "C", NaN)).toBe("0");
});

test(`getRoutesMaxDistance "C" to "C" with max distance 30; graph: ${stringTest1}`, () => {
	expect(graphTest1.getRoutesMaxDistance("C", "C", 30)).toBe("1");
});

test(`getRoutesMaxDistance "C" to "C" with max distance 30; graph: ${stringTest2}`, () => {
	expect(graphTest2.getRoutesMaxDistance("C", "C", 30)).toBe("7");
});
