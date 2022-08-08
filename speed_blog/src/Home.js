import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isloading, error} = useFetch('http://localhost:4500/blogs')

    

    return ( 
        <div className="Home">
            {error && <div> {error} </div>}
            {isloading && <div> Loading.... </div>}
            {blogs && <BlogList blogs={blogs} title="ALL BLOGS!"/>}
        </div>
     );
}
 
export default Home;