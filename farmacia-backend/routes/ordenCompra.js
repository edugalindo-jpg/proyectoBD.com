exports.listar = async (req, res) => {

  try {

    const ordenes = await Orden.find()
      .populate("empleado")
      .populate("proveedor")
      .populate("productos.producto");

    const resultado = ordenes.map(o => ({

      empleado: o.empleado.nombre,

      proveedor: o.proveedor.nombre,

      productos: o.productos.map(p => ({

        producto: p.producto.nombre,

        cantidad: p.cantidad,

        precioUnitario: p.precioUnitario,

        precioTotal: p.precioTotal

      })),

      sumaTotal: o.sumaTotal

    }));

    res.json(resultado);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};
