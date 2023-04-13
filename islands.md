# Islands

Write a program that reads stdin with these properties:

- Every line ends with a newline character.
- Every line consists of an arbitrary sequence of tildes ("`~`") and carets ("`^`").
- The final line of input is terminated by a newline character.

This input represents a rectangular section of a map. Each `~` represents water, and
each `^` represents land. One or more contiguous `^`s represents an island, with
contiguity defined as horizontal or vertical (but _not_ diagonal) adjacency.

## Examples

### One Island

```
~~~~~
~~^^~
~~^~~
```

### Two Islands

```
~^~~~~^
```

### Three Islands

```
^~~~~
~^~~~
^~~~~
~~~~~
```

## Goal

Your program should take as input a map as defined above, and output the area
of the largest island. If two or more islands have the same area, it should
only output a single area. If there are no errors, it should return an exit
code of 0 whether or not the map contained any islands.

### Sample Input

A file named map.txt:

```
~~^~~~
~~~^~~
~~~^~~
```

### Sample Command and Output

```
$ islands < map.txt
2
```

## Submission Guidelines

Send a link to a GitHub project or gzipped package by email, including a
`README` with any necessary installation or execution instructions.
