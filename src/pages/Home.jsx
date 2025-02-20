import { useState ,useEffect} from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [Loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);


  async function fetchProductdata() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setposts(data)
      console.log(data)


    } catch (error) {
      console.log('post data not found');
      setposts([])
    }
    setLoading(false)

  }

useEffect(() => {
  
  fetchProductdata();
}, []);


  return (
    <div>
      
      {
        Loading ? <Spinner/>:
        posts.length >0 ?
        (<div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post)=>{
              return <Product key={post.id} post={post}/>
            })
          }
        </div>):
          <div className="flex justify-center items-center ">
          <p>NO post data found</p>
          </div>
      }



    </div>
  );
};

export default Home;
