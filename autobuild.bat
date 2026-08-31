@echo off
rmdir /s /q "./docs/_build"
uv run sphinx-autobuild.exe .\docs\source\ .\docs\_build\html -j 8 %*
