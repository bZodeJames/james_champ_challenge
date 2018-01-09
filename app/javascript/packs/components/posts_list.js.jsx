var PostsList = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.post.map(function(post) {
                    return (
                        <Post post={post} />
                    )
                })}
            </div>
        )
    }
});