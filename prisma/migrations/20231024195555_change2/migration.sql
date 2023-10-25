/*
  Warnings:

  - The primary key for the `card` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `card` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `flavor_text` VARCHAR(191) NULL,
    MODIFY `oracle_text` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);
