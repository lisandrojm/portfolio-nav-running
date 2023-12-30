/* src/app/_components/Background.tsx */

import styles from '@/_styles/_components/Background.module.css';
import BgIcons from '@/_components/_icons/BgIcons';

export default function Background() {
  return (
    <section className={`${styles.animated}`}>
      <ul className={`${styles.floating}`}>
        <li className={`${styles.drift} ${styles.drift1} ${styles.delay1} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float1}`}>
            <BgIcons kind="github" size={2} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift2} ${styles.delay3} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float2}`}>
            <BgIcons kind="bootstrap" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift3} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float3}`}>
            <BgIcons kind="html" size={2} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float5}`}>
            <BgIcons kind="tailwind" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift6} ${styles.delay2} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float6}`}>
            <BgIcons kind="nextjs" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift7} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float7}`}>
            <BgIcons kind="vercel" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift8} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float8}`}>
            <BgIcons kind="js" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift9} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float9} font-bold`}>
            <BgIcons kind="react" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift10} ${styles.delay3} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float10}`}>
            <BgIcons kind="nodejs" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift5} ${styles.delay4} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float7}`}>
            <BgIcons kind="express" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift2} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float3}`}>
            <BgIcons kind="nestjs" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift3} ${styles.delay1} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float8}`}>
            <BgIcons kind="mongodb" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift6} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float1}`}>
            <BgIcons kind="ts" size={3} />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift9} ${styles.delay2} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float10}`}>
            <BgIcons kind="git" size={3} />
          </div>
        </li>
      </ul>
    </section>
  );
}
