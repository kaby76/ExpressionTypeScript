import ExpressionVisitor from "./ExpressionVisitor.js";
import { StartContext } from "./ExpressionParser.js";
import { ExpressionContext } from "./ExpressionParser.js";
import { MultiplyContext } from "./ExpressionParser.js";
import { DivideContext } from "./ExpressionParser.js";
import { AddContext } from "./ExpressionParser.js";
import { SubtractContext } from "./ExpressionParser.js";
import { NumberContext } from "./ExpressionParser.js";

export class MyVisitor extends ExpressionVisitor<number> {

  public visitStart = (ctx: StartContext): number => {
    return this.visit(ctx.children[0]);
  }

  public visitExpression = (ctx: ExpressionContext): number => {
    var exp = ctx.expression();
    if (exp === null)
      return this.visit(ctx.children[0]);
    else
      return this.visit(ctx.children[1]);
  }

  public visitMultiply = (ctx: MultiplyContext): number => {
    return this.visit(ctx.expression(0)) * this.visit(ctx.expression(1));
  }

  public visitAdd = (ctx: AddContext): number => {
    return this.visit(ctx.expression(0)) + this.visit(ctx.expression(1));
  }

  public visitNumber = (ctx: NumberContext): number => {
    return Number.parseInt(ctx.NUMBER().getText());
  }
}

