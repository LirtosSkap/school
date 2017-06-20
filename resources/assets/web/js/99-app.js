/**
 * Created by Creo on 19.05.2017.
 */

$artdiller = $('body');

$.fn.extend({
    animateShow: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).css("opacity", "1");
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.extend({
    animateHide: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).css("opacity", "0");
            $(this).removeClass('visible animated ' + animationName);
        });
    }
});

$.fn.extend({
    animateToggle: function (animationNameIn, animationNameOut) {
        console.log($(this));
        if ($(this).hasClass('hidden')) {
            $(this).animateShow(animationNameIn);
        }
        else {
            $(this).animateHide(animationNameOut);
        }
    }
});


$('.stylish input').click(function () {
    $(this).closest('div').find('select').slideToggle(110);
});

$('.stylish select').click(function () {
    $(this).hide().closest('div').find('input').val($(this).find('option:selected').text());
});

var optionsSelect2 = {
    dropdownCssClass: 'no-search',
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true,
    width: 'auto'
};

$('select').select2(optionsSelect2);


$('.product-overview').click(function () {
    var $id = $(this).data('target');
    $artdiller.trigger({ type: "product-overview", action: 'show', uid : $id});
});

$('.close-product-overview').click(function() {
    $artdiller.trigger({ type: "product-overview", action: 'hide'});
});

$('.menu-sandwich').click(function(){
    $artdiller.trigger({ type: "menu-sandwich"});
});

/*
    Product section functionality
 */
