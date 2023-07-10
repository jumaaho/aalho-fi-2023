const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://kertojanaani.fi/feed/podcast');
    const data = await response.text();
    return { statusCode: 200, body: data };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}