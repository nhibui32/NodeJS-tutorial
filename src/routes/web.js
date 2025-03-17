// khai báo route
const express = require('express');
const {getHomepage, getABC, hoidanit} = require('../controllers/homeControllers')
const router = express.Router();

//outer.method ('/route', handler)
    router.get('/', getHomepage)
  
  // su dung template engine voi nodejs 
  router.get('/abc',getABC)
  
  router.get('/hoidanit', hoidanit)

module.exports = router; // export default