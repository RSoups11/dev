module.exports = (sequelize, DataTypes) => {
    const Style = sequelize.define('style', {
      bg_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      text_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      special_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      h1_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      h3_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      h4_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      button_color: {
        type: DataTypes.STRING,
        allowNull: false
      },

      title_font: {
        type: DataTypes.STRING,
        allowNull: false
      },

      text_font: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    });
  
    return Style;
  };