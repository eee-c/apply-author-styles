#!/bin/bash

# Run a set of Dart Unit tests
results=$(content_shell --dump-render-tree http://localhost:8100/test/ 2>&1)
echo -e "$results"

# check to see if DumpRenderTree tests
# fails, since it always returns 0
if [[ "$results" == *"FAIL"* ]]
then
    exit 1
fi


echo
echo "Looks good!"
