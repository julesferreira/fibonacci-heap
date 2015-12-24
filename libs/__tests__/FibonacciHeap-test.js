jest.dontMock('../FibonacciHeap.js');

describe('make heap', function() {
	it('creates a new heap', function() {
		var FibonacciHeap = require('../FibonacciHeap');
		heap = new FibonacciHeap();
		expect(heap._n).toBe(0);
		expect(heap._min).toBeNull();
	});
});

describe('find minimum', function() {
	it('returns null when empty', function() {
		var FibonacciHeap = require('../FibonacciHeap');
		heap = new FibonacciHeap();
		expect(heap.findMin()).toBeNull();
	});
});
