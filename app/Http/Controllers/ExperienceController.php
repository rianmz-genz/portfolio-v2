<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function create() {
        $projects = Experience::all();
        return Inertia::render('Experience/Create', [
            'createdData' => null,
            // 'projects' => new ProjectCollection($projects)
        ]);
    }
}
