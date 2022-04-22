import getFullResponseFromAPI from "./1-promise";
import handleResponseFromAPI from "./2-then";

//const promise = getFullResponseFromAPI(true);
const promise = Promise.resolve();
handleResponseFromAPI(promise);

