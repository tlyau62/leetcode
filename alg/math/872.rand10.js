/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    let current;
    do {
        current = rand49();
    } while (current > 39);
    return current % 10 + 1;

    function rand49() {
        return 7 * (rand7() - 1) + (rand7() - 1);
    }

};

// 7 * (rand7() - 1) + (rand7() - 1) gives the uniform dist table
//      0	1	2	3	4	5	6
// 0	0	7	14	21	28	35	42
// 1	1	8	15	22	29	36	43
// 2	2	9	16	23	30	37	44
// 3	3	10	17	24	31	38	45
// 4	4	11	18	25	32	39	46
// 5	5	12	19	26	33	40	47
// 6	6	13	20	27	34	41	48

// regenerate rand49() until output <= 39
//      0	1	2	3	4	5	6
//       ---------------------
// 0	|0	7	14	21	28	35|	42
// 1	|1	8	15	22	29	36|	43
// 2	|2	9	16	23	30	37|	44
// 3	|3	10	17	24	31	38|	45
// 4	|4	11	18	25	32	39|	46
//      |                   --.
// 5	|5	12	19	26	33  |40	47
// 6	|6	13	20	27	34	|41	48
//      --------------------.

// current % 10 + 1 generates the uniform dist table
// output:
// 0	1	2	3	4	5	6	7	8	9
// generate from:
// 0	1	2	3	4	5	6	7	8	9
// 10	11	12	13	14	15	16	17	18	19
// 20	21	22	23	24	25	26	27	28	29
// 30	31	32	33	34	35	36	37	38	39
