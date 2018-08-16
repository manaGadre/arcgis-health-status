import os
hostname = "http://learn.arcgis.com/en/" #example
response = os.system("ping -c 1 " + hostname)

#and then check the response...
if response == 0:
  print hostname, 'is up!'
else:
  print hostname, 'is down!'

# To calculate page load time
'''import urllib.request
from time import time

request = urllib.request.Request('http://stackoverflow.com')
stream = urllib.request.urlopen(request)
start_time = time()
output = stream.read()
end_time = time()
stream.close()
print(end_time-start_time)'''

