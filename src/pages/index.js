import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Katan is a fast, simple and modularly adaptable panel built to manage game servers running isolated in Docker containers.">
      <header className={clsx('hero hero__katan', styles.heroBanner)}>
        <div className="container">
            <div className="row hero-content">
                <div>
                    <img className="katan-logo" src="img/logo-white.png" alt="Katan Logo"/>
                </div>
                <div>
                    <h1 className="hero__title">{siteConfig.title} Panel</h1>
                    <p className="hero__subtitle">
                        <Translate id="katan.home.heading.description">
                            A modern, fast and open-source game server management panel.
                        </Translate>
                    </p>
                </div>
            </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
