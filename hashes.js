'use strict';

class Hashes {
    static check(hash) {
        const voter_hashes = [
              "08122368ffb0f78ef5c537b5a15a03ba",
              "cd7f7f45a9e315a7bf2ca0e7cb816bc9",
        ];
        const nominee_hashes = [
              "08122368ffb0f78ef5c537b5a15a03ba",
              "cd7f7f45a9e315a7bf2ca0e7cb816bc9",
              "a131d8f65e7de7f12ea437cf5c8ee91a",
        ];
        return [(voter_hashes.indexOf(hash) != -1), (nominee_hashes.indexOf(hash) != -1)];
    }
}
if (typeof module != 'undefined' && module.exports) module.exports = Hashes;
