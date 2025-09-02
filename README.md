# Azure VM Apache2 Deployment

This repository contains a step-by-step guide to deploy and host a website on an Azure Virtual Machine (VM) using Apache2.  
It is designed for beginners who want to learn how to set up a virtual machine in Azure and host a simple web page.

---

## Prerequisites

Before you start, make sure you have:
- An active [Microsoft Azure](https://azure.microsoft.com/) account
- Basic knowledge of command line
- Git installed on your local machine

---

## Step-by-Step Guide

### 1. Create a Resource Group

```bash
az group create --name myResourceGroup --location centralindia
```

---

### 2. Create a Virtual Machine

- Go to Azure Portal
- Create a new Virtual Machine
- Select Ubuntu Server LTS
- Authentication: Use Password instead of SSH
- Allow HTTP (Port 80) in inbound rules
- Finish setup and create

---

### 3. Connect to the VM

- Copy the public IP address from Azure Portal
- Open CMD or Terminal

```bash
ssh <username>@<public_ip>
```

- Enter the password you created while setting up the VM.

---

### 4. Update & Upgrade Packages

```bash
sudo apt update && sudo apt upgrade -y
```

---

### 5. Install Apache2 Web Server

```bash
sudo apt install apache2 -y
```

- Verify installation by visiting:  
    `http://<public_ip>`  
    You should see the default Apache2 page.

---

### 6. Deploy Your Website

- Navigate to the web root directory:

    ```bash
    cd /var/www/html
    ```

- Remove the default index.html:

    ```bash
    sudo rm index.html
    ```

- Clone this repository into the VM:

    ```bash
    sudo git clone https://github.com/Rudraksh121a/azure-vm-apache2-deploy.git .
    ```

- Restart Apache:

    ```bash
    sudo systemctl restart apache2
    ```

---

### 7. Access Your Website

- Open your browser and go to:  
    `http://<public_ip>`  
    Your custom website should now be live.

---

## Tech Stack

- **Microsoft Azure** – Cloud Platform
- **Ubuntu VM** – Virtual Machine OS
- **Apache2** – Web Server
- **Git** – Version Control
