    // 💡 Next.js Server Component (ไม่ต้องมี 'use client')

async function getProducts() {
  // ดึงข้อมูลจาก Route Handler ภายใน /api/products
  // Next.js จะรู้ว่าต้องเรียก endpoint ภายใน Server ของตัวเอง
  const res = await fetch('http://localhost:3001/api/products', {
    // ใช้ cache: 'no-store' เพื่อให้แน่ใจว่าดึงข้อมูลใหม่ทุกครั้ง (เทียบเท่า SSR)
    cache: 'no-store' 
  }); 

  if (!res.ok) {
    // ใน Server Component, สามารถ throw error ได้
    throw new Error('Failed to fetch product data');
  }

  return res.json();
}

export default async function HomePage() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    return <div>Error: Failed to load products. Check your API Route.</div>;
  }
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>✅ Product List from Next.js API</h1>
      {/* 📊 ส่วนแสดงผลตารางข้อมูล */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Category</th>
                  <th style={thStyle}>Unit</th>
              </tr>
          </thead>
          <tbody>
              {products.map((product) => (
                  <tr key={product.id} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={tdStyle}>{product.id}</td>
                      <td style={tdStyle}>**{product.name}**</td>
                      <td style={tdStyle}>${product.price.toFixed(2)}</td>
                      <td style={tdStyle}>{product.category}</td>
                      <td style={tdStyle}>{product.unit}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  );
}

const thStyle = { padding: '12px', border: '1px solid #ddd', textAlign: 'left' };
const tdStyle = { padding: '10px 12px', border: '1px solid #ddd', textAlign: 'left' };