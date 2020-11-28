import React from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link/AniLink"
import Video from "./video"

const Section = styled.section``
const Entry = styled.div`
  margin-top: 44px;
  margin-bottom: 32px;
  .video {
    margin-top: 32px;
  }
`

const Press = () => {
  return (
    <>
      <Section>
        <h2>Publications</h2>
        <Entry>
          <Link fade to="/detroit_winter.pdf">
            <p>
              “Detroit Winter,” <em>Barbed Magazine</em>, p. 15, 2016
            </p>
          </Link>
          <Link fade to="/detroit_rising.pdf">
            <p>
              “Detroit Rising: 4 Artist,” <em>Hero Magazine</em>, p.76, Summer
              2015
            </p>
          </Link>
        </Entry>
      </Section>
      <Section>
        <h2>Press Releases</h2>
        <Entry>
          <h3>BOU. @ Aero Salon</h3>
          <p>
            AERO SALON is pleased to present an exhibition of paintings by Los
            Angeles-based artist, Elijah Ford. In this show, entitled BOU., a
            formidable population of characters, personages, creatures and
            things band together and play out and apart in a turbulent pool of
            fantasy and intricately fictive narrative. People abound in Ford’s
            images, but certainty regarding their status as human, god, android,
            alien or cartoon is always in question, always in flux. These are
            taxonomically variable beings. They emerge in the theater of Ford’s
            universe, a universe that blurs the lines between what we believe to
            be real and unreal, between dream and stark wakeful consciousness.{" "}
          </p>
          <p>
            A statement from the artist: “I want the viewer to feel the passion
            and deep thought in my work. To achieve this I mix unconscious
            elements with tropes from painting history, blend them with
            contemporary imagery and juxtapose personal experiences onto the
            aggregate. My style is classical paint handling, combined with a
            surrealist thought process which also includes Japanese woodblock
            print influence. As a painter I have learned to dissect what I see,
            I take mental notes of every color and contour I come across,
            watching the trees, or absorb a gaze in face to face conversation.
            It is important as an artist to know and change the socio-economic
            issues that effect my community, but the politics are not blatant in
            the form of my work. I base my work in an era that most people
            believe has not come upon us, I mean for it to be the golden age
            after tumultuous times. Something regal can come from immense
            inherited damage. This idea can easily be overlooked, but the
            visceral experience of my paintings stain the viewers thoughts and
            bring these ideas to their unconscious mind through traditional
            methods, without exploiting culture. I would like my work to be a
            part of the hope people seek in humanity.”
          </p>
          <p>
            Originally from the Inland Empire and currently residing in Los
            Angeles, Elijah Ford received a BA from California State University
            San Bernardino in 2011 and an MFA in Painting from California
            Institute of the Arts in 2014. Ford's work has been exhibited with
            Nick Kochornswasdi Gallery, O’Project Space, Cirrus Gallery, and
            Channel Islands Art Center. His work been published in Hero Magazine
            and Barbed Magazine.
          </p>
          <Video
            videoSrcURL={"https://www.youtube.com/embed/odY41sOqW8Q"}
            videoTitle="Elijah Ford in Coversation with Patrick Michael Ballard"
          />
        </Entry>
        <Entry>
          <h3>Displace @ Nick Kochornswasdi Gallery</h3>
          <p>
            Nick Kochornswasdi Gallery is pleased to announce its first solo
            exhibition of the Los Angeles-based artist Elijah Ford. In Displace
            the artist begins with the forced deportation of the inhabitants of
            the Chagos Archipelago from 1967 to 1973 by the British government
            in order to accommodate the construction of a U.S. military base and
            traces his own ancestors history of displacement and the effects it
            has on people and communities.
          </p>
          <p>
            The Chagos Archipelago was considered under the control of the
            country of Mauritius, a British colony, until 1965 when Mauritius
            sought its independence and the Chagos Archipelago was split off as
            a condition of its independence. Thus beginning in 1967, around
            1,500 inhabitants were removed and forced to re-settle in the
            neighboring Seychelles and Mauritius, where many died because of the
            horrible living conditions they were forced into along with the
            severe trauma of being removed from their homes and the only lives
            they ever knew. Ford considers this event in relation to the history
            of colonization and the altered futures it has created. His
            paintings depict imagery and symbols that are constantly slipping
            and changing, creating an imbalance in an always de-centered center.
          </p>
          <p>
            Errantry and exile creating a rhizomatic root that proliferates,
            never crushing difference, but one that encounters difference and
            accepts it in all its opacity, the chaos of connections that builds
            a network where one can relate one’s experience without reducing,
            never reduction. The work proposes an environment where people,
            cultures, and communities can recognize each other in the face of
            the Other, where no generalization occurs, where every plight is
            understood in all its complexities, in solidarity with the
            sufferings and resiliency of a people and a people yet to come.
          </p>
        </Entry>
        <Entry>
          <h3>Friends on Freeways @ Klinger Studios</h3>
          <p>
            In the work I attempt to capture the euphoric feeling when spending
            time with beloved ones and relate that to a sublime, seemingly
            endless road. The work is meant to raise questions like will mortal
            memories made in this reality last for eternity? The freeway as the
            hyperbolic road is the metonym chosen to encompass and reflect the
            portrait of just a few of many good friends.{" "}
          </p>
          <p>
            A small Collection of other paintings, prints, and handmade
            colouring books will also be available for purchase. I will be
            moving to California in November so invite who you wish, Thank You
            for all of your love and support Michigan, I will be back soon.
          </p>
          <p>With Love,</p>
          <p>-Elijah Ford</p>
        </Entry>
      </Section>
    </>
  )
}

export default Press
