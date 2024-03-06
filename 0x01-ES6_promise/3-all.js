import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let myPromises = Promise.all([uploadPhoto(), createUser()])
  .then((onFulfill) => {
    const [body, firstName, lastName] = onFulfill;
    console.log(body, firstName, lastName);
    return (body, firstName, lastName);
  })
  .catch((onReject) => {
    console.log('Signup system offline');
    return new Error(onReject);
  });
}
