const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    product_id: {
    type: DataTypes.INTEGER,
    foreignKey: product_key,
    references: Product
    },
    tag_id: {
    type: DataTypes.INTEGER,
    foreignKey: tag_key,
    references: Tag(id)
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
