module.exports ={
 port:"4000",
 databases:{
     mongodb:"mongodb://demouser:tested@localhost:27017/snapproducts"
 },
   facebookAuth : {
        'clientID'        : '206365173142215', // your App ID
        'clientSecret'    : '45b9ab7a1a5aa17569eacccb71c98ade', // your App Secret
        'callbackURL'     : 'http://localhost:4000/login/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },
};