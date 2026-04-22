const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\HP\\.gemini\\antigravity\\brain\\8b3defa5-7a31-4b61-8225-a1587015fe29\\minimalist_charcoal_draped_figure_1776772558737.png";
const dest = "c:\\Users\\HP\\Documents\PROJECT\\4WARD\\public\\minimalist-hero.png";

try {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied image');
} catch (err) {
    console.error('Error copying image:', err);
}
