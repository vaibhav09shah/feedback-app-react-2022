function App() {

    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment 1 '},
        {id: 2, text: 'Comment 2 '},
        {id: 3, text: 'Comment 3 '}
    ]

    const loading = false
    const showComments = false

    if(loading) return <h1>Loading...</h1>
    const commentsBlock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
                <ul>
                {comments.map((comment,index) => (
                    <li key={index}>{comment.text}</li>
                ))}
                </ul>
        </div>
    )

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>

            {/* {showComments ? (
                <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                        <ul>
                        {comments.map((comment,index) => (
                            <li key={index}>{comment.text}</li>
                        ))}
                        </ul>
                </div>
            ): (
                <h2>Loading...</h2>
            )} */}
            {showComments ? commentsBlock: null}    
            
        </div>
    )
}

export default App