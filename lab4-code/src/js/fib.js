class Fib {

    randomFib() {
        var fib = (function(cache){
		    return cache = cache || {}, function(n){
		        if (cache[n]) return cache[n];
		        else return cache[n] = n == 0 ? 0 : n < 0 ? -fib(-n)
		            : n <= 2 ? 1 : fib(n-2) + fib(n-1);
		    };
		})();
		
		return fib(Math.floor(Math.random() * 50) + 1);	
    }
}

export default Fib;
