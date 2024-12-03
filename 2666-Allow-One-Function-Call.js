/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let call = true
    return function(...args){
        
        if(call){
             call = false
             return fn(...args)
        }else{
             return undefined
        }
        
    }
        
};

function onceFnAdd(a,b,c){
    return a+b+c
}
function onceFnMulti(a,b,c){
    return a*b*c
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
