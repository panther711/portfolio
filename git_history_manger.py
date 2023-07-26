import os

username = "panther711"
userEmail = "jameshan044@gmail.com"
branch = "main"

os.system("git branch -M %s" %(branch))

os.system('git filter-branch -f --env-filter "GIT_AUTHOR_NAME=%s GIT_AUTHOR_EMAIL=%s GIT_COMMITTER_NAME=%s GIT_COMMITTER_EMAIL=%s" HEAD' %(username, userEmail, username, userEmail))
