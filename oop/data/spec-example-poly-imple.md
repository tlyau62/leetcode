```java
/**
 * Poly - notes
 * - the use of private constructor
 * - no need to check for NullPointerException by ourselve
 *   - see also [https://stackoverflow.com/questions/36955433/how-does-the-jvm-know-when-to-throw-a-nullpointerexception]
 */
public class Poly {
    // OVERVIEW: Polys are immutable polynomials with integer coefficients.
    // A typical Poly is c0 + c1x + ...
    private int[] trms;
    private int deg;

    // constructors
    public Poly() {
        // EFFECTS: Initializes this to be the zero polynomial.
        trms = new int[1];
        deg = 0;
    }

    public Poly(int c, int n) throws NegativeExponentException {
        // EFFECTS: If n < 0 throws NegativeExponentException else
        // initializes this to be the Poly cx^n
        if (n < 0) {
            throw new NegativeExponentException("Poly(int, int) constructor");
        }
        if (c == 0) {
            trms = new int[1];
            deg = 0;
            return; 
        }
        trms = new int[n + 1];
        for (int i = 0; i < n; i++) {
            trms[i] = 0;
        }
        trms[n] = c;
        deg = n;
    }

    // TODO: why private constructor?
    private Poly(int n) {
        trms = new int[n + 1];
        deg = n;
    }

    // methods
    public int degree() {
        // EFFECTS: Returns the degree of this, i.e., the largest exponent
        //   with a non-zero coefficient. Returns 0 if this is the zero Poly.
        return deg;
    }

    public int coeff(int d) {
        // EFFECTS: Returns the coefficient of the term of this whose exponent is d.
        if (d < 0 || d > deg) {
            return 0; // TODO: why no throw exception, even lib?
        } else {
            return trms[d];
        }
    }

    // new added method
    public Poly sub(Poly q) throws NullPointerException {
        // EFFECTS: If q is null throws NullPointerException
        //   returns the Poly this - q.
        return add(q.minus()); // throw NullPointerException by jvm if q is null
    }

    // new added method
    public Poly minus() {
        // EFFECTS: Returns the Poly -this.
        Poly r = new Poly(deg);

        for (int i = 0; i < deg; i++) {
            r.trms[i] = -trms[i];
        }

        return r;
    }

    public Poly add(Poly q) throws NullPointerException {
        // EFFECTS: If q is null throws NullPointerException else
        //   returns the Poly this + q
        Poly la, sm;
        int newdeg;
        Poly r;
        int i;

        la = deg > q.deg ? this : q;
        sm = la == this ? q : this;
        newdeg = la.deg;
        if (deg == q.deg) {
            for (int k = deg; k > 0; k--) {
                if (trms[k] + q.trms[k] != 0) {
                    break;
                } else {
                    newdeg--;
                }
            }
        }
        r = new Poly(newdeg);

        for (i = 0; i <= sm.deg && i <= newdeg; i++) {
            r.trms[i] = la.trms[i] + sm.trms[i];
        }
        
    }

    public Poly mul(Poly q) throws NullPointerException {
        // EFFECTS: If q is null throws NullPointerException else
        //   returns the Poly this * q
        Poly r;

        if ((deg == 0 && trms[0] == 0) ||
            (q.deg == 0 && q.trms[0] == 0)) {
            return new Poly();
        }

        r = new Poly(deg + q.deg);

        for (int i = 0; i <= deg; i++) {
            for (int j = 0; j <= q.deg; j++) {
                r.trms[i + j] = r.trms[i + j] + trms[i] * q.trms[j];
            }
        }

        return r;
    }
}
```