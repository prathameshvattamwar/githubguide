# GitHub CMD Guide

Welcome to the **GitHub CMD Guide**! This repository provides a step-by-step guide for using Git and GitHub commands in an easy and beginner-friendly manner.

## Table of Contents
- [Introduction](#introduction)
- [Git and GitHub Basics](#git-and-github-basics)
- [Uploading a React Project to GitHub](#uploading-a-react-project-to-github)
- [Uploading Any Project to GitHub](#uploading-any-project-to-github)
- [Collaborating on GitHub](#collaborating-on-github)
- [Common Git Commands](#common-git-commands)
- [Common Git Issues and Fixes](#common-git-issues-and-fixes)

## Introduction
This repository serves as a simple guide for using essential GitHub commands to manage projects, collaborate with others, and solve common issues. It walks through the process of uploading React and other projects, and covers helpful Git commands for troubleshooting.

## Git and GitHub Basics
- **Git**: A version control system for tracking changes in files.
- **GitHub**: A platform for hosting and collaborating on Git repositories.

## Uploading a React Project to GitHub
1. Navigate to your project folder:
    ```bash
    cd path/to/your/react-project
    ```
2. Initialize Git:
    ```bash
    git init
    ```
3. Add files to Git:
    ```bash
    git add .
    ```
4. Commit your changes:
    ```bash
    git commit -m "Initial commit"
    ```
5. Link to your GitHub repository:
    ```bash
    git remote add origin https://github.com/yourusername/repository-name.git
    ```
6. Push the changes to GitHub:
    ```bash
    git push -u origin main
    ```

## Uploading Any Project to GitHub
The steps for uploading any other type of project are similar to the React project. Simply navigate to your project folder, initialize Git, add your files, commit your changes, and push them to your GitHub repository.

## Collaborating on GitHub
GitHub makes collaboration easy:
- **Forking**: Copy someone else’s project to your account.
- **Branches**: Create new branches for features or bug fixes using:
    ```bash
    git checkout -b feature-branch
    ```

## Common Git Commands
- **Check status**: `git status`
- **View commit history**: `git log`
- **Switch branches**: `git checkout branch-name`
- **Pull updates**: `git pull`
- **Clone a repo**: `git clone https://github.com/username/repo-name.git`

## Common Git Issues and Fixes
1. **Git Push Rejected**: If your push is rejected, pull the latest changes first:
    ```bash
    git pull origin main
    ```
2. **Permission Denied (SSH)**: Set up SSH keys to authenticate:
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

## Contributing
Feel free to contribute to this guide by submitting a pull request or opening an issue. Fork the repo, make your changes, and submit a pull request for review.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Connect with Me
- [GitHub](https://github.com/prathameshvattamwar)
- [LinkedIn](https://www.linkedin.com/in/prathamesh-vattamwar-483529227/)

---

© 2024 Prathamesh V. All rights reserved.
