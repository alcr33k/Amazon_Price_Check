const express = require('express');
const asinScraper = require('./scraper');

const router = express.Router();

router.get('/:asin', function(req, res) {
  if (req.params.asin.length == 10) {
    const promise = loadProduct(req.params.asin);
    promise.then(function(productDetails) {
      /* var jsonFormatted = JSON.stringify(productDetails); */
      res.send(productDetails);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
  } else {
    res.status(400).send();
  }
});

async function loadProduct(asin, proxy='', userAgent = '') {
  return new Promise(function(resolve, reject) {
    try {
      let options = {
          asin : asin,
          proxy : proxy, //optional
          userAgent : userAgent //optional
      };
      asinScraper(options, (result)=>{
        if (Object.keys(result).length === 0) {
          reject("Object retured was empty!");
        } else {
          resolve(result.sellerList[0]);
        }
      });
    } catch(err) {
      reject(err);
    }
  });
}

module.exports = router;