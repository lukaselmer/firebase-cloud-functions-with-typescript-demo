import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

export const currentDate = functions.https.onRequest((request, response) => {
  response.send(`The current date is ${new Date()}`);
});

export const get = functions.https.onRequest((request, response) => {
  console.log(request.query.id);
  response.send(`Getting product ${request.query.id}`);
});
