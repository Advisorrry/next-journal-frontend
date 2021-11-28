import React from 'react'
import { FullPost } from '../../components/FullPost'
import { MainLayout } from '../../layouts/MainLayout'
import { PostComments } from '../../components/PostComments'


const Post = () => {
  return (
    <MainLayout>
      <FullPost />
      <PostComments />
    </MainLayout>
  )
}

export default Post
