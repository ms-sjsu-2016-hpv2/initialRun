import requests
import os

ipaddress = '10.250.55.56'
port = '3000'
url = 'http://'+ipaddress+':'+port+'/registerDevice'
cpuinfo = os.popen("cat /proc/cpuinfo").read()
version = os.popen("cat /proc/version").read()
task = {"version": version,"cpuinfo":cpuinfo}
resp = requests.post(url,json=task)
app_url = format(resp.json()["github_url"])
os.system("cd ~")
os.system("git clone "+app_url)
os.system("node cmpe295/temp.js")
os.system("touch abc.txt")
