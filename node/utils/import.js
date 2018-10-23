const fs = require('fs');
const path = require('path');
// Connect sequelize
const Sequelize = require('sequelize');
var sequelize = new Sequelize('estoniac_hool', 'estoniac_hool', '1WhoLetDogs', {
  host: "213.168.251.122",
  port: 3306,
  dialect: 'mysql',
  define: { 
   timestamps: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 20000,
    acquire: 1000000
  }
});

// Connect models
const Product = sequelize['import'](path.join(__dirname, '../models/product.js'));
const products_update = require('./result/products_update.json')

sequelize.sync({})
 .then( async () => {
    await Promise.all(
      products_update.map(product => {
           Product.update(product, {where: { original_number: product.original_number, source: 'SCA'}}) 
        })
     ) 
  })
