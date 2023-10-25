/*
  Warnings:

  - You are about to drop the column `flavor_text` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `full_art` on the `card` table. All the data in the column will be lost.
  - You are about to alter the column `condition` on the `card` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `card` DROP COLUMN `flavor_text`,
    DROP COLUMN `full_art`,
    ADD COLUMN `flavorText` VARCHAR(191) NULL,
    ADD COLUMN `fullArt` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `salesPercentage` INTEGER NOT NULL DEFAULT 0,
    MODIFY `foil` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `condition` VARCHAR(191) NOT NULL DEFAULT 'NM';
