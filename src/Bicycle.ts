module Materials{
	'use strict';
	export class Bicycle{

		public static RED: string = 'red';
		public static GREEN: string = 'green';
		public static YELLOW: string = 'yellow';

		private static SERIAL = 0;

		private _free: bool;
		private _customer: string;
		private _color: string;
		private _serial: number;

		constructor(c: string){

			this._color = c;

			this._free = true;

			this._serial = Materials.Bicycle.SERIAL++; 

		}

		public reserve(customer: string) : bool {

			if ( this._free ){

				this._setReservation( customer );

				return true;

			}else{

				return false;

			}		

		}

		private _setReservation(customer: string) : void {

			this._customer = customer;

			this._free = false;

		}

		public takeBack() : bool {

			if ( this._free ){
				
				return false;

			}else{

				this._removeReservation();

				return true;

			}

		}

		private _removeReservation() : void {

			this._customer = undefined;

			this._free = true;

		}

		public isFree() : bool {

			return this._free;

		}

		public getColor() : string {

			return this._color;

		}

		public getCustomer() : string {

			return this._customer;

		}

		public toString() : string {

			return this._free ? 'This bike is free: ' + this._color + ' ' + this._serial + '!' : 'The '+ this._color + ' ' + this._serial +' bike lended by ' + this._customer + '!';

		}

	}

}