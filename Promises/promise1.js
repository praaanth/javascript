/**
 *  Promises are used to solve the problems caused with call backs 
 *    1--> inversion of control 
 *    2--> call back hell which causes readability issue
 *  --important --
 * definations of promises:
 *    1--> in js promises are special types of objects that gets returned immediately when we 
 *          call them.
 *    2--> promises act as a placeholder for the data we hope to get back in future.
 *    3--> in the promise object we can attach the functionality that we want to 
 *         execute ones the future task is done.
 *    4--> ones the future task is done promises will automatically execute the attached functionality.
 *    5--> Promise has three states 
 *          a--> pending  (default state work in progress)
 *          b--> fulfilled
 *          c--> rejected
 *   
 *    6--> creating a new promise 
 *         const p = new Promise(cb)   // in this constructor function we need to pass a callback function
 *  -- important done --
 *   inversion of control example:
 *     function f(cb) {
 *           do some async stuff
 * 
 *           cb() 
 *           cb()
 *      function f don't know how to use the cb and what it does
 *       so there might get a problem of using this cb function
 *     }
 *      
 * 
 * 
 */