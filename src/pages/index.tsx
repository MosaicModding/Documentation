import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import IndexContent from './index-content.mdx'

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={"img/banner.png"} alt={"Mosaic Modding Banner"} width="352" height="181"/>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The offical Wiki for the Mosaic Modding Team">
      <HomepageHeader/>
      <div className={clsx(styles.introduction)}>
          <IndexContent/>
      </div>
    </Layout>
  );
}
