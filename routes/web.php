<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/projects', [ProjectController::class, 'index'])->name('project.index');
Route::get('/skills', [SkillController::class, 'index'])->name('skill.index');
Route::get('/skills/list', [SkillController::class, 'listJson'])->name('skill.list');
Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'New',
        'paragraphs' => [
            'My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in experience, architecture, and code quality of the things I build.',
            'Outside of programming, I enjoy reading books. I love the pleasure and excitement of gaining new knowledge other than programming from the books I read.'
            ]
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/projects/create', [ProjectController::class, 'create'])->name('project.create');
    Route::delete('/projects/{id}', [ProjectController::class, 'delete'])->name('project.delete');
    Route::post('/projects', [ProjectController::class, 'store'])->name('project.store');

    Route::get('/skills/create', [SkillController::class, 'create'])->name('skill.create');
    Route::post('/skills', [SkillController::class, 'store'])->name('skill.store');
    Route::delete('/skills/{id}', [SkillController::class, 'delete'])->name('skill.delete');

});

require __DIR__.'/auth.php';
