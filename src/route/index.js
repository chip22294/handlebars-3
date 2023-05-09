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

router.get('/pr', function (req, res) {
  res.render('products', {
    layout: 'default',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      isAvailable: false,
    },
  })
})

router.get('/uinfo', function (req, res) {
  res.render('uinfo', {
    layout: 'default',
    user: {
      name: 'Іван',
      email: 'ivan@example.com',
      phone: '123-456-7890',
      balance: 0,
    },
  })
})

module.exports = router
