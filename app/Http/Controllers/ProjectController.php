<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index() {
        $projects = Project::with('skills')->get();
        return Inertia::render('Projects/Page', [
            'projects' => new ProjectCollection($projects)
        ]);
    }

    public function create() {
        $projects = Project::all();
        return Inertia::render('Projects/Create', [
            'createdData' => null,
            'projects' => new ProjectCollection($projects)
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'description' => ['required'],
            'image' => ['required'],
            'repo_url' => ['required'],
            'demo_url' => ['required'],
            'skills' => ['required', 'array'], // Validate that 'skills' is an array
            'skills.*' => ['exists:skills,id'], // Validate that each skill id exists in the 'skills' table
        ]);
    
        // Upload image and get the URL
        $path = $request['image']->store('images/projects', 'public');
        $uploadedImage = url('storage/' . $path);
    
        // Create the project
        $project = Project::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'image' => $uploadedImage,
            'repo_url' => $request['repo_url'],
            'demo_url' => $request['demo_url'],
        ]);
    
        // Attach skills to the project
        $project->skills()->attach($request['skills']);
    
        return redirect()->route('project.create')->with('success', 'Successfully created a new project');
    }
    

    public function delete($id) {
        $project = Project::findOrFail($id);
        $project->delete();
        return Redirect::route('project.create');
    }
}
