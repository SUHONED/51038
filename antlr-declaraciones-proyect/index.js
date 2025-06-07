import fs from 'fs';
import antlr4 from 'antlr4';
import DeclaracionesLexer from './generated/DeclaracionesLexer.js';
import DeclaracionesParser from './generated/DeclaracionesParser.js';

let tokenFile = fs.readFileSync('./generated/Declaraciones.tokens', 'utf-8');
let tokenMap = {};
let input = fs.readFileSync('input.txt', 'utf-8');
let chars = new antlr4.InputStream(input);
let lexer = new DeclaracionesLexer(chars);
let tokens = new antlr4.CommonTokenStream(lexer);
let parser = new DeclaracionesParser(tokens);

tokenFile.split(/\r?\n/).forEach(line => {
  if (line.trim() === '') return;
  let [name, value] = line.split('=');
  tokenMap[parseInt(value)] = name;
});

let tree = parser.declaraciones();
if (parser.syntaxErrorsCount > 0) {
  console.error('\nEntrada invalida: se encontraron errores de sintaxis en la entrada.');
  
}else{
    console.log("\nEntrada valida");
    console.log("\nArbol de derivacion:");
    console.log(tree.toStringTree(parser.ruleNames));
    
    console.log('\nTabla de lexemas - tokens:');
    console.log('              | Lexema         | Token');
    console.log('             ------------------------------------');
    
    tokens.tokens.forEach(token => {
        if (token.type !== -1) { // ignorar EOF
            let tokenName = lexer.symbolicNames?.[token.type]
                  || lexer.literalNames?.[token.type]
                  || tokenMap[token.type]
                  || `TokenType(${token.type})`;
    
    
            if (!tokenName) {
                // Si no hay nombre simbólico ni literal, usá directamente el número como fallback
                tokenName = `Desconocido(${token.type})`;
            }
    
            console.log(
                `              ` +
                `| ${(token.text.padEnd(15))}-->`+
                `${tokenName}`
            );
        }
    });
    
    
}

console.log('\nEntrada original:');
console.log(input);




