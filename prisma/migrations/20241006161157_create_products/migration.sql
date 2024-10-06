-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "videoReview" TEXT NOT NULL,
    "tags" TEXT[],
    "basePrice" DOUBLE PRECISION NOT NULL,
    "promotionalPrice" DOUBLE PRECISION NOT NULL,
    "lowestPrice" DOUBLE PRECISION NOT NULL,
    "highestPrice" DOUBLE PRECISION NOT NULL,
    "priceAverage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
