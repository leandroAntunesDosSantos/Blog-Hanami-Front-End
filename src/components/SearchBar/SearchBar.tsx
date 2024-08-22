import './style.css';
import { useState } from 'react';

type Props = {
    onSearch: (text: string) => void;
}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleChange(event: { target: { value: string; }; }) {
        setText(event.target.value);
    }

    function handleResetClick() {
        setText("");
        onSearch(text);
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        onSearch(text);
    }

    return (

        <form className="hanami-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
            value={text}
                type="text"
                placeholder="Digite o titulo do Post" 
                onChange={handleChange}
            />
            <button onClick={handleResetClick}>🗙</button>
        </form>

    );

}

