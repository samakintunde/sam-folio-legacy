import React, { Component } from 'react';
import * as contentful from 'contentful';

import PortfolioItem from './portfolio-item';

class Portfolio extends Component {
  state = {
    projects: [],
  };

  client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  fetchProjects = () => {};

  componentDidMount = () => {
    this.client
      .getEntries()
      .then(entries => {
        this.setState({ projects: entries.items });
      })
      .catch(err => console.log(err));
  };

  render() {
    let { projects } = this.state;

    return (
      <div>
        <h2 className="section-heading">Portfolio</h2>
        <div style={{ display: grid }}>
          {projects.map(project => (
            <PortfolioItem data={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
