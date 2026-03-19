require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const Store = require('../models/Store');
const StoreProduct = require('../models/StoreProduct');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado');

    // 1. Crear o reusar usuario tienda demo
    let user = await User.findOne({ email: 'tienda.demo@globalstore.com' });
    if (!user) {
        const hashed = await bcrypt.hash('demo12345', 12);
        user = await User.create({
            username: 'tiendademo',
            email: 'tienda.demo@globalstore.com',
            password: hashed,
            role: 'store'
        });
        console.log('👤 Usuario demo creado:', user.email);
    } else {
        console.log('👤 Usuario demo ya existe');
    }

    // 2. Crear o reusar tienda demo
    let store = await Store.findOne({ userId: user._id });
    if (!store) {
        store = await Store.create({
            userId: user._id,
            storeName: 'Tienda Demo GlobalStore',
            ownerName: 'Demo Owner',
            phone: '555-0000'
        });
        console.log('🏪 Tienda demo creada:', store.storeName);
    } else {
        console.log('🏪 Tienda demo ya existe:', store.storeName);
    }

    // 3. Obtener productos
    const products = await Product.find().limit(30);
    console.log(`📦 Enlazando ${products.length} productos a la tienda...`);

    let created = 0;
    let skipped = 0;
    for (const product of products) {
        try {
            const price = product.price ? Math.round(product.price * 100) : Math.floor(Math.random() * 50000) + 1000;
            await StoreProduct.create({
                storeId: store._id,
                productId: product._id,
                basePriceCents: price,
                finalPriceCents: price,
                availableQuantity: Math.floor(Math.random() * 100) + 10,
                active: true
            });
            created++;
        } catch (err) {
            if (err.code === 11000) {
                skipped++; // ya existe
            } else {
                console.error('Error:', err.message);
            }
        }
    }

    console.log(`✅ StoreProducts creados: ${created}, omitidos (ya existían): ${skipped}`);
    await mongoose.disconnect();
    console.log('🔌 Desconectado. ¡Listo!');
}

seed().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
