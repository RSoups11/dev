module.exports = (sequelize, DataTypes) => {
    const Info = sequelize.define("info", {

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
      },

      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }

      },
      number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      
      website: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isURL: true
        }
      }
      
    });
  
    return Info;
  };