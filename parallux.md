---
layout: plugin
title: Parallux jQuery Plugin
---

# jQuery Parallux

Parallax effect with esteroids. Jquery plugin optimized, cross browser and responsive. Oh, it works with all content types: background images, videos, text, images, slick slider and more.


+ [Demos](#demos)
+ [Usage](#usage)
+ [Settings](#settings)
+ [Features](#features)
+ [Github Project](#features)
+ [Download](#features)


## Demos
<a href="/demo-1">Using `<img>` tags</a>  
<a href="/demo-2">Using background images (better performance)</a>

<a name="usage"></a>

## Usage

1. Just add a link to the css file in your `<head>`:

{% highlight js %}
<link rel="stylesheet" href="../dist/jquery.parallux.min.css">
{% endhighlight %}

2. Then, before your closing `<body>` tag add:

{% highlight js %}
<script src="dist/jquery.min.js"></script>  
<script src="dist/jquery.parallux.min.js"></script>
{% endhighlight %}

3. Set the HTML structure:

{% highlight html %}
<!-- Parallax Item -->
  <div class="parallux">

    <!-- Background layer -->
    <div class="parallux-bg">

    <!-- Div with parallax efect -->
    <div class="parallux-inner">

      <!-- Any HTML element -->

    </div>

  </div>

  <!-- Parallax foreground -->
</div> 
{% endhighlight %}

4. Call the plugin:

{% highlight js %}
$(document).ready(function() {
  $(".parallux").parallux();
});
{% endhighlight %}

## Install via Bower

```sh
# Bower
bower install --save parallux
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
fullHeight | boolean | true | Enable/disable full page parallax. Check `demo1.html` and `demo2.html` for full page, `demo3.html` for auto height parallax.
onMobile | string | scroll | Define the behavior of the plugin for mobiles. The `"scroll"` option will show the parallax section one under the other, `"fixed"` will simulate the parallax effect, but without transitions and the `parallax` option will apply the parallax effect, only recommended for latest devices.

## Features

### Tiny and simple
With ~6kb only, and just 4 options, the plugin is quite simple and straight forward

### Parallaxing everything

You can add all kind of content inside the background layer, it will works. I tested with videos, images (`<img>` tags), videos, background, sliders (slick slider), text, and it works just fine, thanks CSS3 translate3D hardware acceleration.

### Foreground and Background layers

Sometimes you may want to add some elements inside the parallax wrapper that use the normal scroll speed, so I added a layer for foreground elements and another one for the background layer (the one doing parallax effect). Check the demos and you will see what I'm talking about.

### Fallback for Old Browsers
If the browser don't support translate3D, I decided to not do parallax at all. But the layer will be fixed in the background. Is proved that the scroll performance animating with javascript `position-x` and `position-y` will be a problem.

### Fallback in Mobile
In the last version of Safari and Chrome for mobile, there is already support for translate3d! That is great, but still is not very smooth and depends a lot of the mobile hardware. For example, in Safari and iPhone 6 works great, but not in Chrome in a regular Android device, so I added an option (`enableMobile=false`) and it's up to you to enable parallax on mobile devices. Works great in last versions of Chrome and Safari.

### Crossbrowser issues resolved
You don't want to know how many crossbrowser issues I went trough while developing this plugin, but most of them are resolved using CSS hacks and scroll improvements, thanks to [StackOverflow](stackoverflow.com/users/670377/tom-sarduy). 

## Contributing

Create a pull request, issue or send me a message [@TomSarduy](https://twitter.com/TomSarduy)

## License

[Apache License](https://github.com/tomsarduy/parallux/blob/master/LICENSE) © Tom Sarduy

