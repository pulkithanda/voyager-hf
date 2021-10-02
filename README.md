This is a web development project for hacktoberfest made with HTML, CSS, JS and Python (flask).<br>
Voyager website: NASA & SpaceX have successfully helped humanity establish a multi-planetary presence.<br>
A space website that can be used as a template in future for space related topics.  

<h2 align="center">A Glimpse of the website</h2>
<h4 align="center" ><a href="https://voyager-website.herokuapp.com/"> You can view it here </a></h4>

<p align="center">
<img src="https://media.discordapp.net/attachments/789454958453063702/859719891333808128/unknown.png?width=250&height=150">
<img src="https://media.discordapp.net/attachments/789454958453063702/859719950490271764/unknown.png?width=250&height=150">
<img src="https://media.discordapp.net/attachments/789454958453063702/859720083684458496/unknown.png?width=250&height=150">
<img src="https://media.discordapp.net/attachments/789454958453063702/859720259303637072/unknown.png?width=250&height=150">
<img src="https://media.discordapp.net/attachments/789454958453063702/859720801649164318/unknown.png?width=250&height=150">
<img src="https://media.discordapp.net/attachments/789454958453063702/859720886897868810/unknown.png?width=250&height=150">
</p>

## Contribution Guidelines🏗

Are there any missing features which we can add to make it the best template available❓ or you are here just to help out with the issues (see issues) or to contribute towards hacktoberfest 2021, well welcome!
To start contributing, follow the below guidelines:

```
  D:\xyz_folder> git clone https://github.com/pulkithanda/voyager-hf.git
  D:\xyz_folder\voyager-hf>pip install -r requirements.txt
  D:\xyz_folder\voyager-hf>click on run.py
  
  https://github.com/pulkithanda/voyager-hf.git

```

You're done! Now you can help with the issues (issues tab and also the issues file) or maybe even add some sections (team section or missions etc) and after accepting the PR
It'll be counted as your contribution to open source and for hacktoberfest in the month of october! <i>Thanks for coming!</i> Do star it & follow my github if you liked the project and for tons of other projects!


## Deployment methods:

 1. ***Deploy Forked repository (Heroku)***
    * First fork the repository.
    * Login to your heroku account.
    * Create new app & give a name.
    * Connect your GitHub account to heroku.
    * Search the repo you want to deploy and then deploy.
    
 2. ***Deploy local repository (Heroku)***
    * Prerequisites : Heroku cli
    * First make a new app on heroku & give a name.
    * Clone the repository to your local system.
    * Login to your heroku account:
    
    ~~~
    heroku login 
    ~~~ 
    
    * Set git remote repository to heroku: 
 
    ~~~    
    heroku git:remote -a <appName you created earlier>
    ~~~
    
    * Install gunicorn:
    
    ~~~ 
    pip install gunicorn   
    ~~~
    
    * Document all dependencies:
    
    ~~~  
    pip freeze > requirements.txt  
    ~~~
    
    * Add script that execude on server in procfile:
    
    ~~~  
    web: gunicorn run:app    
    ~~~
    
    * Push the branch to heroku that you want to deploy:
    
    ~~~   
    git push heroku master  
    ~~~ 
    
    
    






