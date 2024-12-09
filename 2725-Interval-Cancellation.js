/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t, maxCalls = Infinity) {
    if (typeof fn !== 'function') {
        throw new Error('First argument must be a function');
    }
    if (!Array.isArray(args)) {
        throw new Error('Second argument must be an array');
    }
    if (typeof t !== 'number' || t <= 0) {
        throw new Error('Third argument must be a positive number');
    }

    let intervalId;
    const result = [];
    let callCount = 0;

    const executeFn = () => {
        if (callCount >= maxCalls) {
            cancelFn();
            return;
        }
        const returned = fn(...args);
        result.push({
            time: callCount * t,
            returned
        });
        callCount++;
    };

    executeFn();
    intervalId = setInterval(executeFn, t);

    const cancelFn = () => {
        clearInterval(intervalId);
        return result;
    };

    return cancelFn;
}

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */