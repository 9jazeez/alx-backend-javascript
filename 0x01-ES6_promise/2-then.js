//using the .then of promise

export default function handleResponseFromAPI(promise)
{
  promise.then(function(res) { 
    return { status: 200, body: 'success'};
   }).catch(function(err) {
    return (new Error());
   }).finally(function(info) {
    console.log('Got a response from the API');
   });
  
} 
