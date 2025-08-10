import { Link, useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <p>Home page it is</p>

            <br />

            <Link to={'/products'}>Go to products </Link>
            <br />
            <Link to={'/products/mobiles'}>Go to products mobile </Link>
            <br />
            <Link to={'/products/lap'}>Go to lap </Link>

            <button onClick={() => navigate('/products/movie')} className="bg-red-600">Go to prod</button>
            <button onClick={() => navigate(-1)} className="bg-green-600">Go Back</button>
        </>
    );
}

export default Home;
