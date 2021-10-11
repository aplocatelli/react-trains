import Trains from "./trains";

// Constructor & getResults

test('Invalid input ""', () => {
	const trains = new Trains("");
	const results = trains.getResults();

	expect(results).toEqual([]);
});

test('Valid outputs for "AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7"', () => {
	const trains = new Trains("AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7");
	const results = trains.getResults();

	expect(results[0]).toBe("9");
	expect(results[1]).toBe("5");
	expect(results[2]).toBe("13");
	expect(results[3]).toBe("22");
	expect(results[4]).toBe("NO SUCH ROUTE");
	expect(results[5]).toBe("2");
	expect(results[6]).toBe("3");
	expect(results[7]).toBe("9");
	expect(results[8]).toBe("9");
	expect(results[9]).toBe("7");
});

test('Valid outputs for "AB5, BC3, CA9"', () => {
	const trains = new Trains("AB5, BC3, CA9");
	const results = trains.getResults();

	expect(results[0]).toBe("8");
	expect(results[1]).toBe("NO SUCH ROUTE");
	expect(results[2]).toBe("NO SUCH ROUTE");
	expect(results[3]).toBe("NO SUCH ROUTE");
	expect(results[4]).toBe("NO SUCH ROUTE");
	expect(results[5]).toBe("1");
	expect(results[6]).toBe("0");
	expect(results[7]).toBe("8");
	expect(results[8]).toBe("17");
	expect(results[9]).toBe("1");
});

test('Valid outputs for "CC1"', () => {
	const trains = new Trains("CC1");
	const results = trains.getResults();

	expect(results[0]).toBe("NO SUCH ROUTE");
	expect(results[1]).toBe("NO SUCH ROUTE");
	expect(results[2]).toBe("NO SUCH ROUTE");
	expect(results[3]).toBe("NO SUCH ROUTE");
	expect(results[4]).toBe("NO SUCH ROUTE");
	expect(results[5]).toBe("3");
	expect(results[6]).toBe("0");
	expect(results[7]).toBe("NO SUCH ROUTE");
	expect(results[8]).toBe("NO SUCH ROUTE");
	expect(results[9]).toBe("29");
});
