function App() {
 const productos = [
 {
 id: 1,
 nombre: "Laptop",
 precio: 1500,
 stock: 10,
 },
 {
 id: 2,
 nombre: "Mouse",
 precio: 50,
 stock: 40,
 },
 {
 id: 3,
 nombre: "Teclado",
 precio: 120,
 stock: 5,
 },
{id: 4,
nombre: "Monitor",
precio: 600,
stock: 0
}

 ];
 return (
 <main>
 <h1>Lista de productos</h1>

 <table border="1">
  <thead>
  <tr>
    <th>Producto</th>
    <th>Precio</th>
    <th>Stock</th>
    <th>Estado</th>
  </tr>
  </thead>

  <tbody>
{productos.map((producto) => (
 <tr key={producto.id}>
  
  <td>{producto.nombre}</td> 
  <td>S/ {producto.precio}</td>
  <td>{producto.stock}</td> 
  <td> {producto.stock > 0 ? "Disponible" : "Agotado"}</td>
 
 
 </tr>
 ))}
 </tbody>
 </table>

 </main>
 );
}
export default App;
