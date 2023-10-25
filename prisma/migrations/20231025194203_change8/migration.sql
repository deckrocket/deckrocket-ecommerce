/*
  Warnings:

  - The primary key for the `card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `card` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `cardId` on the `cardinventory` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `cardinventory` DROP FOREIGN KEY `CardInventory_cardId_fkey`;

-- AlterTable
ALTER TABLE `card` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cardinventory` MODIFY `cardId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `CardInventory` ADD CONSTRAINT `CardInventory_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
