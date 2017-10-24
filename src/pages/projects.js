import React, {Component} from "react"
import {Row, Column} from '../components/grid'
import CenteredLayout from '../components/centered-layout'
import styled from 'styled-components'

const Subtitle = styled.h2`
  margin-top: 1rem !important;
  margin-bottom: 2rem;
  font-family: 'Muli', 'Source Sans Pro', sans-serif;
  font-size: 2.2rem;
  font-weight: 200;
  line-height: normal;

  & strong {
    font-weight: 500;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`

const ProjectTitle = styled.h2`
  font-family: 'Muli', sans-serif;
  font-size: 2.0rem;
  font-weight: 700;
  margin-bottom: 1.0rem;
  line-height: 1.2;
`

export default class Projects extends Component {
  render () {
    return (
      <CenteredLayout name="projects"
                      title={`Projects - ${this.props.data.site.siteMetadata.title}`}
                      desc="Here are some things I'm working on."
                      type="website"
                      image="https://cldup.com/go95bqT7sK.jpg">
        <Column>
          <h1>Projects</h1>
          <Subtitle>Here's a few of the different projects I am working on...</Subtitle>
        </Column>
        <Column>
          {projects.map((projects, i) => this.renderProject(projects, i))}
        </Column>
      </CenteredLayout>
    )
  }

  renderProject (project, index) {
    return (
      <div key={index}>
        <ProjectTitle>
          {project.title}
        </ProjectTitle>
        <div>
          <p>{project.summary}</p>
        </div>
        <div>
          <p>{project.date} - {project.skills}</p>
        </div>
      </div>
    ) 
  }
}

const projects = [
  {
    date: 'Fall 2016',
    title: 'BC Construction Association - Data Visualization',
    summary: `The BC Construction Association has a massive amount of data on construction projects and skilled workers in British Columbia.
    Visualizing this data so that it can be communicated and important decisions can be made is essential.
    This custom data visualization tool takes data from numerous different sources and displays it in a clear, concise format.`,
    skills: `NodeJS, D3js, JavaScript`
  }
]

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`
