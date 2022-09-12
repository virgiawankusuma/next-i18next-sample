import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  // useEffect with localStorage to persist language
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // router push locale
    router.push(router.pathname, router.pathname, { locale: lng });
    console.log('Language changed to: ', lng);
  }

  // localstorage
  const setLanguage = (lng) => {
    localStorage.setItem('i18nextLng', lng);
    changeLanguage(lng);
  }

  return (
    <div>
      <button type="button" onClick={() => setLanguage('en')}>EN</button>
      <button type="button" onClick={() => setLanguage('id')}>ID</button>
      <button type="button" onClick={() => setLanguage('jp')}>JP</button>
    </div>
  );
}