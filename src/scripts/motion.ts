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
        onComplete: () => {
          gsap.set(el.children, { clearProps: 'transform' });
        },
      },
    );
  });

  const hoverImages = gsap.matchMedia();
  hoverImages.add('(hover: hover)', () => {
    const rows = gsap.utils.toArray<HTMLElement>('[data-docket]');
    if (!rows.length) return;
    const handlers: Array<{ el: HTMLElement; enter: EventListener; leave: EventListener }> = [];
    const aligns: Array<(e: MouseEvent) => void> = [];

    rows.forEach((row) => {
      const image = row.parentElement?.querySelector<HTMLElement>('[data-docket-image]');
      if (!image) return;
      gsap.set(image, { xPercent: -50, yPercent: -50, autoAlpha: 0 });

      const setX = gsap.quickTo(image, 'x', { duration: 0.4, ease: 'power3' });
      const setY = gsap.quickTo(image, 'y', { duration: 0.4, ease: 'power3' });

      let firstEnter = true;
      const align = (e: MouseEvent) => {
        if (firstEnter) {
          setX(e.clientX, e.clientX);
          setY(e.clientY, e.clientY);
          firstEnter = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };
      const startFollow = () => {
        aligns.push(align);
        document.addEventListener('mousemove', align);
      };
      const stopFollow = () => {
        const i = aligns.indexOf(align);
        if (i >= 0) aligns.splice(i, 1);
        document.removeEventListener('mousemove', align);
      };

      const fade = gsap.to(image, {
        autoAlpha: 1,
        ease: 'none',
        paused: true,
        duration: 0.15,
        onReverseComplete: stopFollow,
      });

      const enter = (e: Event) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e as MouseEvent);
      };
      const leave = () => fade.reverse();

      row.addEventListener('mouseenter', enter);
      row.addEventListener('mouseleave', leave);
      handlers.push({ el: row, enter, leave });
    });

    return () => {
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      aligns.forEach((align) => document.removeEventListener('mousemove', align));
    };
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
