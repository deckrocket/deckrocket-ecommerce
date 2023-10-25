/*
  Warnings:

  - You are about to drop the column `condition` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `foil` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `oracle_text` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `salesPercentage` on the `card` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `LastestSets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Promotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ShoppingCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `card` DROP COLUMN `condition`,
    DROP COLUMN `createAt`,
    DROP COLUMN `foil`,
    DROP COLUMN `oracle_text`,
    DROP COLUMN `price`,
    DROP COLUMN `qty`,
    DROP COLUMN `salesPercentage`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `oracleText` VARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE `lastestsets` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `promotion` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `shoppingcart` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `CardInventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `salesPercentage` INTEGER NOT NULL DEFAULT 0,
    `price` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,
    `foil` BOOLEAN NOT NULL DEFAULT false,
    `condition` VARCHAR(191) NOT NULL DEFAULT 'NM',
    `cardId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CardInventory` ADD CONSTRAINT `CardInventory_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
