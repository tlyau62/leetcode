# without salting
- password database is vulnerable to dictionary attack
- dictionary attack
  1. hash(all possible password char) => now I know the password and the corresponding hash value mapping
  2. compare the hash values with the leaked database. If match, use the mapping the password.
- time to recover the password: O(n)
  - n is number of possible passwords

# with salting
- assume the salt is also leaked, to create the mapping. We need to hash(all possible password char + all salt) in order to recover all password in the database
- time to recover the password: O(nk)
  - n is number of possible passwords
  - k is number of salts