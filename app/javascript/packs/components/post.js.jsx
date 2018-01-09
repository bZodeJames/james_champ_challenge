var Post = React.createClass({
    render: function() {
        return (
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
});