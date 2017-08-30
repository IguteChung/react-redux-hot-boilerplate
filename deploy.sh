#!/bin/bash
# exit on error
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
githash=$(git rev-parse --short HEAD)
timestamp=$(date +%Y%m%d%H%M%S)

# text color settings.
yellow=`tput setaf 3`
reset=`tput sgr0`

# default settings.
projectId="deepq-dev"
clusterId="deepq-web"
ip="162.222.179.54"

# read flags.
while getopts p:c:i: option
do
  case $option in
  p)  projectId=$OPTARG;;
  c)  clusterId=$OPTARG;;
  i)  ip=$OPTARG;;
  ?)  echo "Usage: deploy.sh [-p projectId] [-c clusterId] [-i ip]"
      exit 1
  esac
done

# show confirm prompt.
echo "${yellow}Prepare to deploy totspace to project:${projectId} cluster:${clusterId} ip:${ip}, continue?${reset}"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done

echo "${yellow}switch to project ${projectId}...${reset}"
gcloud config set project $projectId

echo "${yellow}get credentials for cluster ${clusterId}${reset}"
gcloud container clusters get-credentials $clusterId

echo "${yellow}start to build docker image...${reset}"
cd $DIR && docker build -f Dockerfile -t "gcr.io/$projectId/deepq-web:$githash-$timestamp" .

echo "${yellow}push the image to gcloud...${reset}"
cd $DIR && gcloud docker -- push "gcr.io/$projectId/deepq-web:$githash-$timestamp"

echo "${yellow}replace the image tag and ip and label...${reset}"
cd $DIR && sed -i.bak "s#{image}#gcr.io/$projectId/deepq-web:$githash-$timestamp#g; s#{ip}#$ip#g; s#{GCS_DEEPQ_SECRETS}#$projectId-secrets#g;" web-deployment.yaml

echo "${yellow}deploy the web...${reset}"
cd $DIR && kubectl apply -f web-deployment.yaml

echo "${yellow}rollback the yaml...${reset}"
cd $DIR && mv web-deployment.yaml.bak web-deployment.yaml

echo "${yellow}deployment is done!!!${reset}"
