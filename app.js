const $ = (id) => document.getElementById(id);
const notice = $('notice');
function showNotice(title, body) {
  $('notice-title').textContent = title;
  $('notice-body').textContent = body;
  notice.showModal();
}
$('close-notice').addEventListener('click', () => notice.close());
$('notice-ok').addEventListener('click', () => notice.close());
$('open-bitlabs').addEventListener('click', () => {
  const token = $('bitlabs-token').value.trim();
  const uid = $('bitlabs-uid').value.trim() || 'demo-user';
  if (!token) {
    showNotice('One quick setup step', 'Add the browser-safe BitLabs app token issued for your approved publisher account in Quick setup, save it, then try again. Do not put private API keys in this page.');
    return;
  }
  const url = new URL('https://web.bitlabs.ai/');
  url.searchParams.set('uid', uid);
  url.searchParams.set('token', token);
  window.open(url.toString(), '_blank', 'noopener,noreferrer');
});
$('more-providers').addEventListener('click', () => showNotice('More providers are on the roadmap ✨', 'This version focuses on BitLabs to keep setup simple. Additional providers can be added when their publisher approval, integration requirements, and reward terms are ready.'));
$('setup-tremendous').addEventListener('click', () => showNotice('Gift cards are planned for later 🎁', 'When ready, configure Tremendous credentials in server-side environment variables, implement secure order creation and webhook verification, and test in sandbox. This static page cannot issue gift cards or send real payouts.'));
$('setup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const settings = {
    brand: $('brand-name').value.trim() || 'SurveyHub',
    bitlabsToken: $('bitlabs-token').value.trim(),
    bitlabsUid: $('bitlabs-uid').value.trim(),
    tremendousMode: $('tremendous-mode').value
  };
  localStorage.setItem('surveyhub-settings', JSON.stringify(settings));
  document.title = settings.brand + ' — Make Every Opinion Count';
  document.querySelector('.brand b').textContent = settings.brand;
  $('bitlabs-tag').textContent = settings.bitlabsToken ? 'Token saved locally' : 'Not configured';
  $('connection-label').textContent = settings.bitlabsToken ? 'Setup incomplete' : 'Demo mode';
  $('save-status').textContent = 'Saved in this browser only. Provider approval, secure reward callbacks, account security and payout integration are still required.';
});
try {
  const s = JSON.parse(localStorage.getItem('surveyhub-settings') || 'null');
  if (s) {
    $('brand-name').value = s.brand || 'SurveyHub';
    $('bitlabs-token').value = s.bitlabsToken || '';
    $('bitlabs-uid').value = s.bitlabsUid || '';
    $('tremendous-mode').value = s.tremendousMode || 'disabled';
    if (s.brand) {
      document.title = s.brand + ' — Make Every Opinion Count';
      document.querySelector('.brand b').textContent = s.brand;
    }
    $('bitlabs-tag').textContent = s.bitlabsToken ? 'Token saved locally' : 'Not configured';
    $('connection-label').textContent = s.bitlabsToken ? 'Setup incomplete' : 'Demo mode';
  }
} catch {}
