import React from "react";

const Card = ({ title, user }) => (
  <div>
    <h2 className="is-size-2">{title}</h2>
    {
      user &&
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{user.name}</p>
                <p className="subtitle is-6">{user.username}</p>
              </div>
            </div>
            <div className="content">
              <p>is admin: { user.admin ? "yes" : "no" }</p>
              <p>JWT: {user.JWT}</p>
            </div>
          </div>
        </div>
    }
  </div>
);

export default Card;
