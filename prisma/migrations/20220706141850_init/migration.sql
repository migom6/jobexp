-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "username" TEXT NOT NULL,
    "profileImageUrl" TEXT NOT NULL DEFAULT '',
    "about" TEXT NOT NULL DEFAULT '',
    "personalDetails" TEXT NOT NULL DEFAULT '{"name":"","email":"","dob":"","website":""}',
    "aboutIsPublic" BOOLEAN NOT NULL DEFAULT true,
    "personalDetailsIsPublic" BOOLEAN NOT NULL DEFAULT true,
    "jobExperiencesIsPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Profile_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("about", "aboutIsPublic", "createdAt", "jobExperiencesIsPublic", "personalDetails", "personalDetailsIsPublic", "profileImageUrl", "updatedAt", "username") SELECT "about", "aboutIsPublic", "createdAt", "jobExperiencesIsPublic", "personalDetails", "personalDetailsIsPublic", "profileImageUrl", "updatedAt", "username" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
