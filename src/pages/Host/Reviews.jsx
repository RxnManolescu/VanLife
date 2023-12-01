
import reviewsGraph from "../../assets/reviews-graph.png"
import reviewStar from "../../assets/review-star.png"

export default function Reviews() {

    const reviewsData = [
        {
            rating: 5, 
            name: "Elliot", 
            date: "December 1, 2022", 
            description: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: 1,
        },
        {
            rating: 5, 
            name: "Sandy", 
            date: "November 23, 2022", 
            description: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: 2,
        }
    ]

    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>Last <span>30 days</span></p>
            </div>
            <img src={reviewsGraph} className="graph" />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                    <div key={review.id}>
                        <div className="review">
                            {[...Array(review.rating)].map((i) => (
                                    <img src={reviewStar} key={i} />
                                ))
                            }
                            <div className="review-info">
                                <p className="name">{review.name}</p>
                                <p className="date">{review.date}</p>
                            </div>
                            <p className="review-description">{review.description}</p>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </section>
    )
}