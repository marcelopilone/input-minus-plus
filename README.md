# input-minus-plus
increase and decrease a input value
you can use this web component very simple.
The component has 3 Props: max(the max value of the input),min(the min value of input) and name(the name of the input).
Exampe of use component: 
```
    <input-minus-plus min=0 max=17 name='number'/>
```



# How to install in stenciljs
npm install https://github.com/marcelopilone/input-minus-plus

simply add in your main app.ts file:
```js
import 'input-min-plus';
```

then u will be able to use the tag <input-minus-plus> in any TSX file


# How to install directly for web browser
is hosted in npm so you can add the following script in HTML 

```html
<html>
<head>
  <script type='module' src='https://unpkg.com/input-min-plus@latest/dist/input-min-plus/input-min-plus.esm.js'></script>
</head>
<body>
    .....
</body>
```