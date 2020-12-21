
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const api = 'https://api.twitch.tv/kraken/games/top';
const myClientId = 'wcyphxfiihewkh1wwxi8sxx2nx0do5';

const options = {
  url: api,
  headers: {
    method: 'GET',
    'Client-ID': myClientId,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

const callback = (error, response, body) => {
  if (error) {
    console.log('出現錯誤！錯誤是：', error);
  } else if (response.statusCode >= 200 && response.statusCode < 300) {
    const data = JSON.parse(body);
    const { top } = data;
    for (let i = 0; i < top.length; i += 1) {
      const { viewers, game } = top[i];
      const { name } = game;
      console.log(viewers, name);
    }
  } else {
    console.log('HTTP 狀態碼：', response.statusCode);
  }
};

request(options, callback);
