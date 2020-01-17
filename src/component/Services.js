import React, { Component } from "react";
import Title from "../component/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free CockTail",
        info: "Waqas Kya Bt hai yr"
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Waqas Kya Bt hai yr"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Waqas Kya Bt hai yr"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Waqas Kya Bt hai yr"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
