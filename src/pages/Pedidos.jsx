import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Carrito from "../components/Carrito";
import Producto1 from "../assets/pro_bidon20l.png";
import Producto2 from "../assets/pro_bidon7l.png";
import Producto3 from "../assets/pro_caja20l.png";
import Producto4 from "../assets/dispensador.png";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";
import { Sidebar } from "primereact/sidebar";
import { Badge } from "primereact/badge";
import Footer from "../components/Footer";
import "../style/Pedidos.css";

export default function Pedidos() {
  const toast = useRef(null);
  const [carrito, setCarrito] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const productos = [
    {
      id: 1,
      nombre: "Bidón 20 Litros",
      descripcion: "Agua purificada en bidón de 20 litros ideal para hogares y oficinas",
      precio: 20.00,
      imagen: Producto1,
    },
    {
      id: 2,
      nombre: "Bidón 7 Litros",
      descripcion: "Bidón de 7 litros perfecto para espacios reducidos",
      precio: 7.00,
      imagen: Producto2,
    },
    {
      id: 3,
      nombre: "Caja 20 Litros",
      descripcion: "Caja dispensadora de 20 litros para mayor comodidad",
      precio: 23.00,
      imagen: Producto3,
    },
    {
      id: 4,
      nombre: "Dispensador",
      descripcion: "Dispensador de agua de alta calidad, frío y caliente",
      precio: 16.00,
      imagen: Producto4,
    },
  ];

  const agregarAlCarrito = (producto) => {
    const cantidad = cantidades[producto.id] || 1;
    
    // Verificar si el producto ya existe en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);
    
    if (productoExistente) {
      // Si existe, actualizar la cantidad
      const carritoActualizado = carrito.map(item => 
        item.id === producto.id 
          ? { 
              ...item, 
              cantidad: item.cantidad + cantidad,
              subtotal: (item.cantidad + cantidad) * item.precio
            }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      // Si no existe, agregarlo
      const itemCarrito = {
        ...producto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
      };
      setCarrito([...carrito, itemCarrito]);
    }
    
    toast.current.show({
      severity: 'success',
      summary: 'Agregado al carrito',
      detail: `${cantidad} x ${producto.nombre}`,
      life: 3000
    });

    setCantidades({ ...cantidades, [producto.id]: 1 });
  };

  const handleCantidadChange = (productoId, value) => {
    setCantidades({ ...cantidades, [productoId]: value || 1 });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId));
    toast.current.show({
      severity: 'info',
      summary: 'Producto eliminado',
      detail: 'El producto ha sido eliminado del carrito',
      life: 3000
    });
  };

  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
      <Navbar />
      <Slide />
      <Toast ref={toast} />
      
      {/* Botón flotante del carrito */}
      <div className={`carrito-flotante ${totalItems > 0 ? 'tiene-productos' : ''}`} onClick={() => setMostrarCarrito(true)}>
        <Button 
          icon="pi pi-shopping-cart" 
          className="p-button-rounded p-button-lg carrito-btn-flotante"
          badge={totalItems > 0 ? totalItems.toString() : null}
          badgeClassName="carrito-badge"
        />
      </div>

      {/* Sidebar del carrito */}
      <Sidebar 
        visible={mostrarCarrito} 
        position="right" 
        onHide={() => setMostrarCarrito(false)}
        className="carrito-sidebar"
        style={{ width: '600px' }}
      >
        <Carrito 
          items={carrito} 
          onEliminar={eliminarDelCarrito}
        />
      </Sidebar>
      
      <div className="pedidos-container">
        <div className="pedidos-header">
          <h1>Nuestros Productos</h1>
          <p>Selecciona los productos que deseas y agrégalos a tu carrito</p>
        </div>

        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-imagen-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="producto-imagen"
                />
              </div>
              
              <div className="producto-info">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-descripcion">{producto.descripcion}</p>
                
                <div className="producto-precio">
                  <span className="precio-label">Precio:</span>
                  <span className="precio-valor">S/ {producto.precio.toFixed(2)}</span>
                </div>

                <div className="producto-acciones">
                  <div className="cantidad-selector">
                    <label>Cantidad:</label>
                    <InputNumber 
                      value={cantidades[producto.id] || 1}
                      onValueChange={(e) => handleCantidadChange(producto.id, e.value)}
                      showButtons
                      buttonLayout="horizontal"
                      min={1}
                      max={99}
                      decrementButtonClassName="p-button-secondary"
                      incrementButtonClassName="p-button-secondary"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                    />
                  </div>

                  <Button 
                    label="Agregar al Carrito"
                    icon="pi pi-shopping-cart"
                    className="btn-agregar-carrito"
                    onClick={() => agregarAlCarrito(producto)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}