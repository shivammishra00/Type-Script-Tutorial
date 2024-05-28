enum Newrole {
    admin, supera_dmin, manager
}

console.log(Newrole)
console.log(Newrole.supera_dmin)

/////////////////////////////////////////////

enum Days{
    sun,mon,tue,wed,thus,fri,sat
    //0, 1, 2,  3,   4,   5,  6(index number)

}
let whichDay:Days;
whichDay=Days.mon
console.log(whichDay);

//////////////////////////////////////////////////

function nowday(day:Days){
    return day;
}
console.log(nowday(Days.sat))

////////////////////////////////////////////////////

enum Role{
  a="admin", b="hr", c="manager"
}

function golu(day:Role){
    return day;
}
console.log(golu(Role.a))