module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define('education', {
      education_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      education_description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Education;
  };