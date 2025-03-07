---
layout: post
title:  "Extract Dominant Colors from Images using WebGPU"
date:   2025-03-01 12:00:00 +0100
categories: tech
description: A tiny zero-dependency browser package that extracts dominant color or color palette from an image using WebGPU API with various algorithms 
image: 
---

<style>
    .shield-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }

    .demo-link {
        height: 20px;
        display: flex;
        gap: 4px;
        background-color: #fff;
        border: 1px solid #51942a;
        color: #51942a !important;
        text-decoration: none !important;
        padding: 2px 4px;
        font-size: 14px;
        line-height: 16px;
        box-sizing: border-box;
    }

    .demo-link img {
        height: 100%;
    }
</style>


<div class="shield-container">
    <a
        href="https://npmjs.com/package/image-palette-webgpu"
        target="_blank"
    >
        <img
            src="https://img.shields.io/badge/NPM-cb3837?logo=npm&style=flat-square"
            alt="NPM"
        >
    </a>
    <a
        href="https://github.com/IvanLudvig/image-palette-webgpu"
        target="_blank"
    >
        <img
            src="https://img.shields.io/badge/GitHub-24292f.svg?logo=github&style=flat-square"
            alt="GitHub"
        >
    </a>
    <a
        href="/image-palette-webgpu"
        target="_blank"
        class="demo-link"
    >
        <img
            src="../favicon.ico"
            alt="demo"
        >
        demo
    </a>
</div>

<img src="/assets/img/image-palette-webgpu-demo.png" alt="image-palette-webgpu-demo" />
<br/>

[image-palette-webgpu](/image-palette-webgpu){:target="_blank"} is a tiny zero-dependency browser package that extracts dominant color or color palette from an image using WebGPU API with various algorithms: Wu, Weighted-Square K-Means and Celebi (Wu + K-Means). The computations are done on the GPU with compute shaders.

