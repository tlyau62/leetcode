/**
 * https://leetcode.com/problems/encode-and-decode-tinyurl/description/
 * 
 * idea: make a bijection relation with longUrl and shortUrl
 *       and then use a database or hashmap to save the relation entry
 *
 * lazy to implement
 * 
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    return longUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return shortUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */