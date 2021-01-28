import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Multiphase fluids</>,
    imageUrl: 'img/feature_multiphase_fluids.svg',
    description: (
      <>
          Simulate multiple interacting fluids with different densities and
          viscosities.
      </>
    ),
  },
  {
    title: <>Two-way coupling with Rapier</>,
    imageUrl: 'img/feature_two_way_coupling.svg',
    description: (
      <>
          Two-way coupling with rigid-bodies, multibodies, and deformable bodies from the Rapier
          physics engine.
      </>
    ),
  },
{
    title: <>Multiple models to choose from</>,
    imageUrl: 'img/feature_multiple_models.svg',
    description: (
        <>
            Choose different mathematical for pressure resolution,  viscosity,etc. to achieve the best compromises
            for your simulation.
        </>
    ),
},
{
    title: <>Forever free and Open-Source</>,
    imageUrl: 'img/undraw_awesome_rlvy.svg',
    description: (
        <>
            Built with a FOSS mindset, we aim to empower the Rust and web communities
            with an efficient linear algebra library.
        </>
    ),
},
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
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
      title={`${siteConfig.title} physics engine`}
      description="Fast and cross-platform physics engine">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <div className="">
                <img src="img/logo_salva_full.svg" width="30%" alt="Project Logo" />
            </div>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg --ifm-color-prim force-border', /*button--secondary*/
                styles.getStarted,
              )}
              href={'https://docs.rs/salva3d'}>
              Get Started
            </Link>
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
