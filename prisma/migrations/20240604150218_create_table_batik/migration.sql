-- CreateTable
CREATE TABLE `Batik` (
    `batik_id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `batik_name` VARCHAR(191) NOT NULL,
    `batik_origin` VARCHAR(191) NOT NULL,
    `batik_meaning` TEXT NOT NULL,
    `batik_history` TEXT NOT NULL,

    PRIMARY KEY (`batik_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
