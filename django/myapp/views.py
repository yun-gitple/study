from django.shortcuts import render, HttpResponse, redirect
import random
from django.views.decorators.csrf import csrf_exempt

nextId = 4
topics = [
  { 'id': 1, 'title': 'my life', 'body': 'is big body!'},
  { 'id': 2, 'title': 'my career', 'body': 'is big career!'},
  { 'id': 3, 'title': 'my thought', 'body': 'is big thought!'}
]

# Create your views here.
def index(request):
  return template('Index Tag')

@csrf_exempt
def create(request):
  if request.method == "GET":
    articletag = '''
    <form action="/create/" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit"></p>
    </form>
    '''
    return template(articletag)
  elif request.method == "POST":
    global nextId
    title = request.POST["title"]
    body = request.POST["body"]
    topics.append({"id": nextId, "title": title, "body":body })
    nextUrl = '/read/' + str(nextId)
    nextId = nextId + 1

    return redirect(nextUrl)

def read(request, id):
  global topics
  ol = ''
  for topic in topics:
    if topic["id"] == int(id):
      ol += f'<li><a href="read/{topic["id"]}"></a>{topic["body"]}</li>\n'

  return template("read tag")

def template(articletag):

  global topics
  ol = ''
  for topic in topics:
    ol += f'<li><a href="/read/{topic["id"]}">{topic["title"]}</a></li>\n'
  
  return HttpResponse(f'''
    <html>
      Hello! <a href="/">Django</a>
      <ol>
        {ol}
      </ol>
      {articletag}
      <ul>
        <li><a href="/create/">Create</a></li>
      </ul>
    </html>
  ''')