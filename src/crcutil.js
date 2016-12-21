/**
 * Created by Johannes Rudolph on 09.12.2016.
 */

var CrcUtil = function ()
{
    /* singleton */
    if (CrcUtil.prototype._singletonInstance)
    {
        return CrcUtil.prototype._singletonInstance;
    }
    CrcUtil.prototype._singletonInstance = this;

    this.Reflect8 = function(val)
    {
        var resByte = 0;

        for (var i = 0; i < 8; i++)
        {
            if ((val & (1 << i)) !== 0)
            {
                resByte |= ( (1 << (7 - i)) & 0xFF);
            }
        }

        return resByte;
    };

    this.Reflect16 = function (val)
    {
        var resByte = 0;

        for (var i = 0; i < 16; i++)
        {
            if ((val & (1 << i)) !== 0)
            {
                resByte |= ((1 << (15 - i)) & 0xFFFF);
            }
        }

        return resByte;
    };

    this.Reflect32 = function (val)
    {
        var resByte = 0;

        for (var i = 0; i < 32; i++)
        {
            if ((val & (1 << i)) !== 0)
            {
                resByte |= ((1 << (31 - i)) & 0xFFFFFFFF);
            }
        }

        return resByte;
    };

    this.ReflectGeneric = function (val, width)
    {
        var resByte = 0;

        for (var i = 0; i < width; i++)
        {
            if ((val & (1 << i)) !== 0)
            {
                resByte |= (1 << ((width-1) - i));
            }
        }

        return resByte;
    };
};
