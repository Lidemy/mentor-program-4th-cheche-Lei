
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const RETURN_LIMIT = 10;
const API_ENDPOINT = `https://lidemy-book-store.herokuapp.com/books?_limit=${RETURN_LIMIT}`;

request.get(API_ENDPOINT, (error, response, body) => {
  if (error) {
    console.log('發生錯誤！');
  } else {
    try {
      const json = JSON.parse(body);
      for (let i = 0; i < json.length; i += 1) {
        const bookId = json[i].id;
        const bookName = json[i].name;
        console.log(`${bookId} ${bookName}`);
      }
    } catch (e) {
      console.log(e);
    }
  }
});
