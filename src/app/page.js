import styles from "./page.module.css";
import Banner from "@/components/page/home/banner/Banner";
import Review from "@/components/page/home/review/Review";
import LinkSupport from "@/components/page/home/linksupport/LinkSupport";
import Direction from "@/components/direction/Direction";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.container}>
        <LinkSupport />
        <Direction />
        <Review />
      </div>
    </main>
  );
}
