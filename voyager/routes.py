
from flask import render_template, url_for, flash, redirect, request, abort
from voyager import app, db, bcrypt
from voyager.forms import RegistrationForm, LoginForm,  PostForm , adminForm
from voyager.models import User, Post
from flask_login import login_user, current_user, logout_user, login_required


@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', title = 'Home')

@app.route("/missions")
def missions():
    return render_template('missions.html', title='Missions')

@app.route("/missionsspace")
def mspace():
    return render_template('missionsspace.html', title='Missions Space')

@app.route("/register", methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)


@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check email and password')
    return render_template('login.html', title='Login', form=form)


@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route("/apply", methods=['GET', 'POST'])
@login_required
def apply():
    form = PostForm()
    if form.validate_on_submit():
        post = Post(title=form.title.data, content=form.content.data, author=current_user)
        db.session.add(post)
        db.session.commit()
        flash('Your application submitted successfully')
        return redirect(url_for('home'))
    return render_template('apply.html', title='Induction Form',
                           form=form)

@app.route('/admin/login' ,methods=['GET',"POST"])
def admin_user():
    form = adminForm()
    if form.validate_on_submit:
        if form.password.data == 'pulkitpleaseshow':
            return redirect(url_for('admin')) 
    return render_template('admin-pass.html', form=form, title='Admin Login')
@app.route('/admin/form-response')
def admin():
    posts = Post.query.all()
    return render_template('admin.html', title='Form Response',posts= posts)
