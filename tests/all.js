'use strict';
// ==================================================================================
// all.js
// ----------------------------------------------------------------------------------
// Description:   node sysctl test script
//                for Node.js
// Copyright:     (c) 2017 - 2018
// Author:        Christopher Harrison
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
//
var sys = require('../lib/sysctl');

sys.all(function (data){
  console.log(data);
  console.log(JSON.stringify(data, true, 4));
});
