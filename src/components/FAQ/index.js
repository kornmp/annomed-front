import React, { useState } from 'react'
import './Styles.css';
import { Button } from 'react-bootstrap';

function FAQ() {
    const QuestionHeader = "Frequently Asked Questions";
    const QuestionDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's";
    const FAQ = [
        {id:1, question:"How does payment1 work?", answer:"1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id:2, question:"How does payment2 work?", answer:"2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id:3, question:"How does payment3 work?", answer:"3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id:4, question:"How does payment4 work?", answer:"4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id:5, question:"How does payment5 work?", answer:"5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    ]

    const [active, setActive] = useState('');
    const [question, setQuestion] = useState('');

    function questionOne() {
        setQuestion(0)
        setActive(1)
    }

    function questionTwo() {
        setQuestion(1)
        setActive(2)
    }

    function questionThree() {
        setQuestion(2)
        setActive(3)
    }

    function questionFour() {
        setQuestion(3)
        setActive(4)
    }

    function questionFive() {
        setQuestion(4)
        setActive(5)
    }

    return (
        <div className="FAQ-main">
            <div className="question-textbox">
                <h1>{QuestionHeader}</h1>
                <p>{QuestionDesc}</p>
            </div>
            <div className="FAQ-container">
                <div className="question-body">
                    {active === 1 ? (
                        <div className="faq">
                            <Button className="faq-on">{FAQ[0].question}</Button>
                            <div className="answer-desc">{FAQ[question].answer}</div>
                        </div>
                    ) : (
                        <Button className="faq-on" onClick={questionOne}>{FAQ[0].question}</Button>   
                    )}
                    {active === 2 ? (
                        <div className="faq">
                            <Button className="faq-on">{FAQ[1].question}</Button>
                            <div className="answer-desc">{FAQ[question].answer}</div>
                        </div>
                    ) : (
                        <Button className="faq-on" onClick={questionTwo}>{FAQ[1].question}</Button>   
                    )}
                    {active === 3 ? (
                        <div className="faq">
                            <Button className="faq-on">{FAQ[2].question}</Button>
                            <div className="answer-desc">{FAQ[question].answer}</div>
                        </div>
                    ) : (
                        <Button className="faq-on" onClick={questionThree}>{FAQ[2].question}</Button>   
                    )}
                    {active === 4 ? (
                        <div className="faq">
                            <Button className="faq-on">{FAQ[3].question}</Button>
                            <div className="answer-desc">{FAQ[question].answer}</div>
                        </div>
                    ) : (
                        <Button className="faq-on" onClick={questionFour}>{FAQ[3].question}</Button>   
                    )}
                    {active === 5 ? (
                        <div className="faq">
                            <Button className="faq-on">{FAQ[4].question}</Button>
                            <div className="answer-desc">{FAQ[question].answer}</div>
                        </div>
                    ) : (
                        <Button className="faq-on" onClick={questionFive}>{FAQ[4].question}</Button>   
                    )}
                </div>
            </div>
        </div>
    )
}

export default FAQ
