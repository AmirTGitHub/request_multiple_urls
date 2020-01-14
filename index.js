/**
 * @param {array} urls
 * @return {promise}
 */

module.exports = async function requestMultipleUrls (urls){
  let fetch 
  //first check if we are passing the the array of urls
  if (!Array.isArray(urls)) {
    throw new Error("Please pass an array of urls to the function");
  }
  try {
    fetch = require("node-fetch");
  } catch (error) {
    throw new Error("Please install node-fetch module first")
  }
  //with promise.all we can wait for the result of all of the urls and 
  const result = await Promise.all(
    urls.map(async (url, index) => {
      try {
        const fetchUrl = await fetch(url);
        const data = await fetchUrl.json();
        return data;
      } catch (error) {
        throw new Error(`there is an error to fetch the data of this url: ${url} at this index:${index}`)
      }
    })
  );
  return result;
};
