/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "imageUrl",
DROP COLUMN "stock";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "address",
DROP COLUMN "description",
DROP COLUMN "email",
DROP COLUMN "imageUrl",
DROP COLUMN "phone";
