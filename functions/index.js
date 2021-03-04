const functions = require("firebase-functions");
const fetch = require("node-fetch");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.getSummonerByName = functions.https.onCall(async (data, context) => {
  const { summonerName, riotKey } = data;
  const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotKey}`;
  const riotResponse = await fetch(url);
  const result = await riotResponse.json();
  return result;
});
