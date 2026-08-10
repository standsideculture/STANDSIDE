'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [role, setRole] = useState('OWNER')
  return (
    <main className="login"><div className="login-card"><div className="brand">STANDSIDE</div><p className="eyebrow">SECURE ACCESS</p><h1>LOGIN</h1><div className="roles">{['OWNER','ADMIN','MARKETING','DESIGNER'].map(r=><button key={r} className={role===r?'selected':''} onClick={()=>setRole(r)}>{r}</button>)}</div><form onSubmit={e=>{e.preventDefault();window.location.href='/dashboard'}}><label>Email<input type="email" required placeholder="email@standside.id"/></label><label>Password<input type="password" required placeholder="••••••••"/></label><button className="submit">LOGIN AS {role}</button></form><a href="/">← Kembali ke website</a></div><style>{`.login{min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 50% 20%,#222525,#080909 55%);padding:20px}.login-card{width:min(480px,100%);background:#101111;border:1px solid #303131;padding:40px}.brand{text-align:center;font-size:25px;font-weight:900;font-style:italic;margin-bottom:30px}.login h1{text-align:center;font-family:'Barlow Condensed',Arial;font-style:italic;font-size:48px;margin:5px 0 25px}.roles{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:22px}.roles button{background:#0b0c0c;color:#999;border:1px solid #333;padding:13px;font-size:10px;font-weight:800}.roles button.selected{background:#fff;color:#000;border-color:#fff}form{display:flex;flex-direction:column;gap:16px}label{font-size:10px;color:#aaa;display:flex;flex-direction:column;gap:7px}input{background:#080909;border:1px solid #3a3a3a;color:#fff;padding:13px;outline:none}.submit{background:#fff;color:#000;border:0;padding:14px;font-weight:900;font-size:11px;margin-top:5px}.login-card>a{display:block;text-align:center;margin-top:25px;color:#888;font-size:10px}`}</style></main>
  )
}
