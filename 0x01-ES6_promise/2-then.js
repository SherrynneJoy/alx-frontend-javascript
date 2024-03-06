export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      promise
        .then((resolvedValue) => {
          console.log('Got a response from the API');
          resolve({ status: 200, body: 'success' });
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject(new Error());
    }
  });
}
