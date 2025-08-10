import axios from "axios"
import { useQuery , QueryClient , QueryClientProvider } from "react-query"

function Quote()
{
    async function fetchquote() {
        try{
            const response = await axios({
                method:"GET",
                url:"https://official-joke-api.appspot.com/random_joke"
            });
            return response.data;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const {data , status , isLoading} = useQuery('joke' , fetchquote);
    console.log(data , status);

    if (isLoading) return <p>Loading...</p>;
    if (status == "error") return <p>Failed to fetch joke. Please try again later.</p>;

    return <p>
    {data.setup} <br />
    <strong>{data.punchline}</strong>
  </p>;
}

function reactQuery()
{
    const queryclient = new QueryClient();

    return(
        <>
            <h1>Random jokes</h1>
            <QueryClientProvider client={queryclient}>
                <Quote/>
            </QueryClientProvider>
        </>
    )
}


export default reactQuery