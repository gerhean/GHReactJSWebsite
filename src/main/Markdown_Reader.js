import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';


export default class MarkdownElement extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      smartLists: true,
      smartypants: false
    });
  }

  render() {
    const text = this.props.text;
    const html = marked(text || '');

    return (<div>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>);
  }
}


MarkdownElement.propTypes = {
  text: PropTypes.string.isRequired
};


MarkdownElement.defaultProps = {
  text: ''
};