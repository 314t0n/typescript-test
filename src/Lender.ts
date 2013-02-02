/// <reference path='Bicycle.ts'/>
module Office{
	'use strict';
	export class Lender{

		private _size: number;
		private _list: any[];

		constructor(size: number){

			this._size = size;
			this._list = [];

		}

		public addBicycle(b: Materials.Bicycle) : bool {

			if ( this._list.length < this._size ){

				this._list.push(b);

				this._size++;

				return true;

			}else{

				return false;

			}

		}

		public rentBicycle(customer: string, color: string) : bool {

			if ( this._size > 0 ){

				var bike = this._getIndexOfBicycleByColor(color);

				if ( bike >= 0 ){
					
					return this._setRent(customer,bike);;

				}else{

					return false;

				}

			}else{

				return false;

			}

		}

		private _setRent(customer: string, bike: number) : bool {

			return this._list[bike].reserve(customer);

		}

		private _getIndexOfBicycleByColor(color: string) : number {

			var bike = -1;
			var i = 0;
			var notFound = true;

			while (i < this._list.length && notFound ){

				if ( this._list[i].getColor() === color && this._list[i].isFree() ){

					bike = i;

				}

				i++;

			}

			return bike;

		}

		public takeBicycle(customer: string) : bool {

			if ( this._size > 0 ){

				var bike = this._getIndexOfBicycleByCustomer( customer );

				if ( bike >= 0 ){

					this._setBack(bike);

					return true;

				}else{

					return false;

				}

			}else{

				return false;
			}		

		}

		private _getIndexOfBicycleByCustomer(customer: string) : number {

			var bike = -1;
			var i = 0;
			var notFound = true;

			while (i < this._list.length && notFound ){

				if ( this._list[i].getCustomer() === customer ){

					bike = i;

					notFound = false;

				}

				i++;

			}

			return bike;

		}

		private _setBack(indexOfBicylce: number) : void {

			this._list[indexOfBicylce].takeBack();

		}

		public numberOfFreeBicycles() : number {

			var number = 0;

			for ( var i = 0; i < this._list.length; i++){

				if ( this._list[i].isFree() === true ){

					number++;
					
				}

			}

			return number;

		}

		public toString() : string {

			return this._list.join(',');

		} 

	}

}