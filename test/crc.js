/**
 * Created by op49265 on 20.12.2016.
 */

var assert = require('chai').assert;
var CRC = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../dist/') + 'crc-js').Crc;
var CrcDatabase = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../dist/') + 'crc-js').CrcDatabase;

describe('CRC', function () {
    describe('test init', function () {
        it('should test the initialize with options',function () {
            //Setup
            var width = 16;
            var polynomial = 0x1021;
            var initial = 0xFFFF;
            var finalXor = 0xFFFF;
            var inputReflected = false;
            var resultReflected = false;

            //Execution
            var crc = new CRC({width: width, polynomial: polynomial, initial: initial, finalXor : finalXor, inputReflected: inputReflected, resultReflected : resultReflected });

            //Result
            assert.equal(crc._width, width);
            assert.equal(crc._polynomial, polynomial);
            assert.equal(crc._initialVal, initial);
            assert.equal(crc._finalXorVal, finalXor);
            assert.equal(crc._inputReflected, inputReflected);
            assert.equal(crc._resultReflected, resultReflected);
        });
        it('should test the initialize with CRC Model',function () {
            //Setup
            var model = CrcDatabase.CRC8;

            //Execution
            var crc = new CRC(model);

            //Result
            assert.equal(crc._width, model.width);
            assert.equal(crc._polynomial, model.polynomial);
            assert.equal(crc._initialVal, model.initial);
            assert.equal(crc._finalXorVal, model.finalXor);
            assert.equal(crc._inputReflected, model.inputReflected);
            assert.equal(crc._resultReflected, model.resultReflected);
        });
    });
    describe('test calculation', function () {
        it('should claculated correctly with options',function () {
            //Setup
            var width = 16;
            var polynomial = 0x1021;
            var initial = 0xFFFF;
            var finalXor = 0xFFFF;
            var inputReflected = false;
            var resultReflected = false;
            var crc = new CRC({width: width, polynomial: polynomial, initial: initial, finalXor : finalXor, inputReflected: inputReflected, resultReflected : resultReflected });
            var input = [0,1,0,1,0,1];
            var expected = 31919;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result, expected);
        });
    });
    describe('test CRC8 Models', function () {
        it('CRC8',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 241;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_8H2F',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_8H2F);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 82;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_CDMA2000',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_CDMA2000);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 59;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_DARC',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_DARC);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 228;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_DVB_S2',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_DVB_S2);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 254;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_EBU',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_EBU);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 161;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_ICODE',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_ICODE);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 153;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_ITU',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_ITU);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 164;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_MAXIM',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_MAXIM);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 121;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_ROHC',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_ROHC);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 133;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_SAE_J1850',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_SAE_J1850);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 129;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_SAE_J1850_ZERO',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_SAE_J1850_ZERO);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 127;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC8_WCDMA',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC8_WCDMA);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 206;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
    });
    describe('test CRC16 Models', function () {
        it('CRC16_A',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_A);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 3042;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_ARC',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_ARC);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 52437;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_AUG_CCITT',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_AUG_CCITT);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 54453;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_BUYPASS',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_BUYPASS);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 34871;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_CCIT_ZERO',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_CCIT_ZERO);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 20556;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_CCITT_FALSE',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_CCITT_FALSE);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 45429;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_CDMA2000',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_CDMA2000);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 27698;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_DDS_110',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_DDS_110);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 44663;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_DECT_R',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_DECT_R);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 59419;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_DECT_X',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_DECT_X);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 59418;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_DNP',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_DNP);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 32064;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_EN_13757',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_EN_13757);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 16894;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_GENIBUS',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_GENIBUS);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 20106;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_KERMIT',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_KERMIT);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 17688;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_MAXIM',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_MAXIM);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 13098;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_MCRF4XX',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_MCRF4XX);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 55711;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_MODBUS',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_MODBUS);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 52133;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_RIELLO',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_RIELLO);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 35358;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_T10_DIF',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_T10_DIF);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 1792;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_TELEDISK',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_TELEDISK);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 37330;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_TMS37157',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_TMS37157);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 63700;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_USB',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_USB);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 13402;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_X_25',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_X_25);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 9824;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC16_XMODEM',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC16_XMODEM);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 20556;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
    });
    describe('test CRC32 Models', function () {
        it('CRC32',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 1300157546;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_BZIP2',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_BZIP2);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 125747607;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_C',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_C);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 1578115905;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_D',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_D);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = -1574345975;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_JAMCRC',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_JAMCRC);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = -1300157547;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_MPEG2',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_MPEG2);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = -125747608;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_POSIX',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_POSIX);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = -1768460369;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_Q',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_Q);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 1261510168;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
        it('CRC32_XFER',function () {
            //Setup
            var crc = new CRC(CrcDatabase.CRC32_XFER);
            var input = [0,2,4,6,8,16,32,64,128,256];
            var expected = 69041669;
            var result = false;

            //Execution
            result = crc.compute(input);

            //Result
            assert.equal(result,expected);
        });
    });
});