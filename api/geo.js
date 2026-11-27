// Devolve so o pais/estado/cidade que a Vercel ja identifica no acesso.
// Sem servico de fora e sem devolver IP. Usado no registro de acessos do Gerencial.
module.exports = (req, res) => {
  const h = req.headers || {};
  const dec = s => { try { return decodeURIComponent(s || ''); } catch (e) { return s || ''; } };
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({
    pais: h['x-vercel-ip-country'] || '',
    uf: h['x-vercel-ip-country-region'] || '',
    cidade: dec(h['x-vercel-ip-city'])
  }));
};
