var Theatre = /** @class */ (function () {
    function Theatre(name, seatnumber) {
        this.name = name;
        this.seat = new Array(seatnumber).fill(true);
    }
    Theatre.prototype.bookticket = function (noseat) {
        if (this.seat[noseat - 1]) {
            this.seat[noseat - 1] = false;
            console.log("Seat ".concat(noseat, " booked successfully."));
        }
        else {
            console.log("Seat ".concat(noseat, " is already booked."));
        }
    };
    Theatre.prototype.cancelticket = function (seatno) {
        if (this.seat[seatno - 1]) {
            console.log("seat ".concat(seatno, " cancellation failed "));
        }
        else {
            this.seat[seatno - 1] = true;
            console.log("Seat ".concat(seatno, " cancelled successfully"));
        }
    };
    Theatre.prototype.availableseats = function () {
        var availableseats = [];
        for (var i = 0; i < this.seat.length; i++) {
            if (this.seat[i]) {
                availableseats.push(i + 1);
            }
        }
        return availableseats;
    };
    return Theatre;
}());
var mytheatre = new Theatre("mytheatre", 10);
mytheatre.bookticket(1);
mytheatre.bookticket(2);
mytheatre.cancelticket(1);
mytheatre.bookticket(1);
console.log(mytheatre.availableseats());
