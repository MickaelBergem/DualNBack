# Dual N Back

The Dual N Back is a method for improving your "fluid intelligence" designed by [Susanne M. Jaeggi et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2383929/) in 2008.

It consists of a "game" which trains your working memory.

## How to play

For now, only the Single N Back training is implemented.

You will start with N=2. A serie of red squares will appear sequentially, and you will have to push "POSITION MATCH" each time **the square shown at step M is in the same position at the square two steps before**, so at step M - N.

You will then have to remember the position of the last N=2 positions taken by the square.

## TODO

* auto-adjust the score depending on the result
* save the results somewhere
* display a graph of the results
* implement the Dual N Back
