(function(){
	var maxSubSeq = function(arr, low, high){
		if(high === low)
			return {"low": low, "high": high, "sum": arr[low]};
		var mid = Math.floor((high+low)/2);
		var left = maxSubSeq(arr, low, mid);// sum of left array
		var right = maxSubSeq(arr, mid + 1, high);// sum of right array
		var crossing = maxCrossing(arr, low, mid, high);// sum mid
		if(left["sum"] >= right["sum"] && left["sum"] >= crossing["sum"])
			return {"low":left["low"], "high":left["high"], "sum":left["sum"]};
		else if(right["sum"] >= left["sum"] && right["sum"] >= crossing["sum"])
			return {"low":right["low"], "high":right["high"], "sum":right["sum"]};
		else return {"low":low, "high":high, "sum": crossing["sum"]};
	}
	var maxCrossing = function(arr, low, mid, high){
		var left = -Number.MAX_VALUE;
		var leftInd = Number.MAX_VALUE;
		var right = -Number.MAX_VALUE;
		var rightInd = Number.MAX_VALUE;
		var sum = 0;
		for(var i = mid; i >= low; i--){
			sum = (sum + arr[i]);
			if(sum > left){
				left = sum;
				leftInd = i;
			}
		}
		sum = 0;
		for(i = mid+1; i <= high - 1; i++){
			sum = (sum + arr[i]);
			if(sum > right){
				right = sum;
				rightInd = i;
			}
		}
		return {"LeftInd": leftInd, "RightInd": rightInd, "sum":left+right};
	}

	var arr = [1, -3, 4, 5, -7, 10, -7, 2, -2, -5];
	var res = maxSubSeq(arr, 0, arr.length - 1);
	console.log(res);
	var arr2 = [-1,-2,-3,-4]
	var res2 = maxSubSeq(arr2, 0, arr2.length - 1);
	console.log(res2);

})()
