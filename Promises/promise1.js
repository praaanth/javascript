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
 *          cb= (resolve,reject) => {}   // it takes 2 arguments resolve and reject
 *   7--> Promise executes both synchronous and asynchronous code 
 *        Example of synchronous behaviour of the promises 
 *   -- Promises lecture 2 points --
 * 
 * 8-->  each promise object has : * state
 *                                 * value
 *                                 * onFulfillment: [] array
 *                                 * onRejection: [] array
 *                          
 * 
 *    -- Promises lecture 2 points ends --
 *    function getRandomInt(num) {
 *           return Math.floor(Math.random()*num);
 *       }
 *         function createPromiseWithLoop() {
 *         return new Promise((resolve,reject)=> {
 *             for(let i=0; i<1000000; i++) {}
 *            const randInt = getRandomInt(10);
 *            if(randInd % 2==0) resolve(randInt);
 *            else reject(randInt);
 *          })
 *        }
 *        
 *   let x= createPromiseWithLoop(); // after this line it takes some time to log the x 
 *     // because in the promise call back the for loop takes time 
 *    9--> the promise object returns immediately after completing the execution of the executor function
 *    console.log(x); 
 *  10 --> promiseObject.then is used to register the fulfillment or rejection callback functions only
 *    
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