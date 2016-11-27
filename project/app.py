from flask import Flask, jsonify, render_template, request
from flask.ext.sqlalchemy import SQLAlchemy
import os
import sys
import logging

app = Flask(__name__)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)

@app.route('/')
def index():
  return render_template('index.html')

class RSVP(db.Model):
  __tablename__ = 'rsvp'
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(255), primary_key=False)
  last_name = db.Column(db.String(255), primary_key=False)
  rsvp = db.Column(db.String(255), primary_key=False)
  created = db.Column(db.DateTime())

  def __init__(self, first_name, last_name, rsvp):
    self.first_name = first_name
    self.last_name = last_name
    self.rsvp = rsvp

@app.route('/rsvp', methods=['POST'])
def rsvp():
  if request.method == 'POST':
    jsonData = request.get_json(force=True)
    first_name = jsonData['firstName']
    last_name = jsonData['lastName']
    rsvp = jsonData['attend']
    reg = RSVP(first_name, last_name, rsvp)
    db.session.add(reg)
    db.session.commit()
  return jsonify({'status': 'ok'})

if __name__ == '__main__':
  # Bind to PORT if defined, otherwise default to 5000.
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)
