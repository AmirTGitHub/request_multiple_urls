exports.requestMultipleUrls = async (urls)=> {
  const fetch = require ('node-fetch')
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
