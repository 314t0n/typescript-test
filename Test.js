(function(){

	var tester = function( isSuccess , message ){

		var message = message || '';

		if ( isSuccess === true ){

			console.info( counter + '. testcase: Ok: ' + message );

		}else if ( isSuccess === false ){

			console.warn( counter + '. testcase: Failed: ' + message );

		}else{

			console.error( counter + '. testcase: Fatal Error: ' + message );

		}

		counter++;

	}

	var counter = 1;

	var redMerida = new Materials.Bicycle( Materials.Bicycle.RED );

	//let's test ..

	console.group('Bicycle test');

	tester( redMerida.isFree() , 'isFree,' );

	tester( redMerida.getColor() === Materials.Bicycle.RED , 'getColor (' + Materials.Bicycle.RED + ')' );

	tester( redMerida.getCustomer() !== 'fanyűvő', 'getCustomer (' + redMerida.getCustomer() + ')' );

	redMerida.reserve( 'fanyűvő' );	

	tester( redMerida.getCustomer() === 'fanyűvő', 'getCustomer (' + redMerida.getCustomer() + ')' );

	tester( redMerida.reserve( 'kőmorzsoló' ) === false, 'reserve (' + redMerida.isFree() + ')' );

	tester( redMerida.takeBack() === true, 'takeBack' );

	console.log( redMerida.toString() );

	console.groupEnd();

	counter = 1;

	var yellowMali = new Materials.Bicycle( Materials.Bicycle.YELLOW );

	var greenPorsche = new Materials.Bicycle( Materials.Bicycle.GREEN );

	var redTrek = new Materials.Bicycle( Materials.Bicycle.RED );

	var lender = new Office.Lender( 4 );

	console.group('Lender test');

	tester( lender.numberOfFreeBicycles() === 0 ,' size ' + lender.numberOfFreeBicycles() );

	lender.addBicycle( redMerida );
	lender.addBicycle( yellowMali );
	lender.addBicycle( greenPorsche );

	tester( lender.numberOfFreeBicycles() === 3 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	lender.addBicycle( redTrek );

	tester( lender.numberOfFreeBicycles() === 4 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	lender.rentBicycle( 'vasgyúró' , Materials.Bicycle.RED );

	lender.rentBicycle( 'fanyűvő' , Materials.Bicycle.RED );

	tester( lender.numberOfFreeBicycles() === 2 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	tester( lender.rentBicycle( 'fanyűvő' , Materials.Bicycle.RED ) === false ,' reserve (' + lender.rentBicycle( 'fanyűvő' , Materials.Bicycle.RED ) + ')' );

	lender.rentBicycle( 'árgyélus' , Materials.Bicycle.YELLOW );

	lender.rentBicycle( 'csongor' , Materials.Bicycle.GREEN );

	console.log( lender.toString() ); 

	lender.takeBicycle( 'fanyűvő' );

	tester( lender.numberOfFreeBicycles() === 1 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	lender.rentBicycle( 'hűbele' , Materials.Bicycle.GREEN );

	tester( lender.numberOfFreeBicycles() === 1 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	lender.rentBicycle( 'hűbele' , Materials.Bicycle.RED );

	tester( lender.numberOfFreeBicycles() === 0 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	lender.takeBicycle( 'hűbele'  );
	lender.takeBicycle( 'csongor' );
	lender.takeBicycle( 'árgyélus' );
	lender.takeBicycle( 'vasgyúró' );

	tester( lender.numberOfFreeBicycles() === 4 ,' numberOfFreeBicycles ' + lender.numberOfFreeBicycles() );

	console.groupEnd();

})();