
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const countryName = process.argv[2];
const api = `https://restcountries.eu/rest/v2/name/${countryName}`;

if (countryName) {
  request.get(`${api}`, (error, response, body) => {
    if (error) {
      console.log('發生錯誤：', error);
    } else {
      const json = JSON.parse(body);
      if (json.status < 200 || json.status >= 300) {
        console.log('找不到國家資訊 QQ');
      } else {
        for (let i = 0; i < json.length; i += 1) {
          const { name, capital, callingCodes } = json[i];
          const currencies = json[i].currencies[0].code;
          console.log('============', '\n', `國家：${name}`, '\n', `首都：${capital}`, '\n', `貨幣：${currencies}`, '\n', `國碼：${callingCodes}`);
        }
      }
    }
  });
} else {
  console.log('請輸入欲查詢的國名或部分國名！');
}
