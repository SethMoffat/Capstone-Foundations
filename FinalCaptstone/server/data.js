var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jimmy",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "John",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Dave",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Buster",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

let threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}