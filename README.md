# bienvenue 
- la librarie python :
- chercher ia
- pip install -m requirements 
- vous pouvez faire sh ./mysite.sh 


# Setup Guide: Geckodriver, Selenium, and Firefox on Ubuntu CLI

## **Overview**
This guide covers the installation and configuration of **Geckodriver**, **Selenium**, and **Firefox** for automated browser testing on **Ubuntu CLI**.

## **Requirements**
- **Ubuntu** (any recent version)
- **Python 3.11+** (for Selenium)
- **Firefox 128 ESR**
- **Geckodriver 0.36.0**
- **pip** (Python package manager)

## **Installation Steps**
### **1. Install Selenium (Python)**
```bash
pip install selenium
```bash

### 2. Download & Install Geckodriver
```bash
wget https://github.com/mozilla/geckodriver/releases/download/v0.36.0/geckodriver-v0.36.0-linux64.tar.gz
tar -xvzf geckodriver-v0.36.0-linux64.tar.gz
sudo mv geckodriver /usr/local/bin/

```bash


### 3 verify installation
```bash
geckodriver --version


```bash
### 4 install firefox if not installed
```bash
sudo apt update
sudo apt install firefox



```bash
### Step 1: Uninstall the Firefox Snap

```bash
sudo snap remove firefox
```

### Step 2: Create an APT keyring (if one doesn’t already exist)

```bash
sudo install -d -m 0755 /etc/apt/keyrings
```

### Step 3: Import the Mozilla APT repo signing key (if wget is missing, install it first)

```bash
wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null
```

### Step 4: Add the Mozilla signing key to your sources.list

```bash
echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null
```

### Step 5: Set the Firefox package priority to ensure Mozilla’s DEB is always preferred

If you don’t do this, the Ubuntu transition package will be reinstalled, and you’ll have the Firefox snap.

```bash
echo '
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000

Package: firefox*
Pin: release o=Ubuntu
Pin-Priority: -1' | sudo tee /etc/apt/preferences.d/mozilla
```

### Step 6: Remove Ubuntu’s Firefox DEB and install the real one from Mozilla

```bash
sudo apt update && sudo apt remove firefox
sudo apt install firefox
```

### Step 7 (Optional): Install a localized version of Firefox

To use Firefox with a language other than American English, install the corresponding language package. For example, to install French language support:

```bash
sudo apt install firefox-l10n-fr
```
### do
 ````

    mkdir -p ~/go/to/my/search
    python3 -m venv ~/go/to/my/search
    source ~/go/to/my/search/bin/activate
gem install watir addressable i18n logger
pip3 install geopy
pip3 install geopandas
pip3 install selenium
pip3 install -r requirements.txt
    sh mysite.sh
    #python3 -m pip install xyz


````

# my-search
# my-search
