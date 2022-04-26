//using try
/* try{//codes}.catch{}
or try { if() throw if() throw}catch{}*/

export default function divideFunction(numerator, denominator) {
   if (denominator === 0) {
     throw new Error('cannot divide by 0');
   }
   return ( numerator / denominator );
}
