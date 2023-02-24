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

# CSS Customizations
you can change CSS in your proyect doing something like this:

```css
  input-minus-plus{
    --input-width: 100px;
    --btn-width: 5em
  }
```

## --input-width
changes input width
defaults to "auto

## --btn-width
changes left and right button width
defaults to "auto


# Events
inpluschange

on change throws "inpluschange" event

you can listen to this event:

```html
  <input-minus-plus id="my-input" min=0 max=17 name='number'/>
```

```js
  const myInput = document.getElementById("my-input");
  myInput.addEventListener("inpluschange", (e) => console.log("inpluschange", e))
```

or you can use it this way:

```js
  myfunction(e){
    console.log("my funcion called", e);
  }
```

```html
  <input-minus-plus name='number' onInpluschange="myfunction()"/>
```

