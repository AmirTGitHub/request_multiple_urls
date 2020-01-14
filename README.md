# request_multiple_urls
![npm](https://img.shields.io/npm/v/request_multiple_urls)

a small JavaScript package which is fetching all the data and return a the data

# Install
Run the the below command in the terminal
```
npm install request_multiple_urls
```

# Usage
```
const requestMultipleUrls = require('request_multiple_urls')

 const urls = [
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json"
  ];

const getData = async()=>{
   const data = await requestMultipleUrls(urls)
    .then(data => console.log(data))
    .catch(e => console.error(e)) 
  
}

```

# Dependencies
This test it has just a one dependency which is the `node-fetch` just for fetching the data from urls.
```
"dependencies": {
    "node-fetch": "^2.6.0"
  }

```


# Tests
I have used Mocha and Chai for testing the function and it has 92% test coverage.
