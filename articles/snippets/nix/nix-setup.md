---
title: 'Nix Setup'
date: '2022-07-01'
tags: ['nix', 'nix-darwin']
---

# Nix Setup

## Install

### Darwin

```bash
sh <(curl -L https://nixos.org/nix/install) --darwin-use-unencrypted-nix-store-volume --daemon
```

## Post-Install

Ensure all is good.

```bash
nix doctor
```

## Uninstall

### Darwin

```bash
# Kill Nix daemon
sudo launchctl unload /Library/LaunchDaemons/org.nixos.nix-daemon.plist

# Remove '/nix' mount
sudo nano /etc/fstab

# Find Nix volume ID
diskutil apfs list

# Delete Nix volume
diskutil apfs deleteVolume ${VOLUME_DEVICE_ID}

# Remove Synthetic entry
sudo nano /etc/synthetic.conf

# Remove Daemon
sudo rm /Library/LaunchDaemons/org.nixos.nix-daemon.plist

# Remove Nix group
sudo /usr/bin/dscl . -delete "/Groups/nixbld"

# Remove Nix users
USERS=($(sudo dscl . list /Users | grep nixbld))
for USER in "${USERS[@]}"; do
  echo "Deleting user: ${USER}"
  sudo dscl . -delete /Groups/staff GroupMembership "${USER}"
  sudo dscl . -delete "/Users/${USER}"
done

# Reset Shell config
sudo mv /etc/profile.backup-before-nix /etc/profile
sudo mv /etc/bashrc.backup-before-nix /etc/bashrc
sudo mv /etc/zshrc.backup-before-nix /etc/zshrc

# Reboot
sudo shutdown -r now

# Remove Nix config
sudo rm -rf /nix
sudo rm -rf /etc/nix
sudo rm -rf /etc/profile/nix.sh
sudo rm -rf /var/root/.nix-profile
sudo rm -rf /var/root/.nix-defexpr
sudo rm -rf /var/root/.nix-channels
sudo rm -rf /var/root/.cache/nix
sudo rm -rf ~/nix

rm -rf ~/.nix-profile
rm -rf ~/.nix-defexpr
rm -rf ~/.nix-channels
rm -rf ~/.nixpkgs
rm -rf ~/.config/nix
rm -rf ~/.config/nixpkgs
rm -rf ~/.cache/nix
```
