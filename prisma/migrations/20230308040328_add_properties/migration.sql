-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "beds" DOUBLE PRECISION NOT NULL,
    "baths" DOUBLE PRECISION NOT NULL,
    "squareFeet" DOUBLE PRECISION NOT NULL,
    "lotSize" DOUBLE PRECISION NOT NULL,
    "yearBuilt" DOUBLE PRECISION NOT NULL,
    "price" BIGINT NOT NULL,
    "hoaPerMonth" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "nextOpenHouseStart" TEXT NOT NULL,
    "nextOpenHouseEnd" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyToUser" (
    "propertyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyToUser_pkey" PRIMARY KEY ("propertyId","userId")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyToUser" ADD CONSTRAINT "PropertyToUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
