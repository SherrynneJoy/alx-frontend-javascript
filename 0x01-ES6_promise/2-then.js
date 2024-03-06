export default function handleResponseFromAPI(promise) {
  return promise.then((resolvedValue) => {
    console.log('Got a response from the API');
    resolve({ status: 200, body: 'Success' });
  }).catch((rejectionReason) => {
    reject(new Error());
  });
}
