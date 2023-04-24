import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao"];

const Home = () => {
    const [languageIndex, setLanguageIndex] = useState(0);
    const [displayedGreeting, setDisplayedGreeting] = useState("");
    const greeting = languages[languageIndex];

    const typeGreeting = (index, currentIndex) => {
        if (currentIndex !== languageIndex) return;

        if (index < greeting.length) {
            setDisplayedGreeting((prevGreeting) => prevGreeting + greeting[index]);
            setTimeout(() => typeGreeting(index + 1, currentIndex), 200);
        } else {
            setTimeout(() => {
                setDisplayedGreeting("");
                setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
            }, 2000);
        }
    };

    useEffect(() => {
        setDisplayedGreeting("");
        typeGreeting(0, languageIndex);
    }, [languageIndex]);

    return (
        <Typography
            variant="h2"
            color="primary"
            className="transition duration-500 ease-in-out text-center !font-bold !text-4xl !text-blue-500"
        >
            {`${displayedGreeting}, I'm Jordan`}
        </Typography>
    );
};

export default Home;
