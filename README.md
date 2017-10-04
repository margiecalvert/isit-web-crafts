# Week03-ElvenSiteStarter
by Charlie Calvert


## Connecting

# https://help.ubuntu.com/community/SSHFS
# sshfs -o idmap=user ubuntu@52.35.150.195:/var/www/html/images /images
# fusermount -u ~/images
# sudo ln -s /var/www/html/images /images


# diff san-diego-2015-12.md <(ssh aws-site 'cat /home/ubuntu/Documents/AllTest/san-diego-2015-12.md')
# scp san-diego-2015-12.md aws-site:/home/ubuntu/Documents/AllTest/.


- <https://github.com/lorenwest/node-config>

npm install config
mkdir config

```javascript
{
    "base-dir": "/home/charlie/",
    "site-dirs": [
        "Documents/AllTest",
        "Git/CloudNotes/Assignments"
    ]
}
```

In control.js:

**loadConfig** and **writeConfig**

On the server side, use your **readFile** and **writeFile** npm utilities.

Use a select object.

Pick the item and send it to the server.

Make webServerDir configurable. It should probably be called destinationDir.

Skip syntax highlighting

