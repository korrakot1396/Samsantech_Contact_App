import React from 'react';
import './NotFoundPage.css';
import { Link } from "react-router-dom";


function NotFoundPage(){
     return (
        <div className="education-main">
        <div className="basic-education">
            <div className="heading-div">
              <div className="heading-img-div">
                <img src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif" alt="image" />
              </div>
              <div className="heading-text-div">
                  <br/>
                  <br/>
                <h1 className="heading-text">PAGE NOT FOUND</h1>
                <h3 className="heading-sub-text">
                  You can back to homepage click this button.
                </h3>
                <Link to={"/home"}>
          <button className="ui button blue">Back</button>
        </Link>
              </div>
            </div>
        </div>
      </div>
    );
}
export default NotFoundPage;