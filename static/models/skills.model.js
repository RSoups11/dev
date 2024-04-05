module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define("skills", {
      skills_name: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
  
    return Skills;
  };