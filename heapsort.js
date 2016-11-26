(function(){
	
	var x = [1,6,2,5,3,4];
	console.log(x);

	var Parent = function(i){ 
		return i/2; 
	}
	var Left = function(i){ 
		if(i === 0) return 1;
		return 2 * i; 
	}
	var Right = function(i){ 
		if(i === 0) return 2;
		return 2 * i + 1; 
	}
	
	var MaxHeapify = function(arr, i){

		var largest = i;
		l = Left(i);
		r = Right(i);
		if(l <= arr.length && arr[l] > arr[i])
			largest = l;
		if(r <= arr.length && arr[r] > arr[largest])
			largest = r;
		if(largest != i){
			var tmp = arr[i];
			arr[i] = arr[largest];
			arr[largest] = tmp;
			MaxHeapify(arr, largest);
		}
	}

	var BuildHeap = function(arr){
		
		for(var i = Math.floor(arr.length/2) ; i >= 0; i--){
			MaxHeapify(arr, i);
		}
	}

	var HeapSort = function(arr){

		var out = [];
		BuildHeap(arr)
		for(var i = arr.length; i >= 1; i--){
			out.push(arr.shift());
			MaxHeapify(arr,0);
		}
		return out;
	}

	var out = HeapSort(x);
	console.log(out);
	
})()

















