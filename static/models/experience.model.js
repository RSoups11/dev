module.exports = (sequelize, DataTypes) => {
    const Experience = sequelize.define("experience", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
  
    return Experience;
  };