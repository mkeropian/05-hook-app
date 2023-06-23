import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';



export const Layout = () => {

    const { counter, increment, decrement } = useCounter(0);
    const { data, isLoading, hasError } = useFetch('https://api.giphy.com/v1/gifs/search?api_key=2cPWQt3c1fkDf1PCmuJU29CKlVhAWmp3&q=Batman&limit=20');

    const { id, title } = !!data && data.data[counter]; // si !!data es true realiza lo que esta despues del &&

    return (
        <>
            <h1>PokeApi Quotes</h1>
            <hr />

            { 
                isLoading 
                ? 
                    <LoadingQuote />
                :
                    <Quote id = { id } title = { title } />            
            }

            <button className="btn btn-primary" onClick={ () => increment() } disabled={ isLoading }>
                Next quote
            </button>

            <button className="btn btn-primary" onClick={ () => decrement() } disabled={ isLoading }>
                Prev quote
            </button>
        </>
    )

}

