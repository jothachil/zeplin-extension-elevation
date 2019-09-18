# Custom Shadow Elevation

To create a custom shadow for your project add your shadow values (color, spread, blur, etc..) for different elevation in shadow.js file.
``` js


// shadow.js

const dp1 = [{
    "spread": 0,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0.2
    },
    "offsetX": 0,
    "type": "outer",
    "offsetY": 1,
    "blurRadius": 3
}, {
    "spread": -1,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0.12
    },
    "offsetX": 0,
    "type": "outer",
    "offsetY": 2,
    "blurRadius": 1
}, {
    "spread": 0,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0.14
    },
    "offsetX": 0,
    "type": "outer",
    "offsetY": 1,
    "blurRadius": 1
}]

const dp2 = [{
    "spread": 0,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0.2
    },
    "offsetX": 0,
    "type": "outer",
    "offsetY": 1,
    "blurRadius": 5
}, {
    "spread": -2,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0.12
    },
    "offsetX": 0,
    "type": "outer",
    "offsetY": 3,
    "blurRadius": 1
}, {
    "spread": 0,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0.14
    },
    "offsetX": 0,
    "type": "outer",
    "offsetY": 2,
    "blurRadius": 2
}]

export { dp1,dp2 };
```
