var Posts = React.createClass({
    getInitialState: function() {
        return {
            posts: this.props.data,
            input_title: '',
            input_body: 'Body text',
            input_published: ''
        }
    },
    render: function() {
        return (
            <div>
                <PostForm />
                <PostsList posts={this.props.posts} />
            </div>
        )
    }
});