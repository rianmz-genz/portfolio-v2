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
            // 'projects' => new ProjectCollection($projects)
        ]);
    }

    public function store(Request $request) {
        
        return Inertia::render('Experience/Create', [
            // 'projects' => new ProjectCollection($projects)
        ]);
    }
}
