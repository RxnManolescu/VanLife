import { requireAuth } from "../../utils";
import { getHostVans } from "../../api";
import { useLoaderData, defer, Await, Link } from "react-router-dom";
import { Suspense } from "react";
import reviewStar from "../../assets/review-star.png";

export async function loader({ request }){
    await requireAuth(request)
    return defer({ vans: getHostVans() })

}

export default function Dashboard() {

    const loaderData = useLoaderData()

    function renderHostVanEls(vans) {
        const hostVanEls = vans.map(van => (
            <Link to={`vans/${van.id}`} className="host-van-single" key={van.id}>
                <img src={van.imageUrl} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </Link>
        ))

        return (
            <div className="host-vans-list">
                {hostVanEls}
            </div>
        )
    }

    return ( 
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>

            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <p>
                    <img src={reviewStar} alt=""/>
                    <span>5.0</span>
                        /5
                </p>
                <Link to="reviews">Details</Link>
            </section>

            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                <Suspense fallback="Loading...">
                    <Await resolve={loaderData.vans}>{renderHostVanEls}</Await>
                </Suspense>
            </section>
        </>
    );
}

