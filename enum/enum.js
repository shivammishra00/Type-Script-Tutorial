var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["supera_dmin"] = 1] = "supera_dmin";
    Role[Role["manager"] = 2] = "manager";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.supera_dmin);
