/*
  Warnings:

  - You are about to drop the `Compliments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Compliments` DROP FOREIGN KEY `Compliments_tagId_fkey`;

-- DropForeignKey
ALTER TABLE `Compliments` DROP FOREIGN KEY `Compliments_userReceiverId_fkey`;

-- DropForeignKey
ALTER TABLE `Compliments` DROP FOREIGN KEY `Compliments_userSenderId_fkey`;

-- DropTable
DROP TABLE `Compliments`;

-- CreateTable
CREATE TABLE `compliments` (
    `id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `userSenderId` VARCHAR(191) NOT NULL,
    `userReceiverId` VARCHAR(191) NOT NULL,
    `tagId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_userSenderId_fkey` FOREIGN KEY (`userSenderId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_userReceiverId_fkey` FOREIGN KEY (`userReceiverId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
