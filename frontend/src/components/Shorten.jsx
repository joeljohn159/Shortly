import { useState, useEffect, useRef } from "react";
import axios from 'axios'

export default function Shorten() {

    const [copied, setCopied] = useState(false);
    const [link, setLink] = useState('Type your long boring URL above');
    const [shortened, setShortened] = useState('Shortned');
    const [error, setError] = useState(false)
    const inputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 10000)
        return () => clearTimeout(timer);
    }, [copied])

    async function handleCopyToClipboard() {
        try {
            await navigator.clipboard.writeText(shortened);
            setCopied(true);
        } catch (err) {
            console.log(err)
            setCopied(false)

        }
    }

    const handleShorten = async (e) => {
        const URL = 'http://localhost:5100/url'
        e.preventDefault();
        if (!isUrlValid(inputRef.current.value)) {
            setError(true);
        }
        else {
            try {
                const res1 = await axios.post(URL,{url:inputRef.current.value});
                setLink(inputRef.current.value);
                setShortened(`${URL}/${res1.data.id}`);
             } catch (error) {
                setLink("ERROR");   
            }

        }
    }

    function isUrlValid(userInput) {
        var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if (res == null)
            return false;
        else
            return true;
    }
    return (
        <section id="shorten" className="relative bg-gray-400">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                <form action="" id="link-form" className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
                    <input  ref={inputRef} type="text" name="url" className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none" placeholder="Shorten a link here" id="link-input" />
                    <button onClick={handleShorten} className="px-10 py-3 bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">Shorten It!</button>
                    <p className="absolute left-8 text-red bottom-3 italic opacity-80">{error ? 'Enter Valid URL' : ''}</p>
                </form>

                <div className="flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg md:flex-row">
                    <p className="font-bold text-center text-veryDarkViolet md:text-left">{link}</p>
                    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                        <div className="font-bold text-cyan">
                            {shortened}
                        </div>
                        <button onClick={handleCopyToClipboard} className={copied ? "p-2 px-8 text-black bg-green-400 rounded-lg hover:opacity-70 focus:outline-none" : "p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none"}>
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}