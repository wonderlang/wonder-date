#wonder-date
A basic date library for Wonder that makes use of Javascript to modify the standard library.

##Usage
The library contains one dynamic variable called `date`, which is an object containing data on the date at the time of the call.

property|description
---|---
str|string-formatted representation of the date
t|Unix time
off|timezone offset
ms|millisecond
s|second
m|minute
h|hour
d|date
D|day of the week
M|month
y|year

###Examples
```
date #str
: "s" #date
date "off"
```
