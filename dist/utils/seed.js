"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const sampleFeedback = [
    {
        name: 'Sarah Johnson',
        message: 'This platform is absolutely amazing! The user experience is smooth and intuitive. I love how easy it is to share feedback.',
    },
    {
        name: 'Mike Chen',
        message: 'Great work on the responsive design. It works perfectly on both my desktop and mobile devices.',
    },
    {
        name: 'Emily Rodriguez',
        message: 'The dark mode feature is a game-changer! It\'s so much easier on the eyes during late-night browsing.',
    },
    {
        name: 'David Kim',
        message: 'I appreciate the attention to detail in the animations. They make the interface feel modern and polished.',
    },
    {
        name: 'Lisa Thompson',
        message: 'The feedback system is well thought out. It\'s simple yet effective for gathering user insights.',
    },
];
async function seed() {
    try {
        console.log('🌱 Starting database seed...');
        await database_1.prisma.feedback.deleteMany();
        console.log('🗑️  Cleared existing feedback');
        for (const feedback of sampleFeedback) {
            await database_1.prisma.feedback.create({
                data: feedback,
            });
        }
        console.log(`✅ Seeded ${sampleFeedback.length} feedback entries`);
        console.log('🎉 Database seeding completed!');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
    finally {
        await database_1.prisma.$disconnect();
    }
}
seed();
//# sourceMappingURL=seed.js.map