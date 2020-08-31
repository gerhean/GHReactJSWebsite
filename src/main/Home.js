'use strict';
import React from 'react';
import './App.css';
import MarkdownElement from './Markdown_Reader'

const HOME_MARKDOWN = `
# Hi!!

I am Ger Hean, and I am an aspiring programmer.

It has been a while hasn't it... since I last updated this site.
And so this website is still a bit empty and lonely. Yes, even after like 4 years.

The first thing I did was to replace the html content with Markdown.

It's a lot easier to write stuff in Markdown after all. With html you had 
to use the \`<p>\` and \`<h1\>\` tags and so on to format text and it's pretty
annoying.
`



function Home(props) {
  return (
  	<MarkdownElement text={HOME_MARKDOWN} />
  );
}

/*
<div>
    <h1>Hi!</h1>
    <h2>I am Ger Hean, and I am an aspiring programmer</h2>
    <h3>At the current moment, this website is a bit empty and lonely.</h3>
    <h3>But not to worry! I'll update this site as I become more and more experienced!</h3>
    <h3>Don't you think its nice, a website which grows and develops with its owner?</h3>
    <h3>It's like my own special place</h3>
    <h3>Especially since not many people will be visiting this site, wonder if Google will even find it?</h3>
    <br/>
    <h3>Well that's enough talk I guess</h3>
    <h3>If you ever need anything, please don't hesitate in sending an email:) Thanks!</h3>
    </div>
*/

export default Home;
