```java
/**
 * Poly
 * - immutable class
 *   - once created and initialized, cannot be modified
 *   - no mutator method (no modifies clause)
 *   - no post notation, since object state does not change
 * - NegativeExponentException is unchecked
 *   - since preventation can be done (under programmer control)
 */
public class Poly {
    // OVERVIEW: Polys are immutable polynomials with integer coefficients.
    // A typical Poly is c0 + c1x + ...

    // constructors
    public Poly() {
        // EFFECTS: Initializes this to be the zero polynomial.
    }

    public Poly(int c, int n) throws NegativeExponentException {
        // EFFECTS: If n < 0 throws NegativeExponentException else
        // initializes this to be the Poly cx^n
    }

    // methods
    public int degree() {
        // EFFECTS: Returns the degree of this, i.e., the largest exponent
        //   with a non-zero coefficient. Returns 0 if this is the zero Poly.
    }

    public int coeff(int d) {
        // EFFECTS: Returns the coefficient of the term of this whose exponent is d.
    }

    public Poly add(Poly q) throws NullPointerException {
        // EFFECTS: If q is null throws NullPointerException else
        //   returns the Poly this + q
    }

    public Poly mul(Poly q) throws NullPointerException {
        // EFFECTS: If q is null throws NullPointerException else
        //   returns the Poly this * q
    }
}
```