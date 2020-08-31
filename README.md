# General Script loader

## About the code
This snippet is for loading different scripts into the page. Use commas to separate scripts to load.

## How to use

```
var l = new Loader();
l.require(
    [
    "url_1", 
    "url_2"
    ], 
function() {
    log('All Scripts Loaded');
});
```


