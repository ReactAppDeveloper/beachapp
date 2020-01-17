import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../component/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRooms } = this.context;
    const room = getRooms(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room coud be found..</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Room
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <div>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Room
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name}></img>;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Detail</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size:${size} SQFT</h6>
              <h6>
                Max Capacity:{""}{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "Pet allowed" : "no Pets allowed"}</h6>
              <h6>{breakfast && "Free Breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>.{item}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}
