app.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        
        templateUrl:'pages/statProject.html',
        controller:'ProjectController'
        
    })
    .when('/PlanningProject',{
        
        templateUrl:'pages/projectChef.html',
        controller:'ProjectChefController'
        
    })
    .when('/ListProject',{
        
        templateUrl:'pages/project.html',
        controller:'ProjectController'
        
    })
    .when('/workSpace',{
        
        templateUrl:'pages/collaborateur/tasks.html',
        controller:'CollaborateurProjectC'
        
    })
	.when('/rapportTask/:idTask',{
        
        templateUrl:'pages/collaborateur/rapport.html',
        controller:'CollaborateurRapportC'
        
    })
    .when('/second',{
        
        templateUrl:'pages/myGantt.html',
        controller:'secondController'
        
    })
    .when('/second/:num',{
        
        templateUrl:'/pages/myGantt.html',
        controller:'secondController'
        
    })
    
});