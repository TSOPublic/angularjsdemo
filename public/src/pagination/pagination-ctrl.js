app.controller('paginationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

	$scope.allOrgnizationList = [{
		name: "Brian Eden",
		email: "brian.l.eden@hpe.com",
		role: "Sales",
		customer: "",
		project: ""
	}, {
		name: "Cathy McGrane",
		email: "cathy.mcgrane@hpe.com",
		role: "Sales",
		customer: "",
		project: ""
	}, {
		name: "Chris Donato",
		email: "chris.donato@hpe.com",
		role: "Global Practice",
		customer: "Global Practice",
		project: ""
	}, {
		name: "Christian Valerius",
		email: "christian.valerius@hpe.com",
		role: "Practitioner",
		customer: "Syngenta",
		project: ""
	}, {
		name: "Christine Sourice",
		email: "christine.sourice@hpe.com",
		role: "Practitioner",
		customer: "Syngenta",
		project: ""
	}, {
		name: "Dararith Suy",
		email: "dararith.suy@hpe.com",
		role: "Admin",
		customer: "Global Practice",
		project: ""
	}, {
		name: "Dick Steiner",
		email: "rufus.annibale@hpe.com",
		role: "Global Practice",
		customer: "Global Practice",
		project: ""
	}, {
		name: "Ed Rice",
		email: "ed.rice@hpe.com",
		role: "Global Practice",
		customer: "Global Practice",
		project: ""
	}, {
		name: "John Schwenkler",
		email: "john.schwenkler@hpe.com",
		role: "Sales",
		customer: "",
		project: ""
	}, {
		name: "Jon Petrucelli",
		email: "jon.petrucelli@hpe.com",
		role: "Sales",
		customer: "Dow-Dopunt",
		project: ""
	}, {
		name: "Justin Byars",
		email: "justin.w.byars@hpe.com",
		role: "Global Practice",
		customer: "Pfizer",
		project: ""
	}, {
		name: "Mahesh Shah",
		email: "mshah@hpe.com",
		role: "Global Practice",
		customer: "Global Practice",
		project: ""
	}, {
		name: "Stan Leong",
		email: "stan.leong@hpe.com",
		role: "Global Practice",
		customer: "Global Practice",
		project: ""
	}];

	$scope.totalCount = $scope.allOrgnizationList.length;
	$scope.pageMaxCount = 10;
	$scope.pageCount = Math.ceil($scope.totalCount / $scope.pageMaxCount);
	var pages = [];
	for (var i = 0; i < $scope.pageCount; i++) {
		pages.push(i + 1);
	}
	$scope.pages = pages;
	$scope.pageCount > 0 ? $scope.currentPage = 1 : $scope.currentPage = 0;
	$scope.changePage = function(page) {
		$scope.currentPage = page;
	};
	$scope.$watch('currentPage', function(newVal, oldVal) {
		if (newVal) {
			var index = (newVal - 1) * $scope.pageMaxCount;
			$scope.orgnizationList = $scope.allOrgnizationList.slice(index, (index + $scope.pageMaxCount) < $scope.totalCount ? ($scope.pageMaxCount + index) : $scope.totalCount);
		}
	});
}]);