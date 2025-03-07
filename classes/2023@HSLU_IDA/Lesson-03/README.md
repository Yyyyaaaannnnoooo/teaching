# Adding ML to Web 

> Extensions works only with chrome

1. disable source maps in chrome https://bobbyhadz.com/blog/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension
2. In chrome we need manifest version 3
```JSON
{
  "manifest_version": 3,
  "name": "p5",
  "version": "1.0",
  "description": "Adds a machine learning to a sketch on top of webpage",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["p5.min.js", "/ml/ml5.min.js","ml-scripts.js"]
    }
  ]
}
```
