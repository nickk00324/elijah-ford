import React from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 20px;
  }
  margin-bottom: 44px;
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`

const Entry = styled.div``

const Contact = () => {
  return (
    <>
      <Section>
        <h2>Info</h2>
        <Links>
          <a href="https://www.instagram.com/Sanelijah/">Instagram</a>
          <a href="mailto:hajile07@gmail.com">Email</a>
        </Links>
      </Section>
      <Section>
        <h2>CV</h2>
        <Entry>
          <h3>Education</h3>
          <p>2014 MFA, California Institute of the Arts, Valencia, CA</p>
          <p>
            2011 BA, California State University San Bernardino, San Bernardino,
            CA
          </p>
        </Entry>
        <Entry>
          <h3>Solo Exhibitions</h3>
          <p>
            2020 <em>BOU.</em>, AERO SALON, Los Angeles, CA{" "}
          </p>
          <p>
            2020 <em>Displace</em>, Nick Kochornswasdi Gallery, Los Angeles, CA
          </p>
          <p>
            2016 <em>Friends on Freeways</em>, Klinger Studios, Hamtramck, MI
          </p>
          <p>
            2013 <em>Golden Age</em>, L-Shape Gallery, Valencia, CA
          </p>
          <p>
            2012 <em>Namls ‘R’ Us</em>, L-Shape Gallery, Valencia, CA
          </p>
        </Entry>
        <Entry>
          <h3>Group Exhibitions</h3>
          <p>
            2019 <em>Violence</em>, Project space, Los Angeles, CA
          </p>
          <p>
            2017 <em>Reunion</em>, An Exhibition in honour of Swam Choi, LeeOH,
            Santa Clara,CA{" "}
          </p>
          <p>2017 Channel Islands Art Center, Channel Islands, CA</p>
          <p>
            2014 <em>MOTRA</em>, Cirrus Gallery/Hyper Hyper, Los Angeles, CA
          </p>
          <p>
            2013 <em>CSSSA Faculty</em>, Valencia, CA
          </p>
          <p>
            2013 <em>The Pallet Show</em>, Valencia, CA
          </p>
          <p>
            2013 <em>CalArts Black Art Collective Showcase</em>, Valencia, CA
          </p>
          <p>
            2011 <em>F. Yeah</em>, Life Work Gallery, Palm Springs, CA
          </p>
          <p>
            2011 <em>Summer for the Arts Juried Show</em>, Art Show, Dos Lagos,
            CA
          </p>
          <p>
            2011 <em>Student Art Exhibition</em>, Robert and Frances Fullerton
            Museum of Art, San Bernardino, CA
          </p>
          <p>
            2011 <em>Electric Fan</em>, Cal State San Bernardino, San
            Bernardino, CA{" "}
          </p>
          <p>
            2006 <em>Student Art Exhibition</em>, Gresham Art Gallery, San
            Bernardino, CA
          </p>
        </Entry>
        <Entry>
          <h3>Residencies</h3>
          <p>
            2015 <em>“The Vytlicil Residence”</em>, The Art Students League New
            York, Sparkill, NY
          </p>
        </Entry>
        <Entry>
          <h3>Exhibitions Curated</h3>
          <p>
            2017 <em>Reunion</em>, LeeOH Gallery, Santa Clara, CA
          </p>
          <p>
            2014 <em>After Taste</em>, Eastern Market Group Show, Los Angeles,
            CA
          </p>
        </Entry>
      </Section>
    </>
  )
}

export default Contact
