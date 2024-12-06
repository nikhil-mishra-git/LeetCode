/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    const memo={}

    return function(...args) {

        const key = args
        
        if(memo[key] !== undefined){
            return memo[key]
        }

        const result = fn(...args)
        memo[key] = result

        return result
    }
   
}

    function sum(n , m){
         return n + n
        }

    function factorial(n){
        let result = 1

        while (n > 0){
            n *= result
            n--
        }
         return result
        }


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */