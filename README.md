# The Linked Building Data (on the Web) Community Group - lbdw
This repository contains the sources of the W3C Linked Building Data (on the Web) Community Group website https://w3c-lbd-cg.github.io/lbdw/

## How to Get Involved

* Anyone can join the W3C Community Group freely at https://www.w3.org/community/lbd/
* Anyone can register to the public mailing list at https://lists.w3.org/Archives/Public/public-lbd/
* See the meeting and conference calls information at https://www.w3.org/community/lbd/wiki/Main_Page
* Get involved in the GitHub repository (see below)

### Contribute to the GitHub repository with Pull-Requests using the git command-line

Recommended pattern for github workflow for W3C spec drafting (from W3C SDW group's wiki):

* create a local copy of the W3C SDW repo: `git clone https://github.com/w3c-lbd-cg/lbdw.git`
* configure remotes on local - specify the W3C repo remote as `upstream:  `git remote add upstream https://github.com/w3c-lbd-cg/lbdw.git`
* Fetch the branches and their respective commits from the upstream repository: `git fetch upstream`
* because we're using GitHub Pages for publication, `gh-pages` is our main branch
* create a branch in your local repo which tracks `gh-pages` in upstream: `git checkout -b {my-branch-name} upstream/gh-pages`
* make the changes in your branch & commit - with commit message please! `git commit -a -m "some meaningful message"`
* synchronise your changes with upstream: `git push upstream {my-branch-name}`
* within GitHub, create a Pull Request from `{my-branch-name}` into gh-pages ... at this point, you may assign the pull request to someone else to check before merging

Alternatively - send your text to the Editors (Kris, Pieter, Maxime) via the CG email list.

#### EDITORS ONLY: 

* within GitHub, Merge the changes into gh-pages ... then you will see your stuff @ http://w3c-lbd-cg.github.io/lbdw/
* Bring all those changes back into your local repo: `git fetch upstream`
* rebase (don't 'pull' - because this creates another commit) changes on your branch: `git rebase upstream/gh-pages`

(you might also want to rebase `upstream/{my-branch-name}` too--this enables you to push subsequent local commits to your own remote branch when it has not yet been merged into the main branch and the main branch has been changed in the meantime. )

### Github Help

* https://help.github.com/articles/using-pull-requests/ provides a tutorial on GitHub pull-requests.
* If you have not worked with GitHub in this way before, we can give direct assistance.
