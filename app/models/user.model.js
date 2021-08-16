module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      mobile: {
        type: Sequelize.BIGINT(11)
      },
      fullname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      vcode: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  