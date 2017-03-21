var loginCtrl = {};

loginCtrl.getLoginPage = function (req, res) {
     console.log(`Worker ${process.pid} started`);
    res.render("login/login",{title:"LoginPage",username:"Kiran"});
};

loginCtrl.authenticateUser = function (req, res) {
    res.send("<h1>User authentictated</h1>");
};

module.exports=loginCtrl;