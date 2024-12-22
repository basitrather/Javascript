Git Commands
1. Initialize a Repository
git init
Initializes a new Git repository in the current directory.
2. Clone a Repository
git clone <repository-url>
Clones a remote repository to your local machine.
3. Check Status
git status
Shows the current state of the working directory and staging area.
4. Stage Changes
git add <file-name>
Adds file changes to the staging area.
git add .
Stages all changes in the current directory.
5. Commit Changes
git commit -m "commit message"
Saves staged changes in the repository with a message.
6. View Commit History
git log
Displays the commit history of the repository.
7. Manage Branches
git branch
Lists all branches.
git branch <branch-name>
Creates a new branch.
git branch -d <branch-name>
Deletes a branch.
8. Switch Branches
git checkout <branch-name>
Switches to a specific branch.
git checkout -- <file-name>
Discards changes in a file.
9. Merge Branches
git merge <branch-name>
Merges changes from another branch into the current one.
10. Pull Changes
git pull <remote> <branch>
Fetches and merges changes from a remote repository.
11. Push Changes
git push <remote> <branch>
Pushes local commits to a remote repository.
12. Manage Remotes
git remote -v
Lists remote repositories.
git remote add origin <url>
Adds a remote repository.
git remote remove origin
Removes a remote repository.
13. Fetch Changes
git fetch <remote>
Downloads changes from the remote repository without merging.
14. Reset Repository
git reset --hard <commit-id>
Resets the repository to a specific commit, discarding all changes.
git reset --soft <commit-id>
Resets the repository to a specific commit but keeps changes staged.
15. Rebase Branch
git rebase <branch-name>
Reapplies commits from one branch onto another.
16. View Differences
git diff
Displays changes between file versions.
git diff <commit-id> <commit-id>
Compares changes between two commits.
17. Stash Changes
git stash
Temporarily saves uncommitted changes.
git stash pop
Restores stashed changes.