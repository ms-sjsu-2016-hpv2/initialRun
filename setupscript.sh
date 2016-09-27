#!/bin/bash

# Steps to add this script to Start Up
# Traverse to dir /etc
cd /etc

# make folder init.d if not present
mkdir -p init.d

# traverse to dir init.d where our script will reside
cd init.d/

# git clone script to add to start up path of the system
git clone https://github.com/ms-sjsu-2016-hpv2/initialRun.git

# filename to add to script
filename=deviceregister.py

# making file executable
chmod +x /etc/init.d/"$filename"
chmod +x "$filename"

# adding the script to linux boot.
# this command creates symbolic links to this script in your default rc.d folders 0 through 6 (hence the flag “defaults”)
update-rc.d "$filename" defaults