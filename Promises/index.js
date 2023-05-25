function getRandomInt(num) {
              return Math.floor(Math.random()*num);
          }
            function createPromiseWithLoop() {
            return new Promise((resolve,reject)=> {
                for(let i=0; i<10000000000; i++) {}
               const randInt = getRandomInt(10);
               if(randInt % 2==0) resolve(randInt);
               else reject(randInt);
             })
           }
           console.log("hello")
      let x= createPromiseWithLoop(); // after this line it takes some time to log the x 
        // because in the promise call back the for loop takes time 
       
       console.log(x);   