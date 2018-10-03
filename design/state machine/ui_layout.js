// problem faced in implementing ui
// when multiple toggle buttons are clicked, ui changes according
// how to handle each case? say btn1 and btn2 are pressed, but btn3 is not

const pageList = $('div[data-pcc-pagelist]');
const imageList = $('div[data-pcc-toggle-id="dialog-image-list"]');
const layerList = $('div[data-pcc-toggle-id="dialog-annotation-layer-review"]');
const thumbnails = $('div[data-pcc-toggle-id="dialog-thumbnails"]');
const affectedBtns = [$('button[title="Annotation Layers"]'), $('button[title="Image Stamp Annotation"]'), $('button[title="Thumbnails"]')];

$(imageList).css({
    right: 0
});

affectedBtns.forEach(btn => {
    btn.click(function () {
        const state = `${~~layerList.hasClass('pcc-open')}${~~imageList.hasClass('pcc-open')}${~~thumbnails.hasClass('pcc-open')}`;
        const pageListCss = {}, thumbnailsCss = {};

        // debug: console.log(state);

        // state = (anotation layer button is clicked,
        //          image stamp annotation is clicked,
        //          view thumbnails is clicked)

        // checked with all cases 000, 001, 010, 011, 100, 101
        switch (state) {
            case '000':
            case '101':
                pageListCss['padding-left'] = '';
                pageListCss['padding-right'] = '0px';
                thumbnailsCss['margin-left'] = '';
                break;
            case '010':
                pageListCss['padding-left'] = '0px';
                pageListCss['padding-right'] = '320px';
                thumbnailsCss['margin-left'] = '';
                break;
            case '011':
                pageListCss['padding-left'] = '320px';
                pageListCss['padding-right'] = '320px';
                thumbnailsCss['margin-left'] = '0px';
                break;
            default:
                pageListCss['padding-left'] = '320px';
                pageListCss['padding-right'] = '0px';
                thumbnailsCss['margin-left'] = '0px';
                break;
        }

        pageList.css(pageListCss);
        thumbnails.css(thumbnailsCss)
    });
});