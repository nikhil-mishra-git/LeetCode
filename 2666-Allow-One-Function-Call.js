/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calls = true;
            return function(...args){
                if(calls){
                        calls = false
                        console.log({"callsrew":args})
                   
                        return calls,fn(...args)
                } else{
                     return undefined
                }
            } 
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
