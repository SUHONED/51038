grammar Declaraciones;

//gramatica




declaraciones
    : declaracion
    | declaraciones declaracion
    ;

declaracion
    : tipo identificador '(' parametros? ')' '{' cuerpo? '}'
    ;

TIPO_INT: 'int';
TIPO_FLOAT: 'float';
TIPO_CHAR: 'char';

tipo
    : TIPO_INT
    | TIPO_FLOAT
    | TIPO_CHAR
    ;

parametros
    : parametro (',' parametro)*
    ;

parametro
    : tipo identificador
    ;

cuerpo
    : instruccion+
    ;

instruccion
    : retorno
    ;

retorno
    : 'return' expresion ';'
    ;

expresion
    : termino
    ;

termino                                     
    : termino '*' factor           
    | termino '/' factor            
    | factor
    ;

factor
    : '(' expresion ')'           
    | INT
    | identificador
    ;

identificador
    : IDENT
    ;

// lexemas
IDENT
    : LETRA (LETRA | DIGITO)*
    ;

fragment LETRA
    : [a-zA-Z]
    ;

fragment DIGITO
    : [0-9]
    ;

INT                                             
    : DIGITO+
    ;

// Ignorar espacios en blanco y saltos de línea
WS
    : [ \t\r\n]+ -> skip
    ;

