//usings two previous functions
import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName)
{
  const v1 = signUpUser(firstName, lastName);
  const v2 = uploadPhoto(fileName);

  return Promise.allSettled([v1, v2]).then((value) => {
    const result_Arr = new Array();
    value.forEach((val) => {
      if (val.status === 'fulfilled') {
        result_Arr.push({ status: val.status, value: val.value });
      } else {
        result_Arr.push({ 
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
       }
  });
    return result_Arr;
  });
}
