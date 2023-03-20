fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => {
        return value.json();
    })
    .then(posts => {
        let item = document.createElement('div');
        item.classList.add('item');
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('index');
            divCard.innerHTML = `<h4> Posts user: ${post.userId} : ${post.title}</h4>
                           <h5> Body: ${post.body}</h5>`;
            let btn = document.createElement('button');
            btn.innerText = 'Comments';
            btn.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let userComments = document.createElement('div');
                                userComments.classList.add('userComments');
                                userComments.innerHTML = ` <h4> Name: ${comment.name}</h4>
                                              <h5>Body: ${comment.body}</h5>`;
                                divCard.appendChild(userComments)
                            }
                        }
                    })
            }
            divCard.appendChild(btn);
            item.appendChild(divCard);
            document.body.appendChild(item);
        }
    });

