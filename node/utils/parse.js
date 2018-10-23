const fs = require('fs');
const path = require('path');
var parse = require('csv-parse/lib/sync');


// STEP 1. parse .csv into .json with "models/product" objects
//      1.1 split into lines
//      1.2 split line[0] into column names
//      1.3 create schema
//      1.3 create objects like "models/product" done

// ??   What about associations ?? 

// STEP 2. commit them to database
//      2.1 connect db
//      2.2 check, if row exists
//        2.2.exists  update
//        2.2.not   create


// ???! What is SCA (source) 

const BASE_DIR = __dirname;


// for debug only!
const filepath = path.resolve(BASE_DIR, "Scansource1.txt");

let parsed = parseToJSON(filepath);


// generates .json result of csv from filepath
// filepath - path to csv file
// returns {
//   products: [productObjects],
//   main_products: [main_productObjects],
//   categories: [categoryObjects]
// }
function parseToJSON(filepath) {
  let file = fs.readFileSync(filepath, "utf8");

  let lines = file.split("\r\n");

  let colNames = parseLine(lines[0]);

  const productsSchema = {
    "MANUFACTURER PART #": "original_number",
    "CONTRACT_PRICE": "price",
    "QUANTITY ON HAND": "quantity"
    // "SCA": "source"
  }
  const productKeys = [
    "MANUFACTURER PART #",
    "CONTRACT_PRICE",
    "QUANTITY ON HAND",
    // "SCA"
  ]
  // Products => type    **?? Version | Accessories (| Products)


  let products = [];

  for (let i = 1; i < lines.length; i++){
    let curLine = lines[i];
    let cells = parseLine(curLine);
    if (!cells) {
      continue;
    }

    let curProduct = {};

    for (let ci = 0; ci < colNames.length; ci++){
      let cell = createCell(colNames[ci], cells[ci]);

      if (cell === null){
        continue;
      }

      let payload = cell.payload;

      if (cell.table === "products"){
        curProduct[payload.key] = payload.value;
      }

    }

    products.push(curProduct);
  }

  console.log("End reading")

  debugger;
  // Unique
  let uniqueArray = arr => [...new Set(arr.map(obj => JSON.stringify(obj)))].map(str => JSON.parse(str));

  let uniq_products = uniqueArray(products)

  console.log("End with parsing");

  // for debug
  saveJSON(uniq_products);
  console.log("End with saving into JSON");

  // throw Error;

  return {
    "products": uniq_products
  };

  // saves data lists to .json files
  // prductsArray - array of product objects
  // mainProductsArray - array of main_product objects
  // categoriesArray - array of category objects
  function saveJSON(productsArray, mainProductsArray, categoriesArray){
    function writeCallback(err) {
      if (err) {
        console.log(err);
      }
    }

    let stringifyProducts = JSON.stringify(productsArray, null, 4);
    
    let productResultPath = path.resolve(BASE_DIR, "result/products_update.json")
    fs.writeFileSync(
      productResultPath, 
      stringifyProducts, 
      writeCallback
      );

  }

  // creates cell for def. table
  // key - Scansource2 column name
  // value - Scansource2 cell value
  // returns {"table": <table name>, "payload": <cell>}
  // returns null (if no such column in any tables)
  function createCell(key, value){
    key = String(key)
    if (productKeys.indexOf(key) +1){
      let payload = createProductCell(key, value);
      return {"table": "products", "payload": payload}
    }
    return null;
  }

  // creates pair key-value appliable to products table
  //   or returns null if no such column in table 
  // key - Scansource2 column name
  // value - Scansource2 cell value
  // returns {key: <appliableKey>, value: <appliableValue>}
  // returns null (if no such column in table)
  function createProductCell(key, value){
    if (key === "GrossWeight") {
      let appliable = {};
      appliable["key"] = "weight";
      appliable["value"] = value*0.453592;
      return appliable;
    }
    if ( productsSchema.hasOwnProperty(key) ) {
      let appliableKey = productsSchema[key];
      let appliable = {};
      appliable["key"] = appliableKey;
      appliable["value"] = value;
      return appliable;
    }
    return null;
  }

  // returns [string,] from csv line
  function parseLine(line){
    // console.log(line)
    return parse(line)[0];
  }
}
