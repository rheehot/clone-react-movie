if ( process.env.NODE_ENV === 'production' ) {
    module.exports = require( './prod' );// 프로덕션
} else {
    module.exports = require( './dev' ); // 로컬 개발
}