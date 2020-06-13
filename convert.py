#coding:utf-8
import io

f=io.open("words.txt","r",encoding="utf-8")
words=f.read().split("\n");
f.close()

txt="words=["
for w in words:
    w=w.replace('"','')
    txt+='"'+w+'",'
txt=txt[:-1]+"];"

f=io.open("words.js","w",encoding="utf-8")
f.write(txt)
f.close()



