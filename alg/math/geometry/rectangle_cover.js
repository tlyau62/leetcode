/**
 * Return true if trangle B (x1, y1, x2, y2) is covered by trangle A (x1, y1, x2, y2)
 * - (x1, y1, x2, y2): (x1, y1) top left coord, (x2, y2) bot right coord
 * - where x1 <= x2, y1 <= y2 and x1, y1, x2, y2 are non-negative
 * - influenced by 863_rectangle_overlap.js
 */
// main
(function () {
    const A = buildRectangle(10, 10, 50, 50),
        B = buildRectangle(20, 20, 40, 40);

    console.log(isCovered(A, B));

    function isCovered(a, b) {
        return a.x1 <= b.x1 &&
            b.x2 <= a.x2 &&
            a.y1 <= b.y1 &&
            b.y2 <= a.y2;

        // return (a.x1 <= b.x1 && b.x1 <= a.x2) &&
        //     (a.x1 <= b.x2 && b.x2 <= a.x2) &&
        //     (a.y1 <= b.y1 && b.y1 <= a.y2) &&
        //     (a.y1 <= b.y2 && b.y2 <= a.y2);
    }

    function buildRectangle(x1, y1, x2, y2) {
        return { x1, y1, x2, y2 };
    }
})();

// example
(function () {
    let startCoord, endCoord;
    let deselectAllMarks = control.deselectAllMarks;
    let editMarksTriggered = false;

    control.on('MouseToolChanged', function (event) {
        if (event.mouseToolName === "AccusoftEditMarks") {
            editMarksTriggered = true;

            control.deselectAllMarks = function () { };

            $('#viewer1')
                .on('mousedown.EditMarks', mousedown)
                .on('mouseup.EditMarks', mouseup);
        } else if (editMarksTriggered) {
            editMarksTriggered = false;

            control.deselectAllMarks = deselectAllMarks;

            $('#viewer1')
                .off('mousedown.EditMarks')
                .off('mouseup.EditMarks');
        }

        function mousedown(evt) {
            startCoord = { x: evt.clientX, y: evt.clientY };
        }

        function mouseup(evt) {
            let userRect;

            endCoord = { x: evt.clientX, y: evt.clientY };

            userRect = {
                x1: Math.min(startCoord.x, endCoord.x),
                y1: Math.min(startCoord.y, endCoord.y),
                x2: Math.max(startCoord.x, endCoord.x),
                y2: Math.max(startCoord.y, endCoord.y)
            };

            control.selectMarks(getSelectedMarks(userRect));
        }

        function getSelectedMarks(userRect) {
            const marks = control.getActiveMarkupLayer().getMarks();

            return marks.filter(function (mark) {
                if (!mark.getRectangle) {
                    // for marks have getRectangle, will implement the other type marks in the future
                    // delegate to the default selection mechanism
                    return false;
                }

                const pageNum = mark.getPageNumber();
                const bbox = mark.getRectangle();
                const markCoordTL = control.convertPageToWindowCoordinates(pageNum, { x: bbox.x, y: bbox.y });
                const markCoordBR = control.convertPageToWindowCoordinates(pageNum, { x: bbox.x + bbox.width, y: bbox.y + bbox.height });
                const markRect = {
                    x1: markCoordTL.clientX,
                    y1: markCoordTL.clientY,
                    x2: markCoordBR.clientX,
                    y2: markCoordBR.clientY
                };

                return userRect.x1 <= markRect.x1 &&
                    markRect.x2 <= userRect.x2 &&
                    userRect.y1 <= markRect.y1 &&
                    markRect.y2 <= userRect.y2;

                // return (userRect.x1 <= markRect.x1 && markRect.x1 <= userRect.x2) &&
                //     (userRect.x1 <= markRect.x2 && markRect.x2 <= userRect.x2) &&
                //     (userRect.y1 <= markRect.y1 && markRect.y1 <= userRect.y2) &&
                //     (userRect.y1 <= markRect.y2 && markRect.y2 <= userRect.y2);
            })
        }
    });
})();

