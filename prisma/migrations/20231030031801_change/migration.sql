/*
  Warnings:

  - Made the column `imageUrl` on table `card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `card` MODIFY `imageUrl` VARCHAR(191) NOT NULL DEFAULT '/assets/card_deafult_image.jpg';
