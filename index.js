var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;

var file = process.argv[2];
var name = process.argv[3];
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
//var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Test', swagger: swagger });
var angularjsSourceCode = CodeGen.getAngularCode({ className: name, swagger: swagger });
//var reactjsSourceCode = CodeGen.getReactCode({ className: 'Test', swagger: swagger });
//var tsSourceCode = CodeGen.getTypescriptCode({ className: 'Test', swagger: swagger, imports: ['../../typings/tsd.d.ts'] });
//console.log(nodejsSourceCode);
console.log(angularjsSourceCode);
//console.log(reactjsSourceCode);
//console.log(tsSourceCode);
