import pymongo
import sys


# connnecto to the db on standard port
connection = pymongo.MongoClient("mongodb://localhost")

db = connection.students                 # attach to db
collection = db.grades         # specify the colllection


prev_student_id = -999

try:
    iter = collection.find({'type': 'homework'}).sort([('student_id', pymongo.ASCENDING), ('score', pymongo.ASCENDING)])
    for item in iter:
        if item['student_id'] != prev_student_id:
            collection.remove(item)
            prev_student_id = item['student_id']
except:
    print "Error:", sys.exc_info()[0]

print collection.count()
