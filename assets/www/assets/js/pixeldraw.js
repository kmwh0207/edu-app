/**
 * 해당 파일명으로 js 파일을 로드한다.
 * @param jsName 파일명, 파일명, 파일명 과 같은 형태
 */
var PixelDraw = {
    /**
     * 로드된 스크립트
     */
    loaded: [],

    /**
     * 스크립트를 동적으로 로드한다.
     * 패러미터는 , 로 구분된 String 형태이며,
     * 각 파일은 pixeldraw.{1}.js 형태로 호출된다.
     */
    load: function() {
        var sc = $('script[src *= "assets/js/pixeldraw.js"]'); // pixeldraw.js 스크립트 Element 를 가져온다
        // 마지막 것부터 넣는다.
        var idx = arguments.length;
        while (idx-- > 0) {
            if ($.inArray(arguments[idx], this.loaded) == -1) { // 중복처리
                this.loaded.push(arguments[idx]);
                sc.after('<script type="text/javascript" src="assets/js/pixeldraw/' + arguments[idx] + '.js"></script>');
            }
        }
    }
}
