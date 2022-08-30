-- CreateTable
CREATE TABLE `Compliments` (
    `id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `userSenderId` VARCHAR(191) NOT NULL,
    `userReceiverId` VARCHAR(191) NOT NULL,
    `tagId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Compliments` ADD CONSTRAINT `Compliments_userSenderId_fkey` FOREIGN KEY (`userSenderId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compliments` ADD CONSTRAINT `Compliments_userReceiverId_fkey` FOREIGN KEY (`userReceiverId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compliments` ADD CONSTRAINT `Compliments_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
