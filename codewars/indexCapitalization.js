/* Freestyle Sparring
Take turns remixing and refactoring others code through Kumite
COMMUNITY
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
ABOUT
Docs
Learn about all of the different aspects of Codewars
a-maffei Avatar
6 kyu
158
7 kyu
Indexed capitalization
1004390% of 1,1142,187 of 6,499KenKamau2 Issues Reported
 JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Past Solutions
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck! */

function capitalize(s, arr) {
  return s
    .split("")
    .map((el, index) => (arr.includes(index) ? el.toUpperCase() : el))
    .join("");
}
