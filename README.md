# Voyager Website

This is a web development project for hacktoberfest made with HTML, CSS, JS, and Python (Flask).

## Overview

Voyager is a space-themed website that can be used as a template for space-related topics. You can view a live demo of the website [here](https://voyager-website.herokuapp.com/).

## Contribution Guidelines

We welcome contributions of all kinds, including:

- Adding new features
- Fixing bugs
- Improving documentation
- Reviewing pull requests

To get started, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Set up a virtual environment for your Python dependencies.
3. Install the dependencies by running `pip install -r requirements.txt`.
4. Run the website by clicking on `run.py`.
5. Make your changes and submit a pull request.

## Deployment Methods

There are two ways to deploy the Voyager website:

1. Deploy the forked repository to Heroku by following these steps:
   1. Fork the repository.
   2. Log in to your Heroku account.
   3. Create a new app and give it a name.
   4. Connect your GitHub account to Heroku.
   5. Search for the repository you want to deploy and then deploy it.
2. Deploy the local repository to Heroku by following these steps:
   1. Install the Heroku CLI.
   2. Create a new app on Heroku and give it a name.
   3. Clone the repository to your local machine.
   4. Log in to your Heroku account by running `heroku login`.
   5. Set the remote repository to Heroku by running `heroku git:remote -a <app-name>`.
   6. Install Gunicorn by running `pip install gunicorn`.
   7. Document all dependencies by running `pip freeze > requirements.txt`.
   8. Add a `Procfile` that specifies the command to run on the server.
   9. Push the branch to Heroku that you want to deploy by running `git push heroku master`.
