module.exports = (sequelize, DataTypes) => {
    const Expertise = sequelize.define("expertise", {
      expertise_name: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
  
    return Expertise;
  };