require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const Store = require('../models/Store');
const StoreProduct = require('../models/StoreProduct');
const User = require('../models/User');

const NEW_PRODUCTS = [
    // Bebidas
    { name: 'Coca-Cola 600ml', description: 'Refresco de cola clásico', category: 'Bebidas', unit: 'Botella', company: 'Coca-Cola', price: 18, tags: ['refresco', 'soda', 'negro', 'botella'] },
    { name: 'Sprite 2.5L', description: 'Refresco sabor lima limón familiar', category: 'Bebidas', unit: 'Botella', company: 'Coca-Cola', price: 38, tags: ['refresco', 'soda', 'limon', 'familiar'] },
    { name: 'Jugo del Valle Manzana 1L', description: 'Jugo de manzana natural', category: 'Bebidas', unit: 'Envase', company: 'Coca-Cola', price: 25, tags: ['jugo', 'manzana', 'fruta', 'dulce'] },
    { name: 'Agua Ciel 1L', description: 'Agua purificada', category: 'Bebidas', unit: 'Botella', company: 'Coca-Cola', price: 12, tags: ['agua', 'natural', 'pura'] },

    // Botanas
    { name: 'Doritos Nacho 62g', description: 'Totopos de maíz sabor queso', category: 'Botanas', unit: 'Bolsa', company: 'Sabritas', price: 17, tags: ['chips', 'queso', 'nachos', 'picoso'] },
    { name: 'Cheetos Torciditos 50g', description: 'Botana sabor queso y chile', category: 'Botanas', unit: 'Bolsa', company: 'Sabritas', price: 15, tags: ['queso', 'chile', 'botana'] },
    { name: 'Takis Fuego 62g', description: 'Rollitos de maíz sabor chile y limón (Muy picantes)', category: 'Botanas', unit: 'Bolsa', company: 'Barcel', price: 18, tags: ['picante', 'chile', 'limon', 'fuego', 'picoso'] },
    { name: 'Ruffles Queso 50g', description: 'Papas corrugadas sabor queso', category: 'Botanas', unit: 'Bolsa', company: 'Sabritas', price: 18, tags: ['papas', 'queso', 'botana'] },

    // Panadería
    { name: 'Pan Blanco Bimbo Grande', description: 'Pan de caja blanco fortificado', category: 'Panadería', unit: 'Paquete', company: 'Bimbo', price: 45, tags: ['pan', 'blanco', 'sandwich', 'desayuno'] },
    { name: 'Medias Noches Bimbo 8pz', description: 'Pan para hot dogs', category: 'Panadería', unit: 'Paquete', company: 'Bimbo', price: 35, tags: ['pan', 'hotdog', 'salchicha'] },
    { name: 'Donas Bimbo Espolvoreadas 6pz', description: 'Donas con azúcar', category: 'Panadería', unit: 'Paquete', company: 'Bimbo', price: 25, tags: ['pan', 'dulce', 'azucar', 'postre'] },

    // Lácteos
    { name: 'Leche Lala Entera 1L', description: 'Leche fresca de vaca entera', category: 'Lácteos', unit: 'Envase', company: 'Lala', price: 26, tags: ['leche', 'vaca', 'entera', 'calcio'] },
    { name: 'Leche Lala Deslactosada 1.5L', description: 'Para una fácil digestión', category: 'Lácteos', unit: 'Envase', company: 'Lala', price: 38, tags: ['leche', 'deslactosada', 'digestion'] },
    { name: 'Yoghurt Yoplait Fresa 1Kg', description: 'Yoghurt batido sabor fresa familiar', category: 'Lácteos', unit: 'Bote', company: 'Nestlé', price: 45, tags: ['yoghurt', 'fresa', 'familiar', 'desayuno'] },
    { name: 'Queso Panela Fud 400g', description: 'Queso fresco panela reducido en grasa', category: 'Lácteos', unit: 'Pieza', company: 'Fud', price: 65, tags: ['queso', 'fresco', 'panela', 'light'] },

    // Abarrotes
    { name: 'Arroz Verde Valle 1Kg', description: 'Arroz súper extra grano largo', category: 'Abarrotes', unit: 'Bolsa', company: 'Verde Valle', price: 32, tags: ['arroz', 'blanco', 'grano', 'comida'] },
    { name: 'Frijol Flor de Mayo 1Kg', description: 'Frijol limpio listo para cocer', category: 'Abarrotes', unit: 'Bolsa', company: 'Verde Valle', price: 38, tags: ['frijol', 'grano', 'comida'] },
    { name: 'Atún Dolores en Agua 140g', description: 'Atún aleta amarilla en agua', category: 'Abarrotes', unit: 'Lata', company: 'Dolores', price: 20, tags: ['atun', 'pescado', 'enlatado', 'agua'] },
    { name: 'Aceite Nutrioli 946ml', description: 'Aceite comestible puro de soya', category: 'Abarrotes', unit: 'Botella', company: 'Nutrioli', price: 45, tags: ['aceite', 'soya', 'cocina', 'freir'] },

    // Frutas
    { name: 'Plátano Tabasco (Kg)', description: 'Plátano fresco y dulce', category: 'Frutas', unit: 'Kg', company: 'Granja Local', price: 25, tags: ['fresco', 'potasio', 'amarillo', 'fruta'] },
    { name: 'Manzana Gala (Kg)', description: 'Manzana dulce y crujiente', category: 'Frutas', unit: 'Kg', company: 'Granja Local', price: 45, tags: ['manzana', 'fresca', 'roja', 'fruta'] },
    { name: 'Limón Colima (Kg)', description: 'Limón sin semilla verde', category: 'Frutas', unit: 'Kg', company: 'Granja Local', price: 35, tags: ['limon', 'acido', 'citricos', 'verde'] },

    // Verduras
    { name: 'Jitomate Saladet (Kg)', description: 'Jitomate rojo para ensaladas', category: 'Verduras', unit: 'Kg', company: 'Granja Local', price: 28, tags: ['tomate', 'ensalada', 'rojo', 'verdura'] },
    { name: 'Cebolla Blanca (Kg)', description: 'Cebolla fresca para cocina', category: 'Verduras', unit: 'Kg', company: 'Granja Local', price: 22, tags: ['cebolla', 'blanca', 'cocina', 'guisos'] },
    { name: 'Aguacate Hass (Kg)', description: 'Aguacate cremoso listo para comer', category: 'Verduras', unit: 'Kg', company: 'Granja Local', price: 65, tags: ['aguacate', 'cremoso', 'guacamole', 'verde'] },

    // Carnes
    { name: 'Bistec de Res (Kg)', description: 'Corte de res suave y fresco', category: 'Carnes', unit: 'Kg', company: 'SuKarne', price: 180, tags: ['res', 'carne', 'proteina', 'asada'] },
    { name: 'Pechuga de Pollo Sin Hueso (Kg)', description: 'Pechuga limpia lista para guisar', category: 'Carnes', unit: 'Kg', company: 'Bachoco', price: 120, tags: ['pollo', 'pechuga', 'blanca', 'proteina'] },
    { name: 'Huevo Blanco San Juan 30pz', description: 'Cartera de huevo blanco tamaño grande', category: 'Carnes', unit: 'Cartera', company: 'San Juan', price: 85, tags: ['huevo', 'blanco', 'desayuno', 'proteina'] },

    // Limpieza
    { name: 'Pinol El Original 1L', description: 'Limpiador multiusos con aroma a pino', category: 'Limpieza', unit: 'Botella', company: 'Alen', price: 22, tags: ['pino', 'pisos', 'multiusos', 'olor'] },
    { name: 'Fabuloso Lavanda 1L', description: 'Limpiador antibacterial aroma lavanda', category: 'Limpieza', unit: 'Botella', company: 'Colgate-Palmolive', price: 24, tags: ['lavanda', 'antibacterial', 'pisos', 'olor'] },
    { name: 'Jabón Zote Rosa 400g', description: 'Jabón de lavandería ideal para manchas', category: 'Limpieza', unit: 'Barra', company: 'La Corona', price: 18, tags: ['jabon', 'ropa', 'manchas', 'lavado'] },
    { name: 'Detergente Ariel Doble Poder 1Kg', description: 'Detergente en polvo', category: 'Limpieza', unit: 'Bolsa', company: 'Procter & Gamble', price: 42, tags: ['detergente', 'polvo', 'blanco', 'ropa'] },

    // Hogar
    { name: 'Papel Higiénico Pétalo 4pz', description: 'Papel suave y rendidor 4 rollos', category: 'Hogar', unit: 'Paquete', company: 'Kimberly-Clark', price: 32, tags: ['papel', 'baño', 'suave', 'rollos'] },
    { name: 'Servilletas Suavel 400pz', description: 'Servilletas de papel absorbentes', category: 'Hogar', unit: 'Paquete', company: 'Kimberly-Clark', price: 35, tags: ['servilletas', 'papel', 'mesa', 'comida'] },
    { name: 'Focos LED Philips 10W (2pz)', description: 'Foco luz blanca cálida ahorro de energía', category: 'Hogar', unit: 'Caja', company: 'Philips', price: 85, tags: ['focos', 'luz', 'led', 'iluminacion'] }
];

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado');

    // 1. Obtener la tienda demo
    const user = await User.findOne({ email: 'tienda.demo@globalstore.com' });
    if (!user) throw new Error('Usuario demo no encontrado. Corre seedStoreProducts.js primero.');
    const store = await Store.findOne({ userId: user._id });
    if (!store) throw new Error('Tienda demo no encontrada.');

    console.log(`🏪 Tienda destino: ${store.storeName}`);

    // 2. Crear los productos
    console.log(`📦 Creando ${NEW_PRODUCTS.length} productos globales...`);
    let prodCreated = 0;
    const addedProducts = [];

    for (const p of NEW_PRODUCTS) {
        try {
            // Check si ya existe para no duplicar por error
            let doc = await Product.findOne({ name: p.name });
            if (!doc) {
                doc = await Product.create(p);
                prodCreated++;
            }
            addedProducts.push(doc);
        } catch (err) {
            console.error(`Error con ${p.name}:`, err.message);
        }
    }
    console.log(`✅ Productos globales nuevos insertados: ${prodCreated}`);

    // 3. Obtener TODOS los productos (los nuevos + los que ya existían) para asegurar variedad masiva en la demo
    const allProducts = await Product.find();

    console.log(`📦 Enlazando ${allProducts.length} productos a la tienda...`);

    let storeProdCreated = 0;
    let skipped = 0;
    for (const product of allProducts) {
        try {
            // Variar el precio un +/- 15% del base si lo tiene, o un random
            let finalPrice = product.price ? product.price : Math.floor(Math.random() * 200) + 15;
            // random variación
            const variance = 1 + ((Math.random() * 0.3) - 0.15); // -15% a +15%
            finalPrice = Math.round(finalPrice * variance);

            const priceCents = finalPrice * 100;

            await StoreProduct.create({
                storeId: store._id,
                productId: product._id,
                basePriceCents: priceCents,
                finalPriceCents: priceCents,
                availableQuantity: Math.floor(Math.random() * 100) + 1, // de 1 a 100
                active: true
            });
            storeProdCreated++;
        } catch (err) {
            if (err.code === 11000) {
                skipped++; // ya existe el enlace
            } else {
                console.error('Error con StoreProduct:', err.message);
            }
        }
    }

    console.log(`✅ StoreProducts creados: ${storeProdCreated}, omitidos por ya estar enlazados: ${skipped}`);

    // Contar total en la tienda
    const count = await StoreProduct.countDocuments({ storeId: store._id });
    console.log(`\n🎉 TOTAL DE PRODUCTOS EN LA TIENDA DEMO AHORA: ${count} 🎉`);

    await mongoose.disconnect();
    console.log('🔌 Desconectado. ¡Actualiza tu página!');
}

seed().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
