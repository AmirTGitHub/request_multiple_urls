var expect = require("chai").expect;
const requestMultipleUrls = require("../index");

describe("test if we do not pass an array", () => {
  const one =
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json";

  const arrayError = {
    error: "Array is not provided",
    message: "Please pass an array of urls to the function"
  };

  it("return an error if you pass one url", async () => {
    try {
      await requestMultipleUrls(one);
    } catch (error) {
      expect(error.message).to.equal(
        "Please pass an array of urls to the function"
      );
    }
  });
  it("returns an error if we pass a number", async () => {
    try {
      await requestMultipleUrls(1234);
    } catch (error) {
      expect(error.message).to.equal(
        "Please pass an array of urls to the function"
      );
    }
  });
  it("returns an error if we pass an object", async () => {
    try {
      await requestMultipleUrls({
        url:
          "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json"
      });
    } catch (error) {
      expect(error.message).to.equal(
        "Please pass an array of urls to the function"
      );
    }
  });
});

describe("test the arry of urls", () => {
  const urls = [
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json"
  ];
  const urlWithError = [
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
    "amir.com"
  ];
  const fetchError = {
    error: "error in fetching data",
    message: `there is an error to fetch the data of this url: ${
      urlWithError[2]
    } at this index:${2}`
  };

  it("throws an error if we do not pass the correct url", async () => {
    try {
      await requestMultipleUrls(urlWithError);
    } catch (error) {
      expect(error.message).to.equal(
        `there is an error to fetch the data of this url: ${urlWithError[2]} at this index:${2}`
      );
    }
  });
  it("fetch all the data", async () => {
    const requestData = await requestMultipleUrls(urls);
    expect(requestData).to.have.length(urls.length);
  });
});
