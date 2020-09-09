module.exports = {
  baseUrl: "http://localhost:9000",
  // OAuth info (copied from the FusionAuth admin panel)
  clientID: 'e47d8488-6460-4606-b496-1777fd0dbe3e',

  //clientSecret: 'uGZg58CJZlyuQbee22y_eOs0FC5dzNRj-j326ci7ca0',
  clientSecret: 'KPD8rqyoWSvRLU8x7ciE19uJEkHE2JfUzNOMiED4LkI',

  redirectURI: 'http://localhost:9000/oauth-callback',
  applicationID: 'e47d8488-6460-4606-b496-1777fd0dbe3e',

  // our FusionAuth api key
  apiKey: '-f3MNEXeN21ZeLhyi50fCTNaCsVqYddwsMpfMASf6Wo',

  // ports
  clientPort: 3000,
  serverPort: 9000,
  fusionAuthPort: 9011
};