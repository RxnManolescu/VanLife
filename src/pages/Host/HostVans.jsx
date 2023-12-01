
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
import { Suspense } from "react"

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function HostVans() {

    const dataPromise = useLoaderData()

    function renderHostVanElements(vans) {
        const hostVanEls = vans.map(van => (
            <Link
                to={van.id}
                key={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))

        return (
            <section>
                <div className="host-vans-list">
                    <section>
                        {hostVanEls}
                    </section>
                </div>
            </section>
        )
    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <section>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderHostVanElements}
                </Await>
            </Suspense>
            </section>
        </section>
    )
}

