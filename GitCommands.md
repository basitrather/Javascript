Main Git Commands

1. git init
Initializes a new Git repository in the current directory.
            git init

2. git clone
Clones a remote repository to your local machine.
            git clone <repository-url>

3. git status
Shows the current state of the working directory and staging area, including changes to files.
            git status

4. git add
Adds file changes to the staging area (preparing them for a commit).
git add <file-name>       # Add specific file
git add .                 # Add all files in the directory

5. git commit
Records changes in the repository with a message.
            git commit -m "commit message"

6. git log
Shows the commit history of the repository.
            git log

7. git branch
Lists, creates, or deletes branches.
            git branch               # List branches
            git branch <branch-name> # Create a new branch
            git branch -d <branch-name> # Delete a branch

8. git checkout
Switches branches or restores files.
            git checkout <branch-name> # Switch to another branch
            git checkout -- <file-name> # Discard changes to a file

9. git merge
Combines changes from one branch into another.
            git merge <branch-name> 

10. git pull
Fetches and merges changes from the remote repository into the current branch.
            git pull <remote> <branch>
 
11. git push
Pushes local commits to the remote repository.
            git push <remote> <branch>

12. git remote
Manages remote repositories. This command can list, add, or remove remote repositories.
            git remote -v    # Show remote repository URLs
            git remote add origin <url>    # Add a remote repository
            git remote remove origin       # Remove a remote repository

13. git fetch
Retrieves changes from the remote repository but does not merge them into your local branch.
            git fetch <remote>

14. git reset
Resets the current HEAD to a specified state. This can undo commits or changes.
            git reset --hard <commit-id>   # Hard reset to a specific commit (discards changes)
            git reset --soft <commit-id>   # Soft reset, keeps changes staged

15. git rebase
Applies commits from one branch onto another, often used to keep a clean history.
            git rebase <branch-name>

16. git diff
Shows the differences between file versions or commits.
            git diff                   # Show uncommitted changes
            git diff <commit-id> <commit-id>  # Show differences between commits

17. git stash
Saves changes temporarily without committing them, useful for context switching.
            git stash      # Save changes
            git stash pop  # Apply saved changes