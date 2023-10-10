import graph from "./images/graph.png";
import primes from "./images/prime.jpeg";
import sort from "../homeComponents/images/sort.png";
import recursive from "../homeComponents/images/recursive sorting.png";
import queen from "./images/queen.png";
import binSearch from "./images/binaryTree.png";
import convex from './images/convexHull.png';
import puzzle from './images/Puzzle.jpg';
import turing from './images/turing.jpg';
import Recursion from './images/Recursion.png';

export function getDetails(){
   return [
       {
           id:1,
           title:"Path Finder",
           description:"Visualize graph algorithms Like Dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
           route:"/graph",
           img:Recursion
       },
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different Sorting Algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different Recursive Sorting Algorithms",
           route:"/recursivesort",
           img:recursive
       },
       {
           id:5,
           title:"N Queen",
           description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
           route:"/nqueen",
           img:queen
       },
       {
           id:6,
           title:"Turing Machine",
           description:"A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules",
           route:"/turing",
           img:turing
       },
       {
           id:7,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than Brute force",
           route:"/prime",
           img:primes
       },
       {
           id:8,
           title:"Convex Hull",
           description:"The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
           route:"/convexhull",
           img:convex
       },
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       },
       {
           id:10,
           title:"15 Puzzle",
           description:"The 15 puzzle is a sliding puzzle having 15 square tiles numbered 115 in a frame that is 4 tiles high and 4 tiles wide, leaving one unoccupied tile position",
           route:"/15puzzle",
           img:puzzle
       }

   ]
}