//use function signUpUser(fname, lname) to return
// a resolved promise with object
//{fname: value, lname: value}

export default function signUpUser(firstName, lastName)
{
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName
  });
}
