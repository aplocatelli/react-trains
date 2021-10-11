import DFS from "./depth-first-search";
import Trains from "../trains";

const trains = new Trains("AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7");
const adjacencyMatrix = trains.getAdjacencyMatrix();

const dfsTest1 = new DFS(adjacencyMatrix, "C", "C");
const dfsTest2 = new DFS(adjacencyMatrix, "A", "C");

// Constructor

test("Valid Adjacency Matrix but empty start and end", () => {
	const dfs2 = new DFS(adjacencyMatrix, "", "");
	expect(dfs2.getRoutes()).toEqual([]);
	expect(dfs2.getRoutesMaxDistance(30)).toBe("0");
	expect(dfs2.getRoutesMaxStops(3)).toBe("0");
	expect(dfs2.getRoutesExactStops(4)).toBe("0");
});

test('Invalid Adjacency Matrix with "A" and "C" start and end', () => {
	const dfs2 = new DFS(new Map(), "A", "C");
	expect(dfs2.getRoutes()).toEqual([]);
	expect(dfs2.getRoutesMaxDistance(30)).toBe("0");
	expect(dfs2.getRoutesMaxStops(3)).toBe("0");
	expect(dfs2.getRoutesExactStops(4)).toBe("0");
});

test('Valid Adjacency Matrix with "A" and "C" start and end', () => {
	expect(dfsTest2.getRoutes()).toEqual([]);
	expect(dfsTest2.getRoutesMaxDistance(30)).toBe("11");
	expect(dfsTest2.getRoutes().length).toBe(11);
	expect(dfsTest2.getRoutesMaxStops(3)).toBe("3");
	expect(dfsTest2.getRoutes().length).toBe(3);
	expect(dfsTest2.getRoutesExactStops(4)).toBe("3");
	expect(dfsTest2.getRoutes().length).toBe(3);
});

// getRoutesMaxDistance

test('getRoutesMaxDistance from "C" to "C" with maximum distance of 30', () => {
	expect(dfsTest1.getRoutesMaxDistance(30)).toBe("7");
});

test('getRoutesMaxDistance from "A" to "C" with maximum distance of 30', () => {
	expect(dfsTest2.getRoutesMaxDistance(30)).toBe("11");
});

test('getRoutesMaxDistance from "C" to "C" with maximum distance of 16', () => {
	expect(dfsTest1.getRoutesMaxDistance(16)).toBe("1");
});

test('getRoutesMaxDistance from "C" to "C" with maximum distance of 0', () => {
	expect(dfsTest1.getRoutesMaxDistance(0)).toBe("0");
});

test('getRoutesMaxDistance from "C" to "C" with maximum distance negative (-35)', () => {
	expect(dfsTest1.getRoutesMaxDistance(-35)).toBe("0");
});

test('getRoutesMaxDistance from "C" to "C" with maximum distance infinite', () => {
	expect(dfsTest1.getRoutesMaxDistance(Number.POSITIVE_INFINITY)).toBe("0");
});

test('getRoutesMaxDistance from "C" to "C" with maximum distance NaN', () => {
	expect(dfsTest1.getRoutesMaxDistance(NaN)).toBe("0");
});

// getRoutesMaxStops

test('getRoutesMaxStops from "C" to "C" with maximum stops of 3', () => {
	expect(dfsTest1.getRoutesMaxStops(3)).toBe("2");
});

test('getRoutesMaxStops from "A" to "C" with maximum stops of 3', () => {
	expect(dfsTest2.getRoutesMaxStops(3)).toBe("3");
});

test('getRoutesMaxStops from "C" to "C" with maximum stops of 7', () => {
	expect(dfsTest1.getRoutesMaxStops(7)).toBe("15");
});

test('getRoutesMaxStops from "C" to "C" with maximum stops of 0', () => {
	expect(dfsTest1.getRoutesMaxStops(0)).toBe("0");
});

test('getRoutesMaxStops from "C" to "C" with maximum stops of negative (-14)', () => {
	expect(dfsTest1.getRoutesMaxStops(-14)).toBe("0");
});

test('getRoutesMaxStops from "C" to "C" with maximum stops of infinite', () => {
	expect(dfsTest1.getRoutesMaxStops(Number.POSITIVE_INFINITY)).toBe("0");
});

test('getRoutesMaxStops from "C" to "C" with maximum stops of NaN', () => {
	expect(dfsTest1.getRoutesMaxStops(NaN)).toBe("0");
});

// getRoutesExactStops

test('getRoutesExactStops from "C" to "C" with maximum stops of 3', () => {
	expect(dfsTest1.getRoutesExactStops(3)).toBe("1");
});

test('getRoutesExactStops from "A" to "C" with maximum stops of 3', () => {
	expect(dfsTest2.getRoutesExactStops(3)).toBe("1");
});

test('getRoutesExactStops from "C" to "C" with maximum stops of 7', () => {
	expect(dfsTest1.getRoutesExactStops(7)).toBe("5");
});

test('getRoutesExactStops from "C" to "C" with maximum stops of 0', () => {
	expect(dfsTest1.getRoutesExactStops(0)).toBe("0");
});

test('getRoutesExactStops from "C" to "C" with maximum stops of negative (-14)', () => {
	expect(dfsTest1.getRoutesExactStops(-14)).toBe("0");
});

test('getRoutesExactStops from "C" to "C" with maximum stops of infinite', () => {
	expect(dfsTest1.getRoutesExactStops(Number.POSITIVE_INFINITY)).toBe("0");
});

test('getRoutesExactStops from "C" to "C" with maximum stops of NaN', () => {
	expect(dfsTest1.getRoutesExactStops(NaN)).toBe("0");
});
