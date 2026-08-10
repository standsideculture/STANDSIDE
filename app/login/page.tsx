'use client'

import { FormEvent, useState } from 'react'

const roles = ['OWNER', 'ADMIN', 'MARKETING', 'DESIGNER'] as const

export default function LoginPage() {
  const [role, setRole] = useState<(typeof roles)[number]>('OWNER')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Login gagal')
      window.location.href = '/dashboard'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login">
      <div className="login-card">
        <div className="brand">STANDSIDE</div>
        <p className="eyebrow">SECURE ACCESS</p>
        <h1>LOGIN</h1>
        <div className="roles">
          {roles.map((item) => (
            <button type="button" key={item} className={role === item ? 'selected' : ''} onClick={() => setRole(item)}>{item}</button>
          ))}
        </div>
        <form onSubmit={submit}>
          <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="email@standside.id" autoComplete="email" /></label>
          <label>Password<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="••••••••" autoComplete="current-password" /></label>
          {error && <p className="error">{error}</p>}
          <button className="submit" disabled={loading}>{loading ? 'MEMERIKSA...' : `LOGIN AS ${role}`}</button>
        </form>
        <a href="/">← Kembali ke website</a>
      </div>
      <style>{`.login{min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 50% 20%,#222525,#080909 55%);padding:20px}.login-card{width:min(480px,100%);background:#101111;border:1px solid #303131;padding:40px}.brand{text-align:center;font-size:25px;font-weight:900;font-style:italic;margin-bottom:30px}.eyebrow{text-align:center;color:#777;font-size:10px;letter-spacing:2px}.login h1{text-align:center;font-family:'Barlow Condensed',Arial;font-style:italic;font-size:48px;margin:5px 0 25px}.roles{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:22px}.roles button{background:#0b0c0c;color:#999;border:1px solid #333;padding:13px;font-size:10px;font-weight:800}.roles button.selected{background:#fff;color:#000;border-color:#fff}.roles button:focus-visible,.submit:focus-visible,input:focus-visible{outline:2px solid #fff;outline-offset:2px}form{display:flex;flex-direction:column;gap:16px}label{font-size:10px;color:#aaa;display:flex;flex-direction:column;gap:7px}input{background:#080909;border:1px solid #3a3a3a;color:#fff;padding:13px;outline:none}.submit{background:#fff;color:#000;border:0;padding:14px;font-weight:900;font-size:11px;margin-top:5px;cursor:pointer}.submit:disabled{opacity:.55;cursor:wait}.error{margin:0;padding:10px;border:1px solid #5a2b2b;background:#210f0f;color:#ffb0b0;font-size:11px}.login-card>a{display:block;text-align:center;margin-top:25px;color:#888;font-size:10px}`}</style>
    </main>
  )
}
