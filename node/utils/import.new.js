const fs = require('fs');
const path = require('path');
var parse = require('csv-parse/lib/sync');
const util = require('util');
const { Category, MainProduct, Product } = require('../models');
const Sequelize = require('sequelize');

var sequelize = new Sequelize('estoniac_hool', 'estoniac_hool', '1WhoLetDogs', {
  host: "213.168.251.122",
  port: 3306,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const { Op } = Sequelize;


