function FibonacciHeap() {
	this._n = 0;
	this._min = null;
}

FibonacciHeap.prototype.findMin = function() {
	return this._min;
}

module.exports = FibonacciHeap;
