import footerStyles from '../styles/Footer.module.css';

export default function Menu({ title, links }) {
  return (
    <div className={footerStyles.menu}>
      <h2 className={footerStyles.menuTitle}>{title}</h2>
      <ul className={footerStyles.menuLinkList}>
        {links.map(({ link, text }) => (
          <li key={text} className={footerStyles.menuLinkItem}>
            <a className={footerStyles.menuLink} href={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
