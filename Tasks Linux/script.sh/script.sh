#!/bin/bash
RUN=1
while [ $RUN -le 5 ]
do 
touch file$RUN.txt
echo "Empty file" $RUN > file$RUN.txt
((RUN++))
done