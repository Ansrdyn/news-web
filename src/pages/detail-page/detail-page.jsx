import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { detailPage } from "../../store/actions/action";
import { useEffect, useState } from "react";
import './detail-page.css';

export default function DetailPage(params) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate(); // Hook to navigate to different routes
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(detailPage(id)).then((data) => {
            setData(data?.documents[0]);
        });
    }, [id]);

    return (
        <div className="news-article-container">
            <button className="back-button" onClick={() => navigate("/")}>
                &larr; Back
            </button>

            <div
                className="header-image"
                style={{ backgroundImage: `url(${data.imageUrl})` }}
            >
                <div className="header-content">
                    <div className="card-detail bg-dark text-white">
                        <div className="card-body">
                            <h1 className="card-title display-3">{data.title}</h1>
                            <div className="card-text scrollable-content">
                                {data.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
