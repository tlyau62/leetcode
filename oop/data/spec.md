# Specifications for Data Abstractions
- the only thing that exists in the class when a data abstraction is first invented
  - almost all code in the class, e.g. method body, is missing
  - code is added when the data abstraction is implemented
- can be compiled (p.83) 

# Form of data spec
```java
visibility class dname {
    // OVERVIEW:
    // - a brief description of the behavior of the type's objects goes here.
    // - including:
    //   1. a way of viewing the abstract objects in terms of "well-understood" concepts
    //   2. whether this object of the type is mutable

    // constructor
    // specs for constructors go here

    // methods
    // specs for methods go here
}
```
