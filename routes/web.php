<?php


use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::name('disk.')->prefix('disk')
    ->middleware(['auth', 'verified'])->group(function () {
        Route::get('index', 'DiskController@index')->name('index');
        Route::get('trash', 'DiskController@trash')->name('trash');
        Route::get('filter/{type}', 'DiskController@filter')->name('filter');
        Route::get('create', 'DiskController@create')->name('create');
        Route::get('download/{id}/token/{token}', 'DiskController@download')->name('download');

        Route::post('store', 'DiskController@store')->name('store');

        Route::patch('open/{id}/link/{link}', 'DiskController@open')->name('open');
        Route::patch('close/{id}', 'DiskController@close')->name('close');
        Route::patch('restore/{id}', 'DiskController@restore')->name('restore');

        Route::delete('destroy/{id}', 'DiskController@destroy')->name('destroy');
    });

Route::get('show/{id}', 'DiskController@show')->name('show');
Route::get('download/{id}/token/{token}','DiskController@download')->name('download');

Auth::routes(['verify' => true]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::namespace('Admin')->name('admin.')->prefix('admin')->middleware(['auth', 'admin'])
    ->group(function () {
    Route::get('{any?}', 'IndexController')->where('any', '.*')->name('index');
});
