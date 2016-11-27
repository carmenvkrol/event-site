Event Site
=============

Single-page app built with [ReactJS](https://facebook.github.io/react/), [FluxJS](https://facebook.github.io/flux/), [SASS](http://sass-lang.com/), [Node.js](http://nodejs.org/), [Flask](http://flask.pocoo.org/), and [PostgreSQL](http://www.postgresql.org/).

The web application includes event information as well as a form for submitting RSVP information to a Postgre SQL database.

Here's the [demo] (https://event-site.herokuapp.com).


Configuration
------------
Configuring this project should be consistent across Mac (local) and Vagrant.  You should already have [Node.js](http://nodejs.org), [Python 2](https://www.python.org/), and [PostgreSQL](http://www.postgresql.org/) installed before cloning.

Start by cloning the repository
```
$ https://github.com/carmenvkrol/event-site
```

This app uses [Gulp](http://gulpjs.com/) to run tasks.  Install Gulp locally on your machine.
```
$ npm install --global gulp
```

Once that's complete, install the Node dependencies by running
```
$ npm install
```

Then install Python packages by running
```
$ pip install
```

Running the Application Locally
------------
Make sure that the postgreSQL application is running and then run in one tab:
```
$ gulp server
```

In another tab, run:
```
$ gulp client
```

The application runs on port 5000 (configured in [gulpfile.js](https://github.com/carmenvkrol/event-site/blob/master/project/gulpfile.js)).  To change the port, modify the number highlighted below
```
...
gulp.task('runserver', function() {
    browserSync({
      notify: false,
      proxy: "127.0.0.1:5000" //change this number to the desired port
    });
    var proc = exec('python project/app.py');
});

```

Directory Structure
------------
```
event-site/
 |__project/ #client-side development and server-side files
 |  |__static/ #client-side scripts and styles
 |  |__templates/ #client-side HTML templates
 |  app.py #includes database model and routing with Flask
 |  config.py #includes URI for PostgreSQL database
 |  gulpfile.js

```

SASS
------------
This app uses the CSS pre-processor [SASS](http://sass-lang.com/) in order to facilitate styling.  SASS files can be found in the sass folder under the project/static directory. (See Directory Structure section above to locate these).  In order for these files to be converted into CSS, and modify styling in the views, save SASS files within the SASS folder.


Node Packages
------------
**[Browser-Sync](https://www.npmjs.com/package/browser-sync)** - keeps multiple browsers in sync when building

**[Browserify](https://www.npmjs.com/package/browserify)** - runs node modules in the browser

**[Envify](https://github.com/hughsk/envify)** - replace Node variables with plain strings

**[FluxJS](https://www.npmjs.com/package/flux)** - FluxJS architecture for unidirectional data flow client-side

**[Gulp](https://www.npmjs.com/package/gulp)** - task manager

**[Gulp-Rename](https://www.npmjs.com/package/gulp-rename)** -  gulp tasks for renaming files

**[Gulp-Run](https://www.npmjs.com/package/gulp-run)** - use shell commands in gulp

**[Gulp-SASS](https://www.npmjs.com/package/gulp-sass)** - gulp task for compiling SASS

**[Gulp-Uglify](https://www.npmjs.com/package/gulp-uglify)** - gulp task for uglifying JavaScript

**[Jest-CLI](https://www.npmjs.com/package/jest-cli)** -JavaScript unit testing

**[jQuery](jquery.org)** - jQuery

**[Keymirror](https://www.npmjs.com/package/keymirror)** - creates objects where keys equal values

**[Object-Assign](https://www.npmjs.com/package/object-assign)** - ES6 object.assign() polyfill

**[React](https://www.npmjs.com/package/react)** - ReactJS framework

**[Reactify](https://www.npmjs.com/package/reactify)** - transforms JSX into JavaScript that can be run in the browser

**[Uglify-JS](https://www.npmjs.com/package/uglify-js)** - uglifies JavaScript

**[Vinyl-Transform](https://www.npmjs.com/package/vinyl-transform)** - wraps standard text transform streams

**[Watchify](https://www.npmjs.com/package/watchify)** - watches source files and re-compiles scripts for browser with browserify (see above in this section)


Python Packages
------------
**[Flask](https://pypi.python.org/pypi/Flask/0.10.1)** - Python microframework

**[Flask-SqlAlchemy](https://pypi.python.org/pypi/Flask-SQLAlchemy/2.0)** - SQLAlchemy support for Flask

**[Gunicorn](http://gunicorn.org/)** - WSGI HTTP Server

**[Psycopg2](https://pypi.python.org/pypi/psycopg2/2.6.1)** - Python-PostgreSQL database adapter.

**[SQLAlchemy](https://pypi.python.org/pypi/SQLAlchemy/1.0.8)** - Python SQL toolkit
