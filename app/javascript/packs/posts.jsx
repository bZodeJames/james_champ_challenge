import React from 'react'
import moment from 'moment'
import { formatDate } from './utils'

const Post = ({ post }) =>
    <div className='post'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{post.published}</p>
        <p>{post.factorial}</p>
    </div>

export default Post