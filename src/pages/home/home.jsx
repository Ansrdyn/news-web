import { useDispatch, useSelector } from "react-redux";
import { fetchSuccess } from "../../store/actions/action";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage(params) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.news);

    useEffect(() => {
      dispatch(fetchSuccess());
    }, [dispatch]);
    
    return (
        <>
          <div className="my-5">
            <h5 className="text-center">
              <b>Latest News</b>
            </h5>
            <div className="d-flex justify-content-between"></div>
          </div>
      
          {/* Spinner logic */}
          {data?.documents?.length === 0 ? (
            <div className="text-center my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {data?.documents?.map((item, index) => (
                <div className="col" key={item._id}>
                    <div className="card h-100 w-100" style={{ border: "none" }}>
                    <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt={item.title}
                    />
                    <div className="card-body border-0">
                        <h5 className="card-title">{item.title}</h5>
                    </div>
                    <div className="card-footer border-0" style={{ background: "white" }}>
                        <button
                        className="btn btn-primary">
                        <Link
                        to={`/${item._id}`}
                        type="button"
                        class="btn btn-primary btn-sm"
                        >
                        See Detail
                        </Link>
                        </button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
          )}
        </>
      );
      
}
