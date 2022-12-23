var crypto = require('crypto');

var genRandomString = function(lenght){
    return crypto.randomBytes(Math.ceil(lenght/2))
    .toString('hex')
    .slice(0, lenght)
}

var sha512 = function(password,salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return{
        salt: salt,
        passwordHash: value
    };
};

function saltHashPassword(userPassword){
    var salt = genRandomString(16);
    var passwordData = sha512(userPassword,salt);
    return passwordData;
}

module.exports = {
    saltHashPassword
}