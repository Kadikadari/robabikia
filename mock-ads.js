const categories = {
    cars: { titles: ['هيونداي إلنترا', 'تويوتا كورولا', 'كيا سبورتيدج', 'مرسيدس C200', 'فيات تيبو', 'بي إم دبليو X5', 'نيسان صني'], img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400' },
    real: { titles: ['شقة للبيع', 'فيلا فاخرة', 'شاليه على البحر', 'محل تجاري', 'أرض للبناء', 'رووف بالتجمع'], img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    elec: { titles: ['آيفون 15 برو', 'سامسونج S23', 'لابتوب ديل كور i7', 'بلايستيشن 5', 'شاشة LG 55', 'ساعة آبل'], img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400' },
    home: { titles: ['طقم صالون مودرن', 'غرفة نوم خشب زان', 'سفرة كاملة', 'مطبخ ألوميتال', 'مرتبة قطن'], img: 'https://images.unsplash.com/photo-1505691722718-4684475556b9?w=400' },
    elec_appliances: { titles: ['ثلاجة توشيبا', 'غسالة LG', 'بوتاجاز فريش', 'ميكروويف سامسونج', 'تكييف شارب'], img: 'https://images.unsplash.com/photo-1571175432230-01c288a69984?w=400' }
};

const locations = ["القاهرة - مدينة نصر", "الجيزة - 6 أكتوبر", "الإسكندرية - سموحة", "الشرقية - الزقازيق", "الدقهلية - المنصورة", "القاهرة - التجمع الخامس", "الجيزة - الشيخ زايد", "بور سعيد", "السويس"];

export function generateMockAds(count = 200) {
    const ads = [];
    const catKeys = Object.keys(categories);

    for (let i = 1; i <= count; i++) {
        const catKey = catKeys[i % catKeys.length];
        const category = categories[catKey];
        const title = category.titles[Math.floor(Math.random() * category.titles.length)] + " " + (2020 + (i % 5));

        ads.push({
            id: `mock-${i}`,
            title: title,
            price: Math.floor(Math.random() * 50000) + 1000,
            location: locations[Math.floor(Math.random() * locations.length)],
            main_category: catKey,
            sub_category: 'الكل',
            description: "هذا إعلان تجريبي لعرض شكل الموقع. المنتج متاح بحالة ممتازة للتواصل والاستفسار يرجى الاتصال.",
            image_url: JSON.stringify([category.img]),
            phone: '01000000000',
            whatsapp: '01000000000',
            allow_chat: true,
            seller_email: 'support@robabikia.com',
            created_at: new Date().toISOString()
        });
    }
    return ads;
}
