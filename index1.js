let container = document.createElement('div');
document.body.append(container);
container.classList.add('container');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value =>  {
        for (const item of value) {
        let usersDiv = document.createElement('h2');
        usersDiv.classList.add('item');
        usersDiv.innerText = `User ${item.id}  ${item.name}`;
        container.append(usersDiv);

        let link = document.createElement('a');
        link.classList.add('link')
        link.innerText =  `Details`;
        usersDiv.append(link);
        link.href = `user-details.html?data=${item.id}`

    }
    })