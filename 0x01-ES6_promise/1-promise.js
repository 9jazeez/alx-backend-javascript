//using the prototype getFullResponseFromAPI(sucess)
//return a promise.
//if true resolve the promise with an object with 2 attributes
//if false reject the promise with error message

export default function getFullResponseFromAPI(success)
{
  const promise = new Promise(function(resolve, reject) {
    if (success === true) {
      resolve({
       status: 200,
       body:'success'
      });
    } else {
        reject(new Error('The fake API is not working currently'));
      }
   });
 /* promise.then(function(res) {
    console.log(res);}).catch(function(err) {
    console.error(err)
    });*/
  return promise;
}
