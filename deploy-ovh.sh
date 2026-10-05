#!/usr/bin/env bash
#
# Build the site and, with --deploy, upload dist/ to the OVH hosting over SFTP, into the site's own folder
# (smartsoil/, never www/). The CI workflow (.github/workflows/deploy-ovh.yml) does the same on every push to main;
# this is the manual twin. Credentials come from the environment, nothing is stored here:
#
#   FTP_HOST=ftp.clusterNNN.hosting.ovh.net FTP_USER=... FTP_PASS=... ./deploy-ovh.sh --deploy
#
set -euo pipefail
cd "$(dirname "$0")"
REMOTE_DIR="${OVH_REMOTE_DIR:-smartsoil}"

echo "→ building dist/"
npm run build
[ "${1:-}" = "--deploy" ] || { echo "✓ built. Re-run with --deploy to upload."; exit 0; }

[ -n "${FTP_HOST:-}" ] && [ -n "${FTP_USER:-}" ] && [ -n "${FTP_PASS:-}" ] || { echo "✗ set FTP_HOST, FTP_USER, FTP_PASS in the environment"; exit 1; }
case "$REMOTE_DIR" in ""|www|www/|/|.) echo "✗ refusing to deploy into '$REMOTE_DIR'"; exit 1;; esac
command -v lftp >/dev/null || { echo "✗ lftp not installed: brew install lftp"; exit 1; }

echo "→ uploading dist/ to ${FTP_HOST}:${REMOTE_DIR}/"
lftp -u "$FTP_USER,$FTP_PASS" "sftp://$FTP_HOST" <<LFTP
set sftp:auto-confirm yes
mirror -R --verbose --no-perms dist/ ${REMOTE_DIR}/
bye
LFTP
echo "✓ uploaded: hard-refresh https://smart-soil.eu"
