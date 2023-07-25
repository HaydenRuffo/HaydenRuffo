---
layout: page
title: DOSSIP
description: Offline social game simulator ala Second Life, VRChat, and Worlds.com.
img: assets/img/DossipPicture1.png
importance: 1
category: work
---

Looking to chat with some old friends, or maybe even meet some new ones? DOSSIP.net used to be the only place where you could chat to friends in stunning 3D! 
A three-dimensional "Metaverse-like" from the past, available NOW in the present.
* Stunning retro~ 3D graphix straight from late 80s 90s CGI.
* A chatbox with which you can chat to other Dossip users!
* Customize your Dossiper in cool funky fasion!.
* ~~Online!~~ 
 
In DOSSIP you can be who you want to be, chat to complete strangers, roam and explore a 3D World in the most advanced graphics late 90s had to offer.



<iframe width="560" height="315" src="https://www.youtube.com/embed/g-b2TCUNsoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Originally made in roughly a month for the <a href="https://itch.io/jam/death-of-an-mmo-game-jam">Dying MMO Game Jam</a>.</p>.
I was responsible for design, programming, art, animations and sounds. A friend and my twin brother both contributed sprites to the project. The character meshes and textures are from opengameart.org and some shader features like the affine mapping that you see on the characters were created by DaveFace.

<iframe src="https://itch.io/embed/1391270?linkback=true&amp;border_width=0&amp;bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636" width="550" height="165" frameborder="0"><a href="https://haid.itch.io/dossip">DOSSIP.net by HAID</a></iframe>

The game was made in Unreal 4.27, and a large effort was made to reduce the graphics of the engine as much as possible so it appears to play on 90s DOS based PCs (hence the name). I'm very proud of its successes for such a small game.

Some fun facts, The usernames were created by mashing together two databases. One that consisted of random online usernames scraped from various websites and another of just weird/funny words grabbed from listicals.

The large amount of chat text was crowdsourced by myself and my friends, the goal was to try and be bizzare.

There were plans to include actual online chat functionality and it is mostly working in a development build however I don't want to have to moderate or maintain such a thing so I have no plans to implement it further.

<iframe src="" data-src="https://www.youtube-nocookie.com/embed/ZsWZ2fpZ20k?autoplay=0&amp;rel=0&amp;loop=0&amp;controls=1&amp;cc_load_policy=0" allowfullscreen="1"></iframe>

    ---
    To give your project a background in the portfolio page, just add the img tag to the front matter like         so:
    ---
    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}
