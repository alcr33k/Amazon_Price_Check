// Based on a fork of https://www.npmjs.com/package/amazon-asin-scraper

function scrapeBuybox(obj, callback){
    const osmosis = require("osmosis");
    let result = {};
    let list = [];
    var url = "https://www.amazon.com/gp/offer-listing/"+obj.asin+"/ref=olp_f_new?ie=UTF8&f_all=true&f_new=true";
    osmosis
    .get(url)
    .config('proxy', obj.proxy)
    .config('user_agent', obj.userAgent)
    .paginate('#olpOfferListColumn > div > ul > li.a-last > a[href*="offer"]')
    .set('error', '#g > div > a > img@alt')
    .set('title', 'h1')
    .set('customerReview', '#olpProductDetails > div.a-section.a-spacing-small > span > span.a-size-small > a')
    .set('buyboxPrice', '')
    .find('div.olpOffer')
    .set({
        sellerName    : 'div.olpSellerColumn > h3 > span > a, div.olpSellerColumn > h3.olpSellerName > img@alt, div.olpSellerColumn > h3 > a',
        sellerRating  : 'div.olpSellerColumn > p > a > b',
        fulfilledByAmazon   : 'div.olpBadge > span > a',
        offerPrice    : 'div.olpPriceColumn > span.olpOfferPrice',
        shippingCharge: 'div.olpPriceColumn > p > span > span.olpShippingPrice',
        offerListingId: 'div.olpBuyColumn.a-span-last > div > form > input[name*="offeringID"]@value'
    })
    .data(function(res) {
        result.asin = obj.asin;
        res.fulfilledByAmazon = (res.fulfilledByAmazon != undefined) ? 'true' : 'false';
        list.push(res);
        result.sellerList = list;
    })
    .done(function(){
        callback(result);
    })
}

module.exports = scrapeBuybox;