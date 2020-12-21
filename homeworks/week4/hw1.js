
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const limit = 10;
const api = `https://lidemy-book-store.herokuapp.com/books?_limit=${limit}`;

request.get(api, (error, response, body) => {
  if (error) {
    console.log('發生錯誤！');
  } else {
    const json = JSON.parse(body);
    for (let i = 0; i < limit; i += 1) {
      const bookId = json[i].id;
      const bookName = json[i].name;
      console.log(`${bookId} ${bookName}`);
    }
  }
});
