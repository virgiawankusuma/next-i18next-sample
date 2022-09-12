// navbar with links / and /about
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import LangSwitcher from '../components/LangSwitcher';

export default function Navbar() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Link href="/">
        <a>{t('home')}</a>
      </Link>
      <Link href="/about">
        <a>{t('about')}</a>
      </Link>
      <LangSwitcher />
    </div>
  );
}