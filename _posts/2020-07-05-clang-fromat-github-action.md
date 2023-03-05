---
layout: post
title:  "How to add a GitHub action to run clang format at every push"
date:   2020-07-05 21:26:17 +0300
categories: tech
permalink: /blog/2020/07/05/clang-fromat-github-action.html
---
Navigate to your project's "Actions" tab and click "Set up a workflow yourself". Set the file name to `formatter.yml` and paste the following code into the file:

```yml
on: push
name: clang-format Code Formatter
jobs:
  lint:
    name: clang-format Code Formatter
    runs-on: ubuntu-latest
    steps:
    - name: Clang Code Formatter
      uses: ivanludvig/clang-format-action@v1.4
      env:
        GITHUB_TOKEN: ${ { secrets.GITHUB_TOKEN } }
```

This will run an action that I setup in a <a href="https://github.com/IvanLudvig/clang-format-action">repository</a>. It will automatically format your code on every push.

### How to change clang code style

My action uses Microsoft's code style by default. But this can be easily changed. All you have to do is fork my <a href="https://github.com/IvanLudvig/clang-format-action">repository</a> and change one line of code in `entrypoint.sh`. This one:

```sh
clang-format -style=microsoft -i $SRC
```

You can set the style to a whole bunch of options: LLVM, Google, Chromium, Mozilla, WebKit, GNU. It's up to you. Then, add your action to your repository the same way you added mine.

P.S. I don't actually like Microsoft's C++ formatting, but that's what I had to use.