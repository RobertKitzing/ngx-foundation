import { formatDate } from '../chronos/format';
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format, locale) {
        return formatDate(date, format, locale);
    };
    return DateFormatter;
}());
export { DateFormatter };
