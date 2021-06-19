const express = require('express');
const router = express.Router();
const apiKey = 'c6c0f2e2d17b112617984757232aca5f';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index');
  console.log(req.body.city);
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
})

module.exports = router;
