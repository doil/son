var photoGallery = function(){
    var photo = '.photo_img',
        photoList = $(photo),
        current_idx,
        layer = '#photo_gall',
        imgWrap = '#imgWrap',
        photoSrc,
        btnPrev = '#photo_gall .prev',
        btnNext= '#photo_gall .next',
        btnClose = '#photo_gall .close',
        imgSize = photoList.length;

    $(photo).click(function(){
        current_idx = $(photo).index($(this));
        ImgLoad();
    });

    $(btnNext).click(function(){
        if( current_idx === imgSize ) {
            current_idx = 0;
        } else {
            current_idx++;
        }
        ImgLoad()
    });

    $(btnPrev).click(function(){
        if( current_idx === 0 ) {
            current_idx = (imgSize-1);
        } else {
            current_idx--;
        }
        ImgLoad()
    });

    $(btnClose).click(function(){
        $(layer).fadeOut(200);
    });

    function ImgLoad(){
        photoSrc = photoList[current_idx].src.replace('/thumnail/','/thumnail2/');
        $(imgWrap).html('<div class="img"><img src="'+ photoSrc +'" alt="" /></div>');
        $(layer).fadeIn(200);
    }
};
jQuery(document).ready(function(){
    photoGallery();
});