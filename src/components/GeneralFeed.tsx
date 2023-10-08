"use client";

import { useState, useEffect } from 'react'
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '@/config'
import { db } from '@/lib/db'
import PostFeed from './PostFeed'

const GeneralFeed = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await db.post.findMany({
        take: parseInt(limit),
        include: {
          votes: true,
          author: true,
          comments: true,
          subreddit: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: INFINITE_SCROLLING_PAGINATION_RESULTS,
      })

      setPosts(fetchedPosts)
    } catch (error) {
      // Handle error, such as logging or displaying an error message
      console.error('Error fetching posts:', error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, []) // Run once on component mount

  return <PostFeed initialPosts={posts} />
}

export default GeneralFeed
