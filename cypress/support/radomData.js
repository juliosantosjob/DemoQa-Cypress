import { faker } from '@faker-js/faker';

function randomInt(min, max) {
    const year = Math.floor(Math.random() * (max - min) + min);
    return year.toString();
}

module.exports = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: 'Male',
    mobile: faker.phone.number('##########'),
    hobbies: 'Music',
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.streetAddress(),
    file: '/image/test-image.jpg',
    month: faker.date.month(),
    year: randomInt(1970, 2000),
    day: randomInt(1, 9).padStart(2, '0'),
};