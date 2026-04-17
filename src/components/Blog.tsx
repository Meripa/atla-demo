import taust from '../assets/5.png'

const Blog = () => {
  return (
    <div>
             {/* BACKGROUND*/}
      <div className="fixed inset-0 -z-20">
        <img
          src={taust}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 blur-[2px]" />
      </div>Blog</div>
  )
}

export default Blog