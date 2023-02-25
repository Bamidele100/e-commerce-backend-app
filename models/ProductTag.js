// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// const Tag = require('./Tag');
// const Product = require('./Product');

// Initialize Product model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// set up fields and rules for Product model
ProductTag.init(
  {
    // define id column
    id: {
     type: DataTypes.INTEGER, 
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
   },
   // define product_id column
   product_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'product',
       key: 'id'
     }
   },
   // defines tag_id column
   tag_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'tag',
       key: 'id'
     }
   }
 },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
