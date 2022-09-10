import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='password', db='betterday_db', charset='utf8')
cur = conn.cursor()
print('cursor is gained')
cur.execute("CREATE TABLE IF NOT EXISTS userTable (id varchar(20), userName varchar(20), email varchar(20), birthYear int)")
print('table is created')
cur.execute("INSERT INTO userTable VALUES('jhy', 'jongha yun', 'jongha.yun', 1973)")
print('inserted')
conn.commit()