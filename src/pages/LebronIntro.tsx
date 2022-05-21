import { useState, useEffect } from 'react';
import '../styles/LebronIntro.css'
const LebronIntro = () => {
    let [info, setInfo] = useState({ 'first_name': '', 'last_name': '', 'position': '', 'height_feet': 0 })
    useEffect(() => {
        const getLebronInfo = async () => {
            const res = await (await fetch('https://www.balldontlie.io/api/v1/players/237')).json();
            setInfo(res);
        }
        getLebronInfo()
    }, [])
    return (
        <div className="lebron-Page">
            <h1 className="lebron-infoTitle">Who is Lebron James?</h1>
            <img src="img/selfie.jpg" alt="lebronSelfie" className='selfie' />
            {info.height_feet === 0 ? <h2>loading...</h2> :
                <div>
                    <h2>First_name: {info.first_name}</h2>
                    <h2>Last_name: {info.last_name}</h2>
                    <h2>Position: {info.position}</h2>
                    <h2>Height_feet: {info.height_feet}</h2>
                </div>}
            <p className="lebron-infoText">
                LeBron Raymone James Sr. (born December 30, 1984) is an American
                professional basketball player for the Los Angeles Lakers of the
                National Basketball Association (NBA). Nicknamed "King James", he is
                widely considered one of the greatest players of all time and is often
                compared to Michael Jordan in debates over the greatest basketball
                player ever. James has won four NBA championships, four NBA MVP
                awards, four NBA Finals MVP awards, three All-Star MVP awards, and two
                Olympic gold medals. James has scored the most points in the playoffs,
                the second most career points, and has the seventh most career assists.
                He has been selected an NBA All-Star 18 times, to the All-NBA Team a
                record 17 times, and to the NBA All-Defensive First Team five
                times. He has competed in ten NBA Finals, the third most all time,
                including eight consecutively between 2011 and 2018. In 2021, James was
                selected to the NBA 75th Anniversary Team.
            </p>
        </div>
    );
};

export default LebronIntro;
