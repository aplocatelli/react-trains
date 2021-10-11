import Dijkstra from "./dijkstra";
import Trains from "../trains";

const trains = new Trains("AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7");
const adjacencyMatrix = trains.getAdjacencyMatrix();
const dijkstra = new Dijkstra(adjacencyMatrix, "A");

// Constructor

test("Creating new instance with empty values", () => {
	const dijkstra2 = new Dijkstra(new Map(), "");
	expect(dijkstra2.getRoutesTable()).toEqual(new Map());
});

test("Creating new instance with valid Adjacency Matrix but empty start", () => {
	const dijkstra2 = new Dijkstra(adjacencyMatrix, "");
	expect(dijkstra2.getRoutesTable()).toEqual(new Map());
});

test("Creating new instance with valid Adjacency Matrix but invalid start", () => {
	const dijkstra2 = new Dijkstra(adjacencyMatrix, "isitok");
	expect(dijkstra2.getRoutesTable()).toEqual(new Map());
});

test("Creating new instance with valid start but empty Adjacency Matrix", () => {
	const dijkstra2 = new Dijkstra(new Map(), "A");
	expect(dijkstra2.getRoutesTable()).toEqual(new Map());
});

// getShortestRoute

test("getShortestRoute with empty end", () => {
	expect(dijkstra.getShortestRoute("")).toBe(null);
});

test("getShortestRoute with invalid end", () => {
	expect(dijkstra.getShortestRoute("isitok")).toBe(null);
});

test('getShortestRoute with end "C"', () => {
	expect(dijkstra.getShortestRoute("C")).toBe(9);
});

test('getShortestRoute with end "A"', () => {
	expect(dijkstra.getShortestRoute("A")).toBe(null);
});

test('getShortestRoute with end "D"', () => {
	expect(dijkstra.getShortestRoute("D")).toBe(5);
});
