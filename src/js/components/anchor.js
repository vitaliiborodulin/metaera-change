
window.addEventListener('load', () => {
  const header = document.querySelector('header');      
  const banner = document.querySelector('.banner');     

  function getVisibleHeight(el) {
    if (!el) return 0;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      return 0;
    }
    return el.getBoundingClientRect().height;
  }

  function getOffsetTop() {
    const headerHeight = getVisibleHeight(header);
    const bannerHeight = getVisibleHeight(banner);
    return headerHeight + bannerHeight;
  }

  function scrollToAnchorId(id, smooth = true) {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = getOffsetTop();
    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    const target = elementTop - offset;

    window.scrollTo({
      top: target,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  
  const params = new URLSearchParams(window.location.search);
  const anchor = params.get('anchor');
  if (anchor) {
    setTimeout(() => {
      scrollToAnchorId(anchor, true);
    }, 200);
  }

  
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href*="anchor="]');
    if (!link) return;

    const url = new URL(link.href, window.location.origin);
    const anchorId = url.searchParams.get('anchor');
    if (!anchorId) return;

    e.preventDefault();

    
    window.history.pushState({}, '', url.pathname + '?' + url.searchParams.toString());

    scrollToAnchorId(anchorId, true);
  });
});