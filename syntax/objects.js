var members = ['egoing' , 'k8805', 'hoya'];

console.log(members[1]);    //k8805
var i =0;
while (i<members.length) {
    console.log('array loop', members[i]);
    i = i +1;
}

var roles = {
    'programmer': 'egoing',
    'designer'  : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){ //in 앞에는 object의 key가 들어오도록 약속되어있음. key와 value
                        // name은 아무거나 정해도 상관없음 (key값이 됨)
    console.log('keys => ', name, 'value => ', roles[name]);
}