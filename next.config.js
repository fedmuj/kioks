module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['playsummit.sitecoresandbox.cloud', 'www.atcom.gr','www.eurobank.gr'],
  },
  rules: {
    //... other rules
   // use 'off' instead of "warn" to disable the rule and the error message
   'prettier/prettier': [   'warn',   {
       endOfLine: 'auto',
     },
   ]}
};
