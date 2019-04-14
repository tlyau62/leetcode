/**
 * Record
 * - a class containing only data representation, or
 * - all methods contains no business logic, which are designed to
 *   directly accessing the data representation
 * - exmaple of usage: database domain object, data transfer object
 */
// variant 1
 class Record {
    public int _typeVar;
    public String _typeVar2;

    public Record(int typeVar, String typeVar2) {
        _typeVar = 10;
        _typeVar2 = typeVar2;
    }
}

// variant 2
class Record {
    private int _typeVar;
    private String _typeVar2;

    public Record(int typeVar, String typeVar2) {
        _typeVar = 10;
        _typeVar2 = typeVar2;
    }

    public int getTypeVar() {
        return _typeVar;
    }

    public void setTypeVar(int typeVar) {
        _typeVar = typeVar;
    }

    public String getTypeVar2() {
        return _typeVar2;
    }

    public void setTypeVar2(String typeVar2) {
        _typeVar2 = typeVar2;
    }
}