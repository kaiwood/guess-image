const metascrapper = require("metascraper");
const fetch = require("node-fetch");

/**
 * guessImage
 *
 * @param {String} targetUrl
 * @returns {String} imageUrl
 */
async function guessImage(targetUrl) {
  try {
    const response = await fetch(targetUrl);
    const html = await response.text();
    const metadata = await metascrapper({ html, url: targetUrl });

    return metadata;
  } catch (err) {
    throw err;
  }
}

module.exports.guessImage = guessImage;
