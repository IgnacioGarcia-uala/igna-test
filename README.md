# Git alias

## Commit Amend
`git config --global alias.amend "commit --amend --no-edit"`

## Log 
`git config --global alias.lol "log --graph --pretty=format:'%C(magenta)%h%Creset%C(auto)%d%Creset %C(cyan)<%an>%Creset%C(green)[%ad]%C(reset): %s' --date=short --all"`

## Push
`git config --global alias.post "push -u origin HEAD"`

## Status
`git config --global alias.st "status -sb"`

## Diff stat
`git config --global alias.stat "diff --stat"`

## Branch List
`git config --global alias.lbranch "branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate"`