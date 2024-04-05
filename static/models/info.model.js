module.exports = (sequelize, DataTypes) => {
    const Info = sequelize.define("info", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      position: {
        type: DataTypes.STRING,
        allowNull: false
      },

      disponibilite: {
        type: DataTypes.STRING,
        allowNull: false
      },

      synopsis: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
  
    return Info;
  };