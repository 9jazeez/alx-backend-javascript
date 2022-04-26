//Handling multiple successful promises

import { uploadPhoto, createUser } from "./utils.js"

export default function handleProfileSignup()
{
  const res1 = uploadPhoto();
  const res2 = createUser();
  
  Promise.all([res1, res2]).then((value) => {
    console.log(value[0].body + ' ' + 
     value[1].firstName + ' ' + value[1].lastName);
    }).catch((err) => console.log('Signup system offline'));
}
