import "./Home.css";
import banner from "./asset/banner.jpg";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";


const Home = ({ category , greeting }) => {
  return category ? (



    <>
      <section className="container-fluid Banner-container">
        <img className="img-responsive w-100" src={banner} alt="banner" />
      </section>

      <article className="container my-5">
        

<h1 className="text-center"> {greeting} </h1>

        <div className="row text-center">
          {category.map((cat) => {
            return (
              <article className="col-lg-4 p-3 d-flex">
                <Link
                  className="text-decoration-none"
                  to={`/category/${cat.id}`}
                >
                  <div className="  HomeItem ">
                    <img className="w-50 HomeItem-img" src={cat.img} />

                    <h2 className="HomeItem-Title">{cat.categoria} </h2>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </article>
    </>
  ) : (
    <Spinner />
  );
};

export default Home;
