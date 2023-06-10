// Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.

// A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.

function createTimedFunction(fn, t) {
    return async function (...args) {
      // Create a promise that resolves when the original function completes
      const originalPromise = fn(...args);
  
      // Create a promise that rejects if the timeout is exceeded
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject('Time Limit Exceeded'), t);
      });
  
      // Race the original promise with the timeout promise
      const result = await Promise.race([originalPromise, timeoutPromise]);
  
      return result;
    };
  }
  