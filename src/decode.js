import fs from 'fs';

const base64Data = `
SUQzAwAAAAAAQVRGTgAAAAAAAAD//v/6AABDb2RlIE5BTUUgU01QAAA=
`;

const buffer = Buffer.from(base64Data, 'base64');
fs.writeFileSync('../public/silent_test.mp3', buffer);
console.log('silent_test.mp3 created successfully!');