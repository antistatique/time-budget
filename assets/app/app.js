'use strict';

/* global angular */

var app = angular.module('TimebudgetApp',
            ['ngSanitize']);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});
