/*------- FOR -------*/

const users = ['Maria','Danilo','Guilherme']
for(let i = 0; i < users.length; i++){
    console.log(users[i])
}

for(let i = 0; i < 10; i++){
    console.log(i)
}

/*------- FOR OF (UTILIZADO EM ARRAY)-------*/

const user = ['Maria','Danilo','Guilherme']

For( let nome of user ){
    console.log(nome)
}

/*------- FOR IN (OBJETO) -------*/

const users = {
    name: 'Rodolfo',
    age: 33,
    street: 'Rua dez'
}

for(let key in users){
    console.log(key)
}