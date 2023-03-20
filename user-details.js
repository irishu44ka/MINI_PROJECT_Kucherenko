let url = new URL(location.href);
let id = url.searchParams.get('data');
let users = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {
            let userDiv = document.createElement('div')
            userDiv.classList.add('userDiv');
            if (typeof value[item] !== 'object') {
                userDiv.innerText =`${item}:${value[item]}`;
            } else {
                userDiv.innerText = `${item}:`;
                for (const key in value[item]) {
                    let userInner = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInner.innerText = `${key} : ${value[item][key]}`;
                    } else {
                        userInner.innerText = `${key} :`;
                        for (const element in value[item][key]) {
                            let htmlDivElement = document.createElement('li');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} : ${value[item][key][element]}`
                            }
                            userInner.append(htmlDivElement)
                        }
                    }
                    userDiv.append(userInner)
                }
            }
            document.body.append(userDiv);

        }
    })