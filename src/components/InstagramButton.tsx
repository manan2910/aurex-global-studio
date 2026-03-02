import { Instagram } from "lucide-react";

const InstagramButton = () => {
    return (
        <a
            href="https://www.instagram.com/aurex._in/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full 
            bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 
            flex items-center justify-center shadow-lg 
            hover:scale-110 transition-transform duration-300 
            hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]"
            aria-label="Instagram"
        >
            <Instagram size={26} className="text-white" />
        </a>
    );
};

export default InstagramButton;