import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>Divcover & Share</h1>
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>AI-Powered Discovery</span>
      <p className='desc text-center'>
        AI-Feast is an AI prompt search tool for modern world to discover, create and share prompts
      </p>
      <Feed />
    </section>
  )
};

export default Home;