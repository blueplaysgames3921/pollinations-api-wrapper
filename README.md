# Pollinations API Wrapper 🚀

A simple, zero-dependency helper to generate clean image URLs for the Pollinations.ai platform. 

## Features
- Automatic URL encoding for complex prompts.
- Support for Flux and other Pollinations models.
- Custom seed and dimension handling.

## Usage
```javascript
const { createPollinationsUrl } = require('./index');

const url = createPollinationsUrl("A futuristic city in the clouds", {
    width: 1280,
    height: 720,
    seed: 12345
});

console.log(url);

