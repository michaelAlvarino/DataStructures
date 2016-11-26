
/*

* @param {number[][]} matrix

* @param {number} k

* @return {number}

*/



var kthSmallest = function(matrix, k) {



	var flattened = matrix.reduce((a, b) => { return a.concat(b); }, []);

	//return flattened

	return heapsort(flattened);



};



var left = function left(i){ return i*2; }

var right = function right(i){ return i*2 +1;}

var children = function children(i){

	if(i === 0)

		return {"left":1, "right":2}

	return {"left": i*2, "right": i*2 +1}

}

var heapparent = function heapparent(i){

	if(i % 2 === 1){

		return i-1/2;

	}

	return i/2;

}



// [2,3,6,5]

// heapify([2,3,6,5], 3)

// heapify([2,3,6,5], 2)

// heapify([2,3,6,5], 1)

//   left = 2, right = 3, largest = 2, arr[2] = 6, arr[3]=5, arr[largest]=3

//   largest = 2

//   [2,6,3,5]

var heapify = function heapify(arr, ind){

	left = ind*2;

	right = ind*2 + 1;

	largest = ind;

	if(left < arr.length && arr[left] > arr[ind]){

		largest = left;

	}

	if(right < arr.length && arr[right] > arr[largest]){

		largest = right;

	}

	if(largest != ind){

		var tmp = arr[ind];

		arr[ind] = arr[largest];

		arr[largest] = tmp;

		heapify(arr, largest);

	}

}



var buildHeap = function buildHeap(arr){

	for(var i = Math.floor(arr.length/2); i >= 0; i--)

		heapify(arr, i);

}

var heapsort = function heapsort(arr){

	var x = [];

	buildHeap(arr);

	for(var i = arr.length; i > 0; i--){
		x.push(arr.shift());
		heapify(arr, 0);
	}

	return x;

}


var x = kthSmallest([[1,2,5],[4,5,6],[5,6,7]], 3);
console.log(x);
