---
layout: post
title:  "Do Lake Names Reflect Their Properties?"
date:   2025-02-01 12:00:00 +0100
categories: tech
description: A few months ago, I did a hike to a lake called "Lac Vert" (Green Lake) in France. It's a mountain lake located close to the Italian border. I found it remarkable how vividly green the lake was. Although the name describes its appearance well, I was still surprised.
image: /assets/img/lakes/lac-vert.jpg
---

<style>
    .color-block {
        width: 100%;
        min-width: 32px;
        height: 32px;
        display: block;
        text-align: center;
        line-height: 32px;
        margin: 0 auto;
    }

    td {
        padding: 6px 12px !important;
    }
</style>

A few months ago, I did a [hike](/travel/2024/lac-vert){:target="_blank"} to a lake called "Lac Vert" (Green Lake) in France. It's a mountain lake located close to the Italian border. I found it remarkable how vividly green the lake was. Although the name describes its appearance well, I was still surprised. This made me wonder: is it common for lakes to have appropriate names, reflecting their properties?

<center>
    <img src="/assets/img/lakes/lac-vert.jpg" />
    <p class="image-label">Lac Vert</p>
</center>

On the other hand, sometimes geographical names are misleading. I used to live in a city near Moscow called Dolgoprudny (meaning "Long Pond"). The city's name origin is not apparent upon visiting it and I think it's mildly misleading for a couple of reasons. First of all, the pond is located outside of the city bounds. Secondly, the dimensions of the "Long Pond" are 1100m x 150m, which is long, but not remarkably long. In fact, even if the pond was 100 times longer, it would still be unremarkable: there are tons of long bodies of water in the world, called rivers. The fact that it's a pond would've merely been a fun fact, like the fact that the Caspian Sea is actually a lake.

Anyways, I decided to find out how accurate are lake names, regarding color. I determined the 10 most common lake names and their average colors for different countries.

## Collecting data
> If data grew on trees, the world would be a forest

The required data isn't just lying out there in a thoughtfully prepared format. It is available, but you have to reach for it. I enjoy harvesting my data myself. I like my data freshly picked, unpackaged, unprocessed, in just the right quantity. Thankfully, as of this article, data is as ripe as ever, perfect for a nested JSON.

The recipe I am following today is simple:
1. Collect all lakes in a country, store their names and coordinates.
2. Determine and keep only the 10 most common lake names.
3. Determine the color of each lake by fetching satellite image data for each lake center.
4. Calculate the average color for each name.

