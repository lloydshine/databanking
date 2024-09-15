<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\UserController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->group(function () {
      Route::resource('/subject', SubjectController::class);
      Route::prefix('admin')->group(function () {
          Route::resource('/user', UserController::class);
    });
    
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});



Route::get('/test', function () {
    return 'Scream the N wordddd';
});