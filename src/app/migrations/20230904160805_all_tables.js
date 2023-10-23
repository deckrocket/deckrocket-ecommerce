/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable('users', function (table) {
			table.increments('id').primary().comment('Primary Key');
			table.string('username', 50).notNullable();
			table.string('password', 255).notNullable();
			table.string('email', 50).notNullable();
		})
		.createTable('cards', function (table) {
			table.string('id', 255).primary().comment('Primary Key');
			table.string('name', 255).notNullable();
			table.string('rarity', 100).defaultTo(null);
			table.string('type', 100).defaultTo(null);
			table.string('imageUrl', 255).defaultTo(null);
			table.string('text', 2047).defaultTo(null);
			table.string('set', 100).defaultTo(null);
			table.string('number', 50).defaultTo(null);
			table.string('artist', 100).defaultTo(null);
			table.string('layout', 100).defaultTo(null);
		});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('cards').dropTableIfExists('users');
};
