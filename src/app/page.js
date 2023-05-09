import Image from 'next/image'
import styles from './page.module.css'
import Cards from './component/Cards/Cards';
import ActionItem from './component/ActionItem/ActionItem';
import NeedStuff from './component/NeedStuff/NeedStuff';
import ExploreOffering from './component/ExploreOffering/ExploreOffering';
import Selfrevolving from './component/Selfrevolving/Selfrevolving';

export default function Home() {
  return (
    <main className={styles.main_page_theme}>
      <Cards/>
      <ActionItem/>
      <NeedStuff/>
      <ExploreOffering/>
      <Selfrevolving/>
    </main>
  )
}
