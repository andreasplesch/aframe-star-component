## aframe-star-component

A Star component for [A-Frame](https://aframe.io). The component produces a flat star in the x-z plane. The outer points are on the unit circle. 
The component comes with a `<a-star\>` primitive for convenience. Chrome requires aframe > 0.2.0 for this component to function properly.

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|   points       | number  of points             |  3             |
| width | width of the arms | 0.3 |

Width should be larger than 0 and smaller than 1. A small width produces thin arms.

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
	<!-- for Chrome -->
  <!--script src="https://rawgit.com/aframevr/aframe/master/dist/aframe.min.js"></script-->
  <script src="https://rawgit.com/andreasplesch/aframe-faceset-component/master/dist/aframe-faceset-component.min.js"></script>
  <script src="https://rawgit.com/andreasplesch/aframe-star-component/master/dist/aframe-star-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity star="points: 23"></a-entity>
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
require('aframe-faceset-component');
require('aframe-star-component');
```
