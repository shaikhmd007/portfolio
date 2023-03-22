import React, { useEffect, useState } from 'react'

const FamousQuotes = () => {

    console.log('shaikh_md.')
    const [qoutes, setQuotes] = useState("")
    const [author, setAuthor] = useState("")
    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((quotes) => {
                setQuotes(quotes.content);
                setAuthor(quotes.author);
            });

    }, [])
    const FindFamousQuotes = () => {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((quotes) => {
                setQuotes(quotes.content);
                setAuthor(quotes.author);
            });
    }
    // Another Approch
    /*  const [qoutes, setQuotes] = useState("")
     const [author, setAuthor] = useState("")
 
     const FindFamousQuotes = () => {
         fetch('https://api.quotable.io/random')
             .then((res) => res.json())
             .then((quotes) => {
                 setQuotes(quotes.content);
                 setAuthor(quotes.author);
             });
     }
     useEffect(() => {
         FindFamousQuotes()
     })
  */
    return (
        <div className="qoutes-card" >
            <hr />
            {/* <i className="bi bi-quote"></i> */}
            <img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/quote.svg" width={50} height={50} alt='Qoutes Mark' className='qoute' />
            <blockquote> {qoutes} "</blockquote>
            <strong id="author">- {author}</strong>
            <p></p>
            <button className="nextQuote" onClick={FindFamousQuotes}> Next ' Quote<i className="bi bi-quote"></i> </button>
        </div >
    )
}

export default FamousQuotes





// nextQuote();

