# record
- define new data type (/type)
- a collcetion of fields
    - each wih a name and type
    - each field(instance variable) is a public / package-visible
- a constructor is also provided
- no spec is provided, except to indicate that the class is a record

# example
```java
class Pair {
    // OVERVIEW: a record type
    int coeff;
    int exp;
    Pair(int c, int n) {
        coeff = c;
        exp = n;
    }
}
```