exports.requestMultipleUrls = async (urls)=> {
  let fetch 
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
