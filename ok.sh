echo "### Step 1: Uninstall the Firefox Snap

\`\`\`bash
sudo snap remove firefox
\`\`\`

### Step 2: Create an APT keyring (if one doesn’t already exist)

\`\`\`bash
sudo install -d -m 0755 /etc/apt/keyrings
\`\`\`

### Step 3: Import the Mozilla APT repo signing key (if wget is missing, install it first)

\`\`\`bash
wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null
\`\`\`

### Step 4: Add the Mozilla signing key to your sources.list

\`\`\`bash
echo \"deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main\" | sudo tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null
\`\`\`

### Step 5: Set the Firefox package priority to ensure Mozilla’s DEB is always preferred

If you don’t do this, the Ubuntu transition package will be reinstalled, and you’ll have the Firefox snap.

\`\`\`bash
echo '
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000

Package: firefox*
Pin: release o=Ubuntu
Pin-Priority: -1' | sudo tee /etc/apt/preferences.d/mozilla
\`\`\`

### Step 6: Remove Ubuntu’s Firefox DEB and install the real one from Mozilla

\`\`\`bash
sudo apt update && sudo apt remove firefox
sudo apt install firefox
\`\`\`

### Step 7 (Optional): Install a localized version of Firefox

To use Firefox with a language other than American English, install the corresponding language package. For example, to install French language support:

\`\`\`bash
sudo apt install firefox-l10n-fr
\`\`\`" >> README.md

