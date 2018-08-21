---
layout: default
title: Concept
---
## Rule Engine

Software component used to execute business rule. The rule engine uses two major entities:

* a Ruleset: The set of rules that are processed by the rule engine, and rule execution flow information.
* an object set: The set of objects to be treated by rules.

A rule engine is executing a cycle consisting of three action states: match rules, select rules, and execute rules until there is no more rule to execute.

The rule engine evaluates the conditions of rules in the ruleset against the objects to determine (match) which rules are eligible to be executed. During execution, the engine collects all eligible rules in an “agenda”.

The object set is referenced in the engine’s working memory, which also contains the current state of the objects which lead to the current rules in the agenda.

All objects are examined by all rules. The effects of the execution are to create new data, or to modify existing ones.
The agenda  is a logical workspace where rule instances that have conditions matching objects in the working memory are put. There can be several rule instances for the same rule. When all the candidate rule are matched the engine turns to the agenda for rule execution.

One execution mode is the RetePlus algorithm used to match many patterns with many objects, it helps to minimize the number of rules and conditions that need to be evaluated, computes which rules should be executed, and identifies in which order these rules should be fired.

Rules engine is designed to be complete, and ensures that the effects of one rule execution (or firing) is propagated so that everything that can be inferred is done in one run.
The power of rule engines comes from the fact that complex behaviors result from simple rules, this is known as rule chaining. This is a major change in the programming model developer used to have.There is no more static control structure of the program where function is calling one another, rules are “communicating” with other rule only by way of the data. This is a data change that trigger potential rule execution. Rules are not executed sequentially and it is not always possible to determine through inspection of a set of rules which rule will be executed first or cause the inference engine to terminate.
