/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class ImageSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <img src={imgUrl('splash.jpg')} alt="Project Logo" />
      </SplashContainer>
    );
  }
}

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('publications/intro', language)}>Publications</Button>
            <Button href="/blog" target="_blank">Updates</Button>
            <Button href={docUrl('contact', language)}>Contact Us</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);



const Description = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <MarkdownBlock>
This website serves as an open-source database for an ongoing PhD research at Istanbul Technical University. You can find updates on the research along with the resources on design fiction, future architecture, extended reality, virtual reality, mixed reality, augmented reality, metaverse, phenomenology, postphenomenology, technology-human relations, technoculture, etc.</MarkdownBlock>
<MarkdownBlock>We marked the data gathered with the following color codes to categorize them easily according to the keywords we are focused on.</MarkdownBlock>
<div className="inner" style={{textAlign: "left", fontWeight: "500", border: "1px solid #afaeae", width: "100%", maxWidth: "390px", margin: "1rem auto", padding: "1rem" }}>
<p>🟠 <span style={{color: "orange",fontWeight: "700" }}>Des-fi:</span> Design Fiction </p>
<p>🟣 <span style={{color: "purple",fontWeight: "700" }}>SC:</span> Spatial Computing</p>
<p>🔵 <span style={{color: "blue",fontWeight: "700" }}>FS:</span> Future Studies</p>
<p>🟢 <span style={{color: "green",fontWeight: "700" }}>GT:</span> Grounded Theory</p>
<p>🔴 <span style={{color: "red",fontWeight: "700" }}>HCI:</span> Human-Computer Interface</p>
<p>🟤 <span style={{color: "brown",fontWeight: "700" }}>PP:</span> Postphenomenology(Phenomenology)</p>
<p>🟡 <span style={{color: "#fcd53f",fontWeight: "700" }}>Sci-fi:</span> Science Fiction</p>
<p>🌀 <span style={{color: "#2b79e5",fontWeight: "700" }}>DTech:</span> Digital Technologies</p>
</div>

<div className="inner" style={{fontStyle: "italic"}}>
<p><b>PhD Candidate:</b> Begum Moralioglu</p>
<p><b>Supervisor:</b> Prof. Dr. Leman Figen Gül</p>
</div>

</div>
);





const LeftRight = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <ImageSplash language={language} />
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
