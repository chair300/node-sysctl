# node-sysctl

Simple system and OS information library for [node.js][nodejs-url]


## Quick Start

Lightweight node library for sysctl to access all system information via the unix sysctl command - no npm dependencies.

### Installation

```bash
$ npm install sysctl --save
```

### Usage


```js
const sys = require('sysctl');

sys.all(function(data){
  console.log('All sysctl information:');
	console.log(data);
});
```

## News and Changes

### Latest Activity

(last major and minor version releases)
- Version 1.0.1: initial check-in
- ...

You can find all changes here: [detailed changelog][changelog-url]

## Core concept

[Node.js][nodejs-url] comes with some basic system information, but I always wanted a little more. So I came up to write this
little wrapper library. This library is still work in progress. This version only supports platforms with sysctl installed.

If you have comments, suggestions & reports, please feel free to contact me!



## Reference

### Function Reference and OS Support

#### 1. General

| Function        | Result object | Linux | OSX | BSD | Comments |
| --------------- | ----- | ----- | ---- | ------- | -------- |
| sys.all() | {...} | X | X | X | all available sysctl info |
#| sys.type(array) | {...} | X | X | X | all types in array as requested info, assuming sysctl supports |
#| sys.type(sting) |  {...} | X | X | X | requested sysctl type info |
#| sys.item(string) | string | X | X | X | e.g. Intel (from "processor-manufacturer") |


```js
const sys = require('sysctl');


sys.all(function(data){
  console.log(data);
});
```
#sys.item('kern.ostype', function(data) {
#	console.log('kern.ostype :'+data);
#});

#dmi.type(['kern','net'],function(data){
#	console.log('System kernel and net contains:');
#	console.log(data)
#});
#```
## Known Issues

No known issues at this time, mac osx might not work as expected

#### sysctl install

to use this code you need to install or verify sysctl is installed on the system and is available to run by the node user


## Finding new issues

I am happy to discuss any comments and suggestions. Please feel free to contact me if you see any possibility of improvement!


## Comments

If you have ideas or comments, please do not hesitate to contact me.


Happy probing!

Sincerely,

Christopher Harrison, [Great Lakes SAN](http://glsan.com)

## Credits

Written by Christopher Harrison [chair300](https://github.com/chair300)

#### Contributers


## Copyright Information

Linux is a registered trademark of Linus Torvalds, OS X is a registered trademark of Apple Inc.,
Windows is a registered trademark of Microsoft Corporation. Node.js is a trademark of Joyent Inc.,
Intel is a trademark of Intel Corporation, AMD is a trademark of Advanced Micro Devices Inc., Raspberry Pi is a trademark of the Raspberry Pi Foundation,
Debian is a trademark of the Debian Project, Ubuntu is a trademark of Canonical Ltd., Docker is a trademark of Docker, Inc.
All other trademarks are the property of their respective owners.

## License [![MIT license][license-img]][license-url]

>The [`MIT`][license-url] License (MIT)
>
>Copyright &copy; 2017-2017 Christopher Harrison, [Great Lakes SAN](http://glsan.com).
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.
>
>Further details see [LICENSE](LICENSE) file.


[npm-image]: https://img.shields.io/npm/v/systeminformation.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sysctl
[downloads-image]: https://img.shields.io/npm/dm/systeminformation.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/sysctl

[license-url]: https://github.com/chair300/node-sysctl/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[npmjs-license]: https://img.shields.io/npm/l/systeminformation.svg?style=flat-square
[changelog-url]: https://github.com/chair300/node-sysctl/blob/master/CHANGELOG.md
[caretaker-url]: https://github.com/chair300

[nodejs-url]: https://nodejs.org/en/

[issues-url]: https://github.com/chair300/sysctl/issues
