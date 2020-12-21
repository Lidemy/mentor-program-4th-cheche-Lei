

// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('request');

const api = 'https://lidemy-book-store.herokuapp.com/books';
const action = process.argv[2];
const params01 = process.argv[3];
const params02 = process.argv[4];

const getList = () => {
  request.get(`${api}?_limit=20`, (error, response, body) => {
    if (error) {
      console.log('發生錯誤！ ', error);
    } else {
      const json = JSON.parse(body);
      for (let i = 0; i < json.length; i += 1) {
        const bookId = json[i].id;
        const bookName = json[i].name;
        console.log(`${bookId} ${bookName}`);
      }
    }
  });
};

const getOneBook = () => {
  if (params01) {
    request.get(`${api}/${params01}`, (error, response, body) => {
      if (error) {
        console.log('發生錯誤！ ', error);
      } else {
        const json = JSON.parse(body);
        const bookId = json.id;
        const bookName = json.name;
        console.log(`${bookId} ${bookName}`);
      }
    });
  } else {
    console.log('如果使用 read 功能必須再輸入 id 數字喔！');
  }
};

const deleteOneBook = () => {
  if (params01) {
    request.delete(`${api}/${params01}`, (error) => {
      if (error) {
        console.log('發生錯誤！ ', error);
      } else {
        console.log('刪除成功！');
      }
    });
  }
};

const createOneBook = () => {
  if (params01) {
    request.post({
      url: `${api}`,
      form: {
        name: `${params01}`,
      },
    }, (error) => {
      if (error) {
        console.log('發生錯誤！ ', error);
      } else {
        console.log('新增成功！');
      }
    });
  } else {
    console.log('如果使用 create 功能必須再輸入書名喔！');
  }
};

const updateOneBook = () => {
  if (params01 && params02) {
    request.patch({
      url: `${api}/${params01}`,
      form: {
        name: `${params02}`,
      },
    }, (error) => {
      if (error) {
        console.log('發生錯誤！ ', error);
      } else {
        console.log('更新成功！');
      }
    });
  } else {
    console.log('如果使用 update 功能必須再輸入舊書名的 id 數字和想改的新書名喔！');
  }
};

switch (action) {
  case 'list':
    getList();
    break;
  case 'read':
    getOneBook();
    break;
  case 'delete':
    deleteOneBook();
    break;
  case 'create':
    createOneBook();
    break;
  case 'update':
    updateOneBook();
    break;
  default:
    break;
}
