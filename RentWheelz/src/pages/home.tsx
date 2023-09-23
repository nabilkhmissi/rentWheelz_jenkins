import Cars from "../components/cars";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="text container">
                    <h1 className="hero-title">Fast And Easy Way To Rent</h1>
                    <h1 className="hero-title">A Branded Car</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsa.</p>
                </div>
            </section>
            <section className="container">
                <h1 className="section-title">Our cars</h1>
                <Cars />
            </section>
        </>
    )
}