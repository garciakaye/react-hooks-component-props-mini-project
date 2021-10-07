import React from "react";


function About({
    aboutTxt,
    defImg = "https://via.placeholder.com/215",
}) {
    return (
        <aside>
          <img src={defImg} alt="blog logo"/>
          <p>{aboutTxt}</p>
        </aside>
    )
}





export default About;