# semantic-ui-theme

Experiments toward a better theming experience in Semantic UI.  See issue #1 for the big idea and conversation.

## Experiments

This repo contains the following experimental projects:

- `JS Loader` A JavsScript module that can dynamically or statically load compiled YML theme
- `YAML Compiler` A Compiler that creates a JS Module that can be loaded into a webpage to render CSS
- `Theme Editor` A real-time editor for Semantic UI themes.

## Cloning Repo w/ Submodules

This repo uses _Git Submodules_; specifically the Semantic-UI (v2.2.13) Repositor. It is synchronized with forked branch called `develop/2.2.13`/ This branch is frozen right now, and is intended for future work that will integrate the work here into the core.



## Build Tasks

There are currently three very ghetto gulp tasks:

 - Install: is hooked into the default install script and ran automagically //stub
 - Build: copys the files required by the semantic submodule into a ./build directory
 - Start: calls `build` and then starts a web server hosting the root of the project at http://localhost:8000

