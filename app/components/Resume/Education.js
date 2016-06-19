import React, {Component, PropTypes} from 'react';

const degrees = [
  {
    school: 'Stanford University',
    degree: 'M.S. Computational and Mathematical Engineering',
    link: 'https://stanford.edu',
    year: '2016',
  }, {
    school: 'University at Buffalo',
    degree: 'B.S. Electical Engineering, Computer Engineering',
    link: 'https://buffalo.edu',
    year: '2012',
  },
];

class Degree extends Component {

  render() {
    return (
      <article>
        <header>
          <p className="degree">{this.props.data.degree}</p>
          <p className="school"><a href={this.props.data.link}>{this.props.data.school}</a>, {this.props.data.year}</p>
        </header>
      </article>
    );
  }
}

Degree.propTypes = {
  data: PropTypes.object.isRequired,
};


class Education extends Component {

  getRows() {
    return degrees.map((degree) => {
      return <Degree
        data={degree}
        key={degree.school} />;
    });
  }

  render() {
    return (
      <div className="education">
        <div className="title">
          <h3>Education</h3>
        </div>
        {this.getRows()}
      </div>
    );
  }
}

export default Education;