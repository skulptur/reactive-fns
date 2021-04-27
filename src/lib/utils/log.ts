import forEach from "callbag-for-each";
import {Source} from "callbag";

/**
 * log
 * --------------
 *
 * Shortcut for forEach((data) => { console.log(data) })
 */

export const log = <T>(res:Source<T>) => forEach<T>(((...args) => console.log(...args)))(res)