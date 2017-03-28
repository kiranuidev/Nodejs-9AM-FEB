module.exports=function(myEmitter){
 myEmitter.on("SEND-SS",function(data){
     console.log("Sending sms");
 });
};