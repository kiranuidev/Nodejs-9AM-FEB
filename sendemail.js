
module.exports = function (myEmitter) {
    myEmitter.on("SEND-EMAIL", function (args) {
        console.log("Sending Email");
    });
}

