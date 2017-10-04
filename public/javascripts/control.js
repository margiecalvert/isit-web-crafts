define(['makeHtml', 'makeImage'], function(makeHtml, makeImage) {

    'use strict';

    function SiteConfig() {
        $('#makeHtml').click(makeHtml.init);
        $('#makeImage').click(makeImage.init);
    }

    return SiteConfig;
});
