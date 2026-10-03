// USID dynamic industrial experience
(() => {
  const canvas = document.getElementById('signalCanvas');
  const hero = document.querySelector('.hero');
  const glow = document.querySelector('.cursor-glow');
  const flowItems = [...document.querySelectorAll('[data-flow] span')];
  const flowStatus = document.getElementById('flowStatus');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (glow && !reduceMotion) {
    window.addEventListener('pointermove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.style.opacity = '1';
    }, {passive:true});
    window.addEventListener('pointerleave', () => { glow.style.opacity = '0'; });
  }

  if (canvas && hero && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let points = [];
    let raf;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = hero.clientWidth * dpr;
      canvas.height = hero.clientHeight * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count = Math.min(34, Math.max(18, Math.floor(hero.clientWidth / 42)));
      points = Array.from({length:count}, (_,i) => ({
        x:(i/(count-1))*hero.clientWidth,
        y: hero.clientHeight*(.18 + Math.random()*.64),
        vx:(Math.random()-.5)*.12,
        phase:Math.random()*Math.PI*2
      }));
    };
    resize();
    window.addEventListener('resize', resize, {passive:true});

    const draw = (t) => {
      const w=hero.clientWidth,h=hero.clientHeight;
      ctx.clearRect(0,0,w,h);
      ctx.lineWidth=1;
      points.forEach((p,i)=>{
        p.y += Math.sin(t*.0007+p.phase)*.08;
        p.x += p.vx;
        if(p.x<-20)p.x=w+20;
        if(p.x>w+20)p.x=-20;
        const alpha=.11 + (i%4)*.025;
        ctx.strokeStyle='rgba(34,211,238,'+alpha+')';
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(Math.min(w,p.x+120),p.y + Math.sin(i)*28);
        ctx.stroke();
        ctx.fillStyle='rgba(34,211,238,.55)';
        ctx.beginPath();
        ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
        ctx.fill();
      });
      for(let i=0;i<points.length-1;i+=3){
        const a=points[i],b=points[i+1];
        ctx.strokeStyle='rgba(34,211,238,.045)';
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }
      raf=requestAnimationFrame(draw);
    };
    raf=requestAnimationFrame(draw);
    window.addEventListener('pagehide',()=>cancelAnimationFrame(raf));
  }

  if (flowItems.length && !reduceMotion) {
    let active=0;
    const tick=()=>{
      flowItems.forEach((item,i)=>item.classList.toggle('active',i===active));
      if(flowStatus) flowStatus.textContent = active===flowItems.length-1 ? 'DATA REACHING ANALYTICS' : 'SIGNAL ACTIVE';
      active=(active+1)%flowItems.length;
    };
    tick();
    setInterval(tick,1100);
  }

  const reveals=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window && !reduceMotion){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}});
    },{threshold:.12,rootMargin:'0px 0px -35px'});
    reveals.forEach(el=>io.observe(el));
  } else reveals.forEach(el=>el.classList.add('is-visible'));
})();
