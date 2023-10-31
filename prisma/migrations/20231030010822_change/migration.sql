-- AlterTable
ALTER TABLE `lastestsets` ADD COLUMN `latest` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `promotion` ADD COLUMN `onPromotion` BOOLEAN NOT NULL DEFAULT false;
