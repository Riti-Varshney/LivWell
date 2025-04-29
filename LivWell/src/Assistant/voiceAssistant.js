export const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onstart = () => {
            console.log("Voice recognition started... , Microphone is Listening");
        };

        recognition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript.trim();
            console.log("Command received: ", spokenText);
            handleCommands(spokenText.toLowerCase());
        };

        recognition.onerror = (e) => {
            console.error("Error in speech recognition: ", e.error);
        };

        recognition.onend = () => {
            console.log("Voice recognition ended ... , (Ready To Listen Again)");
        };

        recognition.start();       //listen
    } else {
        alert("Your Browser Does not support voice input");
    }
};

const handleCommands = (command) => {
    console.log("Command received: ", command);
    if (command.includes("hello") || command.includes("hi") || command.includes("hey")) {
        speakFunc("Hello, How Can I Help You!");
    } else if (command.includes("who are you") || command.includes("tell me about yourself") || command.includes("who is this") || command.includes("what is your name")) {
        speakFunc("I am a Virtual Assistant, My name is Livi");
    } else if (command.includes("open youtube") || command.includes("youtube")) {
        speakFunc("Opening YouTube...");
        window.open("https://www.youtube.com/");
    } else if (command.includes("open instagram") || command.includes("instagram") || command.includes("insta") || command.includes("open insta")) {
        speakFunc("Opening Instagram...");
        window.open("https://www.instagram.com/");
    }
    else if (command.includes("open google") || command.includes("google")) {
        speakFunc("Opening Google...");
        window.open("https://www.google.com/");} 
    else {
        speakFunc(`This is what I found on the internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }
};

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.volume = 1;
    speakInput.lang = 'en-GB';
    window.speechSynthesis.speak(speakInput);
};
