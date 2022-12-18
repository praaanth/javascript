// adding dynamic key,value pairs to the object
/*
const property= "firstName";
  const name= "Prasanth";
const user= {
      name:"hello",
      age:20,
      sex:"Male"
};
console.log(user);
  for(i in user){
    console.log(i);
  }

  */
 
  //  stringify  
  //   to convert the object to a string
    //  obj= {
    //       name:"hello",
    //   age:20,
    //   sex:"Male"
    //  };
    //  const newObj= JSON.stringify(obj);
    //   console.log(newObj);
    //  // to convert this string to again obj we use 
    //  // parse method
    //  const Obj= JSON.parse(newObj);
    //  console.log(Obj);
     /*
      use case of JSON.stringify method is when ever 
       we want to store the object in the local storage
        as a key value pair 
         we need to convert it into a string
           storing the object in the local storage
            directly doesn't work
            */

            // const a=NaN;
            // if(a==NaN) {
            //      console.log(1);
            // }
            // else {
            //   console.log(2);
            // }


            // function pana(str){
            //      let arr=new Array(26).fill(false);
            //      for(let idx=0; idx<str.length; idx++) {
            //              let ch=str[idx];
            //          if(ch>='A' && ch<='Z') {
            //                let index=str.charCodeAt(idx)-"A".charCodeAt(0);
            //                  arr[index]=1;
            //          }
            //          else if(ch>='a' && ch<='z') {
            //           let index=str.charCodeAt(idx)-"a".charCodeAt(0);
            //           arr[index]=1;
            //          }
            //      }

            //      for(let idx=0; idx<26; idx++) {
            //         if(!arr[idx]) return "NO";
            //      }
            //      return "YES";
            // }

            // console.log(pana("abcdefghijklmnopqrstuvwxyz"));


           
          //  function fun() {
          //    for(var i=0; i<5; i++) {
          //          function close(x) {
          //                     setTimeout(()=> {
          //                       console.log(x);
          //                     },x*1000);
          //          }
          //          close(i);
          //    }
          //  }

          //  fun();


          ///// PROMISES
      
        //  PROMISE:  is an object representing the eventual completion or failure of an object