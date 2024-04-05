module.exports = (sequelize, DataTypes) => {
    const Certificates = sequelize.define("certificates", {
      certificates_title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      certificates_description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Certificates;
  };