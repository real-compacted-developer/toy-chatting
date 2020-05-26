const { check, validationResult } = require('express-validator');
const middleware = {
    // 방 번호는 숫자 4자리로 구분합니다.
    isRoomNumberValid: async (req, res, next) => {
        await check('roomNumber')
            .isNumeric()
            .isLength(4)
        if(validationResult(req).isEmpty()) {
            res.json({
                isSuccess: false,
                message : '방 번호가 유효하지 않습니다.'
            });
            return;
        }
        next();
    },
    // 닉네임에 특수문자 금지
    // 닉네임에 특정한 특수문자는 막아야합니다. (SQL Injection, HTML Injection 방지)
    // 닉네임은 4~6자리의 영어 대소문자로 제한합니다.
    isNickNameValid: async (req,res,next) => {
        await check('nickname')
            .isAlpha()
            .isLength({min : 4, max : 6})
        if(validationResult(req).isEmpty()) {
            res.json({
                isSuccess: false,
                message : '닉네임이 유효하지 않습니다.'
            });
            return;
        }
        next();
    },
    // 방 번호에 있는 사람들 끼리만 채팅이 가능합니다.
    // 사용자가 닉네임을 설정하고 들어갈 수 있습니다.
    // 동일한 닉네임이 방에 존재하는경우 경고를 띄웁니다.
    duplicateCheck: (req, res, next) => {
        if(c.has({roomNumber : 'roomNumber', nickname:'nickname'})){
            res.json({
                isSuccess:false,
                meesage: '방에 이미 있는 닉네임입니다.'
            });
            return;
        }
        next();
    }



}