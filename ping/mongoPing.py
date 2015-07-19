from pymongo import MongoClient
import pingScript
from time import sleep

client = MongoClient()
db = client.ping_database
pings = db.pings

while(1<2):
	
	pingToInsert = pingScript.ping()
	print("---------------- Adding ping to the database : --------------------")
	print(pingToInsert)
	insertReturn = pings.insert(pingToInsert)
	# Check insert return status
	print("---------------- Insertion successful. ---------------------------- \n")

	# print("Insertion unsuccessful, insert returned : ")
	# print(insertReturn)
	
	sleep(1)


