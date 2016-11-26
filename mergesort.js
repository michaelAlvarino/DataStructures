(function(){
	var insertionSort = function(lst){
		var j = 2;
		var i = 0;
		while(j <= lst.length){
			var k = lst[j];
			i = j - 1;
			while(i > 0 && k < lst[i]){
				var tmp = lst[i];
				lst[i] = k;
				lst[j] = tmp
			}
			j++;
		}
	}
	var mergeSort = function(lst){
		return merge(A, p, q, r);
	}
	var merge = function(A, p, q, r){
		var mid = floor(A.length/2);
		var left = 
	}
})()
