/**
 * @param {array} urls
 * @return {promise}
 */

exports.requestMultipleUrls = async (urls)=> {
  let fetch 
  //first check if we are passing the the array of urls
  if (!Array.isArray(urls)) {
    throw {
      error: "Array is not provided",
      message: "Please pass an array of urls to the function"
    };
  }
  try {
    fetch = require("node-fetch");
  } catch (e) {
    throw {
      error: "node-fetch not found",
      message: "Please install node-fetch module first"
    };
  }
  //with promise.all we can wait for the result of all of the urls and 
  const result = await Promise.all(
    urls.map(async (url, index) => {
      try {
        const fetchUrl = await fetch(url);
        const data = await fetchUrl.json();
        return data;
      } catch (error) {
        throw {
          error: "error in fetching data",
          message: `there is an error to fetch the data of this url: ${url} at this index:${index}`
        };
      }
    })
  );
  return result;
};
