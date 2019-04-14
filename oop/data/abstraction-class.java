/**
 * Data abstraction (class)
 * - abstract data representation(rep) by operations
 * - data abstraction = (objects, operations)
 * - has a context: record, data structure, ...
 */
class Type {
    /**
     * Rep
     * - represent the data
     * - abstracted by methods
     * - this: the implicit argument which refers to this object
     */
    private int _typeVar;

    /**
     * Constructor
     * - initialize new objects
     * - must be public if this constructor appears on spec
     * - belong to object
     */
    public Type() {
        _typeVar = 10;
    }

    /**
     * Observor methods
     * - no mutation to rep
     */
    public String getTypeVar() {
        return String.format("value: %d\n", _typeVar);
    }

    /**
     * Mutation methods
     * - mutation to rep
     */
    public void setTypeVar(int typeVar) {
        _typeVar = typeVar;
    }

}