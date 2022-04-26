//using asyn and await in javascript

import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  const upload = await uploadPhoto();
  const create = await createUser();

  try {
    return { photo: upload, user: create }
  } catch (e) {
    return { photo: null, user: null };
  }

 // val.push({ status: result[0]});

  //return upload;
  }
