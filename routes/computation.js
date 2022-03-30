var express = require('express');
var router = express.Router();

var x;
  var random = Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }

  res.render('computation', {
    title: 'Computing',
    value1: `Math.hypot() applied to ` + x + ` is ${Math.hypot(x,x).toFixed(2)}`,
    value2: `Math.ceil() applied to ` + x + ` is ${Math.ceil(x)}`,
    value3: `Math.clz32() applied to ` + x + ` is ${Math.clz32(x).toFixed(2)}`,
  });


module.exports = router;
