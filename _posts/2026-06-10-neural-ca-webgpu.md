---
layout: post
title:  "Neural Cellular Automata with WebGPU"
date:   2026-06-10 12:00:00 +0100
categories: tech
description: A WebGPU demo of Growing Neural Cellular Automata — each cell in a 40×40 grid runs inference through a shared pretrained neural network entirely in compute shaders
image: 
---

<style>
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

    .shield-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }

    .shield-container > a:not(.demo-link) > img {
        display: block;
        height: 20px;
    }

    .growth-img {
        margin-bottom: 16px;
        max-width: 480px;
        width: 100%;
    }
</style>

<div class="shield-container">
    <a
        href="https://github.com/IvanLudvig/nca-webgpu"
        target="_blank"
    >
        <img
            src="https://img.shields.io/badge/GitHub-24292f.svg?logo=github&style=flat-square"
            alt="GitHub"
        >
    </a>
    <a
        href="/neural-ca-webgpu"
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

<center>
    <img src="/assets/img/work/nca-webgpu-cactus.png" alt="NCA cactus growth stages" class="growth-img" />
</center>

A WebGPU demo of [Growing Neural Cellular Automata](https://doi.org/10.23915/distill.00023) (Mordvintsev et al., 2020). Each cell in a 40x40 grid is a compute shader thread running a shared pretrained neural network to compute its next state. The CA grows from a single seed cell and self-repairs when damaged.

### Cell State and Perception

Each cell has a 16-channel state vector: RGBA + 12 hidden channels. The simulation seeds a single center cell (RGB=0, alpha and hidden channels = 1) and lets the network grow outward from there.

Each cell builds a 48-dim input by convolving its 3×3 neighborhood with three fixed kernels: identity, Sobel-X, Sobel-Y across all 16 channels. The Sobel filters give the network gradient information without requiring it to learn spatial awareness from scratch.

### Network and Update Rule

Two linear layers output a delta added to the current state. Network weights are uploaded to GPU storage buffers once and shared read-only across all cells per step.

Two mechanisms from the paper govern the simulation: stochastic updates (each cell fires with 50% probability) and a life mask (cells with no alive neighbors are zeroed out).

### WebGPU Pipeline

Compute and render passes run back-to-back each frame. Double-buffered state avoids read-write collisions.

You can draw on the canvas to erase cells. The pattern self-repairs: a core property of the neural CA.
