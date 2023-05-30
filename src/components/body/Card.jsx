import React from 'react'
import "./Card.css"

const Card = () => {
  return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>

  )
}

export default Card