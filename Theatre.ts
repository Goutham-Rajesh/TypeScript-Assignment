class Theatre{
    name: String;
    seat: Boolean[];

    constructor(name: String, seatnumber: number){
        this.name =name;
        this.seat = new Array(seatnumber).fill(true);
    }

    bookticket(noseat:number) : void {

        if (this.seat[noseat - 1]) {
            this.seat[noseat - 1] = false;
            console.log(`Seat ${noseat} booked successfully.`);
        } else {
            console.log(`Seat ${noseat} is already booked.`);
        }
    }

    cancelticket(seatno: number) : void{
        if(this.seat[seatno-1]){
            console.log(`seat ${seatno} cancellation failed `);
        }
        else{
            this.seat[seatno-1]=true;
            console.log(`Seat ${seatno} cancelled successfully`)
        }
    }

    availableseats(): number[]{
        let availableseats: number[] = [];
        for(let i=0;i<this.seat.length;i++){
            if(this.seat[i]){
                availableseats.push(i+1);
            }
        }
        return availableseats
    }    

}

const mytheatre = new Theatre("mytheatre",10);

mytheatre.bookticket(1);
mytheatre.bookticket(2);
mytheatre.cancelticket(1);
mytheatre.bookticket(1);
console.log(mytheatre.availableseats());


