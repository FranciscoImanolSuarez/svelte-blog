"use strict";

var fetch = require('node-fetch');

var fs = require('fs');

var postsObj = require('../routes/blog/_posts.json');

require('dotenv').config();

var API = process.env.GHOST_API;

var writeFile = function writeFile(obj) {
  var parseData = JSON.stringify(obj);
  fs.writeFileSync('./src/routes/blog/_posts.json', parseData);
  console.log('Datos guardados');
};

var fetchData = function fetchData() {
  var response, data, posts;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(API));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(data.posts.map(function (post) {
            return {
              "title": post.title,
              "html": post.html,
              "slug": post.slug,
              "createdAt": post.created_at,
              "id": post.id,
              "desc": post.excerpt,
              "tag": post.meta_title,
              "image": post.feature_image
            };
          }));

        case 8:
          posts = _context.sent;

          if (postsObj.length >= 15) {
            if (posts[0].title == postsObj[0].title) {
              postsObj.shift();
              postsObj.unshift([0]);
              writeFile(postsObj);
            } else {
              postsObj.unshift(posts[0]);
              writeFile(postsObj);
            }
          } else {
            writeFile(posts);
          }

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

fetchData();