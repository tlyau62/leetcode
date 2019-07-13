open class SortTwoNumber {
    fun sort(a: Int, b: Int) {
        var cmp = compare(a, b);
        
        if (cmp < 0) {
            println("$a, $b");
        } else if (cmp > 0) {       
            println("$b, $a");
        } else {
            println("$a");
        }
    }

    open fun compare(a: Int, b: Int): Int {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }
}

fun main(args: Array<String>) {
    var sort = SortTwoNumber();
    var sortDesc = object: SortTwoNumber() {
    	override fun compare(a: Int, b: Int): Int {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        }
    };
    
    sort.sort(10, 20);
    sortDesc.sort(10, 20);
}