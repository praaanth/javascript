 ///// PROMISES
      
        //  PROMISE:  is an object representing the eventual completion or failure of an object

  
        const myPromise = new Promise((resolve, reject) => {
               
            setTimeout(()=> {
                    resolve('i have done ');
            },1000)
        })
        myPromise.then(value=> console.log(value)).then(newValue=> console.log(newValue))
        console.log(myPromise);
        


          // function fun() {
          //       setTimeout(()=> {
          //            return new Promise((resolve,reject)=> {
          //                 resolve(10);
          //            }
          //            )
          //       },10000)
          // }

          //      let arr=[]
          // fetch(fun()).then(value=> arr.push(value))
          //   arr.push(2);

          //   arr.map((ele)=> console.log(ele))