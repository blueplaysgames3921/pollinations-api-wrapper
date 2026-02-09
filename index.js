/**
 * @file index.js
 * @description A lightweight utility for interacting with Pollinations.ai
 */

const BASE_URL = 'https://pollinations.ai/p/';

/**
 * Builds a sanitized Pollinations image URL
 * @param {string} prompt - The user's image description
 * @param {object} params - Optional settings (width, height, seed, model)
 */
function createPollinationsUrl(prompt, { width = 1024, height = 1024, seed = null, model = 'flux' } = {}) {
    const encodedPrompt = encodeURIComponent(prompt);
    let url = `${BASE_URL}${encodedPrompt}?width=${width}&height=${height}&model=${model}`;
    
    if (seed) {
        url += `&seed=${seed}`;
    }
    
    url += '&nologo=true';
    return url;
}

module.exports = { createPollinationsUrl };

