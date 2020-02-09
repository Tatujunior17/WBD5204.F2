import React from "react";
import img1 from "./images/Homme1.jpg";
import img2 from "./images/Homme2.jpg";
import img3 from "./images/Homme3.jpg";

import facebook from "./logo/facebook.png";
import instagg from "./logo/instagram.png";
import twitter from "./logo/twitter.png";


export default function SocialFollow() {
    return (

        <div className="social-container">

            <img src={img1} alt="Tatujunior" />

            <h3>Ivane Rodrigues</h3>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo iaculis aliquam. Suspendisse auctor lectus vitae ex euismod fermentum. Aenean diam orci, aliquam ut quam et, viverra blandit erat. Maecenas nec justo sit amet urna viverra tincidunt eu et nisl. Nullam lobortis nec dui at feugiat. In imperdiet felis non libero lobortis, eget faucibus dui mollis. Nunc laoreet malesuada dignissim. Nunc finibus quam at faucibus dignissim. Praesent facilisis risus id magna pretium, at sagittis lorem mattis. Vivamus quis convallis lacus, ac dapibus metus. Quisque et molestie purus. Integer lectus est, aliquet a mattis in, faucibus vel nulla. Aliquam volutpat rutrum ex. Duis vitae magna purus. Fusce sed elit commodo, tempor urna non, porttitor lectus. Phasellus sit amet posuere magna.
            </p>

            <br/>

            <a
                href="https://www.facebook.com/Tatujunior/"
                className="facebook social"
            >
                <img src={facebook} alt="Facebook" />
            </a>
            <a
                href="https://www.twitter.com/Tatujunior/"
                className="instagram social"
            >
                <img src={instagg} alt="Instagram" />
            </a>
            <a
                href="https://www.twitter.com/Tatujunior/"
                className="twitter social">

                <img src={twitter} alt="Twitter" />
            </a>

            <br />

            <img src={img2} alt="Sae" />

            <h3>Sae Institute</h3>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo iaculis aliquam. Suspendisse auctor lectus vitae ex euismod fermentum. Aenean diam orci, aliquam ut quam et, viverra blandit erat. Maecenas nec justo sit amet urna viverra tincidunt eu et nisl. Nullam lobortis nec dui at feugiat. In imperdiet felis non libero lobortis, eget faucibus dui mollis. Nunc laoreet malesuada dignissim. Nunc finibus quam at faucibus dignissim. Praesent facilisis risus id magna pretium, at sagittis lorem mattis. Vivamus quis convallis lacus, ac dapibus metus. Quisque et molestie purus. Integer lectus est, aliquet a mattis in, faucibus vel nulla. Aliquam volutpat rutrum ex. Duis vitae magna purus. Fusce sed elit commodo, tempor urna non, porttitor lectus. Phasellus sit amet posuere magna.
            </p>

            <a
                href="https://www.facebook.com/Sae/"
                className="facebook social"
            >
                <img src={facebook} alt="Facebook" />
            </a>
            <a
                href="https://www.twitter.com/Sae/"
                className="instagram social"
            >
                <img src={instagg} alt="Instagram" />
            </a>
            <a
                href="https://www.twitter.com/Sae/"
                className="twitter social">

                <img src={twitter} alt="Twitter" />
            </a>

            <br />

            <img src={img3} alt="Alves" />

            <h3>Raul Alves</h3>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo iaculis aliquam. Suspendisse auctor lectus vitae ex euismod fermentum. Aenean diam orci, aliquam ut quam et, viverra blandit erat. Maecenas nec justo sit amet urna viverra tincidunt eu et nisl. Nullam lobortis nec dui at feugiat. In imperdiet felis non libero lobortis, eget faucibus dui mollis. Nunc laoreet malesuada dignissim. Nunc finibus quam at faucibus dignissim. Praesent facilisis risus id magna pretium, at sagittis lorem mattis. Vivamus quis convallis lacus, ac dapibus metus. Quisque et molestie purus. Integer lectus est, aliquet a mattis in, faucibus vel nulla. Aliquam volutpat rutrum ex. Duis vitae magna purus. Fusce sed elit commodo, tempor urna non, porttitor lectus. Phasellus sit amet posuere magna.
            </p>

            <a
                href="https://www.facebook.com/Alves/"
                className="facebook social"
            >
                <img src={facebook} alt="Facebook" />
            </a>
            <a
                href="https://www.twitter.com/Alves/"
                className="instagram social"
            >
                <img src={instagg} alt="Instagram" />
            </a>
            <a
                href="https://www.twitter.com/Alves"
                className="twitter social">

                <img src={twitter} alt="Twitter" />
            </a>

            <br />

        </div>

    );
}
