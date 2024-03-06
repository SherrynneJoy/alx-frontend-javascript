import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    const myPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
    Promise.allSettled(myPromises).then((results) => {
      const statuses = results.map(result => ({ status: result.status, value: result.value }));
      resolve(statuses);
    }).catch(error => {
      reject(error);
    });
  });
}
