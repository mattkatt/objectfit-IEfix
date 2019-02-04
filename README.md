# objectfit-IEfix - WIP
A simple js file that fixes the css Object-Fit rule on images in Internet Explorer

## Usage
When adding the CSS rules 'object-fit' and/or 'object-position' to an image, simply add the same rules as a font-family. The JS will then replace the instance of the image as a div with the same image as a background, and will apply the object- rules as background- rules.

Example: 

```css
font-family: 'object-fit:cover,object-position:center'
```

Object position is not required: the JS will set position to 'center' by default.