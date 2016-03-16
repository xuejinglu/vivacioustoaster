var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var Destination = db.define( 'destinations', {
	startDate : Sequelize.DATE,
	endDate : Sequelize.DATE,
	location : Sequelize.STRING,
	tripId : Sequelize.INTEGER,
});

Genre.sync().then( function() {
  console.log( "destinations table created" );
} )
.catch( function( err ) {
  console.error( err );
} );

module.exports = Destination;