'use strict';
// ==================================================================================
// sysctl.js
// ----------------------------------------------------------------------------------
// Description:   node sysctl - library
//                for Node.js
// Copyright:     (c) 2017 - 2018
// Author:        Christopher Harrison
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================
//


const exec = require('child_process').exec;
const os = require('os');
let _platform = process.platform;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _sunos = (_platform === 'sunos');
//const util = require('util')

//module.run = function(){


var all = function(callback) {
  exec('export LC_ALL=C; /sbin/sysctl -a ; unset LC_ALL',{maxBuffer: 1024 * 10000}, function(error, stdout) {
    var obj={};
    if (!error) {
        let lines = stdout.toString().split('\n');
        var key;
        var val;
      for(var i = 0; i< lines.length;i++){
        var line;
        //console.log(lines[i]);
        if (_freebsd) {
          line = lines[i].split(' ',2);
          if(line[0].endsWith(':')){
            key = line[0].substring(0,line[0].length-1);
            if(line[1]!=undefined){
              val = line[1].trim();
            }
          }else{
            val += ','+lines[i].trim();
          }
        }
        if(_linux){
          line = lines[i].split(' = ',2);
            key = line[0].trim();
            if(line[1]!=undefined){
              line[1].trimmed;
              val = line[1].trim();
            }
        }
        if(_darwin){
          // need to look into this
        }
        if(isNaN(val)){
          val = val.trim();
        }else{
          val = Number(val);
        }
        obj[key]=val;
      }
      return callback(obj);
    }else{  // error with call
      console.log(error);
    }
  });
}
exports.all = all;

var type = function(data, callback) {
  var string = '';
  if (Array.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      string += ' -t ' + type[i];
    }
  } else {
    string = ' -t ' + type;
  }
  exec('export LC_ALL=C; sysctl ' + string + '; unset LC_ALL', function(error, stdout) {
    if (!error) {
      return callback(toObject(stdout));
    }
  });
}

exports.type = type;

var item = function(data, callback) {
  exec('export LC_ALL=C; sysctl -s ' + data + ' unset LC_ALL', function(error, stdout) {
    if (!error) {
      return callback(JSON.stringify({
        data: stdout
      }));
    }
  });
}

exports.item = item;

var cpu = function(callback) {
  exec('export LC_ALL=C; sysctl -t processor -t cache; unset LC_ALL', function(error, stdout) {
    if (!error) {
      return callback(toObject(stdout));
    }
  });
}
