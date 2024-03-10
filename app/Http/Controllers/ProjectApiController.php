<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectApiController extends Controller
{
    public function index() : JsonResource {
        $projects = Project::with('skills')->get();
        return new ProjectResource($projects);
    }

    public function create(Request $request) {
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
    }
}
