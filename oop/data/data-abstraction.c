/**
 * Data abstraction 
 * - abstract from the representation (rep)
 * - consists of a set of object plus a set of operations
 *   - data abstraction = (objects, operations)
 *   - only operations can access the representation of the objects
 *   - limit the changes to just the implementation of the type;
 *     none of the using modules need be changed,
 *     because the using modules did not use the representation
 * - "obj.x = val" vs "obj.setX(val)"
 *   - https://softwareengineering.stackexchange.com/questions/21802/when-are-getters-and-setters-justified
 */
// representation
typedef struct person {
    char* name;
    int age;
} Person;

// operations
void incAge(Person* p) {
    (*p).age++;
}

// using modules
int main()
{
    Person p;
    p.name = "asdf\0";
    p.age = 10;
    incAge(&p);
    printf("name: %s, age: %d", p.name, p.age);

    return 0;
}