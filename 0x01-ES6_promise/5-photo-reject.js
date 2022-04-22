//a functn that accept one argument and returns a 
//promise rejecting with an Error and the string
//$fileName cannot be processed

export default function uploadPhoto(filename)
{
  return Promise.reject(`${filename} can not be processed `); 
}
