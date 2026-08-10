const stats = [
  ['TOTAL PENJUALAN', 'Rp 15.750.000', '+12.5%'],
  ['TOTAL PRODUK', '25', '+8.3%'],
  ['TOTAL USER', '32', '+5.0%'],
  ['TOTAL ORDER', '124', '+15.2%'],
]

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <header><div className="brand">STANDSIDE</div><div>OWNER <span className="avatar">O</span></div></header>
      <div className="layout">
        <aside><strong>DASHBOARD OWNER</strong><a className="active">◉ Dashboard</a><a>▣ Penjualan</a><a>□ Produk</a><a>♙ User</a><a>✓ Approval</a><a>▤ Laporan</a><a>⌁ Marketing</a><a>✎ Designer</a><a>⚙ Pengaturan</a></aside>
        <section className="content"><div className="eyebrow">OVERVIEW</div><h1>DASHBOARD OWNER</h1><div className="stats">{stats.map(s=><div className="stat" key={s[0]}><small>{s[0]}</small><b>{s[1]}</b><span>{s[2]}</span></div>)}</div><div className="panels"><div className="panel"><h2>GRAFIK PENJUALAN (2026)</h2><div className="chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="months">JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC</div></div><div className="panel"><h2>PRODUK TERLARIS</h2>{['SS FAITH TEE','SS LOYALTY HOODIE','SS GAME JERSEY','SS OLDSKOOL JACKET'].map((p,i)=><div className="best" key={p}><span>{i+1}</span><b>{p}</b><small>{31-i*5} Terjual</small></div>)}</div></div></section>
      </div>
      <style>{`.dashboard{min-height:100vh;background:#080909;color:#f5f5f5;font-family:Arial,sans-serif}.dashboard header{height:64px;border-bottom:1px solid #292a2a;padding:0 25px;display:flex;align-items:center;justify-content:space-between;font-size:10px}.brand{font-weight:900;font-style:italic;font-size:20px}.avatar{display:inline-flex;margin-left:8px;width:28px;height:28px;border-radius:50%;background:#333;align-items:center;justify-content:center}.layout{display:grid;grid-template-columns:220px 1fr;min-height:calc(100vh - 64px)}aside{border-right:1px solid #292a2a;padding:25px 15px;display:flex;flex-direction:column;gap:5px}aside strong{font-size:11px;padding:12px 10px 20px}aside a{padding:12px 10px;color:#999;font-size:11px;border-radius:3px}.active,aside a:hover{background:#171818;color:#fff}.content{padding:38px;max-width:1200px}.content h1{font-size:28px;margin:8px 0 28px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.stat,.panel{background:#111212;border:1px solid #242525;padding:20px}.stat{display:flex;flex-direction:column;gap:8px}.stat small{font-size:9px;color:#777}.stat b{font-size:20px}.stat span{color:#3ddc84;font-size:10px}.panels{display:grid;grid-template-columns:1.5fr 1fr;gap:12px;margin-top:12px}.panel h2{font-size:11px;margin:0 0 25px}.chart{height:230px;display:flex;align-items:flex-end;gap:8px;border-bottom:1px solid #333}.chart i{display:block;flex:1;background:#777;border-radius:2px 2px 0 0}.chart i:nth-child(1){height:25%}.chart i:nth-child(2){height:42%}.chart i:nth-child(3){height:35%}.chart i:nth-child(4){height:62%}.chart i:nth-child(5){height:48%}.chart i:nth-child(6){height:73%}.chart i:nth-child(7){height:57%}.chart i:nth-child(8){height:81%}.chart i:nth-child(9){height:70%}.chart i:nth-child(10){height:92%}.chart i:nth-child(11){height:83%}.chart i:nth-child(12){height:97%}.months{font-size:7px;color:#666;word-spacing:9px;margin-top:8px}.best{display:grid;grid-template-columns:28px 1fr auto;align-items:center;gap:10px;padding:13px 0;border-bottom:1px solid #222}.best span{width:25px;height:25px;background:#222;display:grid;place-items:center;font-size:10px}.best b{font-size:9px}.best small{font-size:8px;color:#777}@media(max-width:800px){.layout{grid-template-columns:1fr}aside{display:none}.content{padding:22px 15px}.stats{grid-template-columns:repeat(2,1fr)}.panels{grid-template-columns:1fr}}`}</style>
    </main>
  )
}
