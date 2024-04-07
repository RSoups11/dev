module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define("skills", {
      skills_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      skill_level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,  // skill_level must be at least 1
            max: 5   // skill_level can be at most 5
        }
    }

    });
  
    return Skills;
  };