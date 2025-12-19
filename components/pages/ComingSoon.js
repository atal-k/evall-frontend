import Image from "next/image";
import styles from "./ComingSoon.module.css";
import Logo from "@/components/common/Logo";

export default function ComingSoon() {
  return (
    <main className={styles.page}>
      {/* Decorative background layers */}
      <div className={styles.backgroundGradient} aria-hidden />
      <div className={styles.backgroundNoise} aria-hidden />

      <section className={styles.container}>
        {/* Content / Brand */}
        <div className={styles.contentGlass}>
          <header className={styles.header}>
            <Logo size="large" color="white" />
          </header>

          <div className={styles.textBlock}>
            <h1 className={styles.title}>
              The Future of <span>Electric Mobility</span>
            </h1>

            <p className={styles.subtitle}>
              EVall is redefining clean transportation with precision-engineered
              electric commercial vehicles — sustainable, powerful, and built
              for tomorrow.
            </p>

            <p className={styles.microcopy}>
              We are preparing something exceptional.
            </p>

            <div className={styles.ctaRow}>
              <a href="#" className={styles.primaryCta}>
                Discover EVall
              </a>
            </div>
          </div>
        </div>
        {/* Vehicle Visual */}
        <div className={styles.visualWrapper}>
        <div className={styles.visualInner}>
            <div className={styles.comingSoonBadge}>
            <span>Coming Soon</span>
            </div>

            <div className={styles.animatedAura} />

            <div className={styles.vehicleFloat}>
            <Image
                src="/images/evall-callout-van.webp"
                alt="EVall electric vehicle"
                fill
                priority
                className={styles.vehicleImage}
            />
            </div>
        </div>
        </div>
      </section>
    </main>
  );
}
