var dedent = require('dedent-js');
var dict = require('collections/dict');

var javascriptDict = new Dict();
var test = "attonsion";

javascriptDict.add("Flip An Image", dedent(`@mixin scrollbars($size, $foreground-color, $background-color: mix($foreground-color, white,  50%)) {
  // For Google Chrome
  &::-webkit-scrollbar {
    width:  $size;
    height: $size;
  }

  &::-webkit-scrollbar-thumb {
    background: $foreground-color;
  }

  &::-webkit-scrollbar-track {
    background: $background-color;
  }

  // For Internet Explorer
  & {
    scrollbar-face-color: $foreground-color;
    scrollbar-track-color: $background-color;
  }
}`));

export { javascriptDict, test };