$(document).ready(function () {

    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');

    /* PRODUCT section */

    var $productNavigation = $('#card-menu');
    var $productMainFrame = $('#card-view');
    var $imageContainer = $('#product-image');
    
    $artdiller.on('product-overview', function (event) {
          if(event.action == 'show') {
              displayProductSection(event.uid);
          }

        if(event.action == 'hide') {
             hideProductSection()
        }
    });
    
    function hideProductSection() {
        $productNavigation.velocity('transition.bounceLeftOut');
        $productMainFrame.velocity('transition.bounceRightOut');
    }
    
    function displayProductSection(uid) {
        console.log(uid);
        $productCard = $('#product-'+uid);
        $imageUrl = $productCard.find('.pic-image').attr('src');
        $imageContainer.attr('src',$imageUrl);
        $productNavigation.velocity('transition.bounceLeftIn');
        $productMainFrame.velocity('transition.bounceRightIn');
    }

    /* end PRODUCT section */

    /* MENU section */

    var $menuSection = $('.menu-section');
    var $menuSandwich = $('.menu-sandwich');
    $artdiller.on('menu-sandwich', function () {
        $('.slide-burger-menu').toggleClass('active');
        $('.burger-menu').toggleClass('active');

        var opened = $menuSandwich.data('opened');
        if(opened){
            closeMenuSection();
        }else{
            openMenuSection();
        }
        $menuSandwich.find('.menu-trigger').toggleClass('active');

    });

    $(document).click(function(event) {
        bindCloseMenuSection();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27){ //click ESC key
            if($('.menu-trigger').hasClass('active'))
                bindCloseMenuSection();
            else
                $('.close-product-overview').click();
        }
    });

    function bindCloseMenuSection(){
        if(!$(event.target).closest('.menu-section').length&&!$(event.target).closest('.menu-sandwich').length&&$('.menu-trigger').hasClass('active')) {
            $('.slide-burger-menu').toggleClass('active');
            $('.burger-menu').toggleClass('active');
            closeMenuSection();
            $menuSandwich.find('.menu-trigger').toggleClass('active');
        }
    }

    function openMenuSection(){
        $menuSection.velocity('transition.bounceRightIn');
        $menuSandwich.data('opened',1);
        if(!$('.settings-block').length){
            $('.wrapper').addClass('tint-overlay');
        }
        $('#home-page').addClass('tint-overlay');
        $('#sub-nav-section').addClass('tint-overlay');
        $('.sub-menu-navigation').animateShow('fadeInRight');
    }

    function closeMenuSection(){
        $menuSection.velocity('transition.bounceRightOut');
        $menuSandwich.data('opened',0);
        if ($menuSandwich.find('.menu-trigger').hasClass('active')) {
            $('.wrapper').removeClass('tint-overlay');
            $('#home-page').removeClass('tint-overlay');
            $('#sub-nav-section').removeClass('tint-overlay');
            $('.sub-menu-navigation').animateHide('fadeOutRight');
        }
    }

    /* end MENU section */

    /* Color Filter */
    if($('.color-palette-li').length){
        $(document).click(function(event) {
            if(!$(event.target).closest('.color-palette-li').length) {
                $('.color-palette-li').removeClass('m-filter-change');
            }
        });

        $('.color-palette-li').on('click',function(e){
            if (e.target !== this&&(!$(e.target).hasClass('mf-name')&&!$(e.target).hasClass('mf-dot')))
                return;
            if (!$(this).hasClass('m-filter-change')) {
                $('.m-filter-item').removeClass('m-filter-change');
            }
            $(this).toggleClass('m-filter-change');
        });

        $('.mf-color-box').on('click',function(){
            $('.mf-color-box').removeClass('mf-color-change');
            $(this).addClass('mf-color-change');
            $(".cielch-demo").trigger("colorpickersliders.updateColor", $(this).css('background-color'));
        })
    }

    if($(".cielch-demo").length){
        $(".cielch-demo").ColorPickerSliders({
            flat: true,
            color: "#fff",
            connectedinput: '.full-color-input',
            order: {
                hsl: 1
            },onchange: function(container, color) {
                if($('.mf-color-item').hasClass('m-filter-change'))
                    $('.mf-color-item').addClass('mf-active');
                $(".cp-marker").css("background-color", color.tiny.toRgbString());
                //console.log($('.hsl-color').val());
                //update_filter_params();
            }
        });
        $('.cp-hsllightness span').text('');
    }

    /* end Color Filter */


    /* CROPPER */

    var cropper;
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                if(cropper)
                    cropper.destroy();

                $(input).val(null); // clear input val for change same file

                $('#cropp').attr('src', e.target.result);
                $('.image-cropper').show();
                var image = document.getElementById('cropp');
                cropper = new Cropper(image, {
                    aspectRatio: 1 / 1,
                    viewMode: 2,
                    /*preview: '.avatar-preview',
                    crop: function(e) {
                        //start_img_cropp(cropper);
                    },*/
                    cropend: function(){
                        startCroppingImage(cropper);
                    }
                });
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function startCroppingImage(cropper){
        var myimg = cropper.getCroppedCanvas({width:960,height:960});
        var b64data = myimg.toDataURL('image/jpeg');
        $('.img-res').val(b64data);
    }

    if($('#avatar-preview').length){
        $("#img-change-file").change(function(){
            readURL(this);
        });

        $('.add-avatar').on('click',function(){
            $("#img-change-file").click();
        });

        $('.btn-cancel-crop').on('click',function(){
            $('.img-res').val('');
            $('.image-cropper').hide();
        });

        $('.btn-save-crop').on('click',function(){
            startCroppingImage(cropper);
            $('#avatar-preview').attr('src',$('.img-res').val());
            $('.image-cropper').hide();
            saveCroppedImage();
        });
    }

    function saveCroppedImage(){
        var imageBase64 = $('.img-res').val();
        $.ajax({
            url: '/settings/profile/avatar',
            type: 'POST',
            data: {_token: CSRF_TOKEN, avatar_base64: imageBase64},
            dataType: 'JSON',
            success: function (data) {
                $('.img-res').val('');
                console.log($('.img-res').val());
            },
            error:function(){

            }
        });
    }


    /* end CROPPER */

    /* SETTINGS page*/

    $('.change-password').on('click', function () {
        $(this).parent().parent().hide();
        $('.password-block').show();
    });

    /* end SETTINGS page*/

    /* REGISTER page */
    $('.form-user-info input').on('input',function(){
        if($(this).attr('name')=='name'||$(this).attr('name')=='surname'||$(this).attr('name')=='pseudonym')
            generateUserNicknames();
    });

    if($('.nicknames ').length){
        generateUserNicknames();
    }

    function generateUserNicknames(){
        var params = [];
        var options = '<option value=""></option>';
        $('.form-user-info input').each(function(){
            if($(this).attr('name')=='name'||$(this).attr('name')=='surname'||$(this).attr('name')=='pseudonym')
                params.push($(this).val());
        });
        var cases = allPossibleCases(params,1);
        var issetOptions = [];
        var changedText = '';
        if($('.nicknames').data('changed')){
            changedText = $('.nicknames').data('changed');
        }
        $.each(cases,function(i,v){
            optionName = '';
            $.each(v,function(i,v){
                if(v!==''){
                    optionName += v + ' ';
                }
            });
            if(optionName!=''&&issetOptions[optionName]==undefined){
                issetOptions[optionName] = 1;
                changeString = '';
                if(changedText==optionName.trim()){
                    changeString = 'selected';
                }
                options += '<option value="'+optionName+'" '+ changeString +'>'+optionName+'</option>';
            }

        });
        $('.nicknames').html(options).select2("destroy").select2(optionsSelect2);


    }

    /**
     * Sort out possible combinations of array
     *
     * @param a - array
     * @param min - min combination count
     * @returns {Array}
     */
    function allPossibleCases(a,min) {
        var fn = function(n, src, got, all) {
            if (n == 0) {
                if (got.length > 0) {
                    all[all.length] = got;
                }
                return;
            }
            for (var j = 0; j < src.length; j++) {
                fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
            }
            return;
        }
        var all = [];
        for (var i = min; i < a.length; i++) {
            fn(i, a, [], all);
        }
        all.push(a);
        return all;

    }

    /* emd REGISTER page */


    /*
     Ajax Functionality for all forms with modal class
     */
    $(document).ready(function () {
        $('.modal-form').on('submit', function (e) {
            e.preventDefault(e);
            var $form = $(this).closest('form');
            var $modal = $(this).closest('.modal');
            var $formActionURL = $form.attr('action');
            var $errorBlock = $form.find('.error-block');
            var $token = $(this).closest('input[name="_token"]').val();
            var $successAction = $(this).attr('data-success-modal');
            var $successModal = $('#'+$(this).attr('data-success-modal'));
            $form.find('.form-error-message').hide().html('');
            $.ajax({
                type: "POST",
                url: $formActionURL,
                headers: {'X-CSRF-Token': $token},
                data: $form.serialize(),
                cache: false,
                success: function (resp) {
                    if (resp.status == 'error') {
                        $errorBlock.html(resp.responseJSON.message);
                        $modal.velocity("callout.shake");
                    }
                    else if (resp.status == 'success') {
                        if(resp.redirect!=undefined&&resp.redirect!=0){
                            window.location.href = resp.redirect;
                            return;
                        }

                        if($form.hasClass('simple-registration')) {
                            analyticsTrigger('signup','registration success','simple-signup')
                        }

                        if($successAction == 'redirectToDashboard') {
                            //console.log('redirect');
                            //window.location.href = '/dashboard';
                            return;
                        }

                        window.location.reload();
                        $errorBlock.html('');
                        closeAndOpenModal($modal,$successModal);
                    }
                    if($successAction == 'redirectHome'){
                        window.location.href = '/';
                        return;
                    }
                    $modal.modal('hide');
                },
                error: function (resp) {
                    $.each(resp.responseJSON,function(i,v){
                        console.log(i);
                        console.log(v);
                        messageText = '';
                        if($.isArray(v))
                            messageText = v[0];
                        else
                            messageText = v;

                        $form.find('.form-error-message[data-field="'+i+'"]').html(messageText).show();
                    });
                    console.log(resp.responseJSON);
                    if($form.hasClass('simple-registration')) {
                        analyticsTrigger('signup','validation error','simple-signup')
                    }


                    if($successAction == 'redirectHome'){
                        window.location.href = '/';
                        return;
                    }

                    //$errorBlock.html(resp.responseJSON.message);
                    //console.log($errorBlock);
                    $modal.velocity("callout.shake");


                }
            });


            function closeAndOpenModal($closeModal,$openModal) {
                $closeModal.on('hidden.bs.modal', function (e) {
                    //console.log('hideTrigger');
                    $openModal.modal('show');
                    $(this).off('hidden.bs.modal');
                });
                $closeModal.modal('hide');
            }
        });
    });

    /*
     END Ajax Functionality for all forms with modal class
     */


    if(window.location.href.indexOf('#login-modal') != -1) {
        $('#login-modal').modal('show');
    }
    if(window.location.href.indexOf('#reset-modal') != -1) {
        $('#reset-modal').modal('show');
    }

    $('.checked-btn').on('click',function(){
        $('.checked-btn[data-type="'+$(this).data('type')+'"]').removeClass('active');
        $(this).addClass('active');
        $('input[name="'+$(this).data('type')+'"]').val($(this).data('val'));

    });

    $('.multi-checked-btn').on('click',function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('form').find('input[data-name="materials"]')
        }
    });



    $('.add-preview').on('click',function(){
        $("#img-change-preview").click();
    });

    $("#img-change-preview").change(function(){
        readURLlive(this);
    });

    function readURLlive(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                $('#avatar-preview').attr('src', e.target.result);
                $('#avatar-preview').parent().removeClass('hidden');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }



    $('.add-original').on('click',function(){
        $("#img-change-original-file").click();
    });

    $("#img-change-original-file").change(function(){
        readURLFileOriginal(this);
    });

    var fileOriginalTypes = ['jpg', 'png', 'pdf', 'ai', 'eps'];

    function readURLFileOriginal(input) {
        if (input.files && input.files[0]) {

            var extension = input.files[0].name.split('.').pop().toLowerCase(),  //file extension from input file
                isSuccess = fileOriginalTypes.indexOf(extension) > -1;  //is extension in acceptable types

            if (isSuccess) { //yes
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.original-files').html('<div>.'+extension+'</div>');
                    bindRemoveOriginalFiles();
                }

                reader.readAsDataURL(input.files[0]);
            }
            else { //no
                alert('Файл выбранного типа не поддерживается');
            }



        }
    }

    bindRemoveOriginalFiles();


    function bindRemoveOriginalFiles(){
        $('.original-files>div').unbind('click').on('click',function(){
           if(confirm('Удалить этот файл?')){
               $(this).remove();
               $("#img-change-original-file").val(null);
           }
        });
    }

    var data = [{ id: 'Природа', text: 'Природа' }, { id: 'Человек', text: 'Человек' }, { id: 'Транспорт', text: 'Транспорт' }];


    $('.tags-select').select2('destroy').select2({
        tags: true,
        tokenSeparators: [','],
        data: data
    });


    /**
     * Add checked materials to form inputs
     */
    $('.form-item-create').on('submit',function(){
        var form = $(this);
        $('.multi-checked-btn[data-type="materials"]').each(function(){
            if($(this).hasClass('active')){
                $(form).append($("<input>")
                    .attr("type", "hidden")
                    .attr("name", "material[]").val($(this).text()));
            }
        });
    });




});