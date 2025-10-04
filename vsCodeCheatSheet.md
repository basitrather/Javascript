# VS Code Power User Cheat Sheet

A curated cheat sheet for web developers and Node.js programmers to get the most out of Visual Studio Code.

---

## 1. Multi-Cursor & Selection

| Shortcut           | Action                                      |
| ------------------ | ------------------------------------------- |
| Ctrl + D           | Select next occurrence of the selected word |
| Ctrl + F2          | Select all occurrences of the selected word |
| Alt + Click        | Add cursor anywhere                         |
| Shift + Alt + Drag | Column (vertical) selection                 |
| Ctrl + U           | Undo last cursor selection                  |

> Great for renaming variables or editing repetitive code.

---

## 2. File & Symbol Navigation

| Shortcut               | Action                                         |
| ---------------------- | ---------------------------------------------- |
| Ctrl + P               | Quick open file                                |
| Ctrl + Shift + O       | Go to symbol (function, class) in current file |
| Ctrl + G               | Jump to line number                            |
| Alt + Left/Right Arrow | Navigate backward/forward in file history      |

> Works like “Go to anything” in seconds.

---

## 3. Code Completion & Formatting

| Shortcut         | Action                             |
| ---------------- | ---------------------------------- |
| Ctrl + Space     | Trigger IntelliSense manually      |
| Shift + Alt + F  | Format code (Prettier or built-in) |
| Ctrl + /         | Toggle comment line                |
| Ctrl + Shift + A | Toggle block comment               |

> Always use a formatter and linter for cleaner code.

---

## 4. Editor & Window Management

| Shortcut            | Action                     |
| ------------------- | -------------------------- |
| Ctrl + \            | Split editor vertically    |
| Ctrl + 1 / 2 / 3    | Focus specific editor pane |
| Ctrl + K Ctrl + ←/→ | Move editor left/right     |
| Ctrl + B            | Toggle sidebar visibility  |

> Helps when working with multiple files or comparing code.

---

## 5. Integrated Terminal

| Shortcut          | Action                     |
| ----------------- | -------------------------- |
| Ctrl + \`         | Toggle terminal            |
| Ctrl + Shift + \` | Open new terminal          |
| Ctrl + C          | Copy selection in terminal |
| Ctrl + V          | Paste in terminal          |

> Run Node.js scripts, Git commands, and npm commands here.

---

## 6. Git Integration

| Shortcut            | Action                            |
| ------------------- | --------------------------------- |
| Ctrl + Shift + G    | Open Source Control panel         |
| Hover line → click  | Git blame (who changed this line) |
| Stage, commit, push | All inside VS Code                |

> No need to leave VS Code for Git tasks.

---

## 7. Code Runner & Shortcuts

| Shortcut                   | Action                             |
| -------------------------- | ---------------------------------- |
| Ctrl + Alt + N (default)   | Run code (Code Runner)             |
| Ctrl + Shift + J           | Recommended custom shortcut for JS |
| Right-click → Run Code     | Runs current file without shortcut |
| Settings → Run in Terminal | Needed for interactive input       |

> Fast experimentation without typing node filename.js.

---

## 8. Peek & Go to Definition

| Shortcut           | Action                 |
| ------------------ | ---------------------- |
| F12                | Go to definition       |
| Alt + F12          | Peek definition inline |
| Ctrl + Shift + F10 | Peek references        |

> Navigate large projects without losing context.

---

## 9. Search & Replace

| Shortcut         | Action                                 |
| ---------------- | -------------------------------------- |
| Ctrl + Shift + F | Search across all files                |
| Alt + Enter      | Select all occurrences found in search |
| Ctrl + H         | Replace in current file                |
| Ctrl + Shift + H | Replace in all files                   |

> Perfect for renaming variables or updating paths across a project.

---

## 10. Emmet for HTML/CSS

| Shortcut                          | Action                          |
| --------------------------------- | ------------------------------- |
| Type div.container>ul>li\*5 + Tab | Expands to nested HTML          |
| Works in HTML, CSS, JSX           | Auto-completes tags and classes |

> Speeds up repetitive markup drastically.

---

## 11. Quick Refactoring

| Shortcut         | Action                         |
| ---------------- | ------------------------------ |
| F2               | Rename symbol in file/project  |
| Ctrl + Shift + R | Show refactor options          |
| Shift + Alt + F  | Format selection or whole file |

> Makes code cleaner and easier to maintain.

---

## Extra Tips

- Auto-save: File → Auto Save → ensures your file is always saved before running.
- Zen Mode: Ctrl + K Z → distraction-free coding.
- Bracket Pair Colorizer / Indent Guides → makes nested code easier to read.
- Recommended Extensions: Prettier, ESLint, Live Server, Path Intellisense, GitLens.

---

> Note: Shortcuts are for Windows. Mac users should replace Ctrl with Cmd where applicable.
