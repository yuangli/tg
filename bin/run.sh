#!/bin/bash
set -e
echo
echo Welcome to Michelangelo! Enjoy!
echo
echo ----------------- INSTALLING PACKAGES -----------------
npm install
echo -------------------------------------------------------
echo
echo ---------------- CREATING /DIST FOLDER ----------------
gulp
echo -------------------------------------------------------
echo
echo Finished!
echo
