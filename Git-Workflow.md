Here is a **step-by-step beginner workflow** for using Git and GitHub, from cloning a repository to pushing and pulling changes, all within a single branch (usually called `main`):

---

## 1. Set Up Git

- Install Git from [git-scm.com](https://git-scm.com) (official site).
- Configure your user identity:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```
  This sets your identity for all future commits.

---

## 2. Clone a Repository from GitHub

- Go to the GitHub repo you want to clone.
- Click the **Code** button and copy the URL (choose HTTPS for simplicity):
- In your terminal, run:
  ```bash
  git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  ```
  This will create a local copy of the repo.

---

## 3. Make Changes Locally

- Enter your project folder:
  ```bash
  cd YOUR-REPOSITORY
  ```
- Edit your files as needed (using a code editor like VS Code, Atom, etc.).

---

## 4. Check the Status of Your Changes

- See which files have changed:
  ```bash
  git status
  ```

---

## 5. Stage Your Changes

- Add changed files to the "staging area":
  ```bash
  git add .
  ```
  (Or, to add just one file: `git add filename.txt`).

---

## 6. Commit Your Changes

- Save your staged snapshot with a message:
  ```bash
  git commit -m "Your message describing the change"
  ```
  Commit as often as you like—smaller, focused commits are better.

---

## 7. Push Your Changes to GitHub

- Upload your commits to the remote repo:
  ```bash
  git push origin main
  ```
  This updates the branch (`main`) on GitHub.

---

## 8. Pull Changes from GitHub

- If other people have committed changes, update your local copy:
  ```bash
  git pull origin main
  ```
  This fetches and merges remote changes into your local branch.

---

## Basic Workflow (Diagram)

```
[Working Directory] --> git add --> [Staging Area] --> git commit --> [Local Repo] --> git push --> [Remote Repo]
```

To sync changes from GitHub: `git pull`.

---

## Summary Table: Typical Commands

| Step          | Command                         |
| ------------- | ------------------------------- |
| Clone         | git clone                       |
| Check Status  | git status                      |
| Stage Changes | git add . (or git add file.txt) |
| Commit        | git commit -m "message"         |
| Push          | git push origin main            |
| Pull          | git pull origin main            |

---

## Notes

- All workflow above assumes work is done on the `main` branch (the default).
- You only need branching (`git branch`, `git checkout`) for advanced workflows and multi-feature teamwork. For beginners, working directly in one branch is easiest.
- You can undo mistakes with `git restore filename` (to undo changes before staging) and `git reset --soft HEAD~1` (to undo the last commit).

---
