// https://leetcode.com/problems/find-duplicate-file-in-system/description/
// should use md5 hash on file as key
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const wordMap = new Map();
    
    let fileList, fileFolder, fileName, fileContent;
    for (const path of paths) {
        fileList = path.split(/[ ()]/).filter(f => f.length > 0); // file size ganrantees > 0
        
        fileFolder = fileList[0];
        for (let i = 1; i < fileList.length; i += 2) {
            fileName = fileList[i];
            fileContent = fileList[i + 1];
            if (!wordMap.has(fileContent)) {
                wordMap.set(fileContent, [`${fileFolder}/${fileName}`]);
            } else {
                wordMap.get(fileContent).push(`${fileFolder}/${fileName}`);
            }
        }
    }
    
    const res = [];
    for (const [k, v] of wordMap.entries()) {
        if (v.length >= 2) {
            res.push(v);   
        }
    }
    return res;
};