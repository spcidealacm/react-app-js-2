import { useEffect, useState } from "react";

export const isTrue = (value) => (value === 0 ? true : value);
export const isFalsy = (value) => (value === 0 ? false : !value); // return true only when value is undefined or null

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

// console.log("A")
// console.log("AB")
// console.log("ABC")

export const debounce = () => {
  let timeout;
  return (msg) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => console.log(msg), 2000);
  };
};

const log = debounce();

log("A"); // debounce()("A")
log("AB");
log("ABC");

// function* generateNum(){
//   let number = 0;
//   while(1){
//     yield ++number;
//   }
// }

// const getNum = generateNum();
// const getNextNum = () => (getNum.next().value)

// const func = (callback, time) =>{
//   let timeout;
//   return () =>{
//     if(timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(callback, time)
//   }
// }

// const print = func( ()=> console.log("true print"), 1000)
// print()
// print()
// print()
// print()
// print()
// print()

// const debounce = (func, delay) => {
//   let timeout;
//   return ()=>{
//     if (timeout) {
//       clearTimeout(timeout);
//       console.log("clearTimeout",getNextNum())
//     }
//     timeout = setTimeout(function(){
//       func();
//     }, delay)
//   }
// }

// const log = debounce(()=> console.log("call"), 1000)

// log()
// log()
// log()
// log()
// log()
// log()
