/**
 * Created by Johannes Rudolph on 09.12.2016.
 *
 * Based On:
 * Implementation to calculate the CRC value for a given string / string of bytes.
 * Sunshine, May 2k15
 * www.sunshine2k.de || www.bastian-molkenthin.de
 */


var Crc = function (options) {
    this.initialize (options);
};

Crc.prototype = {

    version: "{{ VERSION }}",

    initialize: function (options) {
        this._width = options.width;
        this._polynomial = options.polynomial;
        this._initialVal = options.initial;
        this._finalXorVal = options.finalXor;
        this._inputReflected = options.inputReflected;
        this._resultReflected = options.resultReflected;

        switch (this._width)
        {
            case 8: this._castMask = 0xFF; break;
            case 16: this._castMask = 0xFFFF; break;
            case 32: this._castMask = 0xFFFFFFFF; break;
            default: throw "Invalid CRC width";
        }

        this._msbMask = 0x01 << (this._width - 1);

        this.calcCrcTable();
    },

    calcCrcTable: function(){
        this._crcTable = new Array(256);

        for (var divident = 0; divident < 256; divident++)
        {
            var currByte = (divident << (this._width - 8)) & this._castMask;
            for (var bit = 0; bit < 8; bit++)
            {
                if ((currByte & this._msbMask) !== 0)
                {
                    currByte <<= 1;
                    currByte ^= this._polynomial;
                }
                else
                {
                    currByte <<= 1;
                }
            }
            this._crcTable[divident] = (currByte & this._castMask);

        }
    },

    calcCrcTableReversed : function ()
    {
        this._crcTable = new Array(256);

        for (var divident = 0; divident < 256; divident++)
        {
            var reflectedDivident = new CrcUtil().Reflect8(divident);

            var currByte = (reflectedDivident << (this._width - 8)) & this._castMask;

            for (var bit = 0; bit < 8; bit++)
            {
                if ((currByte & this._msbMask) !== 0)
                {
                    currByte <<= 1;
                    currByte ^= this._polynomial;
                }
                else
                {
                    currByte <<= 1;
                }
            }

            currByte = new CrcUtil().ReflectGeneric(currByte, this._width);

            this._crcTable[divident] = (currByte & this._castMask);
        }
    },

    compute : function (bytes)
    {
        var crc = this._initialVal;
        for (var i = 0; i < bytes.length; i++)
        {

            var curByte = bytes[i] & 0xFF;

            if (this._inputReflected)
            {
                curByte = new CrcUtil().Reflect8(curByte);
            }

            /* update the MSB of crc value with next input byte */
            crc = (crc ^ (curByte << (this._width - 8))) & this._castMask;
            /* this MSB byte value is the index into the lookup table */
            var pos = (crc >> (this._width - 8)) & 0xFF;
            /* shift out this index */
            crc = (crc << 8) & this._castMask;
            /* XOR-in remainder from lookup table using the calculated index */
            crc = (crc ^ this._crcTable[pos]) & this._castMask;
        }

        if (this._resultReflected)
        {
            crc = new CrcUtil().ReflectGeneric(crc, this._width);
        }
        return ((crc ^ this._finalXorVal) & this._castMask);
    }
};

exports.Crc = Crc;