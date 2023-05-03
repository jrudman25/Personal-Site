import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const languages = ["Hello", "Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao"];

const Home = () => {
    const [languageIndex, setLanguageIndex] = useState(0);
    const [displayedGreeting, setDisplayedGreeting] = useState("");
    const greeting = languages[languageIndex];

    const typeGreeting = (index, currentIndex) => {
        if (currentIndex !== languageIndex) {
            return;
        }

        if (index < greeting.length) {
            setDisplayedGreeting((prevGreeting) => prevGreeting + greeting[index]);
            setTimeout(() => typeGreeting(index + 1, currentIndex), 200);
        }
        else {
            setTimeout(() => {
                setDisplayedGreeting("");
                setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
            }, 2000);
        }
    };

    useEffect(() => {
        let timeoutId;

        setDisplayedGreeting("");
        typeGreeting(0, languageIndex);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [languageIndex]);


    return (
        <div>
            <Typography
                variant="h2"
                color="primary"
                className="transition duration-500 ease-in-out text-center !font-bold !text-4xl !text-blue-500"
            >
                {`${displayedGreeting}, I'm Jordan`}
            </Typography>
            <Typography
                variant="h4"
                color="primary"
                className="text-center"
            >
                I'm currently building my portfolio.
            </Typography>
            <Typography
                variant="h4"
                color="primary"
                className="text-center"
            >
                For now, please check out my{" "}
                <a href="https://github.com/jrudman25" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                    GitHub
                </a>{" "}
                for examples of my work!
            </Typography>
            <Typography
                variant="h4"
                color="primary"
                className="text-center"
            >
                You can also see my {" "}
                <a href="https://www.linkedin.com/in/jordan-rudman/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                    LinkedIn page
                </a>{" "}
                for more information.
            </Typography>
        </div>
    );
};

export default Home;
