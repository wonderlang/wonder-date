vs.date=x=>(
  D=new Date(''+x.body),
  obj({
    str:str(D+''),
    d:num(D.getDate()),
    D:num(D.getDay()),
    y:num(D.getFullYear()),
    h:num(D.getHours()),
    ms:num(D.getMilliseconds()),
    m:num(D.getMinutes()),
    M:num(D.getMonth()),
    s:num(D.getSeconds()),
    t:num(D.getTime()),
    off:num(D.getTimezoneOffset())
  })
)
