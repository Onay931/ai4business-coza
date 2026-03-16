import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const Chatbot: React.FC = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setMessages([...messages, { user: input, bot: '...' }]);

        try {
            const query = groq`*[_type == "response" && input == $input]{response}`;
            const params = { input };
            const response = await sanityClient.fetch(query, params);
            const botResponse = response.length > 0 ? response[0].response : "I didn't understand that.";

            setMessages([...messages, { user: input, bot: botResponse }]);
        } catch (error) {
            console.error('Error fetching response:', error);
            toast.error('There was an error fetching the response. Please try again.');
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    return (
        <div>
            <div className="chat-area">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user ? 'user-message' : 'bot-message'}>
                        <span>{msg.user || msg.bot}</span>
                    </div>
                ))}
            </div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleSend} disabled={loading}>Send</button>
        </div>
    );
};

export default Chatbot;