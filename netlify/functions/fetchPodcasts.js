const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event) {
  const podcast = event.queryStringParameters.podcast; // Get podcast identifier from query parameters
  let feedURL = '';

  // Define the feed URL based on the podcast query parameter
  if (podcast === 'kertojanaani') {
    feedURL = 'https://kertojanaani.fi/feed/podcast';
  } else if (podcast === 'markkinointiperuna') {
    feedURL = 'https://aalhomedia.fi/feed/podcast'; // Example URL, replace with the actual feed URL
  } else {
    return { statusCode: 400, body: 'Invalid podcast identifier' };
  }

  try {
    const response = await fetch(feedURL);
    const data = await response.text();
    return { statusCode: 200, body: data };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
