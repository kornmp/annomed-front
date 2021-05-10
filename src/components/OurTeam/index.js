import React, { useEffect, useCallback, useState } from 'react';
import './Styles.css';
import Alex from '../../asset/image/ourTeam-alex.png';

function OurTeam() {
    const ourTeamHeader = "Meet Our Experts";
    const ourTeamDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ";
    const ourTeamData = [
        {id:1, image: Alex, name:"Alex", position:"Machine Learning Engineer", desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.${"\n"} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`},
        {id:2, image: Alex, name:"Alex2", position:"Machine Learning Engineer", desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.${"\n"} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`},
        {id:3, image: Alex, name:"Alex3", position:"Machine Learning Engineer", desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.${"\n"}${"\n"} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`},
        {id:4, image: Alex, name:"Alex4", position:"Machine Learning Engineer", desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.${"\n"}${"\n"} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`},
        {id:5, image: Alex, name:"Alex5", position:"Machine Learning Engineer", desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.${"\n"}${"\n"} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`},
    ]

    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

    function determineClasses(indexes, cardIndex) {
        if (indexes.currentIndex === cardIndex) {
          return 'active';
        } else if (indexes.nextIndex === cardIndex) {
          return 'next';
        } else if (indexes.previousIndex === cardIndex) {
          return 'prev';
        }
        return 'inactive';
    }

    const handleCardTransition = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= ourTeamData.length - 1) {
          setIndexes({
            previousIndex: ourTeamData.length - 1,
            currentIndex: 0,
            nextIndex: 1,
          });
        } else {
          setIndexes((prevState) => ({
            previousIndex: prevState.currentIndex,
            currentIndex: prevState.currentIndex + 1,
            nextIndex: prevState.currentIndex + 2 === ourTeamData.length ? 0 : prevState.currentIndex + 2,
          }));
        }
    }, [indexes.currentIndex, ourTeamData.length]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
          handleCardTransition();
        }, 4000); // The interval value could also be a prop
      
          // Clear the interval when the component unmounts
        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);


    return (
        <div className="OurTeam-main">
            <div className="OurTeam-bg">
                <div className="OurTeam-textbox">
                    <h1>{ourTeamHeader}</h1>
                    <p>{ourTeamDesc}</p>
                </div>
                <div className="OurTeam-container">
                    <ul className="Ourteam-carousel">
                        {ourTeamData.map((card, index) => (
                            <div
                                key={card.id}
                                className={`ourTeam-card ${determineClasses(indexes, index)}`}
                            >
                                <div className="Ourteam-image">
                                    <img  alt="" src={card.image} height="100px"/>
                                </div>
                                    <h1>{card.name}</h1>
                                    <h4>{card.position}</h4>
                                    <p>{card.desc}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
