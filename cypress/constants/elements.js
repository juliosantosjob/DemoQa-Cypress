import { faker } from '@faker-js/faker';

module.exports = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.streetAddress(),
};