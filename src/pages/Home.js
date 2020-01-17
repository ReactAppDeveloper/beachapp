import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";
import Button from "../component/StyledHero";
export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxirious rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <Button>Hello</Button>
    </React.Fragment>
  );
}
