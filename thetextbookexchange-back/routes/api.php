<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

    Route::post('/login','Auth\LoginController@authenticate');  
    Route::post('/register','Auth\RegisterController@create');  
    Route::post('/logout','Auth\LoginController@logout');
    Route::post('/password/email','Auth\ForgotPasswordController@sendResetLinkEmail'); 
    Route::post('/password/reset','Auth\ResetPasswordController@reset');


    Route::get('books', 'BooksController@index');
    Route::get('books/{book}', 'BooksController@show');
    Route::get('/queryresults', 'BooksController@query');
    Route::post('books', 'BooksController@store');
    Route::put('books/{book}', 'BooksController@update');
    Route::delete('books{book}', 'BooksController@delete');