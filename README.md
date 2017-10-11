 ![alt text](https://i.imgur.com/AbdW8ND.png "Semantic UI Theme Logo")
 
# Semantic UI Theme

Creating a better style theming with Semantic UI. This project's goal is to empower designers and developers by creating a stylesheet language that is compiled and dynamically rendered at runtime. See issue #1 for the big idea and conversation.

## Components

This repo contains the following child projects

- `JS Loader` A JavsScript module that can dynamically or statically load compiled YML theme
- `YAML Compiler` A Compiler that creates a JS Module that can be loaded into a webpage to render CSS
- `Theme Editor` A real-time editor for Semantic UI themes.

## Cloning Repo w/ Submodules

This repo uses _Git Submodules_; specifically the Semantic-UI (v2.2.13) Repository. It is synchronized with forked branch called `develop/2.2.13`/ This branch is frozen right now, and is intended for future work that will integrate the work here into the core Semantic-UI repository

> A) Add the –recursive flag to their git clone command
>
> `git clone REPO_URL --recursive`
> 
> B) manually initialize and the submodules after the clone
>
> `git clone REPO_URL`
> `git submodule update --init --recursive`

You can read more about submodules through [this article](https://twoguysarguing.wordpress.com/2010/11/14/tie-git-submodules-to-a-particular-commit-or-branch/)

## Build Tasks

There are currently three very ghetto gulp tasks:

 - **Install**: is hooked into the default install script and ran automagically //stub
 - **Build**: copys the files required by the semantic submodule into a ./build directory
 - **Start**: calls `build` and then starts a web server hosting the root of the project at http://localhost:8000
 
 future work will include extending the `build` task to compile and update example code from `./semantic-ui` submodule. Currently you must do these tasks manually. ugh.

GLHF;

 ![alt text](https://i.imgur.com/cBWger3.jpg "I'm pickle Rick!!!!!!!!")
