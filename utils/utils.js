module.exports.add = (a, b) => a + b;
module.exports.squared = x => x * x;
module.exports.setName = (user, fullName) => {
  var names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
module.exports.asyncAdd = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
};

module.exports.asyncSquare = (x, cb) => {
  setTimeout(() => {
    cb(x * x);
  }, 1000);
};
