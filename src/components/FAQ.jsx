import React, { useState } from 'react'
import data from "../assets/data"

const FAQ = () => {

    const [show, setShow] = useState(null)

    const handleClick = (idx) => {
        setShow((prevIdx) => (prevIdx === idx ? null : idx))
    }

    return (
        <div className='faq'>
            <h2 className='faq-title'>Frequently Asked Questions</h2>
            {
                data.map((faq, idx) => (
                    <div key={idx}>
                        <div className='faq-container'>
                            <button className='faq-btn' onClick={() => handleClick(idx)}>
                                <div className='faq-btn1'>
                                    <h3>{idx + 1}.</h3>
                                    <h3>{faq.question}</h3>
                                </div>
                                <span className={`${show === idx ? 'arrow' : ''}`}>&#11167;</span>
                            </button>
                            <div>
                                {show === idx && <div className='answer'> {faq.answer}</div>}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FAQ;