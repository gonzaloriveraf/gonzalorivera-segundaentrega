const ProductosPromise = new Promise((resolve) => {
    const products = [
      { id: 0, nombre: "Vino Carmenere", stock: "", precio: 123 },
      { id: 0, nombre: "Vino Cabernet", stock: "", precio: 123 },
      { id: 0, nombre: "Vino Merlot ", stock: "", precio: 123 },
      { id: 0, nombre: "Vino Rose", stock: "", precio: 123 },
    ];

    setTimeout(() => {
      resolve(products);

    }, 3000);
  });
  
  ProductosPromise.then(products => {
    console.log(products)
  })
