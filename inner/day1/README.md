# Day 1 - JS Drumkit

## How we played a sound with a button press
- data attributes, are custom properties that allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes.
  - we created a data-key attribute where we set the keycodes of certain letters on our keyboard (asdfghjkl) and passed that to our query selector dynamically using tagged template literals from ES6

  - the data-key attributes were put on the corresponding sounds and divs to tie them together and figure out which div to animate.
