import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // router push locale
    router.push(router.pathname, router.pathname, { locale: lng });
    console.log('Language changed to: ', lng);
  }

  return (
    <div>
      <button type="button" onClick={() => changeLanguage('en')}>EN</button>
      <button type="button" onClick={() => changeLanguage('id')}>ID</button>
      <button type="button" onClick={() => changeLanguage('jp')}>JP</button>
    </div>
  );
}