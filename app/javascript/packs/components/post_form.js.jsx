var PostForm = React.createClass({
    render: function() {
        return (
            <div>
                <form>
                    <input name='title' placeholder='Title' />
                    <input name='body' placeholder='Enter Post Body' />
                    <input name='published' placeholder='published' />
                </form>
            </div>
        )
    }
})