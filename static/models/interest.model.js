module.exports = (sequelize, DataTypes) => {
    const Interest = sequelize.define("interest", {
      interest_name: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
  
    return Interest;
  };