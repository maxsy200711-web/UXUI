
interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  description: string;
}

export default async function ProductsTable() {
  
  const API_URL = 'http://localhost:5000/api/products';
  
  let products: Product[] = [];
  
  try {
    const res = await fetch(API_URL, {
      cache: 'no-store' 
    }); 
    
    if (!res.ok) {
        throw new Error(`Failed to fetch data, status: ${res.status}`);
    }

    products = await res.json();
    
  } catch (e) {
    console.error("Error fetching products:", e);
    return <div>Error loading data: Please ensure your Express server is running on port 3001.</div>;
  }
  
  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div style={{ padding: '20px'}}>
      <h1>📊Maxsy(Maxsy PHOMMUEANG)</h1>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        textAlign: 'left',
        border:'dark'
      }}>
        <thead>
          <tr style={tableHeaderStyle}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} >
              <td style={tdStyle}>{product.id}</td>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>${product.price.toFixed(2)} / {product.unit}</td>
              <td style={tdStyle}>{product.category}</td>
              <td style={tdStyle}>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = { padding: '12px 15px', border: '1px solid #00ff1aff'};
const tdStyle = { padding: '10px 15px', border: '1px solid #00ff1aff' };
const tableHeaderStyle = { backgroundColor: '' };
