# Script used to log pings
# Saves data to the pingData.txt file in the 
# json is time, ping, date


import os
import sys
import datetime
import re
import json
import hostName


def ping():
	hostname = hostName.hostName()
	data = {}

	#find the start time and convert it to hours:minutes 
	startTime = datetime.datetime.now()
	startHour = str(startTime.hour)
	startMinute = str(startTime.minute)
	if len(startMinute) == 0:
		startMinute = "00"
	elif len(startMinute) == 1:
		startMinute = "0" + startMinute
	if len(startHour) == 1:
		startHour = "0" + startHour
	startTime = startHour + ":" + startMinute
	data["time"] = startTime

	#get the current date as well
	startDate = datetime.date.today()
	data["date"] = str(startDate)

	#call one ping, get the results and return the dictionary. ping is using windows switches
	response = os.system("ping -c 1 " + hostname + " > ping.txt")
	terminal = open("ping.txt", "r")
	for line in terminal:
		if(len(line) > 2):			
			pingLag = "stddev = "
			result = line.find(pingLag)
			if(result != -1):
				result = re.findall(r'\d+', line)
				if(result):
					data["ping"] = result[0]
					terminal.close()
					return data
	data["ping"] = -1
	terminal.close()
	return data

	#endTime = datetime.datetime.now()
	#totalTime = (endTime - startTime).total_seconds()
	#print("Operation took " + str(totalTime) + "s")

if __name__ == "__main__":
	print(ping())