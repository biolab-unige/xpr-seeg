#!/bin/bash

usage()

REST_PATH=$2
URI=$3
USER=$4
PASS=$5

#iinit()


#iget 
wget 130.251.10.60:8080/irods-rest-4.0.2.1-SNAPSHOT/rest/fileContents/biolabZone/home/superbiorods/eegtest/seeg-new.fcsv -O /tmp/seeg.fcsv --user superbiorods --password superbio05!

wget 130.251.10.60:8080/irods-rest-4.0.2.1-SNAPSHOT/rest/fileContents/biolabZone/home/superbiorods/eegtest/r_oarm_seeg_cleaned.nii.gz -O /tmp/r_oarm.nii.gz --user superbiorods --password superbio05!

NII=/tmp/r_oarm.nii.gz
FCV=/tmp/seeg.fcsv

echo "deeto -r -1 -c $NII -f $FCV -o test.fcsv"

deeto -r -1 -c $NII -f $FCV -o test.fcsv 

#iput $URI 

return $URI
