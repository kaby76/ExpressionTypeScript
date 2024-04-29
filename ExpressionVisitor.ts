// Generated from Expression.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { StartContext } from "./ExpressionParser";
import { ExpressionContext } from "./ExpressionParser";
import { MultiplyContext } from "./ExpressionParser";
import { DivideContext } from "./ExpressionParser";
import { AddContext } from "./ExpressionParser";
import { SubtractContext } from "./ExpressionParser";
import { NumberContext } from "./ExpressionParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExpressionParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ExpressionVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ExpressionParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `ExpressionParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ExpressionParser.multiply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiply?: (ctx: MultiplyContext) => Result;
	/**
	 * Visit a parse tree produced by `ExpressionParser.divide`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivide?: (ctx: DivideContext) => Result;
	/**
	 * Visit a parse tree produced by `ExpressionParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;
	/**
	 * Visit a parse tree produced by `ExpressionParser.subtract`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtract?: (ctx: SubtractContext) => Result;
	/**
	 * Visit a parse tree produced by `ExpressionParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

