#!/bin/bash
run=1
while [ $run -le 50 ]
do 
touch $run.txt
((run++))
done