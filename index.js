console.log("babel plugin for testus");

module.exports = function (babel) {
  const { types } = babel;
  // console.log('types', types);
  return {
    name: 'babel-plugin-testus',
    visitor: {
      Program(path) {
        // console.log('node', path.node);
        path.node.body.forEach((node) => {
          const { leadingComments, type } = node;
          // console.log('leadingComments', leadingComments)
          if(leadingComments[0].value.trim() == '@testus') {
            // If the @testus symbol is identified
            if(type == 'FunctionDeclaration') {
leadingComments[0].value = `
/**
 * @testus 
 * @name ${node.id}
`
+
node.params.map(m => `
* @param ${m.name}
`)
+
`
* @testus
 */              
`
            } else if(type == 'VariableDeclaration') {
              const declaration = node.declarations[0];
              leadingComments[0].value = `
/**
 * @testus 
 * @name ${declaration.id.name}
`
+
declaration.init.params.map(m => `
* @param ${m.name}
`)
+
`
* @testus
 */              
`
            }
          }
        })
      }
    },
  };
};
