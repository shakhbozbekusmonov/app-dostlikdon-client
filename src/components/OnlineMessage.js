import React from 'react';

const OnlineMessage = () => {
    return (
        <div className="online_message d-flex align-items-center">
            <img src="/images/ticket.png" className="ml-4" alt="Error"/>
            
            <h1 className="font-inter-semibold ml-5">
                Shikoyatlar mavjudmi? <br/>
                onlayn tarzda yuboring</h1>

            <button type="button" className="btn ml-5">Murojaat yuborish</button>

            <img src="/images/mygov.png" alt="Error"/>
        </div>
    );
};

export default OnlineMessage;