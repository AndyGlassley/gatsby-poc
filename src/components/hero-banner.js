import { Link } from "gatsby"
import React from "react"
import "./hero-banner.scss"

const Hero = () => (
  <div class="hero-banner">
    <div class="hero-banner-content">
      <div>Welcome to the Aptera Cycling Club!</div>
      <Link to="/about">About the Club</Link>
    </div>
  </div>
)

export default Hero
