(() => {
  const FORM_URL = 'https://naver.me/xoGWjKYs';
  const PHONE = '1877-2027';

  document.querySelectorAll('[data-lead]').forEach((el) => {
    el.setAttribute('href', FORM_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
  document.querySelectorAll('[data-phone]').forEach((el) => {
    el.setAttribute('href', `tel:${PHONE.replace(/-/g, '')}`);
  });

  // 네이버/당근 등 전환 스크립트는 라이브 index의 기존 코드를 보존한 뒤
  // 외부화 시 이 훅에 이벤트 호출만 연결한다. 임의의 픽셀 ID는 넣지 않는다.
  window.insigniaTrackLead = () => {
    if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { method: 'naver_form' });
  };
  document.querySelectorAll('[data-lead]').forEach((el) => el.addEventListener('click', window.insigniaTrackLead));
})();