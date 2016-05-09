## aframe-star-component

A Star component for [A-Frame](https://aframe.io).

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/andreasplesch/aframe-star-component/master/dist/aframe-star-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity star="exampleProp: exampleVal"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-star-component
```

Then register and use.

```js
require('aframe');
require('aframe-star-component');
```
