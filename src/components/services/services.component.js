import React from "react"
import TitleSection from "../title-section/title-section.component"
import ServiceCard from "./service-card/service-card.component"
import "./services.styles.scss"

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="serv-wrapper">
        <TitleSection
          firstPart="My"
          secondPart="Services"
          description="What can I do?"
        />
        <div className="cards-section">
          <ServiceCard
            title="Front-End Development"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos fugit ipsum magnam voluptatem"
          />
          <ServiceCard
            title="Front-End Development"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos fugit ipsum magnam voluptatem"
          />
          <ServiceCard
            title="Front-End Development"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos fugit ipsum magnam voluptatem"
          />
          <ServiceCard
            title="Front-End Development"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos fugit ipsum magnam voluptatem"
          />
          <ServiceCard
            title="Front-End Development"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos fugit ipsum magnam voluptatem"
          />
          <ServiceCard
            title="Front-End Development"
            subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos fugit ipsum magnam voluptatem"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
