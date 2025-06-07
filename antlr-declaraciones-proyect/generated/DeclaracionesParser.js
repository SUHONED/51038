// Generated from Declaraciones.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DeclaracionesListener from './DeclaracionesListener.js';
import DeclaracionesVisitor from './DeclaracionesVisitor.js';

const serializedATN = [4,1,15,98,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,1,1,1,1,1,1,1,3,1,39,8,1,1,1,1,1,1,
1,3,1,44,8,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,5,3,53,8,3,10,3,12,3,56,9,3,1,4,
1,4,1,4,1,5,4,5,62,8,5,11,5,12,5,63,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,83,8,9,10,9,12,9,86,9,9,1,10,1,10,1,
10,1,10,1,10,1,10,3,10,94,8,10,1,11,1,11,1,11,0,2,0,18,12,0,2,4,6,8,10,12,
14,16,18,20,22,0,1,1,0,10,12,94,0,24,1,0,0,0,2,34,1,0,0,0,4,47,1,0,0,0,6,
49,1,0,0,0,8,57,1,0,0,0,10,61,1,0,0,0,12,65,1,0,0,0,14,67,1,0,0,0,16,71,
1,0,0,0,18,73,1,0,0,0,20,93,1,0,0,0,22,95,1,0,0,0,24,25,6,0,-1,0,25,26,3,
2,1,0,26,31,1,0,0,0,27,28,10,1,0,0,28,30,3,2,1,0,29,27,1,0,0,0,30,33,1,0,
0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,31,1,0,0,0,34,35,3,4,2,0,
35,36,3,22,11,0,36,38,5,1,0,0,37,39,3,6,3,0,38,37,1,0,0,0,38,39,1,0,0,0,
39,40,1,0,0,0,40,41,5,2,0,0,41,43,5,3,0,0,42,44,3,10,5,0,43,42,1,0,0,0,43,
44,1,0,0,0,44,45,1,0,0,0,45,46,5,4,0,0,46,3,1,0,0,0,47,48,7,0,0,0,48,5,1,
0,0,0,49,54,3,8,4,0,50,51,5,5,0,0,51,53,3,8,4,0,52,50,1,0,0,0,53,56,1,0,
0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,7,1,0,0,0,56,54,1,0,0,0,57,58,3,4,2,0,
58,59,3,22,11,0,59,9,1,0,0,0,60,62,3,12,6,0,61,60,1,0,0,0,62,63,1,0,0,0,
63,61,1,0,0,0,63,64,1,0,0,0,64,11,1,0,0,0,65,66,3,14,7,0,66,13,1,0,0,0,67,
68,5,6,0,0,68,69,3,16,8,0,69,70,5,7,0,0,70,15,1,0,0,0,71,72,3,18,9,0,72,
17,1,0,0,0,73,74,6,9,-1,0,74,75,3,20,10,0,75,84,1,0,0,0,76,77,10,3,0,0,77,
78,5,8,0,0,78,83,3,20,10,0,79,80,10,2,0,0,80,81,5,9,0,0,81,83,3,20,10,0,
82,76,1,0,0,0,82,79,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,
19,1,0,0,0,86,84,1,0,0,0,87,88,5,1,0,0,88,89,3,16,8,0,89,90,5,2,0,0,90,94,
1,0,0,0,91,94,5,14,0,0,92,94,3,22,11,0,93,87,1,0,0,0,93,91,1,0,0,0,93,92,
1,0,0,0,94,21,1,0,0,0,95,96,5,13,0,0,96,23,1,0,0,0,8,31,38,43,54,63,82,84,
93];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DeclaracionesParser extends antlr4.Parser {

    static grammarFileName = "Declaraciones.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "','", "'return'", 
                            "';'", "'*'", "'/'", "'int'", "'float'", "'char'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "TIPO_INT", "TIPO_FLOAT", "TIPO_CHAR", 
                             "IDENT", "INT", "WS" ];
    static ruleNames = [ "declaraciones", "declaracion", "tipo", "parametros", 
                         "parametro", "cuerpo", "instruccion", "retorno", 
                         "expresion", "termino", "factor", "identificador" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DeclaracionesParser.ruleNames;
        this.literalNames = DeclaracionesParser.literalNames;
        this.symbolicNames = DeclaracionesParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.declaraciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    declaraciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	declaraciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new DeclaracionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, DeclaracionesParser.RULE_declaraciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.declaracion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new DeclaracionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, DeclaracionesParser.RULE_declaraciones);
	                this.state = 27;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 28;
	                this.declaracion(); 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DeclaracionesParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.tipo();
	        this.state = 35;
	        this.identificador();
	        this.state = 36;
	        this.match(DeclaracionesParser.T__0);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0)) {
	            this.state = 37;
	            this.parametros();
	        }

	        this.state = 40;
	        this.match(DeclaracionesParser.T__1);
	        this.state = 41;
	        this.match(DeclaracionesParser.T__2);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 42;
	            this.cuerpo();
	        }

	        this.state = 45;
	        this.match(DeclaracionesParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DeclaracionesParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DeclaracionesParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.parametro();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 50;
	            this.match(DeclaracionesParser.T__4);
	            this.state = 51;
	            this.parametro();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DeclaracionesParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.tipo();
	        this.state = 58;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DeclaracionesParser.RULE_cuerpo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.instruccion();
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DeclaracionesParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DeclaracionesParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(DeclaracionesParser.T__5);
	        this.state = 68;
	        this.expresion();
	        this.state = 69;
	        this.match(DeclaracionesParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DeclaracionesParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.termino(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, DeclaracionesParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 84;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 82;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, DeclaracionesParser.RULE_termino);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 77;
	                    this.match(DeclaracionesParser.T__7);
	                    this.state = 78;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, DeclaracionesParser.RULE_termino);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 80;
	                    this.match(DeclaracionesParser.T__8);
	                    this.state = 81;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 86;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DeclaracionesParser.RULE_factor);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.match(DeclaracionesParser.T__0);
	            this.state = 88;
	            this.expresion();
	            this.state = 89;
	            this.match(DeclaracionesParser.T__1);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(DeclaracionesParser.INT);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.identificador();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DeclaracionesParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(DeclaracionesParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DeclaracionesParser.EOF = antlr4.Token.EOF;
DeclaracionesParser.T__0 = 1;
DeclaracionesParser.T__1 = 2;
DeclaracionesParser.T__2 = 3;
DeclaracionesParser.T__3 = 4;
DeclaracionesParser.T__4 = 5;
DeclaracionesParser.T__5 = 6;
DeclaracionesParser.T__6 = 7;
DeclaracionesParser.T__7 = 8;
DeclaracionesParser.T__8 = 9;
DeclaracionesParser.TIPO_INT = 10;
DeclaracionesParser.TIPO_FLOAT = 11;
DeclaracionesParser.TIPO_CHAR = 12;
DeclaracionesParser.IDENT = 13;
DeclaracionesParser.INT = 14;
DeclaracionesParser.WS = 15;

DeclaracionesParser.RULE_declaraciones = 0;
DeclaracionesParser.RULE_declaracion = 1;
DeclaracionesParser.RULE_tipo = 2;
DeclaracionesParser.RULE_parametros = 3;
DeclaracionesParser.RULE_parametro = 4;
DeclaracionesParser.RULE_cuerpo = 5;
DeclaracionesParser.RULE_instruccion = 6;
DeclaracionesParser.RULE_retorno = 7;
DeclaracionesParser.RULE_expresion = 8;
DeclaracionesParser.RULE_termino = 9;
DeclaracionesParser.RULE_factor = 10;
DeclaracionesParser.RULE_identificador = 11;

class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_declaraciones;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_tipo;
    }

	TIPO_INT() {
	    return this.getToken(DeclaracionesParser.TIPO_INT, 0);
	};

	TIPO_FLOAT() {
	    return this.getToken(DeclaracionesParser.TIPO_FLOAT, 0);
	};

	TIPO_CHAR() {
	    return this.getToken(DeclaracionesParser.TIPO_CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_cuerpo;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_retorno;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_factor;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	INT() {
	    return this.getToken(DeclaracionesParser.INT, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeclaracionesParser.RULE_identificador;
    }

	IDENT() {
	    return this.getToken(DeclaracionesParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeclaracionesListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeclaracionesVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DeclaracionesParser.DeclaracionesContext = DeclaracionesContext; 
DeclaracionesParser.DeclaracionContext = DeclaracionContext; 
DeclaracionesParser.TipoContext = TipoContext; 
DeclaracionesParser.ParametrosContext = ParametrosContext; 
DeclaracionesParser.ParametroContext = ParametroContext; 
DeclaracionesParser.CuerpoContext = CuerpoContext; 
DeclaracionesParser.InstruccionContext = InstruccionContext; 
DeclaracionesParser.RetornoContext = RetornoContext; 
DeclaracionesParser.ExpresionContext = ExpresionContext; 
DeclaracionesParser.TerminoContext = TerminoContext; 
DeclaracionesParser.FactorContext = FactorContext; 
DeclaracionesParser.IdentificadorContext = IdentificadorContext; 
