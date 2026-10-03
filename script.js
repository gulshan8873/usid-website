// USID Industrial Automation — dynamic interface
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const glow = document.querySelector('.cursor-glow');
  const canvas = document.getElementById('signalCanvas');
  const hero = document.querySelector('.hero');

  if (glow && !reduceMotion) {
    window.addEventListener('pointermove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.style.opacity = '1';
    }, {passive:true});
    window.addEventListener('pointerleave', () => glow.style.opacity = '0');
  }

  // Lightweight animated signal network behind the hero.
  if (canvas && hero && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let points = [];
    let raf;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = hero.clientWidth * dpr;
      canvas.height = hero.clientHeight * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count = Math.min(30, Math.max(16, Math.floor(hero.clientWidth / 48)));
      points = Array.from({length:count}, (_,i) => ({
        x:(i/(count-1))*hero.clientWidth,
        y:hero.clientHeight*(.18 + Math.random()*.64),
        vx:(Math.random()-.5)*.10,
        phase:Math.random()*Math.PI*2
      }));
    };
    resize();
    window.addEventListener('resize', resize, {passive:true});
    const draw = t => {
      const w=hero.clientWidth,h=hero.clientHeight;
      ctx.clearRect(0,0,w,h);
      points.forEach((p,i) => {
        p.x += p.vx;
        p.y += Math.sin(t*.00065+p.phase)*.06;
        if(p.x < -20) p.x=w+20;
        if(p.x > w+20) p.x=-20;
        ctx.strokeStyle='rgba(142,178,210,'+(0.055+(i%4)*.015)+')';
        ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(Math.min(w,p.x+110),p.y+Math.sin(i)*22);ctx.stroke();
        ctx.fillStyle='rgba(169,191,211,.38)';
        ctx.beginPath();ctx.arc(p.x,p.y,1.4,0,Math.PI*2);ctx.fill();
      });
      raf=requestAnimationFrame(draw);
    };
    raf=requestAnimationFrame(draw);
    window.addEventListener('pagehide',()=>cancelAnimationFrame(raf));
  }

  // Connected factory schematic interaction.
  const nodes=[...document.querySelectorAll('.factory-node')];
  const status=document.getElementById('flowStatus');
  const labels=[
    'PLC / CONTROL ACTIVE','HMI / MONITORING ACTIVE','MOTION / DRIVE ACTIVE',
    'DATA CAPTURE ACTIVE','CLOUD CONNECTION ACTIVE','ANALYTICS ACTIVE'
  ];
  const activate = index => {
    nodes.forEach((node,i)=>node.classList.toggle('active',i===index));
    if(status) status.textContent=labels[index];
  };
  nodes.forEach((node,index)=>node.addEventListener('mouseenter',()=>activate(index)));
  if(nodes.length && !reduceMotion){
    let active=0;
    activate(0);
    setInterval(()=>{active=(active+1)%nodes.length;activate(active)},1400);
  }

  // Scroll reveals.
  const reveals=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window && !reduceMotion){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -35px'});
    reveals.forEach(el=>io.observe(el));
  } else {
    reveals.forEach(el=>el.classList.add('is-visible'));
  }
})();