/*
  Warnings:

  - You are about to drop the column `description` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `effect` on the `card` table. All the data in the column will be lost.
  - Added the required column `flavor_text` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_art` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `layout` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oracle_text` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `card` DROP COLUMN `description`,
    DROP COLUMN `effect`,
    ADD COLUMN `flavor_text` VARCHAR(191) NOT NULL,
    ADD COLUMN `full_art` BOOLEAN NOT NULL,
    ADD COLUMN `layout` VARCHAR(191) NOT NULL,
    ADD COLUMN `oracle_text` VARCHAR(191) NOT NULL,
    MODIFY `game` VARCHAR(191) NOT NULL DEFAULT 'Magic: The Gathering';
