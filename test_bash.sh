#!/bin/bash

usage()

CT_PATH=$1
FIDUCIAL_LIST_PATH=$2
REST_URL=$3
USER=$4
PASS=$5

#iinit()


#iget 
wget $3fileContents$1 -O /tmp/seeg.fcsv --user $4 --password $5

wget $3fileContents$2 -O /tmp/r_oarm.nii.gz --user $4 --password $5

NII=/tmp/r_oarm.nii.gz
FCV=/tmp/seeg.fcsv

echo "deeto -r -1 -c $NII -f $FCV -o test.fcsv"

deeto -r -1 -c $NII -f $FCV -o test.fcsv 

#iput $URI 

return $URI
