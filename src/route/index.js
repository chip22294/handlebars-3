const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'My Home page',
    text: 'Click me',
  })
})

router.get('/ul', function (req, res) {
  res.render('user-list', {
    layout: 'header',
    title: 'User list page',
    data: {
      userList: [
        {
          id: 5123,
          name: 'Ivan',
          isAdmin: true,
          balance: 5,
        },
        {
          id: 4598,
          name: 'Sasha',
          isAdmin: false,
          balance: 0,
        },
        {
          id: 1358,
          name: 'Kolya',
          isAdmin: true,
          balance: null,
        },
      ],
    },
  })
})

module.exports = router
