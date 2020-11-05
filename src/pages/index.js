import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Intuitive',
    imageUrl: 'img/undraw_design.svg',
    description: (
      <>
          With a UI built and designed with the most modern currently, navigate fluidly and quickly between your servers and the control panel.
      </>
    ),
  },
  {
    title: 'Security in mind',
    imageUrl: 'img/undraw_fingerprint.svg',
    description: (
      <>
          Katan focuses on the security of the identity of those using it, with cutting-edge encryption, we will take care of this for you.
      </>
    ),
  },
  {
    title: 'Free & Open Source',
    imageUrl: 'img/undraw_savings.svg',
    description: (
      <>
        Katan is free and anyone can simply download, install and use, in addition to being open source, there is not much to say.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Katan is a fast, simple and modularly adaptable panel built to manage game servers running isolated in Docker containers.">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
            <div className="row">
                <div className="col col--4">
                    <img className="katan-logo" src="img/logo.png" alt="Katan Logo"/>
                </div>
                <div className="col col--8">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">A fast, simple and modularly adaptable game server panel.</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
