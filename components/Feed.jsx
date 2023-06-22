'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 propmpt_layout'>
      {data.map(post=> (
        <PromptCard
          key={post._id}
          handleTagClick={handleTagClick}
          post={post}
        />
      ))}
    </div>
  )
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const resp = await fetch('/api/prompt');
      const data = await resp.json();
      setPosts(data);
    }
    fetchPost();
  }, []);

  const handleSearchChange = e => {

  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed