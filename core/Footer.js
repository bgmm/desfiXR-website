/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Resources</h5>
            <a href={this.docUrl('conferences/intro')}>
              Conferences & Events
            </a>
            <a href={this.docUrl('journals/intro')}>
              Journals
            </a>
            <a href={this.docUrl('books/intro')}>
              Books
            </a>
            <a href={this.docUrl('links/useful')}>
              Websites
            </a>
            <a href={this.docUrl('media/intro')}>
              Media
            </a>
          </div>
          <div>
            <h5>About Begum</h5>
            <a
              href="https://begum.info/"
              target="_blank"
              rel="noreferrer noopener">
              Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/begummoralioglu/"
              target="_blank"
              rel="noreferrer noopener">
              LinkedIn
            </a>
            <a
              href="https://twitter.com/BegumMoralioglu"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Updates</a>
            <a href={this.docUrl('contact')}>
              Contact Us
            </a>

          </div>
        </section>


        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
