

/*ForEach(item, index, array)*/




const users = [

        { name: 'Bruno', age: 31, contact: '(81)98247-9611'},
        { name: 'Lilly', age: 29, contact: '(81)99110-1922'},
        { name: 'Elisa', age: 8, contact: '(81)97307-7598'},
        { name: 'Olivia', age: 1, contact: '(81)98294-9530'},
    ]


users.forEach(function (item, index) {
    //console.log(i)
    //console.log(item)
    //console.log(array)

    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
     


});