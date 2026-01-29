:root{
  --bg:#070A12;
  --fg:#EAF0FF;
  --muted:rgba(234,240,255,.72);
  --glass:rgba(255,255,255,.06);
  --stroke:rgba(255,255,255,.12);
  --uv1:#8b5cf6; /* purple */
  --uv2:#22d3ee; /* cyan */
  --uv3:#fb7185; /* pink */
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:var(--bg);
  color:var(--fg);
  overflow-x:hidden;
}

.wrap{
  width:min(980px, 92vw);
  margin:0 auto;
  padding:58px 0 42px;
}

/* Background UI/UX orbs */
.bg{position:fixed; inset:0; z-index:-1; pointer-events:none;}
.orb{
  position:absolute;
  width:520px; height:520px;
  border-radius:50%;
  filter: blur(38px);
  opacity:.55;
  transform: translate3d(0,0,0);
}
.orb-1{left:-160px; top:-180px; background: radial-gradient(circle, var(--uv1), transparent 60%);}
.orb-2{right:-220px; top:40px; background: radial-gradient(circle, var(--uv2), transparent 60%);}
.orb-3{left:20%; bottom:-260px; background: radial-gradient(circle, var(--uv3), transparent 60%);}

.grid-overlay{
  position:absolute; inset:0;
  opacity:.10;
  background-image:
    linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px);
  background-size: 70px 70px;
  mask-image: radial-gradient(circle at 40% 20%, black 0%, transparent 60%);
}

.hero{padding:36px 0 18px}
.kicker{
  letter-spacing:.14em;
  text-transform:uppercase;
  color:rgba(234,240,255,.80);
  font-size:12px;
  margin:0 0 12px;
}
.title{
  font-size:56px;
  line-height:1.02;
  margin:0 0 12px;
  background: linear-gradient(90deg, var(--uv1), var(--uv2), var(--uv3));
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
.sub{max-width:66ch; color:var(--muted); font-size:16px; margin:0 0 18px}

.cta{display:flex; gap:12px; flex-wrap:wrap; margin:10px 0 18px}
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:10px 14px;
  border-radius:14px;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.16);
  color:var(--fg);
  text-decoration:none;
  backdrop-filter: blur(10px);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.btn:hover{
  transform: translateY(-2px);
  border-color: rgba(34,211,238,.45);
  box-shadow: 0 0 24px rgba(34,211,238,.22), 0 0 44px rgba(139,92,246,.18);
}
.btn.ghost{background:transparent}

.chips{display:flex; flex-wrap:wrap; gap:8px; margin-top:10px}
.chips span{
  font-size:12px;
  padding:6px 10px;
  border-radius:999px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  color:rgba(234,240,255,.88);
}

.section{padding:24px 0}
.section h2{margin:0 0 12px; font-size:18px}
.grid{
  display:grid;
  grid-template-columns:repeat(3, minmax(0,1fr));
  gap:12px;
}

.card{
  display:block;
  padding:14px;
  border-radius:18px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  text-decoration:none;
  color:var(--fg);
  backdrop-filter: blur(12px);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.card:hover{
  transform: translateY(-4px);
  border-color: rgba(139,92,246,.45);
  box-shadow: 0 0 28px rgba(139,92,246,.20), 0 0 48px rgba(34,211,238,.14);
}
.card h3{margin:0 0 8px; font-size:14px}
.card p{margin:0 0 10px; color:var(--muted); font-size:13px}
.meta{font-size:12px; color:rgba(234,240,255,.78)}

.panel{
  padding:14px;
  border-radius:18px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  backdrop-filter: blur(12px);
}
.panel ul{margin:10px 0 0; padding-left:18px; color:var(--muted)}

.footer{padding-top:24px; color:rgba(234,240,255,.55); font-size:12px}

@media (max-width: 880px){
  .title{font-size:40px}
  .grid{grid-template-columns:1fr}
}
