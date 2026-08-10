const products = [
  { name: "SS FAITH TEE", price: "IDR 189.000", tone: "faith" },
  { name: "SS LOYALTY HOODIE", price: "IDR 329.000", tone: "hoodie" },
  { name: "SS GAME JERSEY", price: "IDR 259.000", tone: "jersey" },
  { name: "SS OLDSKOOL JACKET", price: "IDR 399.000", tone: "jacket" },
];

function Logo() { return <div className="logo">STANDSIDE</div>; }

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <Logo />
        <div className="navlinks">
          <a href="#home">HOME</a><a href="#collection">COLLECTION</a><a href="#new">NEW ARRIVAL</a><a href="#limited">LIMITED EDITION</a><a href="#news">NEWS</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a>
        </div>
        <div className="navicons"><span>⌕</span><span>🛒</span><span>♙</span></div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy container">
          <div className="eyebrow">STANDSIDE CULTURE</div>
          <h1>STANDSIDE</h1>
          <h2>BUILT FROM LOYALTY<br/>LIFE FOR THE GAME</h2>
          <p>Lebih dari sekadar pakaian,<br/>ini adalah identitas, loyalitas,<br/>dan cara hidup.</p>
          <div className="actions"><a className="btn" href="#new">EXPLORE COLLECTION</a><a className="btn secondary" href="#verify">VERIFY PRODUCT</a></div>
        </div>
        <div className="hero-mark">S</div>
      </section>

      <section className="benefits"><div className="container benefits-grid"><div><b>♧ PREMIUM QUALITY</b><small>Material pilihan terbaik</small></div><div><b>◇ ORIGINAL PRODUCT</b><small>100% produk original</small></div><div><b>▣ SECURE PAYMENT</b><small>Pembayaran aman</small></div><div><b>♧ FAST SHIPPING</b><small>Pengiriman cepat</small></div></div></section>

      <section id="new" className="section container"><div className="section-head"><div><div className="eyebrow">COLLECTION</div><h2 className="section-title">NEW ARRIVAL</h2></div><a href="#collection">VIEW ALL →</a></div><div className="products">{products.map(p=><article className="product" key={p.name}><div className={`product-art ${p.tone}`}><span>STANDSIDE</span></div><div className="product-info"><b>{p.name}</b><span>{p.price}</span></div></article>)}</div></section>

      <section id="verify" className="verify section"><div className="container verify-grid"><div><div className="eyebrow">AUTHENTICITY</div><h2 className="section-title">VERIFY ORIGINAL PRODUCT</h2><p>Scan QR Code pada produk atau masukkan kode unik untuk memastikan keaslian produk STANDSIDE.</p><div className="verify-form"><input placeholder="Masukkan Kode Unik"/><button className="btn">VERIFY</button></div></div><div className="qr-card"><div className="qr">▦</div><small>SS-TS-000001</small></div></div></section>

      <section id="about" className="section about"><div className="container"><div className="eyebrow">OUR CULTURE</div><h2 className="section-title">ABOUT STANDSIDE</h2><p>STANDSIDE bukan hanya tentang pakaian, tapi tentang kebersamaan, loyalitas, dan semangat yang tidak pernah padam. Kami berdiri untuk semua yang hidup untuk permainan ini.</p><a className="btn secondary" href="#contact">READ MORE</a></div></section>

      <section id="news" className="section container"><div className="eyebrow">LATEST</div><h2 className="section-title">NEWS & STORIES</h2><div className="news-grid"><article><span>STANDSIDE CULTURE</span><h3>BUILT FROM LOYALTY</h3></article><article><span>COLLECTION</span><h3>LIVE FOR THE GAME</h3></article><article><span>COMMUNITY</span><h3>ONE STAND. ONE FAMILY.</h3></article></div></section>

      <footer id="contact"><div className="container footer-grid"><div><Logo/><p>BUILT FROM LOYALTY<br/>LIFE FOR THE GAME</p></div><div><b>INFORMATION</b><a href="#about">About Us</a><a href="#contact">Contact</a><a href="#news">News</a></div><div><b>CUSTOMER CARE</b><a href="#contact">Shipping Info</a><a href="#contact">Return & Exchange</a><a href="#contact">FAQ</a></div><div><b>NEWSLETTER</b><p>Dapatkan info terbaru dari STANDSIDE.</p><input placeholder="Your email address"/><button className="btn">SUBSCRIBE</button></div></div><div className="copyright container">© 2026 STANDSIDE. All Rights Reserved.</div></footer>

      <style>{`
        .nav{height:68px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:35px;padding:0 30px;position:sticky;top:0;z-index:10;background:rgba(8,9,9,.94);backdrop-filter:blur(10px)}
        .logo{font-family:'Barlow Condensed';font-style:italic;font-weight:900;font-size:23px;letter-spacing:-.05em;white-space:nowrap}.navlinks{display:flex;gap:24px;align-items:center;font-size:9px;font-weight:700;flex:1;justify-content:center}.navlinks a:hover{opacity:.6}.navicons{display:flex;gap:18px}.hero{min-height:560px;position:relative;overflow:hidden;background:radial-gradient(circle at 72% 40%,#323434 0,#151717 30%,#080909 68%)}.hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.2),transparent 65%,rgba(0,0,0,.6));pointer-events:none}.hero-copy{position:relative;z-index:2;padding-top:110px}.hero h1{font-family:'Barlow Condensed';font-style:italic;font-size:clamp(76px,10vw,145px);line-height:.78;margin:15px 0}.hero h2{font-family:'Barlow Condensed';font-style:italic;font-size:clamp(30px,4vw,58px);line-height:.85;margin:0}.hero p{color:#bbb;font-size:13px;line-height:1.55;margin:22px 0}.actions{display:flex;gap:10px}.hero-mark{position:absolute;right:13%;bottom:-70px;font-family:'Barlow Condensed';font-size:600px;font-weight:900;font-style:italic;color:#171919;line-height:.8}.benefits{background:#151616;border-top:1px solid #292a2a;border-bottom:1px solid #292a2a}.benefits-grid{display:grid;grid-template-columns:repeat(4,1fr);padding:22px 0}.benefits-grid div{padding:8px 28px;border-right:1px solid #333;display:flex;flex-direction:column;gap:7px}.benefits-grid div:last-child{border:0}.benefits-grid b{font-size:11px}.benefits-grid small{color:#888;font-size:9px}.section-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:25px}.section-head>a{font-size:10px;text-decoration:underline}.section-title{font-family:'Barlow Condensed';font-size:52px;line-height:.9;margin:8px 0 0;font-style:italic}.products{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.product{background:#111212;border:1px solid #252626}.product-art{height:330px;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#d7d7d7,#777);color:#171717}.product-art span{font-family:'Barlow Condensed';font-weight:900;font-size:38px;transform:rotate(-8deg);letter-spacing:-.04em}.product-art.hoodie{background:linear-gradient(145deg,#222,#777);color:#eee}.product-art.jersey{background:linear-gradient(145deg,#ccc,#666)}.product-art.jacket{background:linear-gradient(145deg,#191a1a,#555);color:#eee}.product-info{padding:14px;display:flex;flex-direction:column;gap:5px;font-size:11px}.product-info span{color:#aaa}.verify{background:#111212;border-top:1px solid #222;border-bottom:1px solid #222}.verify-grid{display:grid;grid-template-columns:1.2fr .8fr;align-items:center;gap:60px}.verify p,.about p{max-width:520px;color:#aaa;line-height:1.7;font-size:13px}.verify-form{display:flex;max-width:500px;margin-top:24px}.verify-form input,footer input{flex:1;background:#080909;border:1px solid #444;color:#fff;padding:13px}.qr-card{border:1px solid #444;background:#0b0c0c;padding:35px;text-align:center}.qr{font-size:170px;line-height:1;background:#fff;color:#000;display:inline-block;padding:15px}.about{background:linear-gradient(90deg,#090a0a,#151717)}.news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:30px}.news-grid article{min-height:230px;border:1px solid #292a2a;padding:25px;display:flex;flex-direction:column;justify-content:end;background:linear-gradient(145deg,#181a1a,#090909)}.news-grid span{font-size:9px;color:#888}.news-grid h3{font-family:'Barlow Condensed';font-size:31px;font-style:italic;margin:8px 0}.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.5fr;gap:40px;padding:55px 0;border-top:1px solid #222}.footer-grid>div{display:flex;flex-direction:column;gap:10px;font-size:11px}.footer-grid b{font-size:10px}.footer-grid p{color:#888;line-height:1.5}.copyright{padding:18px 0;border-top:1px solid #222;color:#666;font-size:9px}
        @media(max-width:800px){.nav{padding:0 15px;height:58px}.navlinks{display:none}.navicons{margin-left:auto}.hero{min-height:590px}.hero-copy{padding-top:100px}.hero-mark{right:-10%;font-size:430px}.benefits-grid{grid-template-columns:repeat(2,1fr)}.benefits-grid div:nth-child(2){border-right:0}.products{grid-template-columns:repeat(2,1fr)}.product-art{height:230px}.verify-grid{grid-template-columns:1fr;gap:25px}.news-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.section-title{font-size:45px}}
      `}</style>
    </main>
  );
}
