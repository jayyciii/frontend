import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedTime = time.toLocaleTimeString('vi-VN');

    return (
        <div className="text-[white] text-center text-[40px] mt-[5px]">{formattedTime}</div>
    );
}

export default Clock;