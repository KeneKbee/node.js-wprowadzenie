const crypto = require("crypto");
const fs = require("fs");

const originalText = "Hello World";

const password = "ultra-secret-password";
const salt = "extra-salty-salt";
const algorithm = "aes-256-cbc";
const keyLength = 32;
const ivLength = 16;

const key = crypto.scryptSync(password, salt, keyLength);

const iv = crypto.randomBytes(ivLength);
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrytped = cipher.update(originalText, "utf8", "hex");
encrytped += cipher.final("hex");

fs.writeFileSync("encrypted.json", JSON.stringify({text: encrytped}));