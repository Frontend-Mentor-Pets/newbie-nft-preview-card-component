import styles from './Card.module.scss';
import equilibrium from '../../assets/images/image-equilibrium.jpg';
import avatar from '../../assets/images/image-avatar.png';
import clock from '../../assets/images/icon-clock.svg';
import ethereum from '../../assets/images/icon-ethereum.svg';
import view from '../../assets/images/icon-view.svg';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={equilibrium} alt='Equilibrium' />
        <div className={styles.view}>
          <img src={view} alt='View' />
        </div>
      </div>
      <h1 className={styles.title}>Equilibrium #3429</h1>
      <p className={styles.subtitle}>Our Equilibrium collection promotes balance and calm.</p>
      <div className={styles.info}>
        <div className={styles.ethereum}>
          <img src={ethereum} alt='Ethereum' />
          <span>0.041 ETH</span>
        </div>
        <div className={styles.clock}>
          <img src={clock} alt='Clock' />
          <span>3 days left</span>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footer}>
        <div className={styles.avatar}>
          <img src={avatar} alt='Avatar' />
        </div>
        <span className={styles.creation}>
          Creation of{' '}
          <a href='#!' className={styles.link}>
            Jules Wyvern
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
