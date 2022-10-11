from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'hello'

print("start")
data = input('stop: ')