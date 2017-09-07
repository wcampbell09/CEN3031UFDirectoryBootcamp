angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
		$scope.listings.push({
			"code": $scope.addCode,
			"name": $scope.addName,
      "coordinates": $scope.addCoordinates,
      "address": $scope.addAddress

		});
	};
    $scope.deleteListing = function(index) {
    var indexEntry = $scope.listings.indexOf(index);
		$scope.listings.splice(indexEntry, 1);

	};
    $scope.showDetails = function(index) {
		$scope.detailedInfo = index;
	};
}

]);
