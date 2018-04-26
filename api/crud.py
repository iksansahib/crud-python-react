from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Employee(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80))
  address = db.Column(db.String(120))
  phone = db.Column(db.String(13))

  def __init__(self, name, address, phone):
    self.name = name
    self.address = address
    self.phone = phone

class EmployeeSchema(ma.Schema):
  class Meta:
    fields = ('name','address','phone')

employee_schema = EmployeeSchema()
employees_schema = EmployeeSchema(many=True)

@app.route("/employee", methods=["GET"])
def get_employee():
  all_users = Employee.query.all()
  result = employees_schema.dump(all_users)
  return jsonify(result.data)

@app.route('/employee', methods=['POST'])
def add_employee():
  name = request.json['name']
  address = request.json['address']
  phone = request.json['phone']

  new_employee = Employee(name, address, phone)
  db.session.add(new_employee)
  db.session.commit()

  return employee_schema.jsonify(new_employee)

if __name__ == '__main__':
    app.run(debug=True)