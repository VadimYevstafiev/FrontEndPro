function showComments(event) {
    const button = event.target.closest('button');
    const postId = button.dataset.postId;

    const getComments = new Promise((resolve) => {
        const comments = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        resolve(comments);
    });

    getComments.then((data) => {
        return data.json();
    })
    .then((data) => {
        const box = document.querySelector('.comments-box');

        let itemBox;
        data.forEach(element => {
            itemBox = document.createElement('div');

            const title = document.createElement('h2');
            title.innerText = element.name;
            itemBox.append(title);
            
            const content = document.createElement('p');
            content.innerText = element.body;
            itemBox.append(content);

            box.append(itemBox);
        });
    })
    .catch((error) => {
        alert(error.message);
    })

}

const postIdButton = document.querySelector('#enter-post-id');
postIdButton.addEventListener('click', function () {
    const inputPostId = document.querySelector('#post-id');
    const postId = inputPostId.value;

    const getPost = new Promise((resolve) => {
        if (postId < 1 || postId > 100) throw Error('Number of post may be from 1 to 100');
    
        const postData = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        resolve(postData);
    });

    getPost.then((data) => {
        return data.json();
    })
    .then((data) => {
        document.querySelector('.comments-box').innerHTML = '';

        let button = document.querySelector('#show-comments-button');
        if (button !== null) {
            button.removeEventListener('click', showComments);
        }

        const box = document.querySelector('.post-box');
        box.innerHTML = '';

        const title = document.createElement('h1');
        title.innerText = data.title;
        box.append(title);
        
        const content = document.createElement('p');
        content.innerText = data.body;
        box.append(content);

        button = document.createElement('button');
        button.innerText = 'Show comments';
        button.setAttribute(`data-post-id`, data.id);
        button.setAttribute(`id`, 'show-comments-button');
        button.addEventListener('click', showComments);
        box.append(button);
    })
    .catch((error) => {
        alert(error.message);
    })
})
