(function(){

	var len = 2;
	var price = [0,1,5,8,9,10,17,17,20,24,30]
	var value = [];

	var cutRod = function(len){
		if(len <= 0)
			return 0;
		var retval = -Math.MAX_VALUE;
		for(var i = 0; i < len; i++){
			retval = Math.max(retval, price[i] + cutRod(len - 1))
		}
		value[len] = retval;
		return retval;
	}

	var res = cutRod(len, []);
	console.log(res);

})()
