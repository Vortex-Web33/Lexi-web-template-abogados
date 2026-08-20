import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', () => ScrollTrigger.update());

  const onTick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(onTick);
  gsap.ticker.lagSmoothing(0);

  const onMenuToggle = (e: Event) => {
    const { open } = (e as CustomEvent<{ open: boolean }>).detail;
    if (open) lenis.stop();
    else lenis.start();
  };
  document.addEventListener('menu:toggle', onMenuToggle);

  gsap.defaults({ duration: 1, ease: 'power3.out' });

  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('[data-hero-title]', { y: 56, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1 })
      .fromTo(
        '[data-hero-meta]',
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.9 },
        '-=0.7',
      )
      .fromTo(
        '[data-hero-visual]',
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 1.3 },
        '-=0.6',
      )
      .fromTo(
        '[data-hero-frame]',
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 1.1 },
        '-=1.1',
      )
      .fromTo(
        '[data-hero-watermark]',
        { autoAlpha: 0, scale: 0.92 },
        { autoAlpha: 1, scale: 1, duration: 1.6 },
        '-=1.3',
      )
      .fromTo(
        '[data-hero-authority], [data-hero-certificates]',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15 },
        '-=1',
      );
  }

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 48, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-clip]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 0 100% 0)', yPercent: 10, autoAlpha: 0 },
      {
        clipPath: 'inset(0 0 0% 0)',
        yPercent: 0,
        autoAlpha: 1,
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((el) => {
    gsap.fromTo(
      el.children,
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((wrap) => {
    const target = wrap.querySelector<HTMLElement>('[data-parallax-target]');
    if (!target) return;
    gsap.fromTo(
      target,
      { yPercent: -10, scale: 1.15 },
      {
        yPercent: 10,
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: 1 },
      },
    );
  });

  return () => {
    document.removeEventListener('menu:toggle', onMenuToggle);
    gsap.ticker.remove(onTick);
    lenis.destroy();
  };
});
