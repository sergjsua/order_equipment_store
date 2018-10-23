wget -O /var/www/hool/node/utils/Scansource1.txt ftp://CBx3qQvqR43j:dXtV2qw5kMV2@catalog.scansource.com/832.txt

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

export NODE_ENV=production
export DB_USERNAME=estoniac_hool
export DB_PASSWORD=1WhoLetDogs
export DB_NAME=estoniac_hool
export DB_HOSTNAME=213.168.251.122
export NODEMAILER_EMAIL=info@hool.ee
export NODEMAILER_PASSWORD=kasutaja
export NODEMAILER_SERVICE=gmail
export NODEMAILER_SENDER_EMAIL=info@hool.ee

cd /var/www/hool/node
nvm run 9 /var/www/hool/node/utils/parse.js
nvm run 9 /var/www/hool/node/utils/import.js
echo "[`date`] SCA imported" >> /var/www/hool/cron-scripts/log.txt
