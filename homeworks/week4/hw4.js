
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const BASE_URL = 'https://api.twitch.tv/kraken/games/top';
const CLIENT_ID = 'wcyphxfiihewkh1wwxi8sxx2nx0do5';

const options = {
  url: BASE_URL,
  headers: {
    method: 'GET',
    'Client-ID': CLIENT_ID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

const callback = (error, response, body) => {
  if (error) {
    console.log('出現錯誤！錯誤是：', error);
  } else if (response.statusCode >= 200 && response.statusCode < 300) {
    try {
      const data = JSON.parse(body);
      const { top } = data;
      for (let i = 0; i < top.length; i += 1) {
        const { viewers, game } = top[i];
        const { name } = game;
        console.log(viewers, name);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('HTTP 狀態碼：', response.statusCode);
  }
};

request(options, callback);