For the first step, I used [Overpass Turbo](https://overpass-turbo.eu/){:target="_blank"} to collect all lakes in a country. The example query for France retrieves all nodes, ways and relations labeled as water bodies with "lac" (lake) in their name. I do not trust the "water: lake" tag on OSM, so instead filter by name, since niche labels are more likely to be missing. The output we need are the tags, center coordinates and let's grab the count too.
{% raw %}
```
[out:json];
{{geocodeArea:France}}->.searchArea;

(
  node["natural"="water"]["name"~"lac", i](area.searchArea);
  way["natural"="water"]["name"~"lac", i](area.searchArea);
  relation["natural"="water"]["name"~"lac", i](area.searchArea);
);
out tags center qt;

out count;
```
{% endraw %}

As a result, a total of 3067 French lakes are exported to a JSON, just the way I like it. 

<center>
    <img src="/assets/img/lakes/fr-lakes.png" style="width: 70%;" />
    <p class="image-label">Lakes of France</p>
</center>

For the next steps, I pull out my favourite and conviently appropriate tool, which is part of my everyday carry: TypeScript (I stopped using JS after a violent incident with a NaN). Determining the 10 most common lake names is straightforward, but what about the color? I decided to tackle it with the MapBox API, since it has a reasonable free tier. I fetched the satellite image tile for the zoomed-in region of each lake center and read a single pixel at the center of the tile, which should give us an idea of the lake's color. I'm not going to describe the [code](https://github.com/IvanLudvig/lake-colors){:target="_blank"} here, since all software developers become tired of seeing array manipulations even before starting their career while grinding leetcode, and they become tired of figuring out APIs and doing clumsy data transformations after. And everone else just doesn't care. Personally, I'm here for the lakes.

## Analysis

> At night all lakes are black

I determined the colors of all the 10 most common lake names, not only color-related ones. Thus, the expected column is accurate only for color-named lakes, being based on a naive interpretation of the name. For the rest, it provides a reference symbol to ease understanding.

#### France

| Name | Count | Expected | Average Color |
|:-------|:-----:|:-----:|:-----:|
| Noir (Black) | 41 | <span class="color-block" style="background-color: #000;"></span> | <span class="color-block" style="background-color: rgb(46,60,61);"></span> |
| Bleu (Blue) | 30 | <span class="color-block" style="background-color: rgb(100,150,200);"></span> | <span class="color-block" style="background-color: rgb(62,79,80);"></span> |
| Blanc (White) | 23 | <span class="color-block" style="background-color: #fff;"></span> | <span class="color-block" style="background-color: rgb(63,83,83);"></span> |
| Vert (Green) | 21 | <span class="color-block" style="background-color: rgb(50,150,50);"></span> | <span class="color-block" style="background-color: rgb(63,84,82);"></span> |
| Grand (Large) | 17 | <span style="font-size: 20px">LAC</span> | <span class="color-block" style="background-color: rgb(77,93,84);"></span> |
| Petit (Small) | 17 | <span style="font-size: 12px">lac</span> | <span class="color-block" style="background-color: rgb(61,77,76);"></span> |
| Rond (Round) | 12 | <span style="font-size: 20px">O</span> | <span class="color-block" style="background-color: rgb(49,61,64);"></span> |
| Grande Tempête (Great Storm) | 11 | <span>~~~</span> | <span class="color-block" style="background-color: rgb(94,105,112);"></span> |
| Long (Long) | 9 | <span>---------</span> | <span class="color-block" style="background-color: rgb(58,71,78);"></span> |
| Giaset | 9 | <span>?</span> | <span class="color-block" style="background-color: rgb(74,76,69);"></span> |

Four of the 10 most common lake names are related to a color. Black lakes are a little bit darker than other lakes. Blue, white and green lakes are not distinguishable from each other at all. All the lakes have a light-blue-greyish tint. 

#### Italy

| Name | Count | Expected | Average Color |
|:-------|:-----:|:-----:|:-----:|
| Nero (Black) | 42 | <span class="color-block" style="background-color: #000;"></span> | <span class="color-block" style="background-color: rgb(48,61,54);"></span> |
| Verde (Green) | 27 | <span class="color-block" style="background-color: rgb(50,150,50);"></span> | <span class="color-block" style="background-color: rgb(33,65,54);"></span> |
| Grande (Large) | 20 | <span style="font-size: 20px">LAGO</span> | <span class="color-block" style="background-color: rgb(34,51,41);"></span> |
| Lungo (Long) | 13 | <span>---------</span> | <span class="color-block" style="background-color: rgb(31,47,32);"></span> |
| Azzurro (Light Blue) | 12 | <span class="color-block" style="background-color: rgb(135,206,235);"></span> | <span class="color-block" style="background-color: rgb(84,113,93);"></span> |
| Scuro (Dark) | 10 | <span class="color-block" style="background-color: rgb(30,30,50);"></span> | <span class="color-block" style="background-color: rgb(39,57,48);"></span> |
| Bianco (White) | 9 | <span class="color-block" style="background-color: #fff;"></span> | <span class="color-block" style="background-color: rgb(82,112,91);"></span> |
| Dei Cigni (Of Swans) | 9 | <span style="font-family: serif">\_^ ^_</span> | <span class="color-block" style="background-color: rgb(17,44,38);"></span> |
| Gelato (Frozen) | 9 | <span>***</span> | <span class="color-block" style="background-color: rgb(37,49,49);"></span> |
| Piccolo (Small) | 8 | <span style="font-size: 12px">lago</span> | <span class="color-block" style="background-color: rgb(18,42,37);"></span> |

In Italy, we see five color-related names. Overall the lakes have a darker, greener and more contrasting colors. Black lakes are again the most common name by far. But this time, they are not darker than other lakes. The light blue and white lakes are noticeably lighter. A bit more common sense in Italy.

#### Russia

| Name | Count | Expected | Average Color |
|:-------|:-----:|:-----:|:-----:|
| Чёрное (Black) | 204 | <span class="color-block" style="background-color: rgb(0,0,0);"></span> | <span class="color-block" style="background-color: rgb(34,46,37);"></span> |
| Круглое (Round) | 187 | <span style="font-size: 20px">O</span> | <span class="color-block" style="background-color: rgb(38,49,40);"></span> |
| Долгое (Long) | 184 | <span>---------</span> | <span class="color-block" style="background-color: rgb(49,63,47);"></span> |
| Кривое (Curved) | 162 | <span>~</span> | <span class="color-block" style="background-color: rgb(51,66,45);"></span> |
| Белое (White) | 138 | <span class="color-block" style="background-color: #fff;"></span> | <span class="color-block" style="background-color: rgb(42,54,45);"></span> |
| Глубокое (Deep) | 112 | <span>\|...\|</span> | <span class="color-block" style="background-color: rgb(41,55,44);"></span> |
| Щучье (Pike) | 104 | <span>><></span> | <span class="color-block" style="background-color: rgb(34,46,40);"></span> |
| Глухое (Silent) | 90 | <span>...</span> | <span class="color-block" style="background-color: rgb(38,48,43);"></span> |
| Светлое (Light) | 88 | <span class="color-block" style="background-color: rgb(220,240,255);"></span> | <span class="color-block" style="background-color: rgb(41,53,45);"></span> |
| Большое (Large) | 88 | <span style="font-size: 20px">ОЗЕРО</span> | <span class="color-block" style="background-color: rgb(38,51,39);"></span> |

Again, the most common lake name is black. Average colors are remarkably consistent, all being dark green, noticeably darker than in France and Italy. This time, shape descriptions are more common, perhaps since every lake is the same color? Also, there are more than a hundred lakes swarming with fish: Pike! Food for thought.

#### Belarus

| Name | Count | Expected | Average Color |
|:-------|:-----:|:-----:|:-----:|
| Белае (White) | 48 | <span class="color-block" style="background-color: #fff;"></span> | <span class="color-block" style="background-color: rgb(26,42,30);"></span> |
| Чорнае (Black) | 43 | <span class="color-block" style="background-color: rgb(0,0,0);"></span> | <span class="color-block" style="background-color: rgb(25,37,31);"></span> |
| Святое (Holy) | 34 | <span>†</span> | <span class="color-block" style="background-color: rgb(39,53,46);"></span> |
| Доўгае (Long) | 34 | <span>---------</span> | <span class="color-block" style="background-color: rgb(30,45,34);"></span> |
| Глыбокае (Deep) | 18 | <span>\|...\|</span> | <span class="color-block" style="background-color: rgb(26,37,31);"></span> |
| Круглае (Round) | 17 | <span style="font-size: 20px">O</span> | <span class="color-block" style="background-color: rgb(28,39,31);"></span> |
| Глухое (Silent) | 14 | <span>...</span> | <span class="color-block" style="background-color: rgb(32,46,34);"></span> |
| Вялікае (Large) | 12 | <span style="font-size: 20px">ВОЗЕРА</span> | <span class="color-block" style="background-color: rgb(59,74,53);"></span> |
| Крывое (Curved) | 12 | <span>~</span> | <span class="color-block" style="background-color: rgb(43,57,44);"></span> |
| Бяздоннае (Bottomless) | 8 | <span>∞</span> | <span class="color-block" style="background-color: rgb(49,64,52);"></span> |

Unexpected: among the 10 most common lake names, only two refer to color, white and black. For the first time, white lakes are more common than black ones, but they are not even lighter. We can speculate that Belarusians have a tendency to call things "white", including their country, which means "White Rus". Although, in reality it's the opposite: Belarusian lakes are actually on average even darker than in Russia. The third most common name is "Holy", which came to my mind when I thought about the most common lake name in my country. Eight lakes are apparently bottomless. I'm not willing to verify this fact.

## Conclusion
> Let's gather around the Round Lake and talk

Lake names are not very accurate regarding color. 

Okay, I know you want to know it. Here is the color of the mentioned Lac Vert, extracted using my genius method of using the color of a single pixel from the satellite image. 
<div class="color-block" style="background-color: rgb(43,77,78); margin-bottom: 16px;">
</div>

Maybe single pixels are not very accurate too.

Pointless, really? Are you disappointed?
