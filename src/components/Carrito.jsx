import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "../style/Carrito.css";

export default function Carrito({ items = [], onEliminar }) {
  const [visible, setVisible] = useState(false);
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    referencia: "",
  });

  // Número de WhatsApp de tu negocio (Cambiar por el número real)
  const WHATSAPP_NUMBER = "51946586906"; // Formato: código de país + número sin espacios

  const calcularTotal = () => {
    return items.reduce((total, item) => total + item.subtotal, 0);
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.imagen}
        alt={rowData.nombre}
        className="carrito-producto-img"
      />
    );
  };

  const precioBodyTemplate = (rowData) => {
    return <span className="precio-text">S/ {rowData.precio.toFixed(2)}</span>;
  };

  const subtotalBodyTemplate = (rowData) => {
    return (
      <span className="subtotal-text">S/ {rowData.subtotal.toFixed(2)}</span>
    );
  };

  const accionesBodyTemplate = (rowData) => {
    return (
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger p-button-text"
        onClick={() => onEliminar(rowData.id)}
        tooltip="Eliminar"
        tooltipOptions={{ position: "top" }}
      />
    );
  };

  const handleFinalizarPedido = () => {
    if (items.length === 0) return;
    setVisible(true);
  };

  const generarMensajeWhatsApp = () => {
    let mensaje = `🌊 *PEDIDO ALTHUS* 🌊\n\n`;
    mensaje += `👤 *Datos del Cliente:*\n`;
    mensaje += `Nombre: ${datosCliente.nombre}\n`;
    mensaje += `Teléfono: ${datosCliente.telefono}\n`;
    mensaje += `Dirección: ${datosCliente.direccion}\n`;
    if (datosCliente.referencia) {
      mensaje += `Referencia: ${datosCliente.referencia}\n`;
    }
    mensaje += `\n📦 *Productos:*\n`;
    mensaje += `━━━━━━━━━━━━━━━━━━━━\n`;

    items.forEach((item, index) => {
      mensaje += `${index + 1}. ${item.nombre}\n`;
      mensaje += `   Cantidad: ${item.cantidad}\n`;
      mensaje += `   Precio Unit.: S/ ${item.precio.toFixed(2)}\n`;
      mensaje += `   Subtotal: S/ ${item.subtotal.toFixed(2)}\n`;
      mensaje += `━━━━━━━━━━━━━━━━━━━━\n`;
    });

    mensaje += `\n💰 *Resumen:*\n`;
    mensaje += `Subtotal: S/ ${calcularTotal().toFixed(2)}\n`;
    mensaje += `Delivery: S/ 5.00\n`;
    mensaje += `*TOTAL: S/ ${(calcularTotal() + 5).toFixed(2)}*\n`;
    mensaje += `\n✅ Confirmar pedido`;

    return encodeURIComponent(mensaje);
  };

  const handleConfirmarPedido = () => {
    // Validar datos
    if (
      !datosCliente.nombre ||
      !datosCliente.telefono ||
      !datosCliente.direccion
    ) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    const mensajeWhatsApp = generarMensajeWhatsApp();
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeWhatsApp}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, "_blank");

    // Cerrar el modal
    setVisible(false);

    // Opcional: Limpiar el formulario
    setDatosCliente({
      nombre: "",
      telefono: "",
      direccion: "",
      referencia: "",
    });
  };

  const footerContent = (
    <div className="dialog-footer p-3">
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Enviar por WhatsApp"
        icon="pi pi-whatsapp"
        onClick={handleConfirmarPedido}
        className="btn-whatsapp"
        autoFocus
      />
    </div>
  );

  if (items.length === 0) {
    return (
      <div className="carrito-vacio">
        <i className="pi pi-shopping-cart carrito-vacio-icon"></i>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar tu pedido</p>
      </div>
    );
  }

  return (
    <>
      <div className="carrito-container">
        <div className="carrito-header">
          <h2>
            <i className="pi pi-shopping-cart"></i>
            Mi Carrito
          </h2>
          <span className="items-count">{items.length} productos</span>
        </div>

        <div className="carrito-tabla">
          <DataTable value={items} responsiveLayout="scroll">
            <Column
              header="Producto"
              body={imageBodyTemplate}
              style={{ width: "100px" }}
            />
            <Column field="nombre" header="Nombre" />
            <Column
              field="cantidad"
              header="Cantidad"
              style={{ width: "100px", textAlign: "center" }}
            />
            <Column
              header="Precio"
              body={precioBodyTemplate}
              style={{ width: "120px" }}
            />
            <Column
              header="Subtotal"
              body={subtotalBodyTemplate}
              style={{ width: "120px" }}
            />
            <Column
              header="Acciones"
              body={accionesBodyTemplate}
              style={{ width: "100px", textAlign: "center" }}
            />
          </DataTable>
        </div>

        <div className="carrito-resumen">
          <div className="resumen-item">
            <span className="resumen-label">Subtotal:</span>
            <span className="resumen-valor">
              S/ {calcularTotal().toFixed(2)}
            </span>
          </div>
          <div className="resumen-item">
            <span className="resumen-label">Delivery:</span>
            <span className="resumen-valor">S/ 5.00</span>
          </div>
          <div className="resumen-total">
            <span className="total-label">Total:</span>
            <span className="total-valor">
              S/ {(calcularTotal() + 5).toFixed(2)}
            </span>
          </div>

          <Button
            label="Realizar Pedido por WhatsApp"
            icon="pi pi-whatsapp"
            className="btn-finalizar"
            onClick={handleFinalizarPedido}
          />
        </div>
      </div>

      <Dialog
        header="Completa tus datos para el pedido"
        visible={visible}
        style={{ width: "600px", padding: "20px" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
        className="dialog-pedido"
      >
        <div className="form-pedido p-5">
          <div className="field">
            <label htmlFor="nombre">Nombre completo *</label>
            <InputText
              id="nombre"
              value={datosCliente.nombre}
              onChange={(e) =>
                setDatosCliente({ ...datosCliente, nombre: e.target.value })
              }
              placeholder="Ingresa tu nombre completo"
              className="w-full"
            />
          </div>

          <div className="field">
            <label htmlFor="telefono">Teléfono *</label>
            <InputText
              id="telefono"
              value={datosCliente.telefono}
              onChange={(e) =>
                setDatosCliente({ ...datosCliente, telefono: e.target.value })
              }
              placeholder="Ej: 999 999 999"
              className="w-full"
            />
          </div>

          <div className="field">
            <label htmlFor="direccion">Dirección de entrega *</label>
            <InputTextarea
              id="direccion"
              value={datosCliente.direccion}
              onChange={(e) =>
                setDatosCliente({ ...datosCliente, direccion: e.target.value })
              }
              placeholder="Ingresa tu dirección completa (calle, número, distrito)"
              rows={3}
              className="w-full"
            />
          </div>

          <div className="field">
            <label htmlFor="referencia">Referencia (opcional)</label>
            <InputText
              id="referencia"
              value={datosCliente.referencia}
              onChange={(e) =>
                setDatosCliente({ ...datosCliente, referencia: e.target.value })
              }
              placeholder="Ej: Frente al parque, portón azul, 2do piso"
              className="w-full"
            />
          </div>

          <div className="pedido-resumen-dialog">
            <h4>Resumen del Pedido</h4>
            <div className="productos-resumen-list">
              {items.map((item, index) => (
                <div key={index} className="producto-resumen-item">
                  <span>
                    {item.cantidad}x {item.nombre}
                  </span>
                  <span>S/ {item.subtotal.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="resumen-dialog-item">
              <span>Subtotal:</span>
              <span>S/ {calcularTotal().toFixed(2)}</span>
            </div>
            <div className="resumen-dialog-item">
              <span>Delivery:</span>
              <span>S/ 5.00</span>
            </div>
            <div className="resumen-dialog-total">
              <span>Total:</span>
              <span>S/ {(calcularTotal() + 5).toFixed(2)}</span>
            </div>
          </div>

          <div className="whatsapp-info">
            <i className="pi pi-info-circle"></i>
            <p>
              Al confirmar, se abrirá WhatsApp con tu pedido listo para enviar
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
}
